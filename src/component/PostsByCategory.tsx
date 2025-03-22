import { fetchAllPostsOfCategory, getCategoryId } from "@/fetch-category-posts";
import Link from "next/link";
import Image from "next/image";

export async function PostsByCategory(props: {category: string}) {
    const catId = await getCategoryId(props.category);
    if (catId !== -1) {
        const posts = await fetchAllPostsOfCategory(catId);
        if (posts !== null) {
            const content = posts.map(post => {
                const featuredImg = post.featuredImage === null ? <></> : <Image src={post.featuredImage.src} alt={post.featuredImage.alt} width={post.featuredImage.width} height={post.featuredImage.height}/>;
                const excerpt = post.excerpt === null ? <></> : <p>{post.excerpt}</p>;
                return (
                    <article key={post.id} className={`${props.category.toLowerCase()}-post`}>
                        <Link href={`/${props.category.toLowerCase()}/post?id=${post.id}`}><h2>{post.title}</h2></Link>
                        <p><strong>Posted on {post.date}</strong></p>

                        {featuredImg}
                        {excerpt}
                    </article>
                );
            })
            return content;
        } else {
            return <p>There are currently no {props.category} posts. <Link href="/submit">Submit</Link> your {props.category.toLowerCase()} today!</p>;
        }
    } else {
        return <p>Category not found</p>;
    }

}