import Link from "next/link";
import Image from "next/image";
import newArtContent from "@/artData/newArtContent";
import { PostsByCategory } from "@/component/PostsByCategory";

export default async function ArtPage() {
  const sortedPosts = [...newArtContent].sort((a, b) => {
    if (a.filename === "Garret_Alannah") return -1;
    if (b.filename === "Garret_Alannah") return 1;

    const getLastName = (name = "") => {
      const parts = name.trim().split(" ");
      return parts.length > 0 ? parts[parts.length - 1].toLowerCase() : "";
    };

    return getLastName(a.artist).localeCompare(getLastName(b.artist));
  });

  const postsByCategory = await PostsByCategory({ category: "Art" });

  return (
    <main className="art-container">
      <h1>Art</h1>

      <div className="art-posts">
        {sortedPosts.map((post) => {
          const isGarret = post.filename === "Garret_Alannah";

          return (
            <div key={post.filename} className="art-post">
              <Link href={`/art/${post.filename}`}>
                <h2 className="art-title" style={{ cursor: "pointer" }}>
                  “{post.title}” by {post.artist}
                </h2>
              </Link>
              <p className="art-date">
                <strong>Posted on {post.date}</strong>
              </p>
              <div className="art-image-wrapper">
                <Image
                  src={`/arts2025/${post.filename}.jpg`}
                  alt={post.title}
                  width={800}
                  height={300}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    maxHeight: "300px"
                  }}
                />

              </div>
            </div>
          );
        })}
      </div>

      {/* Render old content */}
      {postsByCategory}
    </main>
  );
}
