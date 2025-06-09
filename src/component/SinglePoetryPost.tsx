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
            "Echoes of the Unsaid": [
                <>I remember the mornings,</>,
                <>I remember the light—</>,
                <>How it fell like whispers</>,
                <>across an empty room.<br/><br/></>,

                <>I remember the laughter,</>,
                <>caught between silences,</>,
                <>where love lingered,</>,
                <>a shadow we dared not name.<br/><br/></>,

                <>I remember the leaving—</>,
                <>the door ajar, the wind cold,</>,
                <>the echo of words unsaid,</>,
                <>unspoken truths etched in air.<br/><br/></>,

                <>And still, I remember.</>,
                <>Each memory a circle,</>,
                <>each circle a cage.</>,
                <>I remember.</>
            ],
            "Fragmented Horizons": [
                <>The sky fractures into shards of twilight,</>,
                <>each piece a question left unanswered,</>,
                <>a dream unraveling into dusk.<br/><br/></>,

                <>Clouds bleed amber and crimson,</>,
                <>their colors running like ink</>,
                <>on a page too full to hold them.<br/><br/></>,

                <>Below, the sea breathes</>,
                <>in restless whispers,</>,
                <>pulling secrets from the shore</>,
                <>only to drown them again.<br/><br/></>,

                <>A lone gull rises against the wind,</>,
                <>its cry a fleeting echo,</>,
                <>a thread tugged loose</>,
                <>from the fabric of the horizon.<br/><br/></>,

                <>Here, on the edge of the world,</>,
                <>silence becomes a voice,</>,
                <>soft yet unrelenting,</>,
                <>speaking of endings, beginnings,</>,
                <>and all the spaces in between.</>
            ],
            "Oxymoron’s Embrace": [
                <>Beneath the blinding dark,</>,
                <>a light flickers in the void.</>,
                <>It is sharp, soft,</>,
                <>a contradiction breathing life.<br/><br/></>,

                <>In bitter sweetness,</>,
                <>we taste the past,</>,
                <>its joyous grief,</>,
                <>its empty fullness.<br/><br/></>,

                <>A quiet roar rises,</>,
                <>and the silence sings.</>,
                <>Truth lies,</>,
                <>and lies are true.<br/><br/></>,

                <>We are undone,</>,
                <>bound by freedom,</>,
                <>at peace in our chaos,</>,
                <>forever falling, forever still.<br/><br/></>,
            ],
            "Ode to Writer’s Mania (Freestyle)": [
                <>When the words spill,</>,
                <>Out of my mind. On ideas of lucid chaos—</>,
                <>my fingers scramble for a pencil,</>,
                <>the blank page a beau, a belle, beckoning,</>,
                <>yelling until their story leaks, out of my mind.<br/><br/></>,

                <>But I keep going, I feel the adrenaline,</>,
                <>the passion grips me,</>,
                <>a wildfire of words and worlds, in my veins,</>,
                <>Writing is always so seductive, so twisted,</>,
                <>{"a relentless feeling that I can't resist."}<br/><br/></>,

                <>I pause,</>,
                <>a breath caught,</>,
                <>lingering,</>,
                <>until it flows out of me</>, 
                <>and becomes real.<br/><br/></>,

                <>{"It's like a pulse, electric,"}</>,
                <>an unquenchable thirst,</>,
                <>and I, the addict,</>,
                <>Dream of a world where writing</>,
                <>It doesn’t devour me, it desires me,<br/><br/></>,

                <>We are stitched together—</>,
                <>this tragic romance in heart and breath,</>,
                <>a cycle, a circle, a circle, a cycle</>,
                <>We are  bound in manic love,</>,
                <>We are lost in a never-ending storm.<br/><br/></>,

                <>And every word, like a caress,</>,
                <>Touches me so, and moves me so,</>,
                <>the pages, we crave, a communion of chaos,</>,
                <>{"and still, Still, I'm whispering to you,"}</>,
                <>like a soul tie, only I know to be true.<br/><br/></>,

                <>An Ode to Writers Mania</>
            ],
            "The Three Literary": [
                <>In literary flow, three meet, three as one,</>,
                <>A writer, a reader, and a memoir gather to unwind;</>,
                <>With every word, with every page, with every pun-</>,
                <>Through chronicles inked and linked, a world to find.<br/><br/></>,

                <>{"The reader escapes in passion's whispered lines,"}</>,
                <>The Memoir, a tale, a bridge between space and span;</>,
                <>{"The writer's heart, where longing exists in many times,"}</>,
                <>Builds a connection unseen, among us three, there exists a plan.<br/><br/></>,

                <>The Plan is to be free, to be all Three,</>,
                <>As our tales twist, and take flight;</>,
                <>{"The spark just can't be denied, they are all me,"}</>,
                <>{"The reader's heart, the writer’s hand, and a memoir's love, three ignite."}<br/><br/></>,

                <>In this embrace, we forge a love so new,</>,
                <>A love where I am:  writer, reader, and story too.</>
            ],
            "The Vow of Silence": [
                <>In the silhouette of silence, my being did believe,</>,
                <>A myth of passion I dared not receive.</>,
                <>With ink and paper, I wrote with my soul,</>,
                <>It was a declaration about something, untamed and whole.<br/><br/></>,

                <>Each thought a whisper, soft and near,</>,
                <>Captured the longing, the energy, crystal clear.</>,
                <>The confessions flow candidly when written down,</>,
                <>Telling tales of dreams and desires to which I am bound.<br/><br/></>,

                <>Yet, in the Archives, this secret I keep.</>,
                <>Stowed away in the abyss of feelings, lost in the deep.</>,
                <>For fear that these words, so tender, so true,</>,
                <>Might shatter the quiet that exists between me and you.<br/><br/></>,

                <>But know this, through silence it can all be contained,</>,
                <>The tenderness and temptation that flows through my unspoken veins.</>,
                <>In every glance, in every smile shared,</>,
                <>with every memory, these moments are declared.<br/><br/></>,

                <>To escape my reality, to dance in the rain,</>,
                <>To write about this sweet, sacred pain.</>,
                <>{"Until I can no longer escape, I'd rather cherish this quiet embrace,"}</>,
                <>For this is a vow of silence, in its rightful place.</>


            ],
            "The Old Black Dog": [
                <>My flesh is pale as my hand shakes,</>,
                <>Must not look back, I will stand tall,</>,
                <>Impulse beckons, the bottle breaks,</>,
                <>Jack Daniel’s makes his siren call,<br/><br/></>,

                <>The room is spinning as still the world turns,</>,
                <>Phantoms dance in the corners of the eye,</>,
                <>A peace still missing, mocking laughter stings and burns.</>,
                <>And I pray, oh how I pray, to just let me…die.<br/><br/></>,

                <>Oh, old black dog whose jaws sink deep,</>,
                <>The family’s beast to be held at bay,</>,
                <>I plead for alms, thine soul to keep,</>,
                <>Not sure if I will see the next day,<br/><br/></>,

                <>But at nights end the sun shall shine through,</>,
	            <>Shaken, unsteady but stronger and true.</>
            ],
            "Self Love Remodeling Service": [
                <>My body is a temple in need of renovation,</>,
                <>For the longest time it sat derelict,</>,
                <>Not expecting to live past twenty-five,</>,
                <>The structure was left…</>,
                <>Derelict.</>,
                <>It required intervention,</>,
                <>Until after my last exploration into self-harm,</>, 
                <>With the best of intentions,</>,
                <>I found it, a will to survive,<br/><br/></>,

                <>The stained glass which let the sun shine through has shattered,</>,
                <>Memories and mistakes,</>,
                <>Sins and successes,</>,
                <>Lay a technicolor snowdrift across the floor,</>,
                <>But day by day, I take my broom and clean,</>,
                <>Remembering that every bit mattered,</>,
                <>Brought to the kiln where they be reforged into something more,<br/><br/></>,

                <>The wiring to the many lights which made the temple shine are rusted,</>,
                <>Jury-rigged and ripped,</>,
                <>I can’t do it alone, so I’ll call an electrician,</>,
                <>Remaking neural pathways every bit by bit,</>,
                <>Ripping out rotted floorboards, and molded carpets,</>,
                <>With the hands of a master craftsmen rebuild in a way that I’m sure no one forgets,<br/><br/></>,

                <>My temple is in progress,</>,
                <>And there’s still much to do,</>,
                <>The plumbing is leaky, and some rats in the den,</>,
                <>And though my tabernacle may lay tattered,</>,
                <>This hall is my own and I’d never want another,</>
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
            "The End / The Beginning": [
                <>I. School Day </>,
                <>It was twelve o’clock on a school day, that’s what I remember. It was twelve o’clock on a school day and she came marching in with her big backpack, weighing her down to the stooped posture of someone’s grandmother, asking for books nobody’s checked out for years.</>,
                <>It’s not like it was the strangest thing I’ve ever seen. The Central Library is a haven for people with nowhere else to be, that’s what I always say, so I don’t judge. Still, it makes you wonder, doesn’t it? Twelve o’clock on a school day, showing me a little notebook with call numbers written in a shaky hand and sitting down right there, on the floor, to read a book I’ve never heard of. Makes you wonder.</>,
                <>II. Notebooks</>,
                <>It’s not exactly glamorous work, cleaning a school, but I don’t mind it. Teenagers are monsters, whirlwinds, <em>dervishes</em>, which is a word I heard in a David Attenborough program late last night and didn’t look up, but it seems about right. They leave food, paper, <em>things</em> everywhere, like they think it’ll all just fade away. And they complain all the time. And they are always asking me <em>have you seen my boots?</em> Or <em>my gloves</em> or <em>my keys</em> or <em>my phone</em>, like I haven’t seen every object imaginable late at night, pressed into the linoleum by the force of the fluorescent lights. Sure, I’ve seen your phone, but I couldn’t tell you where it is.</>,
                <>I don’t mind it though. It’s quiet work, and not so bad to do. I never made friends easily in school, so it seems about right that I work alone in one now, and I won’t complain. And I try to find their things, put them away behind the desk at the front office or in my closet in case someone asks. They always ask, and they never follow up, so the things just stay. Still, I try.</>,
                <>The notebooks were not exceptional. I see hundreds, maybe millions of notebooks every night. It’s a miracle anyone ever does work at this school, since their notebooks are always piling up behind my desk like snowdrifts. Someday, they’re going to collapse and that’s how I’ll die, under the notebooks. Probably they’ll never find me and I’ll dry out, like the mummies on that other David Attenborough program I watched.</>,
                <>Anyway, I see a lot of notebooks, so they weren’t exceptional. There were a lot of them, though, all different sizes and not the lined composition books I usually see. When I picked them up, they fell open, and I saw they were full of chicken scratch which I scrupulously did not read but which spoke about the same things, over and over and over again, slight changes sculpting it slowly. That worried me, and I shut them immediately to put them behind my desk. They were picked up the following day, to my relief.</>,
                <>III. Returns Desk</>,
                <>She renewed those books as many times as we would let her, looking guilty every time. When I would hand them back to her, she’d clutch them white-knuckled like a life preserver, her teeth gritted, and shove them back in that big blue backpack. It looked heavy, still, and every time she’d shoulder it like its burden extended into the metaphysical.</>,
                <>I thought that was kind of a nice metaphor, like something I might read in my books. Big and blue and heavy, like a literal representation of her sadness (not like she looked sad, but she might be. You never know, right?) When I mentioned it to Olivia in the reshelving room, she said it was heavy-handed, and that I shouldn’t read so much. I laughed at her, but later, when I watched her eat her hand-packed lunch, little vegetables cut into stars and sealed perfectly into Tupperware containers, I thought maybe she was right.</>,
                <>IV. Common Application</>,
                <><em>Why have you chosen the major you’ve indicated on your application? 100 words. Why are you qualified to study this major? 200 words. Why should we want you? 150 words. Why should we let you pay us? 300 words.</em></>,
                <><em>Why, why, why, why? 100 words. Explain yourself. 1,000 words.</em></>,
                <><em>Tell a story from your life that can be twisted by our sick little fingers into some kind of morality parable. 300 words.</em></>,
                <><em>Who are you? 50 words.</em></>,
                <><em>Narrow your life to this pinprick moment of time. Forget your friends. Forget your family, your hobbies. Bare your soul to us,  and maybe we’ll think about it. And for God’s sake, be funny! 200 words.</em></>,
                <>V. Personal Statement</>,
                <>I want to study [PICK LIFE PATH] at [REMEMBER TO PUT NAME IN] because I’m [THINK OF SOMETHING GOOD]. My life is interesting, because [FIND SOMETHING]. <em>I’d fade into the background at your school.</em> I’m the kind of bland overachiever you might want to sit in the middle of class and raise my hand occasionally [COME UP WITH EXAMPLE]. I’d contribute to the community because I’m [WHAT ARE SOME VALUES I COULD HAVE?]. Your school is perfect for me because I’d get to participate in [LOOK UP CLUBS] and work with [GOOGLE A PROFESSOR]. I’m so excited to take [FIND CLASS CATALOGUE]. Your [FIND OUT WHAT THEY CALL THEIR CURRICULUM] is so unique and I’m perfect for it.</>,
                <>VI. Cycles</>,
                <>Working in a school is like living in one of David’s ecosystems. I always fall asleep halfway through those shows, but I think I get the idea. There’s the top and the bottom, the predators and the prey, the winners and the losers. And there’s seasons- not the seasons in the real world, which fade to nothingness when they encounter the perpetual vague chill of a building built in 1963, but cycles of stress and calm that I can feel the same way you can feel when someone’s watching your back.</>,
                <>You always know when someone’s a winner. The plumage (school spirit sweatshirts, water bottles with stickers of their soon-to-be alma mater) gives them away, but so does the swagger, which says <em>I got it, and then I got in</em>. They were there when I went to school, and they’re here now, looking exactly the same, behind the haircuts. They’re the brightly colored, and thus vivacious, birds of high school, who have no trouble finding their place.</>,
                <>The losers look pale and wan, wandering in strange, meaningless patterns. Their faces pinch when people look at them, like they’re afraid to be seen. There’s more of them when the stressful season begins, crashing over the hallways like a tidal wave. By the end of the year, they’re mostly extinct, except for some unlucky few.</>,
                <>It is the stressful season now, which means I keep my head down as I walk. Students slip by me like ghosts, drifting aimlessly. I feel bad for the teachers, who have to somehow get information into those absent minds.</>,
                <>Some students still wave at me, their jaws clenched. One of them is the kid with the notebooks. I wonder if she ever figured out whatever she was writing, and then I look away, more comfortable when the students don’t look at me. All of them look like they’re treading water, and I don’t want them to drag me down. There’s a reason I normally work at night. Nocturnal, that’s what I am. Or diurnal, another one of David’s words.</>,
                <>I empty the trash without looking up, starting to feel like a ghost myself. I’ll be glad when the season of elation begins.</>
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