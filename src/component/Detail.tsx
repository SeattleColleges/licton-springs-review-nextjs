//lets us use useEffect, useState, use*...
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
//he library encodes/decodes HTML entities eg &#8220; -> "
import * as he from "he";
import Image from "next/image";

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
interface PostData {
    "title": string,
    "category": string,
    // "authorType": string, //no longer tracking categories of author
    "date": string,
    "content": string | ImageContent
}

export default function Detail() {
    //so we can get query params from url, eg url?id=1
    const searchParams = useSearchParams();

    //data should be either the above structure or null, with an initial value of null
    const [data, setData] = useState<PostData | null>(null);
    //if loading, displays loading message, otherwise displays post
    const [loading, setLoading] = useState(true);
    
    //fetches data for the post and sets state, runs on first render
    useEffect(() => {
        //retrieves the post data JSON from the API or null if no/invalid ID
        async function fetchData(): Promise<PostAPI | null> {
            //get id from query params
            const id = searchParams.get("id");
            
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
        async function cleanData(roughData: PostAPI | null): Promise<void> {
            if (roughData === null) return; //invalid request returns no data

            const cleanedTitle = cleanTitle(roughData.title.rendered);
            const categories = await cleanCategories(roughData.categories);
            let postContent: string | ImageContent = "";
            if (categories.indexOf("Visual Art") != -1) {
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
            setData(cleanedData);
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

        //gets string label for category (type only, not author / other cats)
        async function cleanCategories(cats: number[]) {
            const validCategories = ["Nonfiction", "Fiction", "Poetry", "Visual Art"];
            
            //We no longer care about author type
            // const authors: {[key: string]: string} = {"19": "alumni", "18": "staff", "17": "faculty", "16": "student", "1": "uncategorized"};
            
            //search the categories for type category
            for (let i = 0; i < cats.length; i++) {
                const cat = cats[i];
                const res = await fetch(`https://lictonspringsreview.com/wp-json/wp/v2/categories/${cat}`);
                if (res.ok) {
                    const name = (await res.json()).name;
                    if (validCategories.includes(name)) {
                        return name;
                    }
                }
            }
            //no valid category found
            return "Uncategorized";
        }

        //extracts just the date from the datetime string from API
        function cleanDate(date: string) {
            return date.substring(0, 10);
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
                    alt = "Visual Art: " + cleanTitle;
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

        //TODO: implement for text posts, eg nonfiction, poetry, and so on
        function cleanTextContent() {
            return "Demo text";
        }

        //runs the whole task
        async function performFetchAndCleanData() {
            const json = await fetchData();
            await cleanData(json);
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
            } else {
                //video or text content is processed into a string currently
                contentElement = <p>{data.content}</p>;
            }

            //defines how to handle different categories
            let categoryContent = <p></p>;
            if (data.category === "Visual Art") {
                categoryContent = <p>Published in <Link href="/art">Art</Link></p>
            } else if (data.category === "Uncategorized") {
                categoryContent = <p>Uncategorized</p>;
            } else {
                categoryContent = <p>Published in <Link href={data.category.toLowerCase()}>{data.category}</Link></p>;
            }

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