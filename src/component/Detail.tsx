//lets us use useEffect, useState, use*...
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
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
            setData(await f.fetchAndCleanPost(id));
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
            //displays the featured image, if one exists
            let featuredImage = <></>;
            if (data.featuredImage !== null) {
                featuredImage = <figure>
                    <Image src={data.featuredImage.src} alt={data.featuredImage.alt} width={data.featuredImage.width} height={data.featuredImage.height}/>
                    <figcaption>{data.featuredImage.caption}</figcaption>
                </figure>
            }
            
            //defines how to handle different content types
            let contentElement = <p></p>;
            //if it's an image or video, handle that
            if (typeof data.content === "object") {
                if ("type" in data.content) {
                    //it's a video
                    contentElement= <video width={data.content.width} height={data.content.height} controls>
                                        <source type={data.content.type} src={data.content.src}/>
                                        <a href={data.content.src}>{data.content.src}</a>
                                    </video>
                } else {
                    //it's an image
                    contentElement = <figure>
                                        <Image src={data.content.src} alt={data.content.alt} width={data.content.width} height={data.content.height} priority/>
                                        <figcaption>{data.content.caption}</figcaption>
                                    </figure>
                }
            } else if (typeof data.content === "string") {
                //video or text content is processed into a string currently
                contentElement = <p>{data.content}</p>;
            }

            //defines how to handle different categories
            const categoryContent = 
                data.category === "Uncategorized" ? 
                <p>Uncategorized</p> :
                <p>Published in <Link href={"../../" + data.category.toLowerCase()}>{data.category}</Link></p>;

            //display the post
            return ( 
                <article>
                    <h1>{data.title}</h1>
                    {categoryContent}
                    <p>Posted on {data.date}</p>
                    {featuredImage}
                    {contentElement}
                </article>
            );
        }
    }
}