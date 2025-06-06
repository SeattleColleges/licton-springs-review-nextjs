"use client";
import styles from './styles/Detail.module.css';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

import {posts} from '@/app/non-fiction/page';

export default function SingleFictionPost() {
    const searchParams = useSearchParams();
    const idx = searchParams.get("id");
    if (idx != null) {
        const i = parseInt(idx);
        if (isNaN(i) || i < 0 || i >= posts.length) {
            return (<>
                <h1>Post not found</h1>
                <Link href="/">Back to Home</Link>
            </>);
        }
        //parallel to posts, ordered by last name, accessed by title
        const content: {[key: string] : string[]} = {
            "I AM": [],
            "The Ledge": [],
            "When Furballs Strike": [],
            "What War Teaches Me": [],
            "Shark Girl Is Funny": [],
            "Sweat Lodge": []
        };

        const post = posts[i];
        const paragraphs = content[post.title].map((element, i) => <p key={i}>{element}</p>);

        return (
            <article className={styles.detailContainer}>
                <h1 className={styles.fictionTitle}>{post.title}</h1>
                <p>Published in <Link href="../../non-fiction">Non-Fiction</Link></p>
                <p className={styles.postDate}>Posted on 2025-06-10</p>
                <div className={styles.contentContainer}>
                    {paragraphs}
                </div>
            </article>
        );
    }
}