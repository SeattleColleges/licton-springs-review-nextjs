// const categories = [
//     {"id": 19,  "count": 7,     "slug": "alumni"},
//     {"id": 18,  "count": 1,     "slug": "staff"},
//     {"id": 17,  "count": 1,     "slug": "faculty"},
//     {"id": 16,  "count": 29,    "slug": "student"},
//     {"id": 8,   "count": 1,     "slug": "nonfiction"},
//     {"id": 7,   "count": 5,     "slug": "fiction"},
//     {"id": 6,   "count": 17,    "slug": "poetry"},
//     {"id": 5,   "count": 15,    "slug": "visualart"},
//     {"id": 1,   "count": 2,     "slug": "uncategorized"}
// ];

// "id": 2806,
//         "date": "2024-09-20T18:02:29",
//         "title": {
//             "rendered": "VISUAL ART: <br/> &#8220;Early Bloom&#8221; by Calan Simpson-Felicia"
//         },
//         "content": {
//             "rendered":
//             <p>
//                 <img loading=\"lazy\" decoding=\"async\" 
//                 class=\"aligncenter size-full wp-image-2807\" 
//                 src=\"https://lictonspringsreview.com/wp-content/uploads/2024/06/Early-Bloom-main.jpg\" 
//                 alt=\"\" width=\"1900\" height=\"1267\" 
//                 srcset=\"https://lictonspringsreview.com/wp-content/uploads/2024/06/Early-Bloom-main.jpg 1900w, https://lictonspringsreview.com/wp-content/uploads/2024/06/Early-Bloom-main-300x200.jpg 300w, https://lictonspringsreview.com/wp-content/uploads/2024/06/Early-Bloom-main-1024x683.jpg 1024w, https://lictonspringsreview.com/wp-content/uploads/2024/06/Early-Bloom-main-768x512.jpg 768w, https://lictonspringsreview.com/wp-content/uploads/2024/06/Early-Bloom-main-1536x1024.jpg 1536w\" 
//                 sizes=\"auto, (max-width: 1900px) 100vw, 1900px\" /></p>\n",
//             "protected": false
//         },
//         "excerpt": {
//             "rendered": "",
//             "protected": false
//         },
//         "categories": [
//             19,
//             5
//         ],


//     "id": 2682,
//     "date":     "2024-03-08T09:00:09",
//     "title": {
//         "rendered": "&#8220;Moi&#8221; by Liliana Gutierrez-Pino"
//     },
//     "content": {
//         "rendered": 
//             "<figure
//             id=\"attachment_2684\"
//             aria-describedby=\"caption-attachment-2684\"
//             style=\"width: 1707px\"
//             class=\"wp-caption aligncenter\"
//             >
//                 <a
//                 href=\"https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-scaled.jpg\"
//                 target=\"_blank\"
//                 rel=\"noopener\"
//                 >
//                     <img
//                         loading=\"lazy\"
//                         decoding=\"async\"
//                         class=\"wp-image-2684 size-full\"
//                         src=\"https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-scaled.jpg\"
//                         alt=\"\"
//                         width=\"1707\"
//                         height=\"2560\"
//                         srcset=\"
//                             https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-scaled.jpg 1707w,
//                             https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-200x300.jpg 200w,
//                             https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-683x1024.jpg 683w,
//                             https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-768x1152.jpg 768w,
//                             https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-1024x1536.jpg 1024w,
//                             https://lictonspringsreview.com/wp-content/uploads/2024/03/A468full-1365x2048.jpg 1365w\"
//                             sizes=\"auto, (max-width: 1707px) 100vw, 1707px\"
//                     />
//                 </a>
//                 <figcaption
//                 id=\"caption-attachment-2684\"
//                 class=\"wp-caption-text\"
//                 >&#8220;Moi&#8221; by Liliana Gutierrez-Pino, Student<br />Digital Collage with Original Photography
//                 </figcaption>
//             </figure>
//             \n",
//     },
//     "excerpt": {
//         "rendered": "",
//     },
//     "categories": [
//         16,
//         5
//     ]

// //ok so basically
//     <article>
//         <a href="post?id=" + id>
//             <h2>"Title" by Author</h2>
//         </a>
//         <p>Posted on ...</p>
//         <a href="post?id=" + id>
//             <img src="" alt="" width="" height="" srcset=""/>
//         </a>
//     </article>

//     which links to

//     <article>
//         <h1>"Title" by Author</h1>
//         <p>Category1 Category2</p>
//         <p>Posted on ...</p>
//         <img src="" alt="" width="" height="" srcset=""/>
//     </article>
//     <a href="?">Back</a>

//     For text content, img would be replaced by <p>excerpt...</p> and page img would be replaced by <p>content</p>

// async function fetchPosts(categoryId: number, pageNumber: number = 1) {
//     const res = await fetch("http://lictonspringsreview.com/wp-json/wp/v2/posts/categories=" + categoryId + "&" + "page=" + pageNumber)
//     const data = await res.json();
//     return data;
// }

// async function cleanPosts(posts: ) {

// }

// async function displayPosts() {
//     let posts = await fetchPosts(5, 1);
//     if (posts.length === 0) {
//         return <p>There are currently no posts for this category</p>;
//     } else {
//         cleanPosts(posts);
//     }
// }



// ///ok
// //so, each page has a list of posts
// //when you click post, it goes to detail page, back buttons goes back to page with list of posts
// //can I do with one page/component? maybe but probs shouldn't
// //but I can do a single component that just gets passed its category and id and call it from each page