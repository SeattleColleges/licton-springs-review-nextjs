//     //ok so basically the plan for lists of posts is, for each post:
//     <article>
//         <Link href="/post?id={id}">
//             <h2>{cleanedTitle}</h2>
//         </Link>
//         <p>Posted on {cleanedDate}</p>
//         // For text content, Image would be replaced by <p>excerpt...</p>
//         <Link href="/post?id={id}">
//             <Image src="{src}" alt="{alt}" width="{width}" height="{height}"/>
//         </Link>
//     </article>

//     which links to /post?id={id} which fetches Detail component and displays single post

// async function fetchPosts(categoryId: number) {
//     const res = await fetch("http://lictonspringsreview.com/wp-json/wp/v2/posts/categories=" + categoryId)
//     const data = await res.json();
//     return data;
// }

import * as he from "he";

//structure of data returned from API /posts/id
interface PostAPI {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": {"rendered": string},
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": {"rendered": string},
    "content": {
        "rendered": string,
        "protected": boolean
    },
    "excerpt": {
        "rendered": string,
        "protected": boolean
    },
    "author": number,
    "featured_media": number,
    "comment_status": string,
    "ping_status": string,
    "sticky": boolean,
    "template": string,
    "format": string,
    "meta": {
        "iawp_total_views": number,
        "footnotes": string
    },
    "categories": number[],
    "tags": number[],
    "class_list": string[],
    "_links": {
        "self": {
            "href": string,
            "targetHints": {"allow": string[]}
        }[],
        "collection": {"href": string}[],
        "about": {"href": string}[],
        "author": {
            "embeddable": boolean,
            "href": string
        }[],
        "replies": {
            "embeddable": boolean,
            "href": string
        }[],
        "version-history": {
            "count": number,
            "href": string
        }[],
        "predecessor-version": {
            "id": number,
            "href": string
        }[],
        "wp:featuredmedia": {
            "embeddable": boolean,
            "href": string
        }[],
        "wp:attachment": {
            "href": string
        }[],
        "wp:term": {
            "taxonomy": string,
            "embeddable": boolean,
            "href": string
        }[],
        "curies": {
            "name": string,
            "href": string,
            "templated": boolean
        }[]
    }
}

//defines structure of content needed for an Image
interface ImageContent {
    "src": string, "alt": string, "width": number, "height": number
}

//defines valid structure for post data to be displayed
export interface PostData {
    "title": string,
    "category": string,
    // "authorType": string, //no longer tracking categories of author
    "date": string,
    "content": string | ImageContent
}

async function getPostJSON(id: string | null) {
    let result: PostAPI | null = null;
    if (id != null && id !== "") {
        //fetch post with that id
        const response = await fetch(`https://lictonspringsreview.com/wp-json/wp/v2/posts/${id}`);
        if (response.ok) {
            result = await response.json();
        }
    }
    return result;
}

//cleans the json data and extracts content
async function cleanData(roughData: PostAPI | null): Promise<PostData | null> {
    if (roughData === null) return null; //invalid request returns no data

    const cleanedTitle = cleanTitle(roughData.title.rendered);
    const categories = await cleanCategories(roughData.categories);
    let postContent: string | ImageContent = "";
    if (categories.indexOf("Art") != -1) {
        //video post is not categorized, checking uncleaned title for "VIDEO:" is faster than searching content string
        //if no alt text is provided, cleaned title is used instead
        postContent = cleanArtContent(roughData.content.rendered, roughData.title.rendered, cleanedTitle);
    } else {
        postContent = cleanTextContent();
    }

    const cleanedData = {
        title: cleanedTitle,
        category: categories,
        date: cleanDate(roughData.date),
        content: postContent
    };
    return cleanedData;
}

//removes category and decodes html entities
function cleanTitle(orig: string) {
    //if <br/> is in the title, remove CATEGORY<br/> from the title and trim, otherwise just trim
    const startIndex = orig.indexOf("<br/>");
    let cleaned = startIndex != -1 ? 
                    orig.substring(startIndex + 5).trim():
                    orig.trim();
    //replace html entities eg &#8220; and &#8221; (quotes) with appropriate chars
    cleaned = he.decode(cleaned);
    return cleaned;
}

//given all category ids for a post, returns the label for the type category, or Uncategorized if no valid category
async function cleanCategories(cats: number[]) {
    const validCategories = ["Nonfiction", "Fiction", "Poetry", "Visual Art"];
    
    //There are other categories, we want to ignore these as we no longer care about author type
    // const authors: {[key: string]: string} = {"19": "alumni", "18": "staff", "17": "faculty", "16": "student", "1": "uncategorized"};
    
    //search the categories for type category
    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        const res = await fetch(`https://lictonspringsreview.com/wp-json/wp/v2/categories/${cat}`);
        if (res.ok) {
            const name = (await res.json()).name;
            if (validCategories.includes(name)) {
                if (name === "Visual Art") return "Art";
                return name;
            }
        }
    }
    //no valid category found
    return "Uncategorized";
}

//extracts just the date from a datetime string as structured in API
function cleanDate(date: string) {
    return date.substring(0, 10);
}

//TODO: implement for text posts, eg nonfiction, poetry, and so on
function cleanTextContent() {
    return "Demo text";
}

//TODO: handle posts with multiple images
function cleanArtContent(content: string, origTitle: string, cleanTitle: string): ImageContent | string {
    if (origTitle.substring(0, 5) === "VIDEO") {
        //TODO: implement video handling
        return "video src=...";
    } else { //it's an image
        //all the fields we care about, in this order: src, alt, width, height, excluding srcset and beyond
        let currStr = content.substring(content.indexOf("src="), content.indexOf("srcset"));
        
        //extract src
        let startIndex = currStr.indexOf("\"") + 1;
        let endIndex = currStr.indexOf("alt") - 2;
        const src = currStr.substring(startIndex, endIndex);
        
        //extract alt OR use title if missing
        currStr = currStr.substring(endIndex + 2);
        startIndex = currStr.indexOf("\"") + 1;
        endIndex = currStr.indexOf("wid") - 2;
        let alt = currStr.substring(startIndex, endIndex);
        if (alt.trim() === "") {
            alt = "Art: " + cleanTitle;
        }
        
        //extract width
        currStr = currStr.substring(endIndex + 2);
        startIndex = currStr.indexOf("\"") + 1;
        endIndex = currStr.indexOf("hei") - 2;
        const width = parseInt(currStr.substring(startIndex, endIndex));

        //extract height
        currStr = currStr.substring(endIndex + 2);
        startIndex = currStr.indexOf("\"") + 1;
        const height = parseInt(currStr.substring(startIndex, currStr.length - 2));
        
        return {
            "src": src, "alt": alt, "width": width, "height": height
        }
    }
}

export async function fetchAndCleanArtPost(id: string | null): Promise<PostData | null> {
    const json = await getPostJSON(id);
    return cleanData(json);
}