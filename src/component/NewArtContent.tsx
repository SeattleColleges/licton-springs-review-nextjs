import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  artist: string;
  date: string;
  image: string;
  filename: string;
};

export default function NewArtContent({ title, artist, date, image, filename }: Props) {
  return (
    <div className="new-art-content" style={{ marginBottom: "1.5rem" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />
      <Link href={`/art/${filename}`}>
        <h2 style={{ cursor: "pointer" }}>
          {title} by {artist}
        </h2>
      </Link>
      <p>{date}</p>
    </div>
  );
}
