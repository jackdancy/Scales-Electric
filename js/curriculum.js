// 12-Week Music Learning Curriculum
// Guitar: Position-based approach - learn moveable patterns
// Piano: Key-based approach - starting with C Major

// Difficulty levels: 1 = Beginner, 2 = Intermediate, 3 = Challenging
const CURRICULUM = [
    // ===== MONTH 1: Open Position Foundation =====
    {
        week: 1,
        title: "G Major & Essential Chords",
        description: "Guitar: G position is your home base. Piano: C Major - all white keys",
        weekNotes: {
            guitar: `Welcome to your guitar journey! 🎸

This week you're learning something that will change everything: the G Major position. Why G and not C like piano players start with? Because guitar is different - it's all about SHAPES and POSITIONS that you can move around the neck.

The G-C-D chords you're learning this week are incredibly powerful. With just these three chords, you can play THOUSANDS of songs - seriously! From classic rock to pop to country, this progression is everywhere. When you hear music on the radio, start listening for it - you'll be amazed how often you recognize "hey, that's G-C-D!"

We're starting here because these open chords sound full and rich, and they'll let you play real songs RIGHT AWAY. That's the goal - get you making music fast so you stay excited and motivated.

The scale pattern you're learning isn't just about G Major - it's a SHAPE that works everywhere on the neck. Learn it well, because in a few weeks you'll discover you can slide this same shape up and down to play in ANY key. That's the superpower of guitar!`,

            piano: `Welcome to your piano adventure! 🎹

This week you're starting with C Major - and there's a really cool reason why. Look at the piano keys: C Major uses ALL white keys! This makes it the perfect scale to learn proper finger technique without worrying about black keys yet.

But here's what's really exciting: the fingering pattern you're learning (1-2-3, thumb under, 1-2-3-4-5) is the SAME pattern you'll use for almost every major scale. So while it feels like you're just learning C Major, you're actually learning a technique that will work for everything!

The inversions might seem tricky at first - why learn three ways to play the same chord? Here's the secret: when you play songs, you don't want your hand jumping all over the keyboard. Inversions let you move smoothly from one chord to the next. Professional pianists use inversions ALL the time - it's what makes their playing sound so fluid and beautiful.

You're building the foundation for everything that comes next. Take your time, keep your wrists relaxed, and enjoy making these beautiful sounds!`
        },
        weeklyChallenge: {
            guitar: "Play the G Major scale up and down smoothly. Play G-C-D chord progression 4 times with clean changes.",
            piano: "Play C Major scale hands together at 60 BPM, then play C Major chord in all 3 inversions smoothly."
        },
        songs: {
            guitar: [
                {
                    title: "Sweet Home Alabama",
                    artist: "Lynyrd Skynyrd",
                    chords: "D - C - G",
                    note: "The classic G-C-D pattern!",
                    links: {
                        spotify: "https://open.spotify.com/track/7e89621JPkKaeDSTQ3avtg",
                        video: "https://www.youtube.com/watch?v=ye5BuYf8q4o",
                        tutorial: "https://www.justinguitar.com/songs/lynyrd-skynyrd-sweet-home-alabama",
                        tab: "https://tabs.ultimate-guitar.com/tab/lynyrd-skynyrd/sweet-home-alabama-chords-849467"
                    }
                },
                {
                    title: "Love Me Do",
                    artist: "The Beatles",
                    chords: "G - C - G - D",
                    note: "Simple and fun - just 3 chords!",
                    links: {
                        spotify: "https://open.spotify.com/track/02iXMeqfPedT0HINpGSvTH",
                        video: "https://www.youtube.com/watch?v=0pGOFX1D_jg",
                        tutorial: "https://www.justinguitar.com/songs/the-beatles-love-me-do-chords-tabs-guitar-lesson-bs-108",
                        tab: "https://tabs.ultimate-guitar.com/tab/the-beatles/love-me-do-chords-17428"
                    }
                }
            ],
            piano: []  // Week 1 - still building basics
        },
        guitar: {
            scale: {
                name: "G Major Scale (Open Position)",
                tokens: 15,
                difficulty: 1,
                tip: "This is your HOME position. Root on the low E string, 3rd fret. Learn this shape - it's moveable!",
                pattern: "Position 1 (E-shape)"
            },
            chords: [
                {
                    name: "G Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "G Shape",
                    tip: "Use your pinky on the high E string - builds strength for later."
                },
                {
                    name: "C Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "C Shape",
                    tip: "Keep fingers curved and on their tips. This chord is everywhere!"
                },
                {
                    name: "D Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "D Shape",
                    tip: "Compact shape - great for quick changes to G and C."
                }
            ]
        },
        piano: {
            scale: {
                name: "C Major Scale",
                tokens: 15,
                difficulty: 1,
                tip: "All white keys! Focus on the thumb-under at F (after E). LH mirrors RH fingering.",
                speedGoal: 80
            },
            chords: [
                { name: "C Major (Root Position)", tokens: 5, difficulty: 1, tip: "C-E-G. Keep your wrist level and fingers curved." },
                { name: "C Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "E-G-C. Notice how it sounds 'brighter' than root position." },
                { name: "C Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "G-C-E. Great for smooth voice leading to F Major." }
            ]
        }
    },
    {
        week: 2,
        title: "E Minor Pentatonic - The Improv Foundation",
        description: "Guitar: The most important scale for soloing. Piano: G Major",
        weekNotes: {
            guitar: `This week is HUGE. You're learning the E Minor Pentatonic scale - and this is honestly the most important scale in rock and blues guitar. 🔥

Why is it so special? The pentatonic scale has only 5 notes (that's what "penta" means), and those 5 notes are carefully chosen to sound good over almost anything. You literally CANNOT play a wrong note when improvising with this scale over the right chords!

Here's something amazing: the E Minor Pentatonic shape you're learning sits right in the open position, and it overlaps with the G Major scale you learned last week. That's not a coincidence - they're related (we'll explore this more next week). This means you already know some of these notes!

Why are we learning this in week 2? Because I want you to start IMPROVISING as soon as possible. Playing scales up and down is important, but the real magic happens when you use those notes to create your own music. Put on a backing track in Em and just... play. Try different rhythms. Bend some notes. Make it YOUR sound.

Every legendary guitarist - from Hendrix to Slash to your favorite players - uses this exact scale shape. You're learning the same tools the pros use!`,

            piano: `This week you're adding G Major to your collection! 🎵

G Major has just one black key (F#), which makes it the perfect next step after C Major. Your fingers already know the basic pattern - now they just need to find that F# and you're set!

Here's why we're doing G Major now: the G and C chords work beautifully together. Musicians call this a "I-IV" progression (don't worry about the numbers yet), and it's the foundation of countless songs. By learning both keys, you can start to feel how music flows from one chord to another.

Notice how the thumb-under technique feels in G Major - it happens in a slightly different spot because of that F#. Your brain is learning to adapt the pattern to different situations. This flexibility is exactly what makes a great pianist!

The inversions for G Major work just like C Major. See how the same ideas apply? That's the beautiful thing about music theory - once you understand one key, the others start to make sense too.

Keep building that speed with your scales. The metronome is your friend - it might feel slow now, but consistent practice at a steady tempo is how the pros got fast!`
        },
        weeklyChallenge: {
            guitar: "Play E Minor Pentatonic up and down 3 times. Then improvise freely over an Em backing track for 1 minute!",
            piano: "Play G Major scale hands together at 60 BPM, then C Major scale (recap). Play G-C-G chord progression using inversions."
        },
        songs: {
            guitar: [
                {
                    title: "Heart of Gold",
                    artist: "Neil Young",
                    chords: "Em - C - D - G",
                    note: "Classic Em-based song - try soloing with Em pentatonic!",
                    links: {
                        spotify: "https://open.spotify.com/track/5WJmk2QJqhMOxoYAujrqf2",
                        video: "https://www.youtube.com/watch?v=Eh44QPT1mPE",
                        tutorial: "https://www.justinguitar.com/songs/neil-young-heart-of-gold-chords-tabs-guitar-lesson-st-909",
                        tab: "https://tabs.ultimate-guitar.com/tab/neil-young/heart-of-gold-chords-56555"
                    }
                },
                {
                    title: "Wish You Were Here",
                    artist: "Pink Floyd",
                    chords: "Em - G - Em - A",
                    note: "Beautiful Em intro - perfect for pentatonic noodling",
                    links: {
                        spotify: "https://open.spotify.com/track/7dZraBDr6DgGk1ecsAhQJg",
                        video: "https://www.youtube.com/watch?v=IXdNnw99-Ic",
                        tutorial: "https://www.justinguitar.com/songs/pink-floyd-wish-you-were-here-chords-tabs-guitar-lesson-st-301",
                        tab: "https://tabs.ultimate-guitar.com/tab/pink-floyd/wish-you-were-here-tabs-984061"
                    }
                }
            ],
            piano: [
                {
                    title: "Crocodile Rock",
                    artist: "Elton John",
                    chords: "G - C - G - D",
                    note: "Bouncy left hand pattern",
                    links: {
                        spotify: "https://open.spotify.com/track/6WCeFNVAXUtNczb7lqLiZU",
                        video: "https://www.youtube.com/watch?v=75r0nQu-hMs",
                        tutorial: "https://sheetmusicboss.com/2020/01/05/elton-john-crocodile-rock-piano-tutorial/",
                        sheet: "https://musescore.com/user/10205431/scores/5012973"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "E Minor Pentatonic (Box 1)",
                tokens: 15,
                difficulty: 1,
                tip: "THE essential improv scale! 5 notes, open position. This overlaps with G Major - they're relatives!",
                pattern: "Pentatonic Box 1"
            },
            chords: [
                {
                    name: "E Minor (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "E Shape",
                    tip: "One of the easiest chords - just two fingers! Great full sound."
                }
            ]
        },
        piano: {
            scale: {
                name: "G Major Scale",
                tokens: 15,
                difficulty: 1,
                tip: "Remember F#! Same fingering as C Major. The black key actually makes thumb-under easier.",
                speedGoal: 80
            },
            chords: [
                { name: "G Major (Root Position)", tokens: 5, difficulty: 1, tip: "G-B-D. Notice how far your hand spans compared to C Major." },
                { name: "G Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "B-D-G. Practice moving smoothly from C Major to this." },
                { name: "G Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "D-G-B. This inversion leads beautifully back to C Major." }
            ]
        }
    },
    {
        week: 3,
        title: "Connecting G Major & E Minor",
        description: "Guitar: Same notes, different root - relative major/minor. Piano: D Major",
        weekNotes: {
            guitar: `Time for a mind-blowing discovery! 🤯

Look at the G Major scale and the E Minor Pentatonic you learned. Play them both... notice anything? THEY USE THE SAME FRETS! The notes E-G-A-B-D from Em Pentatonic are all inside G Major.

This is called the "relative minor" relationship. Every major key has a minor key that shares its notes. G Major's relative minor is E Minor. This is SUPER useful because it means when a song is in G Major, you can solo using E Minor Pentatonic and everything sounds great!

Why does this matter? Because now you have OPTIONS when you improvise. Over a G Major progression, you can:
- Play G Major scale for a happy, bright sound
- Play E Minor Pentatonic for a bluesy, rock sound
- Mix them together for maximum expression!

This is exactly what professional guitarists do - they switch between major and minor feels depending on the emotion they want. You're starting to think like a pro!

The Am chord you're adding this week is also related to C Major the same way. Music is full of these beautiful connections once you know where to look.`,

            piano: `Welcome to D Major - you're really building your key collection now! 🎹

D Major has two sharps: F# (which you know from G Major) and C#. Notice how we're gradually adding black keys? C Major had none, G Major had one, and now D Major has two. This step-by-step approach lets your fingers adapt naturally.

Here's something cool: D, G, and C are a very important group of chords. They form what's called a "I-IV-V" progression in G Major. This progression is the backbone of SO much music - pop, rock, classical, everything! When you play D-G-C or G-C-D, you're playing one of the most common patterns in all of music.

The inversions are really starting to matter now. With three different keys, you'll notice that some inversions connect more smoothly than others. Finding the right inversion for each situation is like solving a fun puzzle - and your ears will tell you when you've got it right!

You're now comfortable with three major scales. That might not sound like much, but you can already play in keys that cover TONS of popular music. Keep going - you're doing amazing!`
        },
        weeklyChallenge: {
            guitar: "Play G Major scale, then E Minor Pentatonic - notice they share the same frets! Jam over G-Em-C-D switching between both.",
            piano: "Play D Major scale at 70 BPM, then G and C scales (recap). Play D-G-C progression choosing the best inversions for smooth movement."
        },
        songs: {
            guitar: [
                {
                    title: "Knockin' on Heaven's Door",
                    artist: "Bob Dylan/GNR",
                    chords: "G - D - Am - G - D - C",
                    note: "Perfect for practicing G and Em pentatonic!",
                    links: {
                        spotify: "https://open.spotify.com/track/5Xak5fmy089t0FYmh3VXiY",
                        video: "https://www.youtube.com/watch?v=f8OHybVhQwc",
                        tutorial: "https://www.justinguitar.com/songs/bob-dylan-knockin-on-heavens-door",
                        tab: "https://tabs.ultimate-guitar.com/tab/bob-dylan/knockin-on-heavens-door-chords-68716"
                    }
                },
                {
                    title: "You Shook Me All Night Long",
                    artist: "AC/DC",
                    chords: "G - C - D - G",
                    note: "Classic rock rhythm in G!",
                    links: {
                        spotify: "https://open.spotify.com/track/5qhpJKoLdGAfjMHfkNsKgd",
                        video: "https://www.youtube.com/watch?v=Lo2qQmj0_h4",
                        tutorial: "https://www.justinguitar.com/songs/ac-dc-you-shook-me-all-night-long-1-3-chords-tabs-guitar-lesson-st-319",
                        tab: "https://tabs.ultimate-guitar.com/tab/acdc/you-shook-me-all-night-long-chords-621851"
                    }
                }
            ],
            piano: [
                {
                    title: "Bennie and the Jets",
                    artist: "Elton John",
                    chords: "G - Am - C - D",
                    note: "Work on that intro riff!",
                    links: {
                        spotify: "https://open.spotify.com/track/5Ryb8xsHLBwHdHF3KLHB2l",
                        video: "https://www.youtube.com/watch?v=p5rQHoaQpTw",
                        tutorial: "https://sheetmusicboss.com/2020/01/09/elton-john-bennie-and-the-jets-piano-tutorial/",
                        sheet: "https://musescore.com/user/13172/scores/2926031"
                    }
                },
                {
                    title: "Jealous Guy",
                    artist: "John Lennon",
                    chords: "G - Em - D - C",
                    note: "Beautiful ballad",
                    links: {
                        spotify: "https://open.spotify.com/track/4bfAfSPDlp2vLlPbNC6N8z",
                        video: "https://www.youtube.com/watch?v=DtUcr7rU5aE",
                        tutorial: "https://hdpiano.com/lesson/jealous-guy-by-john-lennon",
                        sheet: "https://musescore.com/user/28722261/scores/10731862"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "G Major & Em Pentatonic Connection",
                tokens: 15,
                difficulty: 1,
                tip: "G Major and E Minor Pentatonic share the SAME position! G is the relative major of Em. When you see G-C-D, you can solo with Em pentatonic.",
                pattern: "Relative Major/Minor"
            },
            chords: [
                {
                    name: "A Minor (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "A Shape",
                    tip: "Very similar to E chord shape - same fingers, different strings!"
                }
            ]
        },
        piano: {
            scale: {
                name: "D Major Scale",
                tokens: 15,
                difficulty: 1,
                tip: "F# and C# - two black keys. The fingering is the same as C and G Major!",
                speedGoal: 80
            },
            chords: [
                { name: "D Major (Root Position)", tokens: 5, difficulty: 1, tip: "D-F#-A. Your middle finger plays a black key." },
                { name: "D Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "F#-A-D. Practice the stretch from black to white keys." },
                { name: "D Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "A-D-F#. This connects smoothly to G Major." }
            ]
        }
    },
    {
        week: 4,
        title: "A Minor Pentatonic & The A-E Family",
        description: "Guitar: Second pentatonic position, more essential chords. Piano: I-IV-V progression",
        weekNotes: {
            guitar: `You've completed your first month! Let's celebrate by adding another essential pentatonic position. 🎉

A Minor Pentatonic in open position is incredibly useful. While Em Pentatonic has its root on the low E string, Am Pentatonic has its root on the open A string. Same shape idea, different starting point!

Here's why both matter: A Minor is one of the most common keys in rock and pop. Songs like "House of the Rising Sun," "All Along the Watchtower," and countless others use Am. Now you can solo over all of them!

The A and E Major chords you're learning are a powerful pair. A-E is another super common progression (like G-D was). Notice how the E Major shape is similar to Am but with one different finger? These relationships help you learn faster.

By the end of this week, you'll have TWO pentatonic positions and a solid collection of open chords. That's a serious toolkit! Most guitarists take months to get this far. You're building real skills that will stay with you forever.

Next month, we'll start moving these shapes UP the neck. The open position is your foundation - now you're ready to explore the whole fretboard!`,

            piano: `Month one complete! You've learned three major scales and their inversions. That's a huge accomplishment! 🌟

This week we're focusing on how those scales and chords CONNECT. The C-G-D progression (called I-IV-V in music theory) is everywhere in music. Once you can play it smoothly, you'll recognize it in songs all the time.

Here's the exciting part: this PATTERN works in every key! In C Major, I-IV-V is C-G-D. In G Major, it's G-D-A. The relationship between the chords is always the same - only the starting note changes. This is a fundamental concept that will make learning new keys much faster.

Inversions really shine here. Instead of jumping your hand all over the keyboard, you can find an inversion of each chord that's close to where your hand already is. Smooth transitions = professional sound!

Try this: play C-G-D using only root position chords. Then try it using the "closest" inversion for each chord. Hear the difference? The second version sounds so much more polished!

You're starting to think like a real musician - not just playing notes, but understanding how music fits together.`
        },
        weeklyChallenge: {
            guitar: "Play A Minor Pentatonic, then E Minor Pentatonic. Play Am-E-Am progression. Improvise over an Am backing track.",
            piano: "Play C-G-D progression with a steady beat, using inversions. Then play the same progression starting on G (G-D-A). Show you understand the pattern!"
        },
        songs: {
            guitar: [
                {
                    title: "House of the Rising Sun",
                    artist: "The Animals",
                    chords: "Am - C - D - F - Am - E",
                    note: "Arpeggiate the chords - Am pentatonic works great!",
                    links: {
                        spotify: "https://open.spotify.com/track/4RthO18mNBuWxwlqbCNfmY",
                        video: "https://www.youtube.com/watch?v=4-43lLKaqBQ",
                        tutorial: "https://www.justinguitar.com/songs/the-animals-house-of-the-rising-sun-chords-tabs-guitar-lesson-bs-610",
                        tab: "https://tabs.ultimate-guitar.com/tab/the-animals/house-of-the-rising-sun-chords-763620"
                    }
                },
                {
                    title: "All Along the Watchtower",
                    artist: "Hendrix",
                    chords: "Am - G - F - G",
                    note: "Iconic Am progression - solo with Am pentatonic!",
                    links: {
                        spotify: "https://open.spotify.com/track/3ORrnBsrfr42j6FNJf4oks",
                        video: "https://www.youtube.com/watch?v=TLV4_xaYynY",
                        tutorial: "https://www.jonmaclennan.com/blog/all-along-the-watchtower-guitar-lesson",
                        tab: "https://tabs.ultimate-guitar.com/tab/jimi-hendrix/all-along-the-watchtower-chords-810679"
                    }
                }
            ],
            piano: [
                {
                    title: "Twist and Shout",
                    artist: "The Beatles",
                    chords: "D - G - A - G",
                    note: "Classic I-IV-V",
                    links: {
                        spotify: "https://open.spotify.com/track/4Ssh9E40qK3NYz3y89NqjD",
                        video: "https://www.youtube.com/watch?v=Lu4KXBdW5bE",
                        tutorial: "https://www.onlinepianist.com/virtual-piano/piano-songs/the-beatles/twist-and-shout",
                        sheet: "https://musescore.com/song/twist_and_shout-1657476"
                    }
                },
                {
                    title: "La Bamba",
                    artist: "Ritchie Valens",
                    chords: "C - F - G",
                    note: "I-IV-V in C!",
                    links: {
                        spotify: "https://open.spotify.com/track/1OBzlFPbLq0zqBbAP0v7jT",
                        video: "https://www.youtube.com/watch?v=Jp6j5HJ-Cok",
                        tutorial: "https://www.onlinepianist.com/virtual-piano/piano-songs/ritchie-valens/la-bamba",
                        sheet: "https://musescore.com/song/la_bamba-1657527"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "A Minor Pentatonic (Open Position)",
                tokens: 15,
                difficulty: 1,
                tip: "Same shape as Em pentatonic, starts on open A string. Am pentatonic relates to C Major - they're relatives!",
                pattern: "Pentatonic Box 1"
            },
            chords: [
                {
                    name: "A Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "A Shape",
                    tip: "All three fingers on the same fret - keep them compact!"
                },
                {
                    name: "E Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "E Shape",
                    tip: "The foundation chord shape. This shape becomes a barre chord next month!"
                }
            ]
        },
        piano: {
            scale: {
                name: "C-G-D Chord Transitions",
                tokens: 15,
                difficulty: 1,
                tip: "The I-IV-V progression is the foundation of most popular music. Learn to hear it!",
                speedGoal: 70
            },
            chords: [
                { name: "C-G-D Progression (Using Inversions)", tokens: 10, difficulty: 1, tip: "Use inversions to minimize hand movement between chords." }
            ]
        }
    },
    // ===== MONTH 2: Moveable Patterns =====
    {
        week: 5,
        title: "Moveable Major Scale - E Shape",
        description: "Guitar: THE pattern - play any major scale anywhere! Piano: A Minor",
        weekNotes: {
            guitar: `Welcome to Month 2! This is where guitar gets REALLY exciting. 🚀

Remember how I said the shapes you learn can move around the neck? This week, you're going to experience that firsthand. The "E-Shape" major scale pattern you're learning is MOVEABLE - slide it to any fret and you're playing a different key!

Here's the magic:
- Pattern at fret 3 = G Major
- Pattern at fret 5 = A Major
- Pattern at fret 7 = B Major
- Pattern at fret 8 = C Major

ONE shape, EVERY key! This is the guitar's secret weapon. Piano players need to learn different fingerings for each key. You just... slide.

You're also learning your first BARRE CHORD this week. The E-shape barre chord uses the same principle - it's the E Major shape you already know, but with your index finger barring across all strings. Yes, it's hard at first. Yes, your hand will get tired. But stick with it - barre chords are the gateway to playing ANY chord ANYWHERE on the neck.

This week might feel challenging, but you're leveling up big time. Every guitarist remembers when barre chords "clicked" for them. Your moment is coming!`,

            piano: `Month 2 begins with something beautiful: minor scales! 🎭

A Minor is special - it's C Major's "relative minor." They share the exact same notes, just starting from different places. Play C Major, then play A Minor... same white keys! But the mood is completely different. A Minor sounds sad, mysterious, emotional.

This relationship between major and minor keys is one of the most important concepts in music. Songs often switch between them for emotional contrast - bright and happy, then dark and moody.

Why learn A Minor now? Because you already know C Major so well! Since they share the same notes, your fingers already know where to go. The difference is just where you start and which note feels like "home."

The Am-F-C-G progression you're practicing is incredibly common in pop music. Listen to songs by Adele, Ed Sheeran, or countless others - you'll hear this progression everywhere. Now YOU can play it!

Your ear is getting more sophisticated. You're not just playing notes anymore - you're understanding how music creates emotions.`
        },
        weeklyChallenge: {
            guitar: "Play the E-shape major scale at fret 3 (G), fret 5 (A), and fret 7 (B). Play barre chord + scale in each position.",
            piano: "Play A Minor and C Major scales back-to-back. Play Am-F-C-G progression using inversions. Show the connection between relative major/minor."
        },
        songs: {
            guitar: [
                {
                    title: "Back in Black",
                    artist: "AC/DC",
                    chords: "E - D - A (power chords)",
                    note: "Use the E-shape pattern in A! Classic riff.",
                    links: {
                        spotify: "https://open.spotify.com/track/08mG3Y1vljYA6bvDt4Wqkj",
                        video: "https://www.youtube.com/watch?v=pAgnJDJN4VA",
                        tutorial: "https://www.justinguitar.com/songs/ac-dc-back-in-black-chords-tabs-guitar-lesson-sb-327",
                        tab: "https://tabs.ultimate-guitar.com/tab/acdc/back-in-black-tabs-212065"
                    }
                },
                {
                    title: "Highway to Hell",
                    artist: "AC/DC",
                    chords: "A - D - G",
                    note: "Angus Young style! A major position.",
                    links: {
                        spotify: "https://open.spotify.com/track/2zYzyRzz6pRmhPzyfMEC8s",
                        video: "https://www.youtube.com/watch?v=l482T0yNkeo",
                        tutorial: "https://www.justinguitar.com/songs/ac-dc-highway-to-hell-chords-tabs-guitar-lesson-sb-322",
                        tab: "https://tabs.ultimate-guitar.com/tab/acdc/highway-to-hell-chords-139966"
                    }
                }
            ],
            piano: [
                {
                    title: "Still D.R.E.",
                    artist: "Dr. Dre",
                    chords: "Am - F - C - G",
                    note: "That famous piano riff!",
                    links: {
                        spotify: "https://open.spotify.com/track/503OTo2dSqe7qk76rgsbep",
                        video: "https://www.youtube.com/watch?v=_CL6n0FJZpk",
                        tutorial: "https://www.skoove.com/blog/how-to-play-still-dre-on-piano/",
                        sheet: "https://musescore.com/tuvijah/scores/966901"
                    }
                },
                {
                    title: "I Just Called to Say I Love You",
                    artist: "Stevie Wonder",
                    chords: "Am - G - C",
                    note: "Sweet melody",
                    links: {
                        spotify: "https://open.spotify.com/track/3Qp66BnUD0k9O7fXi4p4yC",
                        video: "https://www.youtube.com/watch?v=1bGOgY1CmiU",
                        tutorial: "https://www.onlinepianist.com/piano-songs/stevie-wonder/i-just-called-to-say-i-love-you",
                        sheet: "https://musescore.com/user/1842796/scores/7809446"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Major Scale Pattern 1 (E-Shape)",
                tokens: 15,
                difficulty: 2,
                tip: "Root on 6th string. At fret 3 = G Major, fret 5 = A Major, fret 7 = B Major. ONE pattern, ALL keys!",
                pattern: "Position 1 - Moveable"
            },
            chords: [
                {
                    name: "E-Shape Barre (G at 3rd fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "E Shape",
                    tip: "THE most important barre chord. Index finger bars all strings, other fingers form E shape.",
                    isBarre: true,
                    barreInfo: "Keep index finger straight and roll slightly onto its side. Thumb behind the neck!"
                },
                {
                    name: "E-Shape Barre (A at 5th fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "E Shape",
                    tip: "Same shape, different fret = different key. This is the power of moveable patterns!",
                    isBarre: true,
                    barreInfo: "Same technique as G barre, just moved up 2 frets."
                }
            ]
        },
        piano: {
            scale: {
                name: "A Minor Scale (Natural)",
                tokens: 15,
                difficulty: 1,
                tip: "Same notes as C Major! Just start on A. This is the relative minor.",
                speedGoal: 80
            },
            chords: [
                { name: "A Minor (Root Position)", tokens: 5, difficulty: 1, tip: "A-C-E. Same white keys as C Major, different starting note." },
                { name: "A Minor (1st Inversion)", tokens: 8, difficulty: 1, tip: "C-E-A. Very useful for smooth progressions." },
                { name: "A Minor (2nd Inversion)", tokens: 8, difficulty: 1, tip: "E-A-C. Great voice leading to F or G." }
            ]
        }
    },
    {
        week: 6,
        title: "Moveable Pentatonic - Box 1 Anywhere",
        description: "Guitar: Take your pentatonic anywhere on the neck. Piano: E Minor",
        weekNotes: {
            guitar: `Remember the E Minor Pentatonic from week 2? Time to set it FREE! 🔓

The open position Em Pentatonic was great for learning, but here's the thing - it was just Box 1 played at the nut. This week, you're learning to play that SAME box shape anywhere on the neck!

Here's how it works:
- Box 1 at fret 5 = A Minor Pentatonic
- Box 1 at fret 7 = B Minor Pentatonic
- Box 1 at fret 3 = G Minor Pentatonic

You already KNOW this shape from open position. Now you're just moving it up the neck. The fingering changes slightly (since there's no open strings), but the PATTERN is identical.

This is huge for your soloing. Someone says "jam in A minor"? You know exactly where to go - 5th fret, Box 1. "Play something in C minor"? 8th fret, same shape!

Combined with last week's moveable major scale, you now have two powerful patterns that work in ANY key. You're not limited to open position anymore - the ENTIRE fretboard is opening up to you!

The Em barre chord uses a similar idea. It's based on the Em open chord shape, moved up the neck. More moveable power!`,

            piano: `E Minor is next in your minor key collection! 🎶

Like A Minor relates to C Major, E Minor relates to G Major - same notes, different starting point. You're seeing the pattern now, right? Every major key has a relative minor that shares its notes.

E Minor has one sharp (F#), just like G Major. Your fingers already know where that F# is from playing G Major. See how everything connects? Each new key builds on what you already know.

The mood of E Minor is particularly beautiful - it's melancholy but not too dark. A lot of emotional ballads and reflective songs use E Minor. When you play in this key, let yourself feel that emotion!

You're now comfortable with FIVE different scales (C, G, D Major, A Minor, E Minor). That's a serious repertoire! And because you understand the relative major/minor relationship, you're really learning TEN scales' worth of knowledge - the connections between them matter as much as the scales themselves.

Keep working those inversions. The smoother your chord transitions become, the more professional your playing will sound.`
        },
        weeklyChallenge: {
            guitar: "Play Minor Pentatonic Box 1 at fret 5 (Am), fret 7 (Bm), fret 10 (Dm). Improvise over backing tracks in each key.",
            piano: "Play E Minor scale at 70 BPM, then G Major. Play Em-Am-D-G progression with smooth inversions. Recap: Play any 2 scales from weeks 1-5."
        },
        songs: {
            guitar: [
                {
                    title: "Purple Haze",
                    artist: "Hendrix",
                    chords: "E - G - A",
                    note: "Use E minor pentatonic for those classic Hendrix licks!",
                    links: {
                        spotify: "https://open.spotify.com/track/0wJoRiX5K5BxlqZTolB2LD",
                        video: "https://www.youtube.com/watch?v=WGoDaYjdfSg",
                        tutorial: "https://www.justinguitar.com/songs/jimi-hendrix-purple-haze-chords-tabs-guitar-lesson-st-331",
                        tab: "https://tabs.ultimate-guitar.com/tab/jimi-hendrix/purple-haze-tabs-11715"
                    }
                },
                {
                    title: "Sunshine of Your Love",
                    artist: "Cream",
                    chords: "D - C - D",
                    note: "Classic pentatonic riff - move Box 1 around!",
                    links: {
                        spotify: "https://open.spotify.com/track/3d9qIdUq5Ac4RZZmMOGN8n",
                        video: "https://www.youtube.com/watch?v=IDZqmF3zS04",
                        tutorial: "https://www.justinguitar.com/songs/cream-sunshine-of-your-love",
                        tab: "https://tabs.ultimate-guitar.com/tab/cream/sunshine-of-your-love-tabs-18614"
                    }
                }
            ],
            piano: [
                {
                    title: "Piano Man",
                    artist: "Billy Joel",
                    chords: "C - G - F - Em",
                    note: "Learn that iconic intro",
                    links: {
                        spotify: "https://open.spotify.com/track/70C4NyhjD5OZUMzvWZ3njJ",
                        video: "https://www.youtube.com/watch?v=gxEPV4kolz0",
                        tutorial: "https://sheetmusicboss.com/2017/04/18/billy-joel-piano-man/",
                        sheet: "https://musescore.com/song/piano_man-1657555"
                    }
                },
                {
                    title: "Imagine",
                    artist: "John Lennon",
                    chords: "C - F - C - F - Am",
                    note: "Simple but powerful",
                    links: {
                        spotify: "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9",
                        video: "https://www.youtube.com/watch?v=YkgkThdzX-8",
                        tutorial: "https://www.pianote.com/blog/how-to-play-imagine-on-piano/",
                        sheet: "https://musescore.com/user/6662591/scores/4369656"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Minor Pentatonic Box 1 (Moveable)",
                tokens: 15,
                difficulty: 2,
                tip: "Root on 6th string. At fret 5 = Am, fret 7 = Bm, fret 8 = Cm. This is the MONEY scale for soloing!",
                pattern: "Pentatonic Box 1 - Moveable"
            },
            chords: [
                {
                    name: "E Minor Shape Barre (Am at 5th fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "E Shape (Minor)",
                    tip: "Same as E major barre but lift your middle finger. Minor chords are sad/dark sounding.",
                    isBarre: true,
                    barreInfo: "Index bars all strings at fret 5, ring and pinky on frets 7."
                }
            ]
        },
        piano: {
            scale: {
                name: "E Minor Scale (Natural)",
                tokens: 15,
                difficulty: 1,
                tip: "Relative minor of G Major - same notes! F# is the only black key.",
                speedGoal: 80
            },
            chords: [
                { name: "E Minor (Root Position)", tokens: 5, difficulty: 1, tip: "E-G-B. The saddest-sounding chord in open position." },
                { name: "E Minor (1st Inversion)", tokens: 8, difficulty: 1, tip: "G-B-E. Notice how the bass note changes the feel." },
                { name: "E Minor (2nd Inversion)", tokens: 8, difficulty: 1, tip: "B-E-G. Great for transitions." }
            ]
        }
    },
    {
        week: 7,
        title: "The A-Shape Pattern - Second Position",
        description: "Guitar: Root on 5th string - your second home. Piano: A Major",
        weekNotes: {
            guitar: `Time for your SECOND moveable position! You're really building your fretboard knowledge now. 🗺️

The E-shape pattern has its root on the 6th string. The A-shape pattern has its root on the 5th string. Why learn both? Because now you have OPTIONS wherever you are on the neck!

Here's the cool part: these positions CONNECT. Play E-shape G Major at fret 3, then slide your hand up and play A-shape G Major at fret 10. Same key, different location! And the patterns share some common notes in between.

Think of it like this: the fretboard is a map, and you're learning different neighborhoods. E-shape is one neighborhood, A-shape is another. As you learn more positions, you'll know the whole city!

The A-shape barre chord is also crucial. Some guitarists actually find it easier than E-shape because you don't have to bar all 6 strings - just 5. It gives you a different voicing of the same chord, which means more tonal options.

This week is challenging but SO rewarding. You're halfway through the program, and your understanding of the guitar is transforming from "player" to "musician." Keep pushing!`,

            piano: `A Major introduces THREE sharps - F#, C#, and G#. But don't let that intimidate you! 💪

Here's the encouraging news: your fingers are now adaptable enough to handle new patterns. The basic thumb-under technique is the same - the black keys just change WHERE your fingers land.

Actually, many pianists find keys with some black keys EASIER than all-white keys! The black keys are raised, which gives your fingers helpful landmarks. Try it - you might be surprised!

A Major has a bright, confident sound. It's a popular key for uplifting songs and energetic pieces. When you play A-D-E (the I-IV-V in A Major), you'll hear that "classic rock" progression that powers countless songs.

Take a moment to appreciate how far you've come: you now play SEVEN different scales! C, G, D, A Major plus A, E Minor. You can play songs in all of these keys, use inversions smoothly, and understand how major and minor relate.

The metronome is still your friend. Speed will come naturally with consistent practice. Focus on clean, even notes - the speed will follow!`
        },
        weeklyChallenge: {
            guitar: "Play A-shape major scale at fret 3 (C), fret 5 (D). Play both E-shape and A-shape barres for G Major. Connect them!",
            piano: "Play A Major at 70 BPM. Play A-D-E-A progression. Recap: Play C, G, and D Major scales from memory, plus Am and Em."
        },
        songs: {
            guitar: [
                {
                    title: "Rockin' in the Free World",
                    artist: "Neil Young",
                    chords: "Em - D - C",
                    note: "Powerful anthem - practice your shapes!",
                    links: {
                        spotify: "https://open.spotify.com/track/5YeTz1MexmO7hV1QCxDBjH",
                        video: "https://www.youtube.com/watch?v=TnAgc1kgvLc",
                        tutorial: "https://www.justinguitar.com/songs/neil-young-rockin-in-the-free-world",
                        tab: "https://tabs.ultimate-guitar.com/tab/neil-young/rockin-in-the-free-world-chords-61802"
                    }
                },
                {
                    title: "Let It Be",
                    artist: "The Beatles",
                    chords: "C - G - Am - F",
                    note: "Timeless classic - use both positions!",
                    links: {
                        spotify: "https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48",
                        video: "https://www.youtube.com/watch?v=QDYfEBY9NM4",
                        tutorial: "https://www.theguitarlesson.com/guitar-lessons/let-it-be-guitar-lesson-beatles/",
                        tab: "https://tabs.ultimate-guitar.com/tab/the-beatles/let-it-be-chords-17427"
                    }
                }
            ],
            piano: [
                {
                    title: "Tiny Dancer",
                    artist: "Elton John",
                    chords: "C - F - G - Am",
                    note: "Beautiful ballad",
                    links: {
                        spotify: "https://open.spotify.com/track/2TVxnKdb3tqe1nhQWwwZCO",
                        video: "https://www.youtube.com/watch?v=yYcyacLRPNs",
                        tutorial: "https://sheetmusicboss.com/2021/05/07/elton-john-tiny-dancer-piano-tutorial/",
                        sheet: "https://musescore.com/user/7788266/scores/2925226"
                    }
                },
                {
                    title: "Lean on Me",
                    artist: "Bill Withers",
                    chords: "C - F - C - G",
                    note: "Everyone knows this one!",
                    links: {
                        spotify: "https://open.spotify.com/track/3M8o5wdDGW9FvLfSMnrQxe",
                        video: "https://www.youtube.com/watch?v=fOZ-MySzAac",
                        tutorial: "https://www.pianowithnate.com/All-Songs/lean-on-me",
                        sheet: "https://musescore.com/user/2966376/scores/4000806"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Major Scale Pattern 2 (A-Shape)",
                tokens: 15,
                difficulty: 2,
                tip: "Root on 5th string. At fret 3 = C Major, fret 5 = D Major. This connects to Pattern 1 above it!",
                pattern: "Position 2 - Moveable"
            },
            chords: [
                {
                    name: "A-Shape Barre (C at 3rd fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "A Shape",
                    tip: "Bar with index, form A shape with other fingers. Mute the low E string.",
                    isBarre: true,
                    barreInfo: "Index bars strings 1-5 at fret 3. Ring finger bars strings 2-4 at fret 5."
                },
                {
                    name: "A-Shape Barre (D at 5th fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "A Shape",
                    tip: "Same A-shape, moved up. Now you have TWO ways to play any major chord!",
                    isBarre: true,
                    barreInfo: "Same shape at fret 5. Compare with E-shape D at fret 10."
                }
            ]
        },
        piano: {
            scale: {
                name: "A Major Scale",
                tokens: 15,
                difficulty: 1,
                tip: "Three sharps: C#, F#, G#. The black keys help guide your fingers!",
                speedGoal: 80
            },
            chords: [
                { name: "A Major (Root Position)", tokens: 5, difficulty: 1, tip: "A-C#-E. Bright, happy sound." },
                { name: "A Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "C#-E-A. Black key in the bass." },
                { name: "A Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "E-A-C#. Great for smooth transitions." }
            ]
        }
    },
    {
        week: 8,
        title: "Connecting Position 1 & 2",
        description: "Guitar: Link the patterns - see the whole neck! Piano: E Major",
        weekNotes: {
            guitar: `This is where it all comes together! You're about to have a MAJOR breakthrough. 🎯

You know two scale positions now. But here's what makes great guitarists great: they don't see isolated boxes - they see how the positions CONNECT. The notes at the edge of Position 1 overlap with the notes at the edge of Position 2!

Play Position 1 (E-shape) in G Major. Now play Position 2 (A-shape) for the same key, higher up. Notice the shared notes? Those are your "bridges" - points where you can smoothly transition from one position to another.

This is called "connecting positions," and it's how pro guitarists play fluid solos that travel all over the neck. Instead of being stuck in one box, you can flow between them, creating longer musical phrases and hitting notes in different registers.

Practice sliding between positions. Start a phrase in Position 1, slide up to a shared note, and continue in Position 2. It feels awkward at first, but soon it'll be second nature.

You're two-thirds of the way through! You've gone from beginner to someone who understands how the guitar fretboard really works. That's a huge transformation!`,

            piano: `E Major brings FOUR sharps - F#, G#, C#, and D#. You're handling some serious black-key territory now! 🏆

Don't worry - your technique is ready for this. The thumb-under motion, the finger independence, the hand position - all the fundamentals you've built are paying off. E Major is just applying those skills to a new pattern.

Notice how E Major shares three sharps with A Major (F#, C#, G#). Each new scale connects to what you already know. You're not starting from scratch - you're building on a strong foundation.

The E-A-B progression is the I-IV-V in E Major. You've played I-IV-V in so many keys now (C, G, D, A, and now E) that you really understand how this progression FEELS. That's musical intuition developing!

Let's take stock: you can now play EIGHT different scales - five major (C, G, D, A, E) and two minor (Am, Em). You understand inversions, progressions, and how keys relate to each other. You're not just playing piano - you're understanding MUSIC.

Month 2 is almost complete. You should feel really proud of how far you've come!`
        },
        weeklyChallenge: {
            guitar: "Play G Major scale using BOTH Position 1 and Position 2, connecting them smoothly. Slide between positions!",
            piano: "Play E Major scale at 70 BPM. Play E-A-B-E progression. Recap: Play all Major scales learned so far (C, G, D, A, E) - can you do them without looking?"
        },
        songs: {
            guitar: [
                {
                    title: "Twist and Shout",
                    artist: "The Beatles",
                    chords: "D - G - A",
                    note: "I-IV-V in D - try playing it high AND low on the neck!",
                    links: {
                        spotify: "https://open.spotify.com/track/4Ssh9E40qK3NYz3y89NqjD",
                        video: "https://www.youtube.com/watch?v=Lu4KXBdW5bE",
                        tutorial: "https://www.justinguitar.com/songs/the-beatles-twist-and-shout-chords-tabs-guitar-lesson-bs-207",
                        tab: "https://tabs.ultimate-guitar.com/tab/the-beatles/twist-and-shout-chords-489173"
                    }
                },
                {
                    title: "Wild Thing",
                    artist: "The Troggs",
                    chords: "A - D - E",
                    note: "Simple I-IV-V rock - use both barre shapes!",
                    links: {
                        spotify: "https://open.spotify.com/track/4mSXQDjxm9bLTqFOl3qnuR",
                        video: "https://www.youtube.com/watch?v=gSWInYFVksg",
                        tutorial: "https://www.justinguitar.com/songs/the-troggs-wild-thing-chords-tabs-guitar-lesson-bs-210",
                        tab: "https://tabs.ultimate-guitar.com/tab/the-troggs/wild-thing-chords-1056155"
                    }
                }
            ],
            piano: [
                {
                    title: "Your Song",
                    artist: "Elton John",
                    chords: "Eb - Ab - Bb",
                    note: "Romantic piano ballad",
                    links: {
                        spotify: "https://open.spotify.com/track/4bRipXp3KZy8xtNMIqE2Ra",
                        video: "https://www.youtube.com/watch?v=GlPlfCy1urI",
                        tutorial: "https://www.noviscore.com/piano-sheet-music-your-song-elton-john",
                        sheet: "https://musescore.com/user/736516/scores/4898783"
                    }
                },
                {
                    title: "She's Got a Way",
                    artist: "Billy Joel",
                    chords: "G - D - C - Em",
                    note: "Sweet love song",
                    links: {
                        spotify: "https://open.spotify.com/track/4YCHiR7pZBmdMMq3goiTZb",
                        video: "https://www.youtube.com/watch?v=X_-CRwTgiNM",
                        tutorial: "https://www.onlinepianist.com/piano-songs/billy-joel/she-s-got-a-way",
                        sheet: "https://musescore.com/song/she_s_got_a_way-1657558"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Connecting Positions 1 & 2",
                tokens: 20,
                difficulty: 2,
                tip: "Position 1 (E-shape) sits ABOVE Position 2 (A-shape). In G: Pos 1 is at fret 3, Pos 2 is at fret 3 but on different strings. They OVERLAP!",
                pattern: "Position Connection"
            },
            chords: [
                {
                    name: "G Major - Two Ways",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "E & A Shapes",
                    tip: "E-shape G at fret 3, A-shape G at fret 10. Same chord, different neck positions!",
                    isBarre: true
                }
            ]
        },
        piano: {
            scale: {
                name: "E Major Scale",
                tokens: 15,
                difficulty: 2,
                tip: "Four sharps: F#, G#, C#, D#. Lots of black keys but standard fingering still works!",
                speedGoal: 80
            },
            chords: [
                { name: "E Major (Root Position)", tokens: 5, difficulty: 1, tip: "E-G#-B. Nice resonant sound." },
                { name: "E Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "G#-B-E. Two black keys in a row." },
                { name: "E Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "B-E-G#. Great for E-A-B progressions." }
            ]
        }
    },
    // ===== MONTH 3: Expanding & Applying =====
    {
        week: 9,
        title: "Pentatonic Boxes 1 & 2 Connected",
        description: "Guitar: Flow across the neck with pentatonics. Piano: F Major",
        weekNotes: {
            guitar: `Welcome to the final month! Time to supercharge your soloing. 🎸⚡

You learned to connect major scale positions. Now let's do the same with pentatonics! Box 1 and Box 2 of the pentatonic scale connect just like the major scale positions did.

Why is this so valuable? Because when you improvise, you want FREEDOM. Being stuck in one box limits your expression. But when you can flow between boxes, you can:
- Hit higher notes for intensity
- Drop down low for power
- Create longer, more interesting phrases
- Express yourself without boundaries

The connection point between Box 1 and Box 2 is your gateway. Practice going back and forth until it feels natural. Then try improvising over a backing track while moving between both boxes.

The F barre chord you're learning uses the E-shape at fret 1 - it's tricky because you're close to the nut where the strings are harder to press. But it's a SUPER important chord that's used constantly. Master it now and you'll thank yourself later!

You're in the home stretch. These final weeks are about taking everything you've learned and turning it into real musical freedom.`,

            piano: `F Major is special - it's the first scale with a FLAT (Bb) instead of sharps! 🎹

This is exciting because it expands your understanding. Music doesn't just have sharps - flats are equally important. The fingering for F Major is slightly different because of where Bb falls, but your adaptable fingers can handle it!

Here's an interesting pattern: C Major has no sharps/flats. Going around the "circle" in one direction adds sharps (G, D, A, E). Going the other direction adds flats (F, Bb, Eb). You're exploring both sides now!

The I-IV-V in F Major is F-Bb-C. That Bb chord might be new - it's B-flat, D, F. Take your time with it. Like all new chords, it will feel natural after some practice.

You're building toward something amazing: understanding music theory in a practical way. When you see a new piece of music, you'll understand WHY certain chords and scales are used. That's the difference between someone who just plays notes and a real musician.

Three weeks to go. Keep up the fantastic work!`
        },
        weeklyChallenge: {
            guitar: "Play A Minor Pentatonic using Boxes 1 and 2 connected. Improvise a solo that moves between both boxes smoothly.",
            piano: "Play F Major scale at 72 BPM - watch that Bb! Play F-Bb-C-F progression. Recap: Play C, G, D, A, E Major scales and their relative minors."
        },
        songs: {
            guitar: [
                {
                    title: "Hey Jude",
                    artist: "The Beatles",
                    chords: "F - C - Bb - F",
                    note: "That epic outro - great for improv!",
                    links: {
                        spotify: "https://open.spotify.com/track/0aym2LBJBk9DAYuHHutrIl",
                        video: "https://www.youtube.com/watch?v=A_MjCqQoLLA",
                        tutorial: "https://www.jonmaclennan.com/blog/hey-jude-guitar-lesson",
                        tab: "https://tabs.ultimate-guitar.com/tab/the-beatles/hey-jude-chords-17275"
                    }
                },
                {
                    title: "Band on the Run",
                    artist: "Wings",
                    chords: "Am - G - F - G",
                    note: "Paul's masterpiece - use Am pentatonic!",
                    links: {
                        spotify: "https://open.spotify.com/track/3KRGaK9zrOYbfqIWrzJfQr",
                        video: "https://www.youtube.com/watch?v=FbwN8D1dFaE",
                        tutorial: "https://www.justinguitar.com/songs/wings-band-on-the-run",
                        tab: "https://tabs.ultimate-guitar.com/tab/paul-mccartney-wings/band-on-the-run-chords-20424"
                    }
                }
            ],
            piano: [
                {
                    title: "Don't Let the Sun Go Down on Me",
                    artist: "Elton John",
                    chords: "C - F - G - Am",
                    note: "Powerful ballad",
                    links: {
                        spotify: "https://open.spotify.com/track/4rPgCBV2JHrLrGFXmbYxi6",
                        video: "https://www.youtube.com/watch?v=RsKqMNDoR4o",
                        tutorial: "https://sheetmusicboss.com/elton-john-dont-let-the-sun-go-down-on-me/",
                        sheet: "https://musescore.com/song/don_t_let_the_sun_go_down_on_me-1657815"
                    }
                },
                {
                    title: "You've Got a Friend in Me",
                    artist: "Randy Newman",
                    chords: "C - G - F - C",
                    note: "From Toy Story!",
                    links: {
                        spotify: "https://open.spotify.com/track/4puDCFhn2Ctg1tUNwxFj6M",
                        video: "https://www.youtube.com/watch?v=Zy4uiiy0qgA",
                        tutorial: "https://www.onlinepianist.com/piano-songs/randy-newman/you-ve-got-a-friend-in-me",
                        sheet: "https://musescore.com/song/you_ve_got_a_friend_in_me-1657577"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Pentatonic Boxes 1 & 2 Connected",
                tokens: 20,
                difficulty: 2,
                tip: "Box 1 root is on 6th string, Box 2 root is on 5th string. They share notes where they meet - find the overlap!",
                pattern: "Pentatonic Connection"
            },
            chords: [
                {
                    name: "F Major (Barre - 1st fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "E Shape",
                    tip: "The infamous F chord! It's just an E-shape barre at fret 1. You've got this!",
                    isBarre: true,
                    barreInfo: "Index bars all strings at fret 1. This is the hardest fret to barre - if you can do F, you can do any barre!"
                }
            ]
        },
        piano: {
            scale: {
                name: "F Major Scale",
                tokens: 15,
                difficulty: 2,
                tip: "One flat: Bb. SPECIAL fingering - RH uses finger 4 on Bb, then thumb crosses to C.",
                speedGoal: 80
            },
            chords: [
                { name: "F Major (Root Position)", tokens: 5, difficulty: 1, tip: "F-A-C. Often follows C Major." },
                { name: "F Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "A-C-F. Very useful inversion." },
                { name: "F Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "C-F-A. Shares a note with C Major!" }
            ]
        }
    },
    {
        week: 10,
        title: "Minor Keys Mastery",
        description: "Guitar: Natural minor scales in multiple positions. Piano: D Minor",
        weekNotes: {
            guitar: `Time to master the dark side of music - minor keys! 🌙

You've played minor pentatonics for soloing, but the full natural minor scale has even MORE notes to work with. It gives you additional colors for expression - more options for creating melody and emotion.

Here's the beautiful thing: you already know these scales! A Minor is the same notes as C Major. E Minor is the same as G Major. D Minor is the same as F Major. The relationship works both ways!

But there's a difference in FEELING. Start on A and emphasize A as your home note = minor (sad, dark, emotional). Start on C = major (happy, bright). Same notes, completely different mood. This is one of music's most powerful tricks.

The minor barre chords follow the same logic as major barres - they're just moveable versions of the open minor shapes you already know. Am barre is the E-minor shape moved up the neck.

This week, really FEEL the difference between major and minor. Play C Major, then A Minor. Same notes, different worlds! Understanding this emotionally (not just technically) is what separates good players from great ones.`,

            piano: `D Minor is the relative minor of F Major - same notes (including Bb), different starting point! 🎹

You're now seeing the complete picture: every major key has a relative minor. The "sad" and "happy" versions of each key group. This is fundamental music theory, and you're learning it through playing, not just reading about it!

D Minor has a particularly beautiful, melancholy quality. Some of the most emotional classical pieces are in D Minor. When you play in this key, let yourself feel that emotion.

The Dm-Gm-C-F progression is very common in pop and R&B music. It creates a sophisticated, emotional sound that's different from the brighter major-key progressions you've been playing.

By the end of this week, you'll know:
- Six major scales (C, G, D, A, E, F)
- Three minor scales (Am, Em, Dm)
- Inversions for all of them
- How major and minor keys relate

That's a LOT of musical knowledge. You can now play in most common keys, understand how songs work, and choose the right chords for any situation. You're becoming a real musician!`
        },
        weeklyChallenge: {
            guitar: "Play Am, Em, and Dm natural minor scales. For each, also play the relative major. Show you understand the connection!",
            piano: "Play D Minor scale at 72 BPM. Play Dm-Gm-C-F progression. Recap: Play all minor scales (Am, Em, Dm) and their relative majors back-to-back."
        },
        songs: {
            guitar: [
                {
                    title: "Stairway to Heaven (Intro)",
                    artist: "Led Zeppelin",
                    chords: "Am - G/B - C - D - Fmaj7 - Am",
                    note: "Legendary intro - Am minor all the way!",
                    links: {
                        spotify: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc",
                        video: "https://www.youtube.com/watch?v=QkF3oxziUI4",
                        tutorial: "https://www.justinguitar.com/songs/led-zeppelin-stairway-to-heaven-1-6-chords-tabs-guitar-lesson-st-314",
                        tab: "https://tabs.ultimate-guitar.com/tab/led-zeppelin/stairway-to-heaven-tabs-9488"
                    }
                },
                {
                    title: "Karma Police",
                    artist: "Radiohead",
                    chords: "Am - D - Em - G",
                    note: "Haunting progression - practice minor scales!",
                    links: {
                        spotify: "https://open.spotify.com/track/63OQupATfueTdZMWTxW03A",
                        video: "https://www.youtube.com/watch?v=1uYWYWPc9HU",
                        tutorial: "https://www.justinguitar.com/songs/radiohead-karma-police",
                        tab: "https://tabs.ultimate-guitar.com/tab/radiohead/karma-police-chords-48534"
                    }
                }
            ],
            piano: [
                {
                    title: "Superstition",
                    artist: "Stevie Wonder",
                    chords: "Em - Bm",
                    note: "That funky clavinet!",
                    links: {
                        spotify: "https://open.spotify.com/track/1h2xVEoJORqrg71HocgqXd",
                        video: "https://www.youtube.com/watch?v=0CFuCYNx-1g",
                        tutorial: "https://www.onlinepianist.com/piano-songs/stevie-wonder/superstition",
                        sheet: "https://musescore.com/song/superstition-1657987"
                    }
                },
                {
                    title: "I Am a Rock",
                    artist: "Simon & Garfunkel",
                    chords: "C - Dm - F - G",
                    note: "60s folk rock",
                    links: {
                        spotify: "https://open.spotify.com/track/4jURhOYSWYXgHVyK8tOonf",
                        video: "https://www.youtube.com/watch?v=JKlSVNxLB-A",
                        tutorial: "https://www.onlinepianist.com/piano-songs/simon-garfunkel/i-am-a-rock",
                        sheet: "https://musescore.com/song/i_am_a_rock-1657566"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Natural Minor Scales (Am, Em, Dm)",
                tokens: 20,
                difficulty: 2,
                tip: "Minor scales have a darker sound. Am is relative to C Major, Em to G Major, Dm to F Major. Same notes, different feel!",
                pattern: "Natural Minor Patterns"
            },
            chords: [
                {
                    name: "D Minor (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "D Shape",
                    tip: "Similar to D Major but with F natural instead of F#. Sad, beautiful sound."
                },
                {
                    name: "A Minor Shape Barre (Dm at 5th fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "A Shape (Minor)",
                    tip: "A-minor shape moved up. Root on 5th string.",
                    isBarre: true
                }
            ]
        },
        piano: {
            scale: {
                name: "D Minor Scale (Natural)",
                tokens: 15,
                difficulty: 2,
                tip: "One flat: Bb. Relative minor of F Major. Standard fingering, watch the Bb!",
                speedGoal: 80
            },
            chords: [
                { name: "D Minor (Root Position)", tokens: 5, difficulty: 1, tip: "D-F-A. Beautiful, melancholy sound." },
                { name: "D Minor (1st Inversion)", tokens: 8, difficulty: 1, tip: "F-A-D. Smooth voice leading to G." },
                { name: "D Minor (2nd Inversion)", tokens: 8, difficulty: 1, tip: "A-D-F. Great for Dm-Am progressions." }
            ]
        }
    },
    {
        week: 11,
        title: "The Blues Scale",
        description: "Guitar: Add the blue note - instant attitude! Piano: Pentatonics",
        weekNotes: {
            guitar: `Time to add some ATTITUDE to your playing with the blues scale! 🎸🔥

The blues scale is the minor pentatonic with ONE extra note added - the "blue note" (b5). That's it! But that one note changes EVERYTHING. It adds tension, grit, and that classic "bluesy" sound.

Listen to any great blues or rock solo - Hendrix, Clapton, B.B. King, Stevie Ray Vaughan - they all use this scale constantly. It's the sound of rock and roll!

Here's the magic: the blue note creates tension that NEEDS to resolve. You play that note, and listeners feel a pull toward the next note. This creates emotion, drama, and interest in your playing.

The 7th chords (A7, E7) are the sound of blues. Instead of a happy major or sad minor, they're... groovy? Funky? They want to move. The 7th chord is what gives blues its swagger.

Try this: play a 12-bar blues progression with A7, D7, E7. Then solo over it using the blues scale. Bend some notes. Add vibrato. FEEL it. This is where technique meets emotion, and music becomes magic!

One more week after this. You've come so far!`,

            piano: `Pentatonic scales are like a cheat code for making beautiful music! ⭐

The pentatonic scale has only 5 notes (that's what "penta" means). Because some notes are removed, everything you play sounds good together - it's almost impossible to hit a "wrong" note!

C Major Pentatonic (C-D-E-G-A) is perfect for happy, bright improvisations. A Minor Pentatonic (A-C-D-E-G) - same notes, different order - is great for emotional, reflective playing.

This is why pentatonics are used in SO many songs across every genre - pop, rock, blues, jazz, classical. Those 5 notes just work together beautifully.

Try improvising! Put on a backing track in C Major (or A Minor) and just play with these 5 notes. Don't worry about being "right" - explore! This is where music becomes FUN and personal.

You're also learning the blues scale, which adds one "spicy" note to the pentatonic. That note creates tension and a bluesy feel. It's a small addition with a huge impact on the sound!

Almost there - one week to go! You've learned an incredible amount about music.`
        },
        weeklyChallenge: {
            guitar: "Play A Blues Scale. Improvise a 12-bar blues solo using the blues scale. Add bends and vibrato for expression!",
            piano: "Play C Major Pentatonic and A Minor Pentatonic. Improvise a melody using only pentatonic notes over a C-Am-F-G backing. Recap: Play 5 scales of Dad's choice."
        },
        songs: {
            guitar: [
                {
                    title: "The Thrill Is Gone",
                    artist: "B.B. King",
                    chords: "Bm - Em",
                    note: "Classic blues - use that blues scale!",
                    links: {
                        spotify: "https://open.spotify.com/track/2Yz9lDuLh0bCRIIf3TFHzZ",
                        video: "https://www.youtube.com/watch?v=4fk2prKnYnI",
                        tutorial: "https://www.justinguitar.com/songs/bb-king-the-thrill-is-gone",
                        tab: "https://tabs.ultimate-guitar.com/tab/bb-king/the-thrill-is-gone-tabs-321"
                    }
                },
                {
                    title: "Crossroads",
                    artist: "Cream",
                    chords: "A - D - E (Blues)",
                    note: "Clapton's blues masterclass!",
                    links: {
                        spotify: "https://open.spotify.com/track/6lm3zqmA9gEGYlAYdnSJuG",
                        video: "https://www.youtube.com/watch?v=PE9HvSdcaL4",
                        tutorial: "https://www.justinguitar.com/songs/cream-crossroads",
                        tab: "https://tabs.ultimate-guitar.com/tab/cream/crossroads-tabs-138115"
                    }
                }
            ],
            piano: [
                {
                    title: "Isn't She Lovely",
                    artist: "Stevie Wonder",
                    chords: "C#m - F# - B - E",
                    note: "Simplified: Am - D - G - C",
                    links: {
                        spotify: "https://open.spotify.com/track/01h424WG38dgY34vkI3Yd0",
                        video: "https://www.youtube.com/watch?v=b2WzocbSd2w",
                        tutorial: "https://www.onlinepianist.com/piano-songs/stevie-wonder/isn-t-she-lovely",
                        sheet: "https://musescore.com/song/isn_t_she_lovely-1657986"
                    }
                },
                {
                    title: "The Entertainer",
                    artist: "Scott Joplin",
                    chords: "C - F - G - C",
                    note: "Ragtime fun with pentatonics!",
                    links: {
                        spotify: "https://open.spotify.com/track/5WqEZrJzhpYj0AhLvDgIUf",
                        video: "https://www.youtube.com/watch?v=fPmruHc4S9Q",
                        tutorial: "https://www.pianote.com/blog/the-entertainer-piano-tutorial/",
                        sheet: "https://musescore.com/song/the_entertainer-1657547"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Blues Scale (A)",
                tokens: 15,
                difficulty: 2,
                tip: "It's the minor pentatonic PLUS one note - the 'blue note' (b5). This note adds tension and attitude!",
                pattern: "Blues Scale"
            },
            chords: [
                {
                    name: "A7 (Open)",
                    tokens: 5,
                    difficulty: 1,
                    tip: "The classic blues chord. That open G string gives it its distinctive sound."
                },
                {
                    name: "E7 (Open)",
                    tokens: 5,
                    difficulty: 1,
                    tip: "E7 to A7 is the heart of the blues! Listen for that dominant 7th sound."
                }
            ]
        },
        piano: {
            scale: {
                name: "C Major Pentatonic",
                tokens: 15,
                difficulty: 1,
                tip: "C-D-E-G-A - skip F and B. The gaps make this scale feel open and free. Great for improv!",
                speedGoal: 80
            },
            chords: [
                { name: "A Minor Pentatonic", tokens: 10, difficulty: 1, tip: "A-C-D-E-G - same notes as C Major pentatonic! Different starting point." }
            ]
        }
    },
    {
        week: 12,
        title: "Putting It All Together",
        description: "Guitar: Full neck freedom - know where you are in any key! Piano: 7th Chords & Jazz",
        weekNotes: {
            guitar: `THE FINAL WEEK! You've made it! 🏆🎸🎉

Take a moment to appreciate how far you've come. Twelve weeks ago, you were just starting out. Now look at you:

✅ You know TWO major scale positions and can connect them
✅ You know moveable pentatonic boxes and how to flow between them
✅ You understand the blues scale and can improvise with attitude
✅ You can play major and minor barre chords ANYWHERE on the neck
✅ You understand how major and minor keys relate
✅ You know enough to play THOUSANDS of songs!

This week is about putting it ALL together. The 12-bar blues is the ultimate test - it uses everything you've learned. Chords, scales, improvisation, moving around the neck.

But here's the real secret: this isn't the end. It's the BEGINNING. You now have the foundation to learn anything you want on guitar. Want to play metal? Jazz? Funk? Country? The skills you've built will take you there.

You've proven you can do hard things. You stuck with it when barre chords were tough. You practiced when it wasn't always fun. That discipline will serve you in everything you do in life.

I'm so proud of you. Now go play some music! 🎸🔥`,

            piano: `CONGRATULATIONS - YOU MADE IT TO WEEK 12! 🎹🌟🎉

What an incredible journey this has been! Let's celebrate everything you've accomplished:

✅ You play SIX major scales and THREE minor scales
✅ You understand inversions and use them for smooth transitions
✅ You know how major and minor keys relate (relatives)
✅ You can play the I-IV-V progression in multiple keys
✅ You've explored pentatonics and the blues scale
✅ You've built real independence between your hands

This week introduces 7th chords - the sound of jazz! The Cmaj7-Am7-Dm7-G7 progression is called a "jazz turnaround" and it's one of the most beautiful sounds in music. It's a taste of where your piano journey can go next!

But more importantly, you've proven something to yourself: you can set a big goal and achieve it. You can learn something challenging through consistent practice. You can grow and improve week after week.

These skills - discipline, patience, perseverance - are gifts that will help you in everything you do. And music will be with you forever. Whenever you sit down at a piano, you carry all of this knowledge with you.

I'm incredibly proud of you. You're not just a piano player now - you're a MUSICIAN! 🎵✨`
        },
        weeklyChallenge: {
            guitar: "FINAL CHALLENGE: Play the 12-bar blues in A using 7th chords. Solo using the A blues scale across multiple positions. Dad picks ANY 5 chords and ANY 3 scales - play them all!",
            piano: "FINAL CHALLENGE: Play Blues scale in C. Play Cmaj7-Am7-Dm7-G7 progression (jazz turnaround). Then: Dad picks ANY 5 chords and ANY 3 scales from the entire course!"
        },
        songs: {
            guitar: [
                {
                    title: "Johnny B. Goode",
                    artist: "Chuck Berry",
                    chords: "A7 - D7 - E7",
                    note: "12-bar blues classic - everything you've learned!",
                    links: {
                        spotify: "https://open.spotify.com/track/2bZGDGS0hOoAQkFBz65hXW",
                        video: "https://www.youtube.com/watch?v=ZFo8-JqzSCM",
                        tutorial: "https://www.jonmaclennan.com/blog/johnny-b-goode-guitar-lesson",
                        tab: "https://tabs.ultimate-guitar.com/tab/chuck-berry/johnny-b-goode-tabs-1515686"
                    }
                },
                {
                    title: "Pride and Joy",
                    artist: "SRV",
                    chords: "E7 - A7 - B7",
                    note: "Texas shuffle blues - bring it all together!",
                    links: {
                        spotify: "https://open.spotify.com/track/5MbCWvPs5VYpPGQGjdIV6U",
                        video: "https://www.youtube.com/watch?v=0vo23H9J8o8",
                        tutorial: "https://www.justinguitar.com/songs/stevie-ray-vaughan-pride-and-joy",
                        tab: "https://tabs.ultimate-guitar.com/tab/stevie-ray-vaughan/pride-and-joy-tabs-152054"
                    }
                }
            ],
            piano: [
                {
                    title: "Georgia on My Mind",
                    artist: "Ray Charles",
                    chords: "F - Am7 - Dm7 - G7",
                    note: "Soulful 7th chords",
                    links: {
                        spotify: "https://open.spotify.com/track/1fhFirJyT5STGVK7rlL4av",
                        video: "https://www.youtube.com/watch?v=fRgWBN8yt_E",
                        tutorial: "https://www.onlinepianist.com/piano-songs/ray-charles/georgia-on-my-mind",
                        sheet: "https://musescore.com/song/georgia_on_my_mind-1657567"
                    }
                },
                {
                    title: "Just the Way You Are",
                    artist: "Billy Joel",
                    chords: "D - Gmaj7 - Bm - Em7",
                    note: "Smooth jazz pop",
                    links: {
                        spotify: "https://open.spotify.com/track/55skE0fGKCJ6VCsaVHqoB1",
                        video: "https://www.youtube.com/watch?v=HaA3YZ6QdJU",
                        tutorial: "https://www.onlinepianist.com/piano-songs/billy-joel/just-the-way-you-are",
                        sheet: "https://musescore.com/song/just_the_way_you_are-1657559"
                    }
                }
            ]
        },
        guitar: {
            scale: {
                name: "Full Neck Navigation",
                tokens: 25,
                difficulty: 3,
                tip: "You now know 2 major scale positions, 2 pentatonic boxes, and the blues scale. They all connect! The whole neck is yours.",
                pattern: "Full Neck"
            },
            chords: [
                {
                    name: "D7 (Open)",
                    tokens: 5,
                    difficulty: 1,
                    tip: "The third 7th chord for the 12-bar blues. A7-D7-E7 is the classic blues progression!"
                },
                {
                    name: "12-Bar Blues Progression",
                    tokens: 15,
                    difficulty: 2,
                    tip: "4 bars of A7, 2 bars of D7, 2 bars of A7, 1 bar E7, 1 bar D7, 2 bars A7. This is the foundation of rock and roll!"
                }
            ]
        },
        piano: {
            scale: {
                name: "Blues Scale (C)",
                tokens: 15,
                difficulty: 2,
                tip: "C-Eb-F-F#-G-Bb-C. That chromatic F-F#-G is the heart of the blues!",
                speedGoal: 80
            },
            chords: [
                { name: "C Major 7th", tokens: 10, difficulty: 2, tip: "C-E-G-B. The major 7th adds sophistication - a jazz staple." },
                { name: "A Minor 7th", tokens: 10, difficulty: 2, tip: "A-C-E-G. Minor with a 7th - smooth and melancholy." },
                { name: "G7 (Dominant)", tokens: 10, difficulty: 2, tip: "G-B-D-F. Creates tension that wants to resolve to C." }
            ]
        }
    }
];
