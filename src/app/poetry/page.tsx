import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";

//all the 2025 submission Poetry posts, ordered by last name
//Note: The End / The Beginning by Buergell might be Fiction rather than poetry

export const posts = [
    {
        title: "Dying to Live",
        author: "AMAI",
        excerpt: <>It is said that we<br/>Will not know<br/>The time</>
    },
    {
        title: "Change: How to",
        author: "River Hartiens Bennu",
        excerpt: <>(a human body experience of living in a society that hates change)<br/><br/>Sometimes life will change in such a drastic way that it takes ages to recover,</>
    },
    {
        title: "The End / The Beginning",
        author: "Madline Buergell",
        excerpt: <>It was twelve o’clock on a school day, that’s what I remember. It was twelve o’clock on a school day and she came marching in with her big backpack, weighing her down to the stooped posture of someone’s grandmother, asking for books nobody’s checked out for years.</>
    },
    {
        title: "THEY CALL ME CRAZY",
        author: "Michelle Flickinger",
        excerpt: <>Mental Health Battles are Annoying,<br/>Harrowing,<br/>pffffffffff</>
    },
    {
        title: "From Dust to Dust",
        author: "Stellar Haberman",
        excerpt: <>{"There are petroglyphs on the Mojave's rocks. There are pyramids in the Yucatán's forests."}<br/>But I have not stacked any blocks<br/>Or etched my soul into stone.</>
    },
    {
        title: "Hasanlu Lovers",
        author: "Stellar Haberman",
        excerpt: <>There are nights when my arms are wrapped so tightly around you<br/>It would take an axe to make them let go.<br/>When archeologists dig us up thousands of years from now I hope they are still there.</>
    },
    {
        title: "Ode to Us Oddly",
        author: "Ramsey Jester",
        excerpt: <>I know you’re not narcoleptic. Your relationship to death is all the brave<br/>I am not. You sleep so well while I weigh our shadows<br/>in dim rooms. How different we are, I say</>
    },
    {
        title: "The Choice of Our Voice",
        author: "Tommy Oriley",
        excerpt: <>we tend to repeat behavior<br/>conducive to the goals of our species<br/>namely, to copulate and to populate</>
    },
    {
        title: "Flood Watch on Sunday",
        author: "Auguest Purkey",
        excerpt: <>In white monochrome, the water is heaved<br/>down by the season.<br/>I see the opaque</>
    },
    {
        title: "At the Heart of Anger",
        author: "Student",
        excerpt: <>Numb.<br/>I can’t shake this numbness.<br/>Where has all the love gone?</>
    },
    {
        title: "Fairey Rotodyne",
        author: "Student",
        excerpt: <>Only one was ever built<br/>Painted white and blue<br/>The mighty Fairey Rotodyne</>
    },
    //Note: the following 3 are by the same unknown author, file poem-final-e528f14e850d6f3494f5f3b3c70f9bdc
    {
        title: "Echoes of the Unsaid",
        author: "Student",
        excerpt: <>I remember the mornings,<br/>I remember the light—<br/>How it fell like whispers</>
    },
    {
        title: "Fragmented Horizons",
        author: "Student",
        excerpt: <>The sky fractures into shards of twilight,<br/>each piece a question left unanswered,<br/>a dream unraveling into dusk.</>
    },
    {
        title: "Oxymoron’s Embrace",
        author: "Student",
        excerpt: <>Beneath the blinding dark,<br/>a light flickers in the void.<br/>It is sharp, soft,</>
    },
    //Note: the next 3 are by the same unnamed author. File: The Three Literary.docx
    {
        title: "Ode to Writer’s Mania (Freestyle)",
        author: "Student",
        excerpt: <>When the words spill,<br/>Out of my mind. On ideas of lucid chaos—<br/>my fingers scramble for a pencil,</>
    },
    {
        title: "The Three Literary",
        author: "Student",
        excerpt: <>In literary flow, three meet, three as one,<br/>A writer, a reader, and a memoir gather to unwind;<br/>With every word, with every page, with every pun-</>
    },
    {
        title: "The Vow of Silence",
        author: "Student",
        excerpt: <>In the silhouette of silence, my being did believe,<br/>A myth of passion I dared not receive.<br/>With ink and paper, I wrote with my soul,</>
    },
    //Note: the next two are by the same unnamed author, file name: The Old Black Dog-Self Love Remodeling Service.docx
    {
        title: "The Old Black Dog",
        author: "Student",
        excerpt: <>My flesh is pale as my hand shakes,<br/>Must not look back, I will stand tall,<br/>Impulse beckons, the bottle breaks,</>
    },
    {
        title: "Self Love Remodeling Service",
        author: "Student",
        excerpt: <>My body is a temple in need of renovation,<br/>For the longest time it sat derelict,<br/>Not expecting to live past twenty-five,</>
    },
    {
        title: "Paris, j’adore",
        author: "Francesca Aauroraa",
        excerpt: <>Your cobblestone streets are filled<br/>with the stench of burning cigarettes<br/>Your scenic cafes are awash in ash</>
    },
    {
        title: "Autumn",
        author: "Brad Treece",
        excerpt: <>The brine that drenched me in dark December rain,<br/>Clung to my cuticles like ghostly chains,<br/>First transverse, then longitudinally,</>
    },

];

export default async function PoetryPage() {
    const articles: React.ReactElement[] = posts.map((value, idx) =>
        <article key={idx} className="poetry-post">
            <Link href={`poetry/post?id=${idx}&wp=false`}><h2>{`“${value.title}” by ${value.author}`}</h2></Link>
            <p><strong>Posted on 2025-06-10</strong></p>
            <p>{value.excerpt}</p>  
        </article>
    );
    return (
        <main className="poetry-container">
            <h1>Poetry</h1>
            {/*2025 submissions*/}
            {articles}
            {/*Previous posts on WordPress*/}
            <PostsByCategory category="Poetry"/>
        </main>
    );
}
