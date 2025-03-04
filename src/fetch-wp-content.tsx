//     //ok so basically the plan for lists of posts is, for each post:
//     <article>
//         <Link href="/post?id={id}">
//             <h2>{cleanedTitle}</h2>
//         </Link>
//         <p>Posted on {cleanedDate}</p>
//         // For text content, Image would be replaced by <p>excerpt...</p>
//         <Link href="/post?id={id}">
//             <Image src="{src}" alt="{alt}" width="{width}" height="{height}"/>
//         </Link>
//     </article>

//     which links to /post?id={id} which fetches Detail component and displays single post

// async function fetchPosts(categoryId: number) {
//     const res = await fetch("http://lictonspringsreview.com/wp-json/wp/v2/posts/categories=" + categoryId)
//     const data = await res.json();
//     return data;
// }