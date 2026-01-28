// 12-Week Music Learning Curriculum
// Each week focuses on a key, with matching scale and chords
// Multiple voicings/positions for each chord

// Difficulty levels: 1 = Beginner, 2 = Intermediate, 3 = Challenging
const CURRICULUM = [
    // ===== MONTH 1: Foundation Keys =====
    {
        week: 1,
        title: "The Key of C",
        description: "The foundation - all white keys on piano, open position on guitar",
        weeklyChallenge: {
            guitar: "Play the C Major scale up and down, then play C Major chord (open) and C Major (A Shape barre) cleanly, 3 times each.",
            piano: "Play C Major scale hands together at 60 BPM, then play C Major chord in all 3 inversions smoothly."
        },
        songs: {
            guitar: [], // Week 1 - still building basics
            piano: []   // Week 1 - still building basics
        },
        guitar: {
            scale: {
                name: "C Major Scale (Open Position)",
                tokens: 15,
                difficulty: 1,
                tip: "This pattern starts on the A string. Learn where the root notes are - you'll use this same shape for other keys!",
                pattern: "Major Scale Pattern 1"
            },
            chords: [
                {
                    name: "C Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "C Shape",
                    tip: "The classic open C chord. Keep your fingers curved and on their tips."
                },
                {
                    name: "C Major (A Shape - 3rd fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "A Shape",
                    tip: "This is an A-shape barre chord moved to the 3rd fret. The same shape at the 5th fret = D Major!",
                    isBarre: true,
                    barreInfo: "Barre all strings at fret 3 with your index finger. Keep your thumb behind the neck."
                },
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
                { name: "C Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "G-C-E. Great for smooth voice leading to F Major." },
            ]
        }
    },
    {
        week: 2,
        title: "The Key of G",
        description: "One sharp (F#) - essential for both instruments",
        weeklyChallenge: {
            guitar: "Play G Major scale, then C Major scale (Week 1 recap). Play G and C Major chords, switching between them 4 times smoothly.",
            piano: "Play G Major scale hands together at 60 BPM, then C Major scale (recap). Play G-C-G chord progression using inversions."
        },
        songs: {
            guitar: [
                { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", chords: "D - C - G", note: "Classic G-C-D pattern!" }
            ],
            piano: [
                { title: "Crocodile Rock", artist: "Elton John", chords: "G - C - G - D", note: "Bouncy left hand pattern" }
            ]
        },
        guitar: {
            scale: {
                name: "G Major Scale (Open Position)",
                tokens: 15,
                difficulty: 1,
                tip: "Starts on the low E string. This is the same PATTERN as C Major, just starting from G!",
                pattern: "Major Scale Pattern 1"
            },
            chords: [
                {
                    name: "G Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "G Shape",
                    tip: "Use your pinky on the high E string - it builds strength for barre chords later."
                },
                {
                    name: "G Major (E Shape - 3rd fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "E Shape",
                    tip: "This is the E-shape barre chord. The MOST important shape - learn it well!",
                    isBarre: true,
                    barreInfo: "The E-shape barre is the foundation. Keep your index finger straight and roll slightly onto its side."
                },
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
                { name: "G Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "D-G-B. This inversion leads beautifully back to C Major." },
            ]
        }
    },
    {
        week: 3,
        title: "The Key of D",
        description: "Two sharps (F#, C#) - builds on what you know",
        weeklyChallenge: {
            guitar: "Play D, G, and C Major scales in sequence. Play D-G-C chord progression, 4 bars each, with smooth transitions.",
            piano: "Play D Major scale at 70 BPM, then G and C scales (recap). Play D-G-C progression choosing the best inversions for smooth movement."
        },
        songs: {
            guitar: [
                { title: "You Shook Me All Night Long", artist: "AC/DC", chords: "G - C - D - G", note: "Classic rock rhythm!" },
                { title: "Love Me Do", artist: "The Beatles", chords: "G - C - G - D", note: "Simple and fun" }
            ],
            piano: [
                { title: "Bennie and the Jets", artist: "Elton John", chords: "G - Am - C - D", note: "Work on that intro riff!" },
                { title: "Jealous Guy", artist: "John Lennon", chords: "G - Em - D - C", note: "Beautiful ballad" }
            ]
        },
        guitar: {
            scale: {
                name: "D Major Scale (Open Position)",
                tokens: 15,
                difficulty: 1,
                tip: "Starts on the open D string. Same pattern as G and C - just a different starting point!",
                pattern: "Major Scale Pattern 1"
            },
            chords: [
                {
                    name: "D Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "D Shape",
                    tip: "A small, compact shape. Great for quick changes to G and A chords."
                },
                {
                    name: "D Major (C Shape - 2nd fret)",
                    tokens: 10,
                    difficulty: 2,
                    cagedShape: "C Shape",
                    tip: "The C-shape moved up. This shape is tricky but sounds beautiful.",
                    isBarre: false
                },
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
                { name: "D Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "A-D-F#. This connects smoothly to G Major." },
            ]
        }
    },
    {
        week: 4,
        title: "Review & The I-IV-V",
        description: "Master C-G-D together - the most common chord progression",
        weeklyChallenge: {
            guitar: "Play the I-IV-V progression in C (C-F-G), G (G-C-D), and D (D-G-A) - pick any chord voicing you've learned. Demonstrate smooth changes at 70 BPM.",
            piano: "Play C-G-D progression with a steady beat, using inversions. Then play the same progression starting on G (G-D-A). Show you understand the pattern!"
        },
        songs: {
            guitar: [
                { title: "Twist and Shout", artist: "The Beatles", chords: "D - G - A", note: "I-IV-V in D - shake it up!" },
                { title: "Wild Thing", artist: "The Troggs", chords: "A - D - A - E", note: "Simple I-IV-V rock" }
            ],
            piano: [
                { title: "Twist and Shout", artist: "The Beatles", chords: "D - G - A - G", note: "Classic I-IV-V" },
                { title: "La Bamba", artist: "Ritchie Valens", chords: "C - F - G", note: "I-IV-V in C!" }
            ]
        },
        guitar: {
            scale: {
                name: "C-G-D Chord Transitions",
                tokens: 20,
                difficulty: 2,
                tip: "Focus on keeping one finger anchored when possible. G to D: keep your ring finger planted!",
                pattern: "Chord Transitions"
            },
            chords: [
                {
                    name: "C-G-D Progression (Smooth Changes)",
                    tokens: 15,
                    difficulty: 2,
                    cagedShape: "Mixed",
                    tip: "Try to change chords in rhythm. Start slow with a metronome at 60 BPM."
                },
            ]
        },
        piano: {
            scale: {
                name: "C-G-D Chord Transitions",
                tokens: 20,
                difficulty: 2,
                tip: "Use inversions to minimize hand movement. C(root) → G(2nd inv) → D(root) flows smoothly.",
                speedGoal: 60
            },
            chords: [
                { name: "C-G-D Progression (Using Inversions)", tokens: 15, difficulty: 2, tip: "The secret to smooth piano playing: choose inversions that minimize movement." },
            ]
        }
    },

    // ===== MONTH 2: Minor Keys & More Majors =====
    {
        week: 5,
        title: "A Minor - Relative to C",
        description: "Same notes as C major, different mood",
        weeklyChallenge: {
            guitar: "Play A Minor scale, then C Major scale - notice they use the same notes! Play Am-C-G-Am progression. Recap: Play one barre chord from weeks 1-4.",
            piano: "Play A Minor and C Major scales back-to-back. Play Am-F-C-G progression using inversions. Show the connection between relative major/minor."
        },
        songs: {
            guitar: [
                { title: "All Along the Watchtower", artist: "Hendrix", chords: "Am - G - F - G", note: "Iconic progression!" },
                { title: "House of the Rising Sun", artist: "The Animals", chords: "Am - C - D - F", note: "Arpeggiate the chords" }
            ],
            piano: [
                { title: "Still D.R.E.", artist: "Dr. Dre", chords: "Am - F - C - G", note: "That famous piano riff!" },
                { title: "I Just Called to Say I Love You", artist: "Stevie Wonder", chords: "Am - G - C", note: "Sweet melody" }
            ]
        },
        guitar: {
            scale: {
                name: "A Minor Scale (Natural)",
                tokens: 15,
                difficulty: 1,
                tip: "Same notes as C Major! This pattern is the foundation for the minor pentatonic too.",
                pattern: "Natural Minor Pattern 1"
            },
            chords: [
                {
                    name: "A Minor (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "A Minor Shape",
                    tip: "Very similar to A Major - just move one finger down. Feel the sad sound."
                },
                {
                    name: "A Minor (E Shape Barre - 5th fret)",
                    tokens: 12,
                    difficulty: 3,
                    cagedShape: "E Minor Shape",
                    tip: "The minor version of the E-shape barre. Same as E minor shape moved to 5th fret.",
                    isBarre: true,
                    barreInfo: "Same technique as E-shape major, but lift your middle finger. This shape works for ANY minor chord!"
                },
            ]
        },
        piano: {
            scale: {
                name: "A Minor Scale (Natural)",
                tokens: 15,
                difficulty: 1,
                tip: "All white keys like C Major! But starting on A. Notice how the mood changes.",
                speedGoal: 80
            },
            chords: [
                { name: "A Minor (Root Position)", tokens: 5, difficulty: 1, tip: "A-C-E. Compare to A Major (A-C#-E) - just one note different!" },
                { name: "A Minor (1st Inversion)", tokens: 8, difficulty: 1, tip: "C-E-A. This sounds similar to C Major - they share two notes." },
                { name: "A Minor (2nd Inversion)", tokens: 8, difficulty: 1, tip: "E-A-C. Great for resolving to F Major." },
            ]
        }
    },
    {
        week: 6,
        title: "E Minor - Relative to G",
        description: "The easiest minor on guitar, beautiful on piano",
        weeklyChallenge: {
            guitar: "Play Em and G Major scales. Play Em-G-C-D progression. Recap: Play Am (week 5) and demonstrate how the Em shape becomes the Am barre.",
            piano: "Play E Minor scale at 70 BPM, then G Major. Play Em-Am-D-G progression with smooth inversions. Recap: Play any 2 scales from weeks 1-5."
        },
        songs: {
            guitar: [
                { title: "Wish You Were Here", artist: "Pink Floyd", chords: "Em - G - Em - G - A", note: "Beautiful acoustic intro" },
                { title: "Heart of Gold", artist: "Neil Young", chords: "Em - C - D - G", note: "Classic Neil Young!" }
            ],
            piano: [
                { title: "Piano Man", artist: "Billy Joel", chords: "C - G - F - Em", note: "Learn that iconic intro" },
                { title: "Imagine", artist: "John Lennon", chords: "C - F - C - F - Am", note: "Simple but powerful" }
            ]
        },
        guitar: {
            scale: {
                name: "E Minor Scale (Natural)",
                tokens: 15,
                difficulty: 1,
                tip: "Same notes as G Major. The low E string is your root - great for rock and metal!",
                pattern: "Natural Minor Pattern 1"
            },
            chords: [
                {
                    name: "E Minor (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "E Minor Shape",
                    tip: "The easiest chord on guitar! Just two fingers. This is your barre chord foundation."
                },
                {
                    name: "E Minor (D Shape - 7th fret)",
                    tokens: 12,
                    difficulty: 2,
                    cagedShape: "D Minor Shape",
                    tip: "The D minor shape moved up. No barre needed but a good stretch.",
                    isBarre: false
                },
            ]
        },
        piano: {
            scale: {
                name: "E Minor Scale (Natural)",
                tokens: 15,
                difficulty: 1,
                tip: "One black key (F#). Same fingering pattern. E minor has a particularly melancholy sound.",
                speedGoal: 80
            },
            chords: [
                { name: "E Minor (Root Position)", tokens: 5, difficulty: 1, tip: "E-G-B. All white keys! Very comfortable to play." },
                { name: "E Minor (1st Inversion)", tokens: 8, difficulty: 1, tip: "G-B-E. Practice moving between Em and G Major inversions." },
                { name: "E Minor (2nd Inversion)", tokens: 8, difficulty: 1, tip: "B-E-G. A wide stretch but a beautiful voicing." },
            ]
        }
    },
    {
        week: 7,
        title: "The Key of A Major",
        description: "Three sharps - great guitar key",
        weeklyChallenge: {
            guitar: "Play A Major scale, then A Minor scale - spot the 3 different notes! Play A-D-E progression (the classic rock progression). Recap: Play G and C barre chords.",
            piano: "Play A Major at 70 BPM. Play A-D-E-A progression. Recap: Play C, G, and D Major scales from memory, plus Am and Em."
        },
        songs: {
            guitar: [
                { title: "Back in Black", artist: "AC/DC", chords: "E - D - A", note: "That legendary riff!" },
                { title: "Rockin' in the Free World", artist: "Neil Young", chords: "Em - D - C - Em - A", note: "Powerful anthem" }
            ],
            piano: [
                { title: "Tiny Dancer", artist: "Elton John", chords: "C - F - G - Am", note: "Beautiful ballad" },
                { title: "Lean on Me", artist: "Bill Withers", chords: "C - F - C - G", note: "Everyone knows this one!" }
            ]
        },
        guitar: {
            scale: {
                name: "A Major Scale (Open Position)",
                tokens: 15,
                difficulty: 2,
                tip: "Three sharps! Notice how this pattern relates to A Minor - just raise the 3rd, 6th, and 7th.",
                pattern: "Major Scale Pattern 1"
            },
            chords: [
                {
                    name: "A Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "A Shape",
                    tip: "Squeeze three fingers into one fret. This shape moves up the neck for all major chords!"
                },
                {
                    name: "A Major (E Shape Barre - 5th fret)",
                    tokens: 12,
                    difficulty: 3,
                    cagedShape: "E Shape",
                    tip: "Your E-shape barre at the 5th fret. If you can play this cleanly, you can play ANY major chord!",
                    isBarre: true,
                    barreInfo: "This is the same shape as your Week 2 G barre, just moved up. The pattern repeats!"
                },
            ]
        },
        piano: {
            scale: {
                name: "A Major Scale",
                tokens: 15,
                difficulty: 2,
                tip: "C#, F#, G# - three black keys. Thumb goes under after C# and after G#.",
                speedGoal: 72
            },
            chords: [
                { name: "A Major (Root Position)", tokens: 5, difficulty: 1, tip: "A-C#-E. The black key in the middle feels natural." },
                { name: "A Major (1st Inversion)", tokens: 8, difficulty: 2, tip: "C#-E-A. Starting on a black key takes practice." },
                { name: "A Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "E-A-C#. Compare to A minor 2nd inversion - just one note different." },
            ]
        }
    },
    {
        week: 8,
        title: "The Key of E Major",
        description: "Four sharps - the rock and blues foundation",
        weeklyChallenge: {
            guitar: "Play E Major scale. Play E-A-B progression (12-bar blues foundation). Recap: Play 3 different barre chord shapes you've learned, name the CAGED shape for each.",
            piano: "Play E Major scale at 70 BPM. Play E-A-B-E progression. Recap: Play all Major scales learned so far (C, G, D, A, E) - can you do them without looking?"
        },
        songs: {
            guitar: [
                { title: "Highway to Hell", artist: "AC/DC", chords: "A - D - G - D - A", note: "Angus Young style!" },
                { title: "Let It Be", artist: "The Beatles", chords: "C - G - Am - F", note: "Timeless classic" }
            ],
            piano: [
                { title: "Your Song", artist: "Elton John", chords: "C - F - G - Am", note: "Romantic piano ballad" },
                { title: "She's Got a Way", artist: "Billy Joel", chords: "G - D - C - Em", note: "Sweet love song" }
            ]
        },
        guitar: {
            scale: {
                name: "E Major Scale (Open Position)",
                tokens: 15,
                difficulty: 2,
                tip: "The lowest guitar key using open strings. Essential for rock, blues, and country!",
                pattern: "Major Scale Pattern 1"
            },
            chords: [
                {
                    name: "E Major (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "E Shape",
                    tip: "THE most important shape. This is exactly what you barre for other major chords!"
                },
                {
                    name: "E Major (A Shape - 7th fret)",
                    tokens: 12,
                    difficulty: 3,
                    cagedShape: "A Shape",
                    tip: "A-shape barre at 7th fret. Notice it's the same as your C Major barre moved up.",
                    isBarre: true,
                    barreInfo: "A-shape barres require barring only 5 strings. Use the tip of your index finger."
                },
            ]
        },
        piano: {
            scale: {
                name: "E Major Scale",
                tokens: 15,
                difficulty: 2,
                tip: "Four black keys: F#, G#, C#, D#. The fingering changes slightly - watch the thumb crossings!",
                speedGoal: 72
            },
            chords: [
                { name: "E Major (Root Position)", tokens: 5, difficulty: 1, tip: "E-G#-B. Black key in the middle, all white otherwise." },
                { name: "E Major (1st Inversion)", tokens: 8, difficulty: 2, tip: "G#-B-E. Starting on a black key - keep your hand position high." },
                { name: "E Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "B-E-G#. The stretch to G# is wide - stay relaxed." },
            ]
        }
    },

    // ===== MONTH 3: Flats, Pentatonics & 7th Chords =====
    {
        week: 9,
        title: "The Key of F Major",
        description: "One flat (Bb) - introduces the F barre chord on guitar",
        weeklyChallenge: {
            guitar: "Play F Major scale. Master the F barre chord - hold it for 10 seconds with all strings ringing clearly! Play F-C-G-F progression. Recap: Name and play 4 different CAGED shapes.",
            piano: "Play F Major scale at 72 BPM - watch that Bb! Play F-Bb-C-F progression. Recap: Play C, G, D, A, E Major scales and their relative minors."
        },
        songs: {
            guitar: [
                { title: "Hey Jude", artist: "The Beatles", chords: "F - C - Bb - F", note: "That epic outro!" },
                { title: "Band on the Run", artist: "Wings", chords: "Am - G - F - G", note: "Paul's masterpiece" }
            ],
            piano: [
                { title: "Don't Let the Sun Go Down on Me", artist: "Elton John", chords: "C - F - G - Am", note: "Powerful ballad" },
                { title: "You've Got a Friend in Me", artist: "Randy Newman", chords: "C - G - F - C", note: "From Toy Story!" }
            ]
        },
        guitar: {
            scale: {
                name: "F Major Scale",
                tokens: 15,
                difficulty: 2,
                tip: "First scale with a flat! The pattern is the same, just starting on F.",
                pattern: "Major Scale Pattern 1"
            },
            chords: [
                {
                    name: "F Major (Barre - 1st fret)",
                    tokens: 15,
                    difficulty: 3,
                    cagedShape: "E Shape",
                    tip: "The famous F chord! This is just E Major moved up one fret. Master this and you've mastered barre chords!",
                    isBarre: true,
                    barreInfo: "The 1st fret barre is the hardest because the string tension is highest. Build up finger strength gradually. Position your index finger right behind the fret wire."
                },
                {
                    name: "F Major (C Shape - 5th fret)",
                    tokens: 12,
                    difficulty: 2,
                    cagedShape: "C Shape",
                    tip: "An alternative to the barre. The C-shape is awkward but useful for certain progressions.",
                    isBarre: false
                },
            ]
        },
        piano: {
            scale: {
                name: "F Major Scale",
                tokens: 15,
                difficulty: 2,
                tip: "First flat! Bb instead of B. Special fingering: thumb crosses under to Bb (finger 4), not to F.",
                speedGoal: 72
            },
            chords: [
                { name: "F Major (Root Position)", tokens: 5, difficulty: 1, tip: "F-A-C. All white keys! Very comfortable." },
                { name: "F Major (1st Inversion)", tokens: 8, difficulty: 1, tip: "A-C-F. This inversion after C Major (2nd inv) sounds beautiful." },
                { name: "F Major (2nd Inversion)", tokens: 8, difficulty: 1, tip: "C-F-A. The 'sus' sound resolves nicely to C Major." },
            ]
        }
    },
    {
        week: 10,
        title: "D Minor - Relative to F",
        description: "A moody, expressive key",
        weeklyChallenge: {
            guitar: "Play D Minor and F Major scales. Play Dm-Am-Em-Dm progression (circle of minor keys). Recap: Dad picks 3 random chords from weeks 1-9 - play them!",
            piano: "Play D Minor scale at 72 BPM. Play Dm-Gm-C-F progression. Recap: Play all minor scales (Am, Em, Dm) and their relative majors back-to-back."
        },
        songs: {
            guitar: [
                { title: "Stairway to Heaven", artist: "Led Zeppelin", chords: "Am - G - F - Am", note: "Legendary intro" },
                { title: "Karma Police", artist: "Radiohead", chords: "Am - D - Em - G", note: "Haunting progression" }
            ],
            piano: [
                { title: "Superstition", artist: "Stevie Wonder", chords: "Em - Bm (simplified)", note: "That funky clavinet!" },
                { title: "I Am a Rock", artist: "Simon & Garfunkel", chords: "C - Dm - F - G", note: "60s folk rock" }
            ]
        },
        guitar: {
            scale: {
                name: "D Minor Scale (Natural)",
                tokens: 15,
                difficulty: 2,
                tip: "Same notes as F Major. The Bb makes this scale sound distinctly minor and emotional.",
                pattern: "Natural Minor Pattern 1"
            },
            chords: [
                {
                    name: "D Minor (Open)",
                    tokens: 5,
                    difficulty: 1,
                    cagedShape: "D Minor Shape",
                    tip: "Similar to D Major - move one finger to get the minor sound."
                },
                {
                    name: "D Minor (A Shape Barre - 5th fret)",
                    tokens: 12,
                    difficulty: 3,
                    cagedShape: "A Minor Shape",
                    tip: "The A minor shape moved to the 5th fret. Same pattern as your Am barre!",
                    isBarre: true,
                    barreInfo: "A-minor shape barre. Same as A major barre but with the middle finger lifted."
                },
            ]
        },
        piano: {
            scale: {
                name: "D Minor Scale (Natural)",
                tokens: 15,
                difficulty: 2,
                tip: "One flat (Bb). Compare to D Major - the minor has Bb instead of B, F instead of F#.",
                speedGoal: 72
            },
            chords: [
                { name: "D Minor (Root Position)", tokens: 5, difficulty: 1, tip: "D-F-A. All white keys! The classic minor sound." },
                { name: "D Minor (1st Inversion)", tokens: 8, difficulty: 1, tip: "F-A-D. This voicing works great with F Major chord progressions." },
                { name: "D Minor (2nd Inversion)", tokens: 8, difficulty: 1, tip: "A-D-F. Compare to A Minor - they share two notes!" },
            ]
        }
    },
    {
        week: 11,
        title: "Pentatonic Scales",
        description: "The most versatile scales for improvisation",
        weeklyChallenge: {
            guitar: "Play A Minor Pentatonic boxes 1 and 2, connecting them. Improvise a short solo over Am-G-F-E! Recap: Dad picks a random key - play its Major scale and barre chord.",
            piano: "Play C Major Pentatonic and A Minor Pentatonic. Improvise a melody using only pentatonic notes over a C-Am-F-G backing. Recap: Play 5 scales of Dad's choice."
        },
        songs: {
            guitar: [
                { title: "Purple Haze", artist: "Hendrix", chords: "E - G - A", note: "Use pentatonic licks!" },
                { title: "Sunshine of Your Love", artist: "Cream", chords: "D - C - D", note: "Classic pentatonic riff" }
            ],
            piano: [
                { title: "Isn't She Lovely", artist: "Stevie Wonder", chords: "C#m - F# - B - E", note: "Simplified: Am - D - G - C" },
                { title: "The Entertainer", artist: "Scott Joplin", chords: "C - F - G - C", note: "Ragtime fun with pentatonics!" }
            ]
        },
        guitar: {
            scale: {
                name: "A Minor Pentatonic (Box 1)",
                tokens: 15,
                difficulty: 2,
                tip: "THE most important guitar scale! This 'box' shape moves anywhere on the neck. Root on 6th string = minor key.",
                pattern: "Pentatonic Box 1"
            },
            chords: [
                {
                    name: "A Minor Pentatonic (Box 2)",
                    tokens: 12,
                    difficulty: 2,
                    cagedShape: "Pentatonic",
                    tip: "Box 2 connects to Box 1. Learn to move between them for longer solos!"
                },
                {
                    name: "E Minor Pentatonic (Box 1)",
                    tokens: 12,
                    difficulty: 2,
                    cagedShape: "Pentatonic",
                    tip: "Same SHAPE as Am pentatonic, just at the open position. The pattern is identical!"
                },
            ]
        },
        piano: {
            scale: {
                name: "C Major Pentatonic",
                tokens: 15,
                difficulty: 1,
                tip: "Just the black keys removed from C Major: C-D-E-G-A. Great for improvising!",
                speedGoal: 88
            },
            chords: [
                { name: "A Minor Pentatonic", tokens: 12, difficulty: 1, tip: "A-C-D-E-G. These are the black keys of F# Major! Try playing only black keys." },
                { name: "G Major Pentatonic", tokens: 12, difficulty: 1, tip: "G-A-B-D-E. No F# included, so it's all white keys except... wait, it IS all white keys!" },
            ]
        }
    },
    {
        week: 12,
        title: "7th Chords & The Blues",
        description: "Add color with dominant and major 7th chords",
        weeklyChallenge: {
            guitar: "FINAL CHALLENGE: Play the 12-bar blues in A (A7-D7-E7). Play Blues scale over it. Then: Dad picks ANY 5 chords and ANY 3 scales from the entire course - play them all!",
            piano: "FINAL CHALLENGE: Play Blues scale in C. Play Cmaj7-Am7-Dm7-G7 progression (jazz turnaround). Then: Dad picks ANY 5 chords and ANY 3 scales from the entire course!"
        },
        songs: {
            guitar: [
                { title: "Johnny B. Goode", artist: "Chuck Berry", chords: "A7 - D7 - E7", note: "12-bar blues classic!" },
                { title: "Pride and Joy", artist: "SRV", chords: "E7 - A7 - B7", note: "Texas shuffle blues" }
            ],
            piano: [
                { title: "Georgia on My Mind", artist: "Ray Charles", chords: "F - Am7 - Dm7 - G7", note: "Soulful 7th chords" },
                { title: "Just the Way You Are", artist: "Billy Joel", chords: "D - Gmaj7 - Bm - Em7", note: "Smooth jazz pop" }
            ]
        },
        guitar: {
            scale: {
                name: "Blues Scale (A)",
                tokens: 20,
                difficulty: 2,
                tip: "The pentatonic plus the 'blue note' (Eb). This one note adds so much attitude!",
                pattern: "Blues Scale"
            },
            chords: [
                {
                    name: "A7 (Open)",
                    tokens: 10,
                    difficulty: 1,
                    cagedShape: "A7 Shape",
                    tip: "A with the 7th. The 'dominant' sound wants to resolve to D. Essential for blues!"
                },
                {
                    name: "E7 (Open)",
                    tokens: 10,
                    difficulty: 1,
                    cagedShape: "E7 Shape",
                    tip: "E with the 7th. Lifts your finger from the normal E shape. Very bluesy!"
                },
                {
                    name: "D7 (Open)",
                    tokens: 10,
                    difficulty: 1,
                    cagedShape: "D7 Shape",
                    tip: "D with the 7th. Try the 12-bar blues: A7-A7-A7-A7-D7-D7-A7-A7-E7-D7-A7-E7!"
                },
            ]
        },
        piano: {
            scale: {
                name: "Blues Scale (C)",
                tokens: 20,
                difficulty: 2,
                tip: "C-Eb-F-F#-G-Bb-C. The chromatic movement from F to F# to G is the heart of the blues!",
                speedGoal: 66
            },
            chords: [
                { name: "C Major 7th", tokens: 10, difficulty: 2, tip: "C-E-G-B. Four notes! The major 7th (B) adds a jazzy, dreamy quality." },
                { name: "G7 (Dominant)", tokens: 10, difficulty: 2, tip: "G-B-D-F. The dominant 7th pulls strongly back to C. The tension wants to resolve!" },
                { name: "A Minor 7th", tokens: 10, difficulty: 2, tip: "A-C-E-G. Minor with an added 7th. Smooth, mellow, perfect for jazz." },
            ]
        }
    }
];

// Achievements configuration
const ACHIEVEMENTS = {
    guitar: [
        { id: 'first_chord', name: 'First Strum', icon: '🎸', description: 'Complete your first chord', condition: (state) => Object.keys(state.guitar.completed).some(k => k.includes('chord')) },
        { id: 'first_scale', name: 'Scale Explorer', icon: '🎼', description: 'Complete your first scale', condition: (state) => Object.keys(state.guitar.completed).some(k => k.includes('scale')) },
        { id: 'barre_beginner', name: 'Barre Beginner', icon: '💪', description: 'Complete your first barre chord', condition: (state) => state.guitar.barreCount >= 1 },
        { id: 'barre_master', name: 'Barre Master', icon: '🏆', description: 'Complete 5 barre chords', condition: (state) => state.guitar.barreCount >= 5 },
        { id: 'caged_explorer', name: 'CAGED Explorer', icon: '🗝️', description: 'Learn chords in 3 different CAGED shapes', condition: (state) => state.guitar.cagedShapes?.size >= 3 },
        { id: 'pattern_pro', name: 'Pattern Pro', icon: '🧩', description: 'Complete scales in 5 different keys', condition: (state) => state.guitar.scaleCount >= 5 },
        { id: 'week_complete', name: 'Weekly Warrior', icon: '⭐', description: 'Complete all items in a week', condition: (state) => state.guitar.weeksCompleted >= 1 },
        { id: 'halfway', name: 'Halfway Hero', icon: '🌟', description: 'Complete 6 weeks', condition: (state) => state.guitar.weeksCompleted >= 6 },
        { id: 'guitar_master', name: 'Guitar Master', icon: '👑', description: 'Complete the entire 12-week curriculum', condition: (state) => state.guitar.weeksCompleted >= 12 },
    ],
    piano: [
        { id: 'first_chord', name: 'First Keys', icon: '🎹', description: 'Complete your first chord', condition: (state) => Object.keys(state.piano.completed).some(k => k.includes('chord')) },
        { id: 'first_scale', name: 'Scale Starter', icon: '🎼', description: 'Complete your first scale', condition: (state) => Object.keys(state.piano.completed).some(k => k.includes('scale')) },
        { id: 'inversion_intro', name: 'Inversion Explorer', icon: '🔄', description: 'Complete all 3 inversions of a chord', condition: (state) => state.piano.inversionSets >= 1 },
        { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', description: 'Beat the speed goal on any scale', condition: (state) => state.piano.speedRecords?.length >= 1 },
        { id: 'hands_together', name: 'Two Hands', icon: '🙌', description: 'Practice 5 scales with both hands', condition: (state) => state.piano.handsTogetherCount >= 5 },
        { id: 'black_keys', name: 'Black Key Explorer', icon: '⬛', description: 'Complete scales with 3+ black keys', condition: (state) => state.piano.blackKeyScales >= 2 },
        { id: 'week_complete', name: 'Weekly Winner', icon: '⭐', description: 'Complete all items in a week', condition: (state) => state.piano.weeksCompleted >= 1 },
        { id: 'halfway', name: 'Halfway Hero', icon: '🌟', description: 'Complete 6 weeks', condition: (state) => state.piano.weeksCompleted >= 6 },
        { id: 'piano_master', name: 'Piano Master', icon: '👑', description: 'Complete the entire 12-week curriculum', condition: (state) => state.piano.weeksCompleted >= 12 },
    ]
};

// Calculate total possible tokens
function calculateTotalTokens(instrument) {
    let total = 0;
    CURRICULUM.forEach(week => {
        const data = week[instrument];
        total += data.scale.tokens;
        data.chords.forEach(chord => {
            total += chord.tokens;
        });
    });
    return total;
}

// Get current week based on start date
function getCurrentWeek(startDate) {
    const now = new Date();
    const start = new Date(startDate);
    const diffTime = now - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weekNum = Math.floor(diffDays / 7) + 1;
    return Math.min(Math.max(weekNum, 1), 12);
}

// Export for use in app
window.CURRICULUM = CURRICULUM;
window.ACHIEVEMENTS = ACHIEVEMENTS;
window.calculateTotalTokens = calculateTotalTokens;
window.getCurrentWeek = getCurrentWeek;
