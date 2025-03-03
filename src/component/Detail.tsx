//lets us use useEffect, useState, use*...
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
//he library encodes/decodes HTML entities eg &#8220; -> "
import * as he from "he";

//structure of data returned from API
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

//defines valid structure for post data to be displayed
interface PostData {
    "title": string,
    "category": string,
    // "authorType": string,
    "date": string,
    "content": string
}

export default function Detail() {
    //so we can get query params from url, eg url?id=1
    const searchParams = useSearchParams();

    //data should be either the above structure or null, with an initial value of null
    const [data, setData] = useState<PostData | null>(null);
    
    //fetches data for the post and sets state
    useEffect(() => {
        //retrieves the post data JSON from the API or null if no/invalid ID
        function fetchData(): PostAPI | null {
            //get id from query params
            const id = searchParams.get("id");
            
            let result = null;
            if (id != null && id !== "") {
                //fetch post with that id
                fetch("https://lictonspringsreview.com/wp-json/wp/v2/posts/" + id)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return null;
                    }
                }).then(json => {
                    result = json;
                })
            }
            return result;
        }

        async function cleanData(): Promise<void> {
            const roughData = await fetchData();
            if (roughData === null) return;

            const cleanedTitle = cleanTitle(roughData.title.rendered);

            const cleanedData = {
                title: cleanedTitle,
                category: await cleanCategories(roughData.categories),
                date: cleanDate(roughData.date),
                //checking the original content title is faster than searching long content string for video
                content: cleanImage(roughData.content.rendered, roughData.title.rendered, cleanedTitle)
            };
            setData(cleanedData);
        }

        function cleanTitle(orig: string) {
            //remove CATEGORY:<br>
            let cleaned = orig.substring(orig.indexOf("<br/>") + 5).trim();
            //replace html entities eg &#8220; and &#8221; (quotes) with appropriate chars
            cleaned = he.decode(cleaned);
            return cleaned;
        }

        //gets string labels for categories (type only, not author / other cats)
        async function cleanCategories(cats: number[]) {
            //Just collect all the types (there should just be one but I don't know that it's guaranteed...)
            const validCategories = ["Nonfiction", "Fiction", "Poetry", "Visual Art"];
            
            //We no longer care about author type
            // const authors: {[key: string]: string} = {"19": "alumni", "18": "staff", "17": "faculty", "16": "student", "1": "uncategorized"};
            
            let type = "";
            for (let i = 0; i < cats.length; i++) {
                const cat = cats[i];
                console.log("Category #" + i)
                const res = await fetch("https://lictonspringsreview.com/wp-json/wp/v2/categories/" + cat);
                if (res.ok) {
                    const name = (await res.json()).name;
                    if (validCategories.includes(name)) {
                        if (type == "") type = name;
                        else type += ", " + name;
                    }
                }
            }
            if (type === "") {
                type = "Uncategorized"
            }
            return type;
        }

        function cleanDate(date: string) {
            return date.substring(0, 10);
        }

        function cleanImage(content: string, origTitle: string, cleanTitle: string) {
            //for art posts, either it's an image/figure or that one weird video post (not categorized as video btw)
            //all nonvideo art posts contain img, some contain figure and img
            //if img, src="" alt="" width="" height="" srcset="" are all next to each other in that order
            
            if (origTitle.substring(0, 5) === "VIDEO") {
                return "video src=...";
            } else { //it's an image
                //each field is in this literal format: a=\"x\" b=\"y\" ...
                //to extract, we would need indexOf("\"") + 1, indexOf(nextField) - 2 (exclusive)
                //then update the starting index to be indexOf(nextField) and continue
                //the final field, height, would want to go to the end - 2 (exclusive)
                
                //all the fields we care about, in this order: src, alt, width, height
                const extraction = content.substring(content.indexOf("src="), content.indexOf("srcset"));

                //extract src
                let startIndex = extraction.indexOf("\"") + 1;
                let endIndex = extraction.indexOf("alt") - 2;
                const src = extraction.substring(startIndex, endIndex);

                //extract alt OR use title
                let currStr = extraction.substring(endIndex);
                startIndex = currStr.indexOf("\"") + 1;
                endIndex = currStr.indexOf("wid") - 2;
                let alt = currStr.substring(startIndex, endIndex);
                if (alt.trim() === "") {
                    alt = "Visual Art: " + cleanTitle;
                }

                //extract width
                currStr = currStr.substring(endIndex);
                startIndex = currStr.indexOf("\"") + 1;
                endIndex = currStr.indexOf("hei") - 2;
                const width = currStr.substring(startIndex, endIndex);

                //extract height
                currStr = currStr.substring(endIndex);
                startIndex = currStr.indexOf("\"") + 1;
                const height = currStr.substring(startIndex, currStr.length - 3);
                
                //done
                return "<Image src='" + src + "' alt='" + alt + "' width='" + width + "' height='" + height + "'>";
            }
        }

        cleanData().then(() => console.log("DONE"));
    }, [searchParams]); //runs once

    //if there is no id, or id is not a positive whole number, or fetch() returns data.status == 404
    //extract: titlebyauthor, category (type and author type), postdate, content
    if (data === null) {
        return (<>
            <h1>Post not found</h1>
            <Link href="/">Back to Home</Link>
        </>);
    } else {
        return ( 
            <article>
                <h1>{data.title}</h1>

                <p>Published in {data.category}</p>
                <p>Posted on {data.date}</p>
                <p>{data.content}</p> {/** or an image */}
                <a href="/art">More Art</a>
            </article>
        );
    }
}