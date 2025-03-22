//he library encodes/decodes HTML entities eg &#8220; -> "
import * as he from "he";

/**
 * Structure and typing for JSON response returned from API /posts/id
 */
export interface PostAPI {
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

/**
 * Structure and typing of content needed for an Image
 */
export interface ImageContent {
    "src": string,
    "alt": string,
    "width": number,
    "height": number,
    "caption": string
}

/**
 * Structure and typing of content needed for a video
 */
export interface VideoContent {
    "src": string,
    "width": number,
    "height": number,
    "type": string
}

/**
 * Structure and typing for cleaned/extracted post data to be returned to Detail
 */
export interface PostData {
    "title": string,
    "category": string,
    // "authorType": string, //no longer tracking categories of author
    "date": string,
    "featuredImage": ImageContent | null,
    "content": string | ImageContent | VideoContent
}

/**
 * Retrieves JSON from API for post with the given id
 * @param id id number of the post to be retrieved
 * @returns JSON from fetching post from API, or null if unable to fetch
 */
async function getPostJSON(id: string | null) {
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

/**
 * Cleans the original JSON content and extracts post content
 * @param roughData original JSON response from the API for a single post
 * @returns cleaned and extracted PostData object containing post content
 */
async function cleanData(roughData: PostAPI | null): Promise<PostData | null> {
    if (roughData === null) return null; //invalid request returns no data

    const cleanedTitle = cleanTitle(roughData.title.rendered);
    const cleanedCategory = await cleanCategories(roughData.categories);

    const cleanedFeaturedImage = await cleanFeaturedImage(roughData.featured_media, cleanedTitle);

    let postContent: string | ImageContent | VideoContent = "";
    if (cleanedCategory === "Art") {
        postContent = cleanArtContent(roughData.content.rendered, roughData.title.rendered, cleanedTitle);
    } else {
        //all other categories are text posts
        postContent = cleanTextContent(roughData.content.rendered);
    }

    return {
        title: cleanedTitle,
        category: cleanedCategory,
        date: cleanDate(roughData.date),
        featuredImage: cleanedFeaturedImage,
        content: postContent
    };
}

/**
 * Cleans title, removing category and decoding HTML entities
 * @param orig original title from API, to be cleaned
 * @returns cleaned up title
 */

export function cleanTitle(orig: string) {
    //if <br/> or <br> is in the title, set start to after CATEGORY<br/>
    let startIndex = orig.indexOf("<br/>");
    if (startIndex !== -1) {
        startIndex += 5;
    } else {
        startIndex = orig.indexOf("<br>");
        if (startIndex !== -1) {
            startIndex += 4;
        }
    }

    //remove CATEGORY<br/> from the title and trim, if not present just trim
    let cleaned = "";
    if (startIndex === -1) {
        cleaned = orig.trim();
    } else {
        cleaned = orig.substring(startIndex).trim();
    }
    
    //replace html entities eg &#8220; and &#8221; (quotes) with appropriate chars
    cleaned = he.decode(cleaned);
    return cleaned;
}

/**
 * Cleans and extracts data for the featured image, if there is one
 * @param featuredId id of the featured media to process 
 * @param title title of the post, to be used as alt/caption if missing
 * @returns 
 */

export async function cleanFeaturedImage(featuredId: number, title: string): Promise<ImageContent | null> {
    const res = await fetch(`https://lictonspringsreview.com/wp-json/wp/v2/media/${featuredId}`);
    if (! res.ok) return null;
    const json = await res.json();
    const alt = json.alt_text === "" ? title : json.alt_text;
    const caption = json.caption.rendered === "" ? title : json.caption.rendered;
    const deets = json.media_details.sizes.full;
    return {
        "width": deets.width,
        "height": deets.height,
        "src": deets.source_url,
        "alt": alt,
        "caption": caption
    };
}

/**
 * Retrieves the name of the post category, ignoring other categories such as author type
 * @param cats List of category ids (numbers) to check
 * @returns Name of the category, either Nonfiction, Fiction, Poetry, Art, or Uncategorized
 */

export async function cleanCategories(cats: number[]) {
    const validCategories = ["Nonfiction", "Fiction", "Poetry", "Visual Art"];
    
    //There are other categories, we want to ignore these as we no longer care about author type
    // const authors: {[key: string]: string} = {"19": "alumni", "18": "staff", "17": "faculty", "16": "student", "1": "uncategorized"};
    
    //search the categories for type category
    for (let i = 0; i < cats.length; i++) {
        const cat = cats[i];
        const res = await fetch(`https://lictonspringsreview.com/wp-json/wp/v2/categories/${cat}`);
        if (res.ok) {
            const name = (await res.json()).name;
            if (validCategories.includes(name)) {
                if (name === "Visual Art") return "Art"; //client wants to change Visual Art to Art
                return name;
            }
        }
    }
    //no valid category found
    return "Uncategorized";
}

/**
 * Extracts the date from a datetime string as structured in API response
 * @param date the datetime string to process
 * @returns a date in the format: YYYY-MM-DD
 */
export function cleanDate(date: string) {
    return date.substring(0, 10);
}

/**
 * Cleans original content string of a text post
 * @param orig Original content string from API JSON response
 * @returns Cleaned text content
 */
export function cleanTextContent(orig: string) {
    //remove <p>, </p>
    let cleaned = orig.replaceAll(/<\/?p>/g, "");
    //remove <br>, <br/>, <br /> etc
    cleaned = cleaned.replaceAll(/<br *\/?>/g, "")
    cleaned = cleaned.trim();
    
    return he.decode(cleaned);
}

/**
 * Cleans post content, extracting image (or video if uncategorized video post)
 * @param content long HTML string containing all post content from API response
 * @param origTitle original, uncleaned title from API response
 * @param cleanTitle title that has been cleaned
 * @returns data object containing image src, alt, width, height, or returns string if video
 */
function cleanArtContent(content: string, origTitle: string, cleanTitle: string): ImageContent | VideoContent | string {
    //video post is not categorized as such, check uncleaned title for "VIDEO"
    if (origTitle.substring(0, 5) === "VIDEO") {
        //get only the content we care about: video tag params starting with width
        let currStr = content.substring(content.indexOf("width=") + 7, content.indexOf("</a"));

        const width = currStr.substring(0, currStr.indexOf('\"'));

        currStr = currStr.substring(currStr.indexOf("height") + 8);
        const height = currStr.substring(0, currStr.indexOf('\"'));

        currStr = currStr.substring(currStr.indexOf("type=") + 6);
        const type = currStr.substring(0, currStr.indexOf('\"'));

        currStr = currStr.substring(currStr.indexOf("href=") + 6);
        const src = currStr.substring(0, currStr.indexOf('\"'));

        return {
            width: parseInt(width),
            height: parseInt(height),
            type: type,
            src: src
        }
    } else { //it's an image
        //all the fields we care about, in this order: src, alt, width, height, excluding srcset and beyond
        let currStr = content.substring(content.indexOf("src="), content.indexOf("srcset"));
        
        //extract src
        let startIndex = currStr.indexOf("\"") + 1;
        let endIndex = currStr.indexOf("alt") - 2;
        const src = currStr.substring(startIndex, endIndex);
        
        //extracts alt, if no alt text is provided, title is used instead 
        currStr = currStr.substring(endIndex + 2);
        startIndex = currStr.indexOf("\"") + 1;
        endIndex = currStr.indexOf("wid") - 2;
        let alt = currStr.substring(startIndex, endIndex);
        if (alt.trim() === "") {
            alt = "Art: " + cleanTitle;
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
        
        //if there's a caption, extract it, otherwise set it to cleanTitle
        let caption = cleanTitle;
        const captionStart = content.indexOf("figcaption");
        if (captionStart > -1) {
            currStr = content.substring(captionStart);
            caption = currStr.substring(currStr.indexOf("\">") + 2, currStr.indexOf("</figc"));
        }

        return {
            "src": src, "alt": alt, "width": width, "height": height, "caption": caption
        }
    }
}

/**
 * Fetches, cleans, and extracts data for a post with the given id
 * @param id id of the post to be fetched
 * @returns data object containing data about post, null if no post with the id
 */
export async function fetchAndCleanPost(id: string | null): Promise<PostData | null> {
    const json = await getPostJSON(id);
    return cleanData(json);
}