//lets us use useEffect, useState, use*...
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
//he library encodes/decodes HTML entities eg &#8220; -> "
import Image from "next/image";

//import library to fetch wp content
import * as f from "../fetch-wp-content";

export default function Detail() {
    //so we can get query params from url, eg url?id=1
    const searchParams = useSearchParams();

    //data should be either the above structure or null, with an initial value of null
    const [data, setData] = useState<f.PostData | null>(null);
    //if loading, displays loading message, otherwise displays post
    const [loading, setLoading] = useState(true);
    
    //fetches data for the post and sets state, runs on first render
    useEffect(() => {
        //runs the whole task
        async function performFetchAndCleanData() {
            const id = searchParams.get("id");
            setData(await f.fetchAndCleanArtPost(id));
            setLoading(false);
        }

        performFetchAndCleanData();
    }, [searchParams]); //runs once


    //display loading message if not yet fetched
    if (loading) {
        return (<>
            <h1>Post #{searchParams.get("id")}</h1>
            <p>Loading. Please wait...</p>
        </>);
    } else {
        //invalid or no id results in null data
        if (data === null) {
            return (<>
                <h1>Post not found</h1>
                <Link href="/">Back to Home</Link>
            </>);
        } else {
            //defines how to handle different content types
            //TODO: once video is implemented, handle displaying <video src=....> similar to Image handling
            let contentElement = <p></p>;
            //if an image post, display Image
            if (typeof data.content === "object") {
                contentElement = <Image src={data.content.src} alt={data.content.alt} width={data.content.width} height={data.content.height}/>;
            } else if (typeof data.content === "string") {
                //video or text content is processed into a string currently
                contentElement = <p>{data.content}</p>;
            }

            //defines how to handle different categories
            const categoryContent = 
                data.category === "Uncategorized" ? 
                <p>Uncategorized</p> :
                <p>Published in <Link href={data.category.toLowerCase()}>{data.category}</Link></p>;

            //display the post
            return ( 
                <article>
                    <h1>{data.title}</h1>
                    {categoryContent}
                    <p>Posted on {data.date}</p>
                    {contentElement}
                    <Link href="/art">More Art</Link>
                </article>
            );
        }
    }
}