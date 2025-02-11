import striptags from "striptags";
import * as he from "he";

interface Post {
  id: string | number;
  title: { rendered: string };
  content: { rendered: string };
}

export default async function Home() {
  const res = await fetch(`http://lictonspringsreview.com/wp-json/wp/v2/posts`);
  const data: Post[] = await res.json();

  const cleanText = (text: string) => {
    let stripped = striptags(text.replace(/<br\s*\/?>/g, "\n")); // Replace <br> with new lines
    stripped = he.decode(stripped); // Decode HTML entities
    stripped = stripped.replace(/#[0-9A-Fa-f]{6}\b/g, ""); // Remove hash colors (e.g., #123456)
    stripped = stripped.replace(/&/g, ""); // Remove '&'
    // stripped = stripped.replace(/:/g, ""); // Remove colons
    return stripped.trim();
  };

  // Function to extract the image URL from the rendered content
  const extractImageSrc = (html: string) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null; // Return the URL if found
  };

  const postHtml = data.map((post) => {
    const cleanTitle = cleanText(post.title.rendered);
    const imageUrl = extractImageSrc(post.content.rendered);
    const cleanContent = cleanText(post.content.rendered);

    return (
      <div key={post.id.toString()}>
        <p><strong>{cleanTitle}</strong></p>
        {imageUrl && <img src={imageUrl} alt={cleanTitle} loading="lazy" />}
        <pre style={{ whiteSpace: "pre-wrap" }}>{cleanContent}</pre> {/* Ensures text formatting */}
      </div>
    );
  });

  return <>{postHtml}</>;
}




// export async function getServerSideProps(context) {
//   const res = await fetch(`http://lictonspringsreview.com/wp-json/wp/vv2/posts`)
//   const data = await res.json()

//   if(!data) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       data
//     }, // passed to the page
//   }
// }