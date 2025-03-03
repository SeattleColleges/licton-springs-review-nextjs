import Link from "next/link";

export default function ArtPage() {
    return (
      <main>
        <h1>Art</h1>
        <p>Hello World!</p>
        <Link href="/art/post?id=2806">Post Detail</Link>
      </main>
    );
  }
