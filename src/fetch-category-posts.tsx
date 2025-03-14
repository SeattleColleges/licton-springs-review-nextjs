import { ImageContent, cleanCategories, cleanTitle, cleanFeaturedImage, cleanTextContent, cleanDate, PostAPI} from "./fetch-wp-content";

/**
 * Structure and typing for cleaned/extracted post excerpts to be returned to Category pages
 */
interface PostExcerpt {
    "title": string,
    "category": string,
    "date": string,
    "featuredImage": ImageContent | null,
    "excerpt": string | null,
    "id": number
}

/**
 * Helper function that retrieves the id of the category with the given name, if it exists
 * @param category name of the category, should be Sentence Case
 * @returns the id if the category exists, or -1 if not found
 */
export async function getCategoryId(category: string): Promise<number> {
    const res = await fetch(`http://lictonspringsreview.com/wp-json/wp/v2/categories?search=${category}`);
    const cat = await res.json();
    if (cat.length === 0) {
        return -1;
    }
    return cat[0].id;
}

export async function fetchAllPostsOfCategory(catID: number) {
    const res = await fetch("http://lictonspringsreview.com/wp-json/wp/v2/posts?categories=" + catID);
    const posts = await res.json();
    if (posts.length === 0) {
        return null;
    } else {
        const processedPosts: PostExcerpt[] = [];
        for (let i = 0; i < posts.length; i++) {
            processedPosts[i] = await cleanPost(posts[i]);
        }
        return processedPosts;
    }
}

async function cleanPost(post: PostAPI) {
    const cat = await cleanCategories(post.categories);
    const title = cleanTitle(post.title.rendered);
    const excerpt = post.excerpt.rendered === "" ? 
                        null : 
                        cleanTextContent(post.excerpt.rendered);
    const cleanedPost: PostExcerpt = {
        title: title,
        category: cat,
        featuredImage: await cleanFeaturedImage(post.featured_media, title),
        excerpt: excerpt,
        date: cleanDate(post.date),
        id: post.id
    }
    return cleanedPost;
}