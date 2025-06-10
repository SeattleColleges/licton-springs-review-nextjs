import Image from "next/image";
import newArtContent from "@/artData/newArtContent";

type Props = {
  params: { filename: string };
};

export default async function ArtDetailPage({ params }: Props) {
  const { filename } = await params;
  const post = newArtContent.find((p) => p.filename === filename);

  if (!post) return <p>Art not found.</p>;

  return (
    <main style={{ padding: "2rem"}}>
      <div style={{ marginBottom: "1rem", textAlign: "left" }}>
        <h1 style={{ margin: 0 }}>{post.title}</h1>
        <p style={{ margin: 0 }}><strong>by {post.artist}</strong></p>
        <p style={{ margin: 0 }}>Posted on {post.date}</p>
      </div>
      <Image
        src={`/Arts2025/${post.filename}.jpg`}
        alt={post.title}
        width={1200}     
        height={800}
        style={{ width: "auto", maxWidth: "100vw", height: "auto", maxHeight: "100vh", objectFit: "contain", display: "block", margin: "0 auto" }}/>
    </main>
  );
}
