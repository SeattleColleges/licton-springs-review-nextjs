import newArtContent from "@/artData/newArtContent";

type Props = {
  params: { filename: string };
};

export default function ArtDetailPage({ params }: Props) {
  const post = newArtContent.find((p) => p.filename === params.filename);

  if (!post) return <p>Art not found.</p>;

  return (
    <main style={{ padding: "2rem"}}>
      <div style={{ marginBottom: "1rem", textAlign: "left" }}>
        <h1 style={{ margin: 0 }}>{post.title}</h1>
        <p style={{ margin: 0 }}><strong>by {post.artist}</strong></p>
        <p style={{ margin: 0 }}>Posted on {post.date}</p>
      </div>
      <img
        src={`/Arts2025/${post.filename}.jpg`}
        alt={post.title}
        style={{ width: "auto", maxWidth: "100vw", height: "auto", maxHeight: "100vh", objectFit: "contain", display: "block", margin: "0 auto" }}/>
    </main>
  );
}
