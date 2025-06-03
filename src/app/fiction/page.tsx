import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";

type post = {title: string, author: string, excerpt: string};
//all the 2025 submission Fiction posts, ordered by last name
const posts: post[] = [
    {title: "A Matter of Perspective", author: "Madeline Bowman", excerpt: "Sadie Marsh is moving to Hawaii. Everyone is talking about it. At least they are tonight. Her mom’s out for dinner. And you know what they say about when the cat’s away—the mice turn the entire house into a hotbox and get stoned in the living room with two boxes of pizza."},

    {title: "Kindly Breathe", author: "Liam Cichy", excerpt: "Much higher than her kid’s kite back home in Kentucky USA, and parting still, Ms. Reachers was spiraling away from the ship at the steady pace of half a mile per hour. Spiraling, drifting. floating, not falling. The spots of light through dark trail in large, slow, circular motions, and Ms. Reachers can still smell the euphoric bliss of catnip."},

    {title: "Cruelty of Spring", author: "Audriana Cuellar", excerpt: "Simone ruined my life. I never knew love before I met her, and her love has tortured me every day since. When I first moved to Paris, I only had a small room with a simple cot and a single east facing window that looked out onto a narrow, shaded alley. I was an aspiring painter and never imagined having passion for anything beyond that which was superficial."},

    {title: "The Coffee Shop Encounter", author: "Ishaan Gray", excerpt: "Setting: A cozy coffee shop with warm lighting, a few tables scattered around, and a counter at the back where a barista is making drinks. It’s early evening, and the shop is half-empty. At Rise: JESSICA sits at a small table near the window, her laptop open, typing furiously. A cup of coffee sits untouched next to her."},

    {title: "Dr. Denise and the Case of the Town Flu", author: "Zoe Hamada", excerpt: "The sky was dark and cloudy as Denise sat in the business class of the Eurail train, watching green hills roll by. She hated traveling, yearning to retreat to her cozy apartment. But it was too late; she'd subleased it for two months."},

    {title: "Two Sides of the Same Coin", author: "River Hartiens Bennu", excerpt: "I hadn't meant to end up at the Willow Creek Animal Shelter. My hands had simply taken the familiar turns while my mind wandered, muscle memory carrying me down the winding gravel road where I'd spent countless mornings cleaning kennels and teaching training classes. That was before – before the divorce, before Andre’s betrayal, before everything changed."},

    {title: "Perri and Jonathan the Intergalactic Door Dashers", author: "Jacq Kirkman", excerpt: "Jonathan has gotten used to tuning out the stale laugh track that’s repeatedly inserted into whatever TV show from Earth that Perri is watching this time. Perri has his feet up on the control board, precariously close to buttons that navigate the ship. Despite the fact that Jonathan has warned him repeatedly, “Don’t do that. It’s against safety protocol.”"},

    {title: "Some Chicks", author: "Sophia Mills", excerpt: "[At a party, ELLE stands against the door while MAGGY tries to exit, ELLE blocks the door pleading]. ELLE: I'm going to tell him soon. You don't need to leave. I'm sorry- [ELLE’s beer bottle falls from her hands] Shit, I'm so sorry. Just don't leave, just don't"},

    {title: "Under the Open Window", author: "Hailey Nelson", excerpt: "The carpet feels grainy under me as I lay in the little patch of sunlight seeping through my open window. A window I pray would shut silently so as to not bring any awareness towards me. A slight breeze blows through, the quiet of the neighborhood falling densely on the day. Eerily, not even the usual sound of birds chirping in the afternoon sound through."},

    {title: "Grown Women do as They'd Like", author: "Nicholas Nova", excerpt: "Vandeberg’s mobile home park. Seventy-five homes, twenty-two acres. Half were single wide, and the other half doubles. It was where I hoped to live with Cheryl when we got married—before we’d fought. The police were on the front stoop, so I kicked a few beer cans out of the way and opened the door to see what they wanted."}
];

export {posts};

export default async function FictionPage() {
    const articles: React.ReactElement[] = posts.map((value, idx) =>
        <article key={idx} className="fiction-post">
            <Link href={`fiction/post?id=${idx}&wp=false`}><h2>{`“${value.title}” by ${value.author}`}</h2></Link>
            <p><strong>Posted on 2025-06-10</strong></p>
            <p>{value.excerpt}</p>  
        </article>
    );

    return (
        <main className="fiction-container">
            <h1>Fiction</h1>
            {/* 2025 submissions */}
            {articles}
            {/* Previous posts on WordPress */}
            <PostsByCategory category="Fiction" />
        </main>
    );
}
