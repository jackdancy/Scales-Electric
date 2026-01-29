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
