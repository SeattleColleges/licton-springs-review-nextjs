import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";

//all the 2025 submission Poetry posts, ordered by last name
export const posts = [
    {
        title: "At the Heart of Anger",
        author: "Student",
        excerpt: <>Numb.<br/>I can’t shake this numbness.<br/>Where has all the love gone?</>
    },
    {
        title: "Flood Watch on Sunday",
        author: "Auguest Purkey",
        excerpt: <>In white monochrome, the water is heaved<br/>down by the season.<br/>I see the opaque</>
    }
];

export default async function PoetryPage() {
    const articles: React.ReactElement[] = posts.map((value, idx) =>
        <article key={idx} className="poetry-post">
            <Link href={`poetry/post?id=${idx}&wp=false`}><h2>{`“${value.title}” by ${value.author}`}</h2></Link>
            <p><strong>Posted on 2025-06-10</strong></p>
            <p>{value.excerpt}</p>  
        </article>
    );
    return (
        <main className="poetry-container">
            <h1>Poetry</h1>
            {/*2025 submissions*/}
            {articles}
            {/*Previous posts on WordPress*/}
            <PostsByCategory category="Poetry"/>
        </main>
    );
}
