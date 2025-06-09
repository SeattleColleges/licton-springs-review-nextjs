import { PostsByCategory } from "@/component/PostsByCategory";
import Link from "next/link";

//all the 2025 submission Poetry posts, ordered by last name
//This doesn't seem like poetry...
// {
//         title: "The End The Beginning",
//         author: "Madline Buergell",
//         excerpt: <></>
//     },
// {contains 2 poems, should I split it up?
//     title: "The Old Black Dog=Self Remodeling Service",
//     author: "Student",
//     excerpt: <>My flesh is pale as my hand shakes,<br/>Must not look back, I will stand tall,<br/>Impulse beckons, the bottle breaks,</>
// },
//poem-final contains 3 poems, should I split it up?
//the three literary contains 3 poems
export const posts = [
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
    {
        title: "Paris, j’adore",
        author: "Francesca Aauroraa",
        excerpt: <>Your cobblestone streets are filled<br/>with the stench of burning cigarettes<br/>Your scenic cafes are awash in ash</>
    },
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
