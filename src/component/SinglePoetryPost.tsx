"use client";
import styles from './styles/Detail.module.css';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

import {posts} from '@/app/poetry/page';

export default function SinglePoetryPost() {
    const searchParams = useSearchParams();
    const idx = searchParams.get("id");
    if (idx != null) {
        const i = parseInt(idx);
        if (isNaN(i) || i < 0 || i >= posts.length) {
            return (<>
                <h1>Post not found</h1>
                <Link href="/">Back to Home</Link>
            </>);
        }
        //parallel to posts, ordered by last name, accessed by title
        const content: {[key: string] : JSX.Element[]} = {
            "At the Heart of Anger": [
                <>Numb</>,
                <>{"I can’t shake this numbness."}</>,
                <>Where has all the love gone?<br/><br/></>,

                <>The furnace is dark and cold.</>,
                <>The tile feels like ice under my feet.</>,
                <>{"I’m moving quickly, quietly across the room."}</>,
                <><em>{"Don’t wake the dragon."}</em><br/><br/></>,

                <>The coldness feels like a prison.</>,
                <>Ice on all sides,</>,
                <>thick and impossible to penetrate.</>,
                <>{"I’m alone, and so cold."}</>,
                <>My body shivers</>,
                <>and my breath makes tiny white puffs of smoke.<br/><br/></>,
                
                <>{"I’m skating on a frozen lake of fire."}</>,
                <>{"There’s lava underneath."}</>,
                <>I can see it,</>,
                <>and it burns a hole in the pit of my stomach.</>,
                <>The dragon lives there.</>,
                <>Be quiet.</>,
                <><em>The dragon can swallow you up.</em><br/><br/></>,

                <>{"I didn’t know the dragon could live there,"}</>,
                <>waiting.</>,
                <>He feels like rage -</>,
                <>black, murderous, terrifying.</>,
                <>He was born from the seed,</>,
                <>planted inside the womb of my mother,</>,
                <>fertilized by my father,</>,
                <>watered and born by the sins of all men.<br/><br/></>,

                <><em>{"He’s hungry."}</em></>,
                <>The ice prison enrages him,</>,
                <>and his hunger drives him to break free.<br/><br/></>,

                <>There, outside his cages, his hunger overtakes her,</>,
                <>turning her cold heart into</>,
                <><strong><em>F I R E</em></strong></>,
                <>her eyes dark, hard with the hunger.</>,
                <>The ice prison clings to her,</>,
                <>promising the fire it will not live forever.</>,
                <><em>The fire persists.</em><br/><br/></>,

                <><strong><em>F E E D    M E.</em></strong><br/><br/></>,

                <>Hunger hurts.</>,
                <>{"It’s a deep ache,"}</>,
                <>a hole so deep and dark</>,
                <>{"it doesn’t seem to end."}<br/><br/></>,
                <><em>He shows her how to fill it.</em><br/><br/></>,

                <>He shows her, and her hunger subsides.<br/><br/></>,

                <>{"That’s better."}</>,
                <>{"That’s good."}</>,
                <>Now we can hide again, the ice prison keeps you safe.</>,
                <><em>Sleep.</em></>,
            ],
            "Fairey Rotodyne": [
                <>Only one was ever built</>,
                <>Painted white and blue</>,
                <>The mighty Fairey Rotodyne</>,
                <>A plane that really flew<br/><br/></>,

                <>Two props and a heli blade</>,
                <>A design quite bizarre</>,
                <>It could take you to the airport</>,
                <>Much, much faster than your car<br/><br/></>,

                <>XE521</>,
                <>Was its one designation</>,
                <>And when it went into cruise flight</>,
                <>It used autorotation<br/><br/></>,

                <>But as you must have guessed</>,
                <>The poor Fairey Aviation</>,
                <>{"Just couldn't fund their program"}</>,
                <>And that led to cancellation<br/><br/></>,

                <>{"But the airframe wasn't saved"}</>,
                <>It was just taken apart</>,
                <>It may have been quite loud</>,
                <>{"But it's still a work of art"}</>                
            ],
            "Paris, j’adore": [
                <>Your cobblestone streets are filled</>,
                <>with the stench of burning cigarettes</>,
                <>Your scenic cafes are awash in ash</>,
                <>I would sacrifice my shiny, pink lungs</>, 
                <>to die happily in your cancer-ridden melody</>, 
                <>of secondhand smoke<br/><br/></>,
                
                <>The Seine oozes through you</>,
                <>in a grey-green sludge of toxic waste</>,
                <>That you can ensconce me in</>,
                <>and drown me with gasping breaths</>,
                <>If only I can stand at the helm</>,
                <>of your picturesque balconies</>,
                <>for a moment</>,
                <>and view the Eiffel Tower</>,
                <>with its sparkling indifference</>,
                <>at midnight</>,
                <>{"Paris, j’adore"}</>
            ],
            "Dying to Live": [
                <>It is said that we</>,
                <>Will not know</>,
                <>The time</>,
                <>Nor the hour</>,
                <>When we must</>,
                <>transition<br/><br/></>,

                <>Today</>,
                <>I come here</>,
                <>Knowing that</>,
                <>I am</>,
                <>Dying</>,
                <>I am</>,
                <>Going</>,
                <>I am</>,
                <>crying</>,
                <>I am</>,
                <>Grieving</>,
                <>I am leaving</>,
                <>All things</>,
                <>That no longer serve</>,
                <>Who</>,
                <>I AM</>,
                <>Behind</>,
                <>I am</>,
                <>Shedding</>,
                <>I am</>,
                <>Regretting</>,
                <>I am</>,
                <>Letting</>,
                <>Go</>,
                <>I am</>,
                <>Scared</>,
                <>Of The unknown</>,
                <>I am</>,
                <>Trusting</>,
                <>In the dirt</>,
                <>Where seeds</>,
                <>Are sown</>,
                <>In the darkness</>,
                <>I am</>,
                <>Alone</>,
                <>From the depths</>,
                <>A better me</>,
                <>Has grown</>,
                <>So</>,
                <>Yes</>,
                <>I AM</>,
                <>Dying…<br/><br/></>,

                <>To</>,
                <>Live</>
            ],
            "Change: How to": [
                <><em>(a human body experience of living in a society that hates change)</em><br/><br/></>,

                <>Sometimes life will change in such a drastic way</>,
                <>that it takes ages to recover,</>,
                <>and sometimes it’s slower…</>,
                <>an eroding process that, over time,</>,
                <>changes your entire landscape.<br/><br/></>,

                <>I’ve had long stretches of slow dissolution,</>,
                <>and huge,</>,
                <>crashing waves</>,
                <>that obliterated</>,
                <>my entire life.<br/><br/></>,

                <>Blessedly,</>,
                <>existing between the waves of grief</>,
                <>left time to contemplate</>,
                <>what’s <em>really</em> important:</>,
                <>relationship to myself</>,
                <>to the universe/god/spirit</>,
                <>to others</>,
                <>to Mother Earth.<br/><br/></>,

                <>Being stripped clean is brutal,</>,
                <>devastating at times,</>,
                <>but isn’t that the way of nature?</>,
                <>When it’s time for seasons to change,</>,
                <>they just do.</>,
                <>There’s no resisting.</>,
                <>Just release,</>,
                <>renewal,</>,
                <>rebirth.<br/><br/></>,

                <>My rebirth is so slowwwww.<br/><br/></>,

                <>The last couple of weeks were a downswing.</>,
                <>My body always lets me know when it’s time to lay low</>,
                <>and just let things unfold in their own way<br/><br/>.</>,

                <>Yet, it’s still hard to be still.</>,
                <>I <em>still</em> resist the down time.</>,
                <>I want to keep</>,
                <>moving</>,
                <>moving</>,
                <>moving.<br/><br/></>,

                <>I want to say I appreciate the cycles…</>,
                <>I really don’t.</>,
                <>I appreciate the clarity that comes with the cycles,</>,
                <>but the waiting is painful.</>,
                <>Like physically painful.</>,
                <>Being in the grief,</>,
                <>the pain,</>,
                <>the waiting it out….</>,
                <>this shit takes a special kind of endurance.<br/><br/></>,

                <>I can think/work my way out of a lot of things,</>,
                <>but I can’t force my way out of this.<br/><br/></>,

                <>I’m still building</>,
                <>“surrender to what is” stamina</>,
                <>which is different than</>,
                <>“we can fix it” stamina.</>,
                <>It’s a different kind of strength.<br/><br/></>,

                <>It helps to remember</>,
                <>that the one constant in life</>,
                <>is change.</>,
                <>Everything changes,</>,
                <>all of the time.</>,
                <>So whatever is happening</>,
                <>right now</>,
                <>won’t last</>,
                <>forever.<br/><br/></>,

                <>My prayer for today:</>,
                <>Creator, please soften me.</>,
                <>Help me accept the rest,</>,
                <>the stillness</>,
                <>and everything</>,
                <>that lies within.</>,
                <>This is hard.<br/><br/></>,

                <>Help me remember</>,
                <>that I am held,</>,
                <>and that everything we need</>,
                <>always comes.</>,
                <>Remind me that I am valuable -</>,
                <>even in the messiness,</>,
                <>even in the solitude,</>,
                <>even in the pain.<br/><br/></>,

                <>I know it’s time for change.</>,
                <>Bless us all as we let go.</>,
                <>Thank you.</>,
                <>I love you.</>,
                <>Amen.</>
            ],
            "THEY CALL ME CRAZY": [
                <>Mental Health Battles are Annoying,</>,
                <>Harrowing,</>,
                <>pffffffffff<br/><br/></>,

                <>fill in the blank ... or ?!</>,
                <>Perhaps I need to have a...</>,
                <>Light bulb – 180!</>,
                <>Mental Health Battles are fucking courageous. Fuck yes they are all of those things<br/><br/></>,

                <>but most of all you have to have major</>,
                <>self-will</>,
                <>determination</>,
                <>efficacy</>,
                <>perspective</>,
                <>superpowers</>,
                <>love</>,
                <>fill in the blank</>,
                <>to keep yourself conscious &</>,
                <>clear, certain &</>,
                <>advancing</>,
                <>into the opposition</>,
                <>talking down</>,
                <>vigilantly</>,
                <>Anything trying to kill your joy & purpose -</>,
                <>vehemently</>,
                <>take down any thing or notion</>,
                <>or poison<br/><br/></>,

                <>trying to subdue</>,
                <>or sedate</>,
                <>your powerful inner kinesthetic</>,
                <>AMBITIONS.</>,
                <>let it be unapologetic</>,
                <>sometimes - being relentless</>,
                <>fighting tirelessly</>,
                <>confused & dazed but driven by something</>,
                <>everyone else calls you crazy for.</>,
                <>Never forget ALMOST EVERY</>,
                <>legend got</>,
                <>Booed</>,
                <>Shunned</>,
                <>Exiled</>,
                <>Slandered</>,
                <>Betrayed</>,
                <>for believing HARD in what we now call</>,
                <>historical genius</>,
                <>{"They got called crazy and some more useless jargon. If it doesn't fuel you -"}</>,
                <>FUCK IT</>,
                <>!!!!!!</>,
                <>All the way up its ASS!</>,
                <>The greats - the crazy greats</>,
                <>FILL IN THE BLANK.</>,
                <>They left nothing blank.<br/><br/></>,

                <>Albert Einstein</>,
                <>Rosa Parks Vincent Van Gogh</>,
                <>John Lennon</>,
                <>{"Anne Frank [add names here that you deem fit I bet we all see greatness in them we know is somewhere within us if we could just lift the veil of society's downplaying our gifts, beauties, and bounties...]"}</>
            ],
            "From Dust to Dust": [
                <>{"There are petroglyphs on the Mojave's rocks. There are pyramids in the Yucatán's forests."}</>,
                <>But I have not stacked any blocks</>,
                <>Or etched my soul into stone.<br/><br/></>,

                <>I am the Library of Alexandria.</>,
                <>My will says to cremate me.</>,
                <>My ashes are all the world will ever know.</>,
                <>{"I do not know my great grandfather's name."}</>,
                <>I look at my child, the drawings she makes with a stick in the sand. The waves will wash over them soon.</>
            ],

            "Hasanlu Lovers": [
                <>There are nights when my arms are wrapped so tightly around you</>,
                <>It would take an axe to make them let go.</>,
                <>When archeologists dig us up thousands of years from now I hope they are still there. My humerus around your spine.</>,
                <>Fingers cradling your mandible.</>,
                <>Long after the bugs have eaten away our veins and blood,</>,
                <>My tibia will lie on top of yours still trying to find your warmth.</>,
                <>Long after my heart rots from my ribs and my eyes from their sockets,</>,
                <>Scientists will still know the longing they held.</>,
                <>Lovers will look at us through the museum glass</>,
                <>And they can only dream to die such a heavenly way.</>
            ],

            "Ode to Us Oddly": [
                <>I know you’re not narcoleptic. Your relationship to death is all the brave</>,
                <>I am not. You sleep so well while I weigh our shadows</>,
                <>in dim rooms. How different we are, I say</>,
                <>too often. I’m sorry. A compulsion to nitpick the grit</>,
                <>of our contrast. Cuticle rust, hold your fingers</>,
                <>to my lips and trace this apocalypse kiss. I’m sorry</>,
                <>and I love you, our species first said. My last words</>,
                <>are already written—and I love you.</>,
                <>Ode to that insufficiency,</>,
                <>ode to such scarcity,</>,
                <>ode until speechless,</>,
                <>or else until we hum</>,
                <>morbid predilections; all odes</>,
                <>to the sorrow in every</>,
                <>passing moment. What a loss</>,
                <>it is to change. Ode to the dull</>,
                <>and sterile days spent</>,
                <>in perfect grace, waste away</>,
                <>with drug sucker smiles, gluey eyes</>,
                <>dripping down paralysis cheeks, spine-wilt</>,
                <>in our molten skin, deflated dolls decaying</>,
                <>in landfill. Eat our hearts out. Eat</>,
                <>out our eyes. Ode to the odd ways we keep</>,
                <>this world’s beauty alive. O this old</>,
                <>wasteland, O my own death.</>,
                <>When the maggots come</>,
                <>to carry me off, please</>,
                <>know it was on bated breath, for</>,
                <>I’ve loved just as much</>,
                <>all time that I’ve grieved.</>,
                <>The leaking of days, hemorrhaging</>,
                <>years. The hourglass is always</>,
                <>a glass half emptied. What a loss it was</>,
                <>to have not known you</>,
                <>for so long.</>
            ],

            "The Choice of Our Voice": [
                <>we tend to repeat behavior</>,
                <>conducive to the goals of our species</>,
                <>namely, to copulate and to populate</>,
                <>the planet with our progeny<br/><br/></>,

                <>we don’t always appreciate our mission</>,
                <>and we know not the origins</>,
                <>from which our orders derive</>,
                <>but we do know the drive</>,
                <>some higher authority establishes a higher priority</>,
                <>and we offer unquestioned submission<br/><br/></>,

                <>the force dwarfs our facility for reasoned discourse</>,
                <>although our conventions permit contact</>,
                <>through extensions of our pretensions</>,
                <>the tragedy of this trajectory is the triumph of trivia over truth</>,
                <>for which we must have great remorse<br/><br/></>,

                <>but the voice which tells us to propagate</>,
                <>is as bold in the truth it tries to articulate</>,
                <>the truth of our humanity</>,
                <>the truth of our capacity to communicate<br/><br/></>,

                <>the molten inevitability of our common fate</>,
                <>brings us together to contend with our conventions</>,
                <>and to mate</>,
                <>but the spiritual transcendence of our lives</>,
                <>resides in open eyes</>,
                <>and the voice, at that moment of our contact</>,
                <>offers a single, inescapable choice</>,
                <>to go into the blind, deprived darkness of our separate selves</>,
                <>or to bask together </>,
                <>in the highest brightest white light from above</>,
                <>to become one with the purest of truths</>,
                <>and, ultimately, to choose</>,
                <>love</>,
            ],

            "Flood Watch on Sunday": [
                <>In white monochrome, the water is heaved</>,
                <>down by the season.</>,
                <>I see the opaque</>,
                <>column of guttered leaves gushing.</>,
                <>Vapor-clear, the old glass clouds</>,
                <>like words in my mouth.</>,
                <>Like puzzles</>,
                <>missing pieces. They went to get</>,
                <>decent bottles for a stew, white</>,
                <>boiling into night.</>,
                <>East of cracked tile slippered</>,
                <>slick by steam is water seeping,</>,
                <>pooling. I don’t see it.</>
            ],

            "Autumn": [
                <>The brine that drenched me in dark December rain,</>,
                <>Clung to my cuticles like ghostly chains,</>,
                <>First transverse, then longitudinally,</>,
                <>Left me searching for lost Autumn’s slumber.<br/><br/></>,

                <>And along with all that rain and thunder,</>,
                <>She came and went, a fleeting turn</>,
                <>Through revolving doors, where lights burn,</>,
                <>Her warmth now fades, her colors dim,</>,
                <>I’m left bearing an overflowing brim.<br/><br/></>,

                <>No longer am I gently led,</>,
                <>But kept by whispers in my head,</>,
                <>The rustling leaves and pallid skies,</>,
                <>Softly drift to say goodbye.</>
            ]
        };
        const post = posts[i];
        const paragraphs = content[post.title].map((element, i) => <p key={i}>{element}</p>);
        
        return (
            <article className={styles.detailContainer}>
                <h1 className={styles.fictionTitle}>{post.title}</h1>
                <p>Published in <Link href="../../poetry">Poetry</Link></p>
                <p className={styles.postDate}>Posted on 2025-06-10</p>
                <div className={styles.contentContainer}>
                    {paragraphs}
                </div>
            </article>
        );
    }
}