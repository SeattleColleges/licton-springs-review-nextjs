import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";
import {nonfictionPosts} from "@/data/posts";

export default async function NonFictionPage() {
    const articles: React.ReactElement[] = nonfictionPosts.map((value, idx) =>
        <article key={idx} className="non-fiction-post">
            <Link href={`non-fiction/post?id=${idx}&wp=false`}><h2>{`“${value.title}” by ${value.author}`}</h2></Link>
            <p><strong>Posted on 2025-06-10</strong></p>
            <p>{value.excerpt}</p>  
        </article>
    );

    return (
        <main className="non-fiction-container">
            <h1>Non-Fiction</h1>
            {/*2025 submissions*/}
            {articles}
            {/*Previous posts on WordPress*/}
            <PostsByCategory category="Non-Fiction"/>
        </main>
    );
}
