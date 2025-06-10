import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";

//all the 2025 submission Essay/Nonfiction posts, ordered by last name
export const posts = [
    {
        title: "Rebirth: Intro to the Sweat Lodge",
        author: "Martin (Okakiina) Spotted Bear",
        excerpt: "The sweat lodge, an Indian cleansing ceremony practiced amongst many indigenous tribes throughout the Midwest region of Turtle Island, covering the Americas—North, Central, and South, proves to be an effective ritual with many healing properties. The sweat lodge ceremony saved my life after a lifelong history of substance abuse."
    },
    {
        title: "I AM",
        author: "I AM",
        excerpt: "I AM is a declaration of existence “I AM” means to be “I” is a first person address to oneself, Me or Myself. “AM” is the first person singular of Present Tense “Be”. Who I was, is not who I AM, who I AM is forever evolving. I prefer not to spend time reflecting on my childhood or where I was born or raised, my cultural background or my profession."
    },
    {
        title: "The Ledge",
        author: "River Hartiens Bennu",
        excerpt: "Gravel crunched beneath my tires as I pulled into the parking lot, excitement and anxiety wrestling in my chest. What would I face on the other side of the treed entrance to the park? I had only seen the Grand Canyon in pictures, and hadn't done any research before making the impromptu trip."
    },
    {
        title: "When Furballs Strike",
        author: "Addison Farrokhi",
        excerpt: "My first time at When Furballs Strike was a bit of a mess. However, it showed me how much I enjoy being myself with a group of people who shared my interests. I had only heard of the event a month prior and my mother was hesitant to let me go. “They’re all weirdos!” she had said while shaking her head. At the time I couldn’t understand why she was so upset."
    },
    {
        title: "What War Teaches Me",
        author: "Ekaterina Kireeva",
        excerpt: "It is no exaggeration to say that the main shock of recent years for me became the war between Russia and Ukraine. I was always far from politics and lived my moderately happy life, being regularly aware of current world events and about the conflict of two neighboring countries, which in my understanding had always been related and had a rich common past."
    },
    {
        title: "Shark Girl Is Funny",
        author: "Trung Nguyen",
        excerpt: "The first time I watched this particular live stream was like being dropped in the middle of a high-speed bullet train. One moment, things felt calm, and the next, I was thrown into a fast-paced motion without a chance to slow down. Before I knew it, I became obsessed with Gura, a popular Internet persona who writes songs, sings, and plays games."
    }
];

export default async function NonFictionPage() {
    const articles: React.ReactElement[] = posts.map((value, idx) =>
        <article key={idx} className="non-fiction-post">
            <Link href={`non-fiction/post?id=${idx}&wp=false`}><h2>{`“${value.title}” by ${value.author}`}</h2></Link>
            {idx === 0 ? <p><strong>Marcia Barton Award Winner!</strong></p> : <></>}
            <p><strong>Posted on 2025-06-10</strong></p>
            <p>{value.excerpt}</p>  
        </article>
    );

    return (
        <main className="non-fiction-container">
            <h1>Non-Fiction</h1>
            {/*2025 submissions*/}
            {articles}
            {/*Previous posts on WordPress*/}
            <PostsByCategory category="Non-Fiction"/>
        </main>
    );
}
