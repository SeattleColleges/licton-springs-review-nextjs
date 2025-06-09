"use client";
import styles from './styles/Detail.module.css';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

import {posts} from '@/app/poetry/page';

export default function SinglePoetryPost() {
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
        const content: {[key: string] : JSX.Element[]} = {
            "At the Heart of Anger": [
                <>Numb</>,
                <>{"I can’t shake this numbness."}</>,
                <>Where has all the love gone?<br/><br/></>,
                <>The furnace is dark and cold.</>,
                <>The tile feels like ice under my feet.</>,
                <>{"I’m moving quickly, quietly across the room."}</>,
                <><em>{"Don’t wake the dragon."}</em><br/><br/></>,
                <>The coldness feels like a prison.</>,
                <>Ice on all sides,</>,
                <>thick and impossible to penetrate.</>,
                <>{"I’m alone, and so cold."}</>,
                <>My body shivers</>,
                <>and my breath makes tiny white puffs of smoke.<br/><br/></>,
                <>{"I’m skating on a frozen lake of fire."}</>,
                <>{"There’s lava underneath."}</>,
                <>I can see it,</>,
                <>and it burns a hole in the pit of my stomach.</>,
                <>The dragon lives there.</>,
                <>Be quiet.</>,
                <><em>The dragon can swallow you up.</em><br/><br/></>,
                <>{"I didn’t know the dragon could live there,"}</>,
                <>waiting.</>,
                <>He feels like rage -</>,
                <>black, murderous, terrifying.</>,
                <>He was born from the seed,</>,
                <>planted inside the womb of my mother,</>,
                <>fertilized by my father,</>,
                <>watered and born by the sins of all men.<br/><br/></>,
                <><em>{"He’s hungry."}</em></>,
                <>The ice prison enrages him,</>,
                <>and his hunger drives him to break free.<br/><br/></>,
                <>There, outside his cages, his hunger overtakes her,</>,
                <>turning her cold heart into</>,
                <><strong><em>F I R E</em></strong></>,
                <>her eyes dark, hard with the hunger.</>,
                <>The ice prison clings to her,</>,
                <>promising the fire it will not live forever.</>,
                <><em>The fire persists.</em><br/><br/></>,
                <><strong><em>F E E D    M E.</em></strong><br/><br/></>,
                <>Hunger hurts.</>,
                <>{"It’s a deep ache,"}</>,
                <>a hole so deep and dark</>,
                <>{"it doesn’t seem to end."}<br/><br/></>,
                <><em>He shows her how to fill it.</em><br/><br/></>,
                <>He shows her, and her hunger subsides.<br/><br/></>,
                <>{"That’s better."}</>,
                <>{"That’s good."}</>,
                <>Now we can hide again, the ice prison keeps you safe.</>,
                <><em>Sleep.</em></>,
            ],
            
        };
        const post = posts[i];
        const paragraphs = content[post.title].map((element, i) => <p key={i}>{element}</p>);
        
        return (
            <article className={styles.detailContainer}>
                <h1 className={styles.fictionTitle}>{post.title}</h1>
                <p>Published in <Link href="../../poetry">Poetry</Link></p>
                <p className={styles.postDate}>Posted on 2025-06-10</p>
                <div className={styles.contentContainer}>
                    {paragraphs}
                </div>
            </article>
        );
    }
}