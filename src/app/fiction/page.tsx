import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";
import {fictionPosts} from "@/data/posts";

export default async function FictionPage() {
    const articles: React.ReactElement[] = fictionPosts.map((value, idx) =>
        <article key={idx} className="fiction-post">
            <Link href={`fiction/post?id=${idx}&wp=false`}><h2>{`“${value.title}” by ${value.author}`}</h2></Link>
            <p><strong>Posted on 2025-06-10</strong></p>
            <p>{value.excerpt}</p>  
        </article>
    );

    return (
        <main className="fiction-container">
            <h1>Fiction</h1>
            {/* 2025 submissions */}
            {articles}
            {/* Previous posts on WordPress */}
            <PostsByCategory category="Fiction" />
        </main>
    );
}
