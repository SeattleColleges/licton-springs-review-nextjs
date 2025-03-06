import Link from "next/link";

export default async function ArtPage() {
    // const res = await fetch("https://lictonspringsreview.com/wp-json/wp/v2/posts?");
    // const json = await res.json();
    // for (let i = 0; i < json.length; i++) {
    //     const post = json[i];
    //     console.log(post);
    // }
    return (
      <main>
        <h1>Art</h1>
        <p>Hello World!</p>
        <Link href="/art/post?id=2806">Post Detail</Link>
      </main>
    );
  }
