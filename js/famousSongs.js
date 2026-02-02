// Famous Songs Database
// Songs organized by week, showing what can be played with the scales/chords learned
// Each week has songs for both guitar and piano perspectives

const FAMOUS_SONGS = {
    // Week 1: G Major / C Major - G, C, D chords
    1: {
        title: "Songs in G Major / C Major",
        description: "These songs use G, C, and D chords - the foundation of countless hits!",
        songs: [
            // 1950s-60s
            { title: "Johnny B. Goode", artist: "Chuck Berry", year: 1958, genre: "Rock & Roll", chords: "G-C-D" },
            { title: "Twist and Shout", artist: "The Beatles", year: 1963, genre: "Rock", chords: "D-G-A" },
            { title: "Blowin' in the Wind", artist: "Bob Dylan", year: 1963, genre: "Folk", chords: "G-C-D" },
            // 1970s
            { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", year: 1974, genre: "Southern Rock", chords: "D-C-G" },
            { title: "Brown Eyed Girl", artist: "Van Morrison", year: 1967, genre: "Rock", chords: "G-C-G-D" },
            { title: "Free Fallin'", artist: "Tom Petty", year: 1989, genre: "Rock", chords: "G-C-D" },
            // 1980s-90s
            { title: "Good Riddance (Time of Your Life)", artist: "Green Day", year: 1997, genre: "Punk Rock", chords: "G-C-D" },
            { title: "Glycerine", artist: "Bush", year: 1994, genre: "Grunge", chords: "G-C-D" },
            { title: "Elderly Woman Behind the Counter", artist: "Pearl Jam", year: 1993, genre: "Grunge", chords: "G-C-D" },
            // 2000s
            { title: "Ho Hey", artist: "The Lumineers", year: 2012, genre: "Folk Rock", chords: "C-G" },
            { title: "Wagon Wheel", artist: "Darius Rucker/Old Crow", year: 2004, genre: "Country/Folk", chords: "G-D-C" },
            { title: "Riptide", artist: "Vance Joy", year: 2013, genre: "Indie Pop", chords: "G-C-D" },
            // R&B/Hip-Hop
            { title: "No Diggity", artist: "Blackstreet", year: 1996, genre: "R&B", chords: "G-C loop" },
            { title: "Hotline Bling", artist: "Drake", year: 2015, genre: "R&B/Rap", chords: "G-D-C progression" },
            { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", year: 2017, genre: "R&B", chords: "G-C-D" },
            // Modern
            { title: "Perfect", artist: "Ed Sheeran", year: 2017, genre: "Pop", chords: "G-Em-C-D" },
            { title: "Let Her Go", artist: "Passenger", year: 2012, genre: "Folk Pop", chords: "G-D-C" },
            { title: "Count on Me", artist: "Bruno Mars", year: 2010, genre: "Pop", chords: "C-G-Am-F" },
            { title: "I'm Yours", artist: "Jason Mraz", year: 2008, genre: "Pop", chords: "G-D-Em-C" },
            { title: "Budapest", artist: "George Ezra", year: 2014, genre: "Folk Pop", chords: "G-C-D" }
        ]
    },

    // Week 2: E Minor Pentatonic / G Major
    2: {
        title: "Songs in E Minor / G Major",
        description: "E Minor has that dark, emotional feel - from classic rock to modern R&B!",
        songs: [
            // Classic Rock
            { title: "Heart of Gold", artist: "Neil Young", year: 1972, genre: "Folk Rock", chords: "Em-C-D-G" },
            { title: "Wish You Were Here", artist: "Pink Floyd", year: 1975, genre: "Rock", chords: "Em-G-A" },
            { title: "Black Magic Woman", artist: "Santana", year: 1970, genre: "Rock", chords: "Em-Am" },
            { title: "All Along the Watchtower", artist: "Jimi Hendrix", year: 1968, genre: "Rock", chords: "Am-G-F-G" },
            // 1980s-90s
            { title: "Nothing Else Matters", artist: "Metallica", year: 1991, genre: "Metal", chords: "Em-Am-C-G-D" },
            { title: "Zombie", artist: "The Cranberries", year: 1994, genre: "Alternative", chords: "Em-C-G-D" },
            { title: "Losing My Religion", artist: "R.E.M.", year: 1991, genre: "Alternative", chords: "Am-Em-G" },
            { title: "The House of the Rising Sun", artist: "The Animals", year: 1964, genre: "Rock", chords: "Am-C-D-F-E" },
            // R&B/Hip-Hop
            { title: "Passionfruit", artist: "Drake", year: 2017, genre: "R&B", chords: "Em-based" },
            { title: "No Tears Left to Cry", artist: "Ariana Grande", year: 2018, genre: "Pop/R&B", chords: "Em-G-D" },
            { title: "In My Feelings", artist: "Drake", year: 2018, genre: "Rap/R&B", chords: "Em vamp" },
            { title: "Redbone", artist: "Childish Gambino", year: 2016, genre: "R&B/Funk", chords: "Em groove" },
            // Modern
            { title: "Mad World", artist: "Gary Jules", year: 2001, genre: "Alternative", chords: "Em-A-G-D" },
            { title: "Demons", artist: "Imagine Dragons", year: 2012, genre: "Rock", chords: "Em-G-C" },
            { title: "Wake Me Up", artist: "Avicii", year: 2013, genre: "EDM/Pop", chords: "Em-G-D" },
            { title: "Bad Guy", artist: "Billie Eilish", year: 2019, genre: "Pop", chords: "Em-based" },
            { title: "Lucid Dreams", artist: "Juice WRLD", year: 2018, genre: "Rap/Emo", chords: "Em-C-G-D" },
            { title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", year: 2015, genre: "Rap/Pop", chords: "Em-G-C-D" },
            { title: "Cheerleader", artist: "OMI", year: 2012, genre: "Reggae Pop", chords: "Em-C-G-D" },
            { title: "Human", artist: "Rag'n'Bone Man", year: 2016, genre: "Soul", chords: "Em-C-G-D" }
        ]
    },

    // Week 3: G Major & E Minor Connection / D Major
    3: {
        title: "Songs Using G-C-D-Am Progressions",
        description: "The 'four chord' progression that powers pop music from the 50s to today!",
        songs: [
            // Classics
            { title: "Stand By Me", artist: "Ben E. King", year: 1961, genre: "R&B/Soul", chords: "G-Em-C-D" },
            { title: "Let It Be", artist: "The Beatles", year: 1970, genre: "Rock", chords: "C-G-Am-F" },
            { title: "No Woman No Cry", artist: "Bob Marley", year: 1974, genre: "Reggae", chords: "C-G-Am-F" },
            { title: "Africa", artist: "Toto", year: 1982, genre: "Rock", chords: "G-D-Em-C" },
            // 1990s-2000s
            { title: "With or Without You", artist: "U2", year: 1987, genre: "Rock", chords: "D-A-G-D" },
            { title: "Wonderwall", artist: "Oasis", year: 1995, genre: "Britpop", chords: "Em-G-D-A" },
            { title: "Don't Look Back in Anger", artist: "Oasis", year: 1996, genre: "Britpop", chords: "C-G-Am-E-F-G" },
            { title: "Under the Bridge", artist: "Red Hot Chili Peppers", year: 1991, genre: "Rock", chords: "D-G-D-A" },
            // R&B/Hip-Hop
            { title: "Empire State of Mind", artist: "Jay-Z ft. Alicia Keys", year: 2009, genre: "Rap", chords: "G-Em-C-D" },
            { title: "Fallin'", artist: "Alicia Keys", year: 2001, genre: "R&B", chords: "Em-Am" },
            { title: "If I Ain't Got You", artist: "Alicia Keys", year: 2003, genre: "R&B", chords: "G-D-Em-C" },
            { title: "Ordinary People", artist: "John Legend", year: 2004, genre: "R&B", chords: "G-Em-C-D" },
            // Modern Pop
            { title: "Someone Like You", artist: "Adele", year: 2011, genre: "Pop", chords: "A-E-F#m-D" },
            { title: "Photograph", artist: "Ed Sheeran", year: 2014, genre: "Pop", chords: "E-C#m-B-A" },
            { title: "Havana", artist: "Camila Cabello", year: 2017, genre: "Pop/Latin", chords: "Gm-Eb-D" },
            { title: "Shape of You", artist: "Ed Sheeran", year: 2017, genre: "Pop", chords: "C#m-F#m-A-B" },
            { title: "Stay", artist: "The Kid LAROI & Justin Bieber", year: 2021, genre: "Pop", chords: "C-G-Am-F" },
            { title: "Easy On Me", artist: "Adele", year: 2021, genre: "Pop", chords: "G-D-Em-C" },
            { title: "Lover", artist: "Taylor Swift", year: 2019, genre: "Pop", chords: "G-D-Em-C" },
            { title: "Dance Monkey", artist: "Tones and I", year: 2019, genre: "Pop", chords: "G-Em-C-D" }
        ]
    },

    // Week 4: A Minor Pentatonic / A-E Family
    4: {
        title: "Songs in A Minor / A Major",
        description: "A Minor is one of the most emotional keys - used in everything from classical to hip-hop!",
        songs: [
            // Classics
            { title: "Stairway to Heaven", artist: "Led Zeppelin", year: 1971, genre: "Rock", chords: "Am-G-F-E" },
            { title: "Hotel California", artist: "Eagles", year: 1977, genre: "Rock", chords: "Am-E-G-D-F-C-Dm-E" },
            { title: "Comfortably Numb", artist: "Pink Floyd", year: 1979, genre: "Rock", chords: "Am-G-C-D" },
            { title: "Ain't No Sunshine", artist: "Bill Withers", year: 1971, genre: "Soul", chords: "Am-Em-Am" },
            // 1980s-90s
            { title: "Smooth", artist: "Santana ft. Rob Thomas", year: 1999, genre: "Rock/Latin", chords: "Am-F-E" },
            { title: "Gangsta's Paradise", artist: "Coolio", year: 1995, genre: "Rap", chords: "Am-F-C-E" },
            { title: "Bitter Sweet Symphony", artist: "The Verve", year: 1997, genre: "Britpop", chords: "Am-G-F-E" },
            { title: "All Star", artist: "Smash Mouth", year: 1999, genre: "Pop Rock", chords: "G-C-A-D" },
            // R&B/Hip-Hop
            { title: "Still D.R.E.", artist: "Dr. Dre ft. Snoop Dogg", year: 1999, genre: "Rap", chords: "Am-F-C-G" },
            { title: "Changes", artist: "Tupac", year: 1998, genre: "Rap", chords: "Am-Em-C-G" },
            { title: "Runaway", artist: "Kanye West", year: 2010, genre: "Rap", chords: "Am-C-G" },
            { title: "Waves", artist: "Kanye West", year: 2016, genre: "Rap", chords: "Am-F-C" },
            { title: "Drunk in Love", artist: "Beyoncé", year: 2013, genre: "R&B", chords: "Am groove" },
            // Modern
            { title: "Someone You Loved", artist: "Lewis Capaldi", year: 2018, genre: "Pop", chords: "C-G-Am-F" },
            { title: "Drivers License", artist: "Olivia Rodrigo", year: 2021, genre: "Pop", chords: "Am-C-G-D" },
            { title: "lovely", artist: "Billie Eilish & Khalid", year: 2018, genre: "Pop", chords: "Am-C-G-Em" },
            { title: "Happier", artist: "Marshmello ft. Bastille", year: 2018, genre: "EDM/Pop", chords: "Am-F-C-G" },
            { title: "Sunflower", artist: "Post Malone & Swae Lee", year: 2018, genre: "Rap/Pop", chords: "Am-G-C" },
            { title: "Señorita", artist: "Shawn Mendes & Camila Cabello", year: 2019, genre: "Pop/Latin", chords: "Am-C-F-G" },
            { title: "Without Me", artist: "Halsey", year: 2018, genre: "Pop", chords: "Am-C-G-D" }
        ]
    },

    // Week 5: Moveable E-Shape / A Minor Scale
    5: {
        title: "Songs with Barre Chords / A Minor Progressions",
        description: "Now you can play these songs anywhere on the neck with moveable shapes!",
        songs: [
            // Rock Classics
            { title: "Back in Black", artist: "AC/DC", year: 1980, genre: "Rock", chords: "E-D-A" },
            { title: "Highway to Hell", artist: "AC/DC", year: 1979, genre: "Rock", chords: "A-D-G" },
            { title: "Smoke on the Water", artist: "Deep Purple", year: 1972, genre: "Rock", chords: "Power chords" },
            { title: "Barracuda", artist: "Heart", year: 1977, genre: "Rock", chords: "E-based" },
            // 1980s-90s
            { title: "Smells Like Teen Spirit", artist: "Nirvana", year: 1991, genre: "Grunge", chords: "F-Bb-Ab-Db" },
            { title: "Enter Sandman", artist: "Metallica", year: 1991, genre: "Metal", chords: "Em-Am" },
            { title: "Everlong", artist: "Foo Fighters", year: 1997, genre: "Rock", chords: "D-Am-G" },
            { title: "Creep", artist: "Radiohead", year: 1992, genre: "Alternative", chords: "G-B-C-Cm" },
            // R&B/Hip-Hop
            { title: "Crazy in Love", artist: "Beyoncé", year: 2003, genre: "R&B", chords: "Am-F-C-G" },
            { title: "Get Lucky", artist: "Daft Punk", year: 2013, genre: "Disco/Funk", chords: "Am-C-Em-D" },
            { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", year: 2014, genre: "Funk/Pop", chords: "Dm groove" },
            { title: "Blinding Lights", artist: "The Weeknd", year: 2019, genre: "Synth Pop", chords: "Fm-Cm-Eb-Bb" },
            // Modern
            { title: "Seven Nation Army", artist: "The White Stripes", year: 2003, genre: "Rock", chords: "E-based riff" },
            { title: "Royals", artist: "Lorde", year: 2013, genre: "Pop", chords: "D-G-Bm" },
            { title: "Take Me to Church", artist: "Hozier", year: 2013, genre: "Indie", chords: "Em-Am-G-C" },
            { title: "Mr. Brightside", artist: "The Killers", year: 2003, genre: "Indie Rock", chords: "D-Bm-G-A" },
            { title: "Believer", artist: "Imagine Dragons", year: 2017, genre: "Rock", chords: "Am-Em-C-G" },
            { title: "High Hopes", artist: "Panic! At The Disco", year: 2018, genre: "Pop Rock", chords: "C-Am-F-G" },
            { title: "Thunder", artist: "Imagine Dragons", year: 2017, genre: "Pop Rock", chords: "C-Am-F" },
            { title: "bad guy", artist: "Billie Eilish", year: 2019, genre: "Pop", chords: "Gm-Cm-D" }
        ]
    },

    // Week 6: Moveable Pentatonic / E Minor
    6: {
        title: "Songs for Pentatonic Soloing",
        description: "These songs are perfect for practicing your pentatonic licks - jam along!",
        songs: [
            // Blues/Rock Classics
            { title: "Purple Haze", artist: "Jimi Hendrix", year: 1967, genre: "Rock", chords: "E7-G-A" },
            { title: "Sunshine of Your Love", artist: "Cream", year: 1967, genre: "Blues Rock", chords: "D-C riff" },
            { title: "Layla", artist: "Derek and the Dominos", year: 1970, genre: "Blues Rock", chords: "Dm-Bb-C" },
            { title: "Pride and Joy", artist: "Stevie Ray Vaughan", year: 1983, genre: "Blues", chords: "E blues" },
            // 1970s-80s
            { title: "Whole Lotta Love", artist: "Led Zeppelin", year: 1969, genre: "Rock", chords: "E-D riff" },
            { title: "Heartbreaker", artist: "Led Zeppelin", year: 1969, genre: "Rock", chords: "A-based" },
            { title: "Sweet Child O' Mine", artist: "Guns N' Roses", year: 1987, genre: "Rock", chords: "D-C-G" },
            { title: "Paradise City", artist: "Guns N' Roses", year: 1987, genre: "Rock", chords: "G-C-D" },
            // R&B/Funk
            { title: "Superstition", artist: "Stevie Wonder", year: 1972, genre: "Funk", chords: "Em-Bm" },
            { title: "I Feel Good", artist: "James Brown", year: 1965, genre: "Funk", chords: "D groove" },
            { title: "Kiss", artist: "Prince", year: 1986, genre: "Funk", chords: "A-E" },
            { title: "Treasure", artist: "Bruno Mars", year: 2012, genre: "Funk/Pop", chords: "Am-D" },
            // Modern
            { title: "Crazy Train", artist: "Ozzy Osbourne", year: 1980, genre: "Metal", chords: "A-E-F#m-D" },
            { title: "Thunderstruck", artist: "AC/DC", year: 1990, genre: "Rock", chords: "B-A-E" },
            { title: "Black Dog", artist: "Led Zeppelin", year: 1971, genre: "Rock", chords: "A-based" },
            { title: "Run to You", artist: "Bryan Adams", year: 1984, genre: "Rock", chords: "Em-D-C-G" },
            { title: "Rebel Yell", artist: "Billy Idol", year: 1983, genre: "Rock", chords: "B-E-F#" },
            { title: "The Pretender", artist: "Foo Fighters", year: 2007, genre: "Rock", chords: "Am-D-F-E" },
            { title: "Are You Gonna Be My Girl", artist: "Jet", year: 2003, genre: "Rock", chords: "A-D" },
            { title: "Lonely Boy", artist: "The Black Keys", year: 2011, genre: "Blues Rock", chords: "E-G-A-B" }
        ]
    },

    // Week 7: A-Shape Pattern / A Major
    7: {
        title: "Songs in A Major / Multiple Positions",
        description: "A Major has a bright, confident sound - perfect for uplifting songs!",
        songs: [
            // Classics
            { title: "Brown Sugar", artist: "The Rolling Stones", year: 1971, genre: "Rock", chords: "A-D-E" },
            { title: "Start Me Up", artist: "The Rolling Stones", year: 1981, genre: "Rock", chords: "A-D-E" },
            { title: "Beast of Burden", artist: "The Rolling Stones", year: 1978, genre: "Rock", chords: "E-A-B" },
            { title: "I Love Rock 'n' Roll", artist: "Joan Jett", year: 1981, genre: "Rock", chords: "E-A-B" },
            // 1980s-90s
            { title: "Livin' on a Prayer", artist: "Bon Jovi", year: 1986, genre: "Rock", chords: "Em-C-D" },
            { title: "Don't Stop Believin'", artist: "Journey", year: 1981, genre: "Rock", chords: "E-B-C#m-A" },
            { title: "Summer of '69", artist: "Bryan Adams", year: 1984, genre: "Rock", chords: "D-A-Bm-G" },
            { title: "Pour Some Sugar on Me", artist: "Def Leppard", year: 1987, genre: "Rock", chords: "A-E riff" },
            // R&B/Pop
            { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", year: 1987, genre: "Pop", chords: "A-D-E" },
            { title: "Signed, Sealed, Delivered", artist: "Stevie Wonder", year: 1970, genre: "R&B", chords: "A-D-E" },
            { title: "Higher Ground", artist: "Stevie Wonder", year: 1973, genre: "Funk", chords: "E groove" },
            { title: "Happy", artist: "Pharrell Williams", year: 2013, genre: "Pop/Funk", chords: "F-Bb-C" },
            // Modern
            { title: "Shut Up and Dance", artist: "Walk the Moon", year: 2014, genre: "Pop Rock", chords: "D-A-E-F#m" },
            { title: "Can't Stop the Feeling", artist: "Justin Timberlake", year: 2016, genre: "Pop", chords: "C-Am-F" },
            { title: "24K Magic", artist: "Bruno Mars", year: 2016, genre: "Funk/Pop", chords: "F#m groove" },
            { title: "Finesse", artist: "Bruno Mars", year: 2016, genre: "New Jack Swing", chords: "Dm-Gm-C" },
            { title: "Good as Hell", artist: "Lizzo", year: 2016, genre: "Pop/Soul", chords: "Bb-F-Gm" },
            { title: "Juice", artist: "Lizzo", year: 2019, genre: "Pop/Funk", chords: "A groove" },
            { title: "Levitating", artist: "Dua Lipa", year: 2020, genre: "Disco Pop", chords: "Bm-E-A-D" },
            { title: "About Damn Time", artist: "Lizzo", year: 2022, genre: "Disco Pop", chords: "Am-Dm-G" }
        ]
    },

    // Week 8: Connecting Positions / E Major
    8: {
        title: "Songs in E Major - Full Neck Freedom",
        description: "E Major songs let you practice connecting scale positions across the neck!",
        songs: [
            // Rock Classics
            { title: "Johnny B. Goode", artist: "Chuck Berry", year: 1958, genre: "Rock & Roll", chords: "E-A-B" },
            { title: "Rock Around the Clock", artist: "Bill Haley", year: 1954, genre: "Rock & Roll", chords: "E-A-B" },
            { title: "Hound Dog", artist: "Elvis Presley", year: 1956, genre: "Rock & Roll", chords: "E-A-B" },
            { title: "Roll Over Beethoven", artist: "Chuck Berry", year: 1956, genre: "Rock & Roll", chords: "E-A-B" },
            // 1970s-80s
            { title: "Mustang Sally", artist: "Wilson Pickett", year: 1966, genre: "Soul", chords: "E-A-B" },
            { title: "Old Time Rock and Roll", artist: "Bob Seger", year: 1978, genre: "Rock", chords: "E-A-B" },
            { title: "Dancing in the Dark", artist: "Bruce Springsteen", year: 1984, genre: "Rock", chords: "E-A-B" },
            { title: "Born to Run", artist: "Bruce Springsteen", year: 1975, genre: "Rock", chords: "E-A-B-C#m" },
            // R&B/Soul
            { title: "Respect", artist: "Aretha Franklin", year: 1967, genre: "Soul", chords: "E-A-B" },
            { title: "Think", artist: "Aretha Franklin", year: 1968, genre: "Soul", chords: "E-A-B" },
            { title: "Chain of Fools", artist: "Aretha Franklin", year: 1967, genre: "Soul", chords: "A-based" },
            { title: "Soul Man", artist: "Sam & Dave", year: 1967, genre: "Soul", chords: "E-A-B" },
            // Modern
            { title: "Shake It Off", artist: "Taylor Swift", year: 2014, genre: "Pop", chords: "E-B-C#m-A" },
            { title: "22", artist: "Taylor Swift", year: 2012, genre: "Pop", chords: "E-B-C#m-A" },
            { title: "Style", artist: "Taylor Swift", year: 2014, genre: "Pop", chords: "E-B-A-C#m" },
            { title: "Cruel Summer", artist: "Taylor Swift", year: 2019, genre: "Pop", chords: "E-B-C#m-A" },
            { title: "Anti-Hero", artist: "Taylor Swift", year: 2022, genre: "Pop", chords: "E-B-C#m-A" },
            { title: "Watermelon Sugar", artist: "Harry Styles", year: 2019, genre: "Pop/Rock", chords: "A-E-D" },
            { title: "As It Was", artist: "Harry Styles", year: 2022, genre: "Pop", chords: "F#m-D-E-A" },
            { title: "Late Night Talking", artist: "Harry Styles", year: 2022, genre: "Pop", chords: "E groove" }
        ]
    },

    // Week 9: Pentatonic Connection / F Major
    9: {
        title: "Songs in F Major",
        description: "F Major adds a warm, sophisticated sound - common in ballads and R&B!",
        songs: [
            // Classics
            { title: "Hey Jude", artist: "The Beatles", year: 1968, genre: "Rock", chords: "F-C-Bb-F" },
            { title: "Let It Be", artist: "The Beatles", year: 1970, genre: "Rock", chords: "C-G-Am-F" },
            { title: "Imagine", artist: "John Lennon", year: 1971, genre: "Rock", chords: "C-F" },
            { title: "Yesterday", artist: "The Beatles", year: 1965, genre: "Pop", chords: "F-Em7-A7-Dm" },
            // 1980s-90s
            { title: "With or Without You", artist: "U2", year: 1987, genre: "Rock", chords: "D-A-Bm-G" },
            { title: "One", artist: "U2", year: 1991, genre: "Rock", chords: "Am-D-F-G-C" },
            { title: "Unchained Melody", artist: "Righteous Brothers", year: 1965, genre: "Soul", chords: "C-Am-F-G" },
            { title: "Stand by Me", artist: "Ben E. King", year: 1961, genre: "Soul", chords: "A-F#m-D-E" },
            // R&B/Hip-Hop
            { title: "No Scrubs", artist: "TLC", year: 1999, genre: "R&B", chords: "F-based" },
            { title: "Waterfalls", artist: "TLC", year: 1995, genre: "R&B", chords: "Eb-Ab-Db" },
            { title: "Killing Me Softly", artist: "Fugees", year: 1996, genre: "R&B/Hip-Hop", chords: "Em-Am-D-G" },
            { title: "Tyrone", artist: "Erykah Badu", year: 1997, genre: "R&B", chords: "F groove" },
            // Modern
            { title: "Say Something", artist: "A Great Big World", year: 2013, genre: "Pop", chords: "Bm-G-D-A" },
            { title: "All of Me", artist: "John Legend", year: 2013, genre: "R&B/Pop", chords: "F-Am-C-Dm" },
            { title: "Thinking Out Loud", artist: "Ed Sheeran", year: 2014, genre: "Pop", chords: "D-G-A-Bm" },
            { title: "Stay With Me", artist: "Sam Smith", year: 2014, genre: "Pop/Soul", chords: "Am-F-C" },
            { title: "Fix You", artist: "Coldplay", year: 2005, genre: "Rock", chords: "Eb-Bb-Cm-Gm" },
            { title: "Viva la Vida", artist: "Coldplay", year: 2008, genre: "Rock", chords: "C-D-G-Em" },
            { title: "The Scientist", artist: "Coldplay", year: 2002, genre: "Rock", chords: "Dm-Bb-F-C" },
            { title: "Yellow", artist: "Coldplay", year: 2000, genre: "Rock", chords: "B-Badd11-F#-E" }
        ]
    },

    // Week 10: Natural Minor / D Minor
    10: {
        title: "Songs in D Minor / Minor Keys",
        description: "D Minor has a dramatic, powerful sound - from classical to modern hits!",
        songs: [
            // Classics
            { title: "Stairway to Heaven", artist: "Led Zeppelin", year: 1971, genre: "Rock", chords: "Am-based" },
            { title: "Riders on the Storm", artist: "The Doors", year: 1971, genre: "Rock", chords: "Em-based" },
            { title: "Light My Fire", artist: "The Doors", year: 1967, genre: "Rock", chords: "Am-F#m" },
            { title: "Paint It Black", artist: "The Rolling Stones", year: 1966, genre: "Rock", chords: "Em-B7" },
            // 1980s-90s
            { title: "Billie Jean", artist: "Michael Jackson", year: 1982, genre: "Pop", chords: "F#m-Bm" },
            { title: "Beat It", artist: "Michael Jackson", year: 1982, genre: "Pop/Rock", chords: "Em-D" },
            { title: "Bad", artist: "Michael Jackson", year: 1987, genre: "Pop", chords: "Am-based" },
            { title: "Thriller", artist: "Michael Jackson", year: 1982, genre: "Pop", chords: "C#m-F#m" },
            // R&B/Hip-Hop
            { title: "In Da Club", artist: "50 Cent", year: 2003, genre: "Rap", chords: "Em-based" },
            { title: "Gin and Juice", artist: "Snoop Dogg", year: 1993, genre: "Rap", chords: "Dm groove" },
            { title: "California Love", artist: "2Pac", year: 1995, genre: "Rap", chords: "Am-Dm" },
            { title: "Humble", artist: "Kendrick Lamar", year: 2017, genre: "Rap", chords: "Dm-based" },
            { title: "Money Trees", artist: "Kendrick Lamar", year: 2012, genre: "Rap", chords: "Em-based" },
            // Modern
            { title: "Rolling in the Deep", artist: "Adele", year: 2010, genre: "Pop/Soul", chords: "Cm-G-Bb-F" },
            { title: "Set Fire to the Rain", artist: "Adele", year: 2011, genre: "Pop", chords: "Dm-F-C-Gm" },
            { title: "Hello", artist: "Adele", year: 2015, genre: "Pop", chords: "Em-G-D-C" },
            { title: "Bad Romance", artist: "Lady Gaga", year: 2009, genre: "Pop", chords: "Am-C-F-G" },
            { title: "Poker Face", artist: "Lady Gaga", year: 2008, genre: "Pop", chords: "Am-F-C-G" },
            { title: "Bury a Friend", artist: "Billie Eilish", year: 2019, genre: "Pop", chords: "Dm-based" },
            { title: "Therefore I Am", artist: "Billie Eilish", year: 2020, genre: "Pop", chords: "Dm-Am-Em" }
        ]
    },

    // Week 11: Blues Scale / Pentatonics
    11: {
        title: "Blues Songs & Pentatonic Jams",
        description: "The blues scale adds that gritty, soulful sound to your playing!",
        songs: [
            // Blues Classics
            { title: "The Thrill Is Gone", artist: "B.B. King", year: 1969, genre: "Blues", chords: "Bm-Em" },
            { title: "Crossroads", artist: "Robert Johnson/Cream", year: 1936, genre: "Blues", chords: "A-D-E" },
            { title: "Sweet Home Chicago", artist: "Robert Johnson", year: 1936, genre: "Blues", chords: "E-A-B" },
            { title: "Red House", artist: "Jimi Hendrix", year: 1967, genre: "Blues", chords: "B-E-F#" },
            // Blues Rock
            { title: "Born Under a Bad Sign", artist: "Albert King", year: 1967, genre: "Blues", chords: "C#m blues" },
            { title: "Texas Flood", artist: "Stevie Ray Vaughan", year: 1983, genre: "Blues", chords: "G blues" },
            { title: "Voodoo Child", artist: "Jimi Hendrix", year: 1968, genre: "Blues Rock", chords: "E blues" },
            { title: "Little Wing", artist: "Jimi Hendrix", year: 1967, genre: "Blues Rock", chords: "Em-G-Am-Em" },
            // R&B/Soul
            { title: "Fever", artist: "Peggy Lee", year: 1958, genre: "Jazz/Pop", chords: "Am blues" },
            { title: "Hit the Road Jack", artist: "Ray Charles", year: 1961, genre: "R&B", chords: "Am-G-F-E" },
            { title: "Georgia on My Mind", artist: "Ray Charles", year: 1960, genre: "Jazz/Soul", chords: "F-Am-Dm-G7" },
            { title: "What'd I Say", artist: "Ray Charles", year: 1959, genre: "R&B", chords: "E blues" },
            // Modern Blues-influenced
            { title: "Use Somebody", artist: "Kings of Leon", year: 2008, genre: "Rock", chords: "C-Em-Am-F" },
            { title: "Sex on Fire", artist: "Kings of Leon", year: 2008, genre: "Rock", chords: "E-C#m" },
            { title: "Gravity", artist: "John Mayer", year: 2006, genre: "Blues/Pop", chords: "G-C" },
            { title: "Slow Dancing in a Burning Room", artist: "John Mayer", year: 2006, genre: "Blues/Pop", chords: "C#m-A-E-B" },
            { title: "Black Hole Sun", artist: "Soundgarden", year: 1994, genre: "Grunge", chords: "G-Bb-F-Em" },
            { title: "Flood", artist: "Jars of Clay", year: 1995, genre: "Alt Rock", chords: "Em-Am-D-G" },
            { title: "Smooth Operator", artist: "Sade", year: 1984, genre: "Smooth Jazz", chords: "Am-G-F-E" },
            { title: "No Ordinary Love", artist: "Sade", year: 1992, genre: "Smooth Jazz", chords: "Dm-Gm" }
        ]
    },

    // Week 12: All Together / 7th Chords
    12: {
        title: "Songs with 7th Chords & Jazz Influence",
        description: "7th chords add sophistication - these songs use everything you've learned!",
        songs: [
            // Jazz Standards
            { title: "Fly Me to the Moon", artist: "Frank Sinatra", year: 1964, genre: "Jazz", chords: "Am7-Dm7-G7-Cmaj7" },
            { title: "The Way You Look Tonight", artist: "Frank Sinatra", year: 1936, genre: "Jazz", chords: "Eb-Cm7-Fm7-Bb7" },
            { title: "What a Wonderful World", artist: "Louis Armstrong", year: 1967, genre: "Jazz", chords: "F-Am-Bb-Am-Gm-F" },
            { title: "Autumn Leaves", artist: "Nat King Cole", year: 1956, genre: "Jazz", chords: "Am7-D7-Gmaj7-Cmaj7" },
            // Soul/R&B
            { title: "Isn't She Lovely", artist: "Stevie Wonder", year: 1976, genre: "R&B", chords: "C#m7-F#7-B-E" },
            { title: "Sir Duke", artist: "Stevie Wonder", year: 1976, genre: "R&B", chords: "B-C#m7-D#m7-E" },
            { title: "Overjoyed", artist: "Stevie Wonder", year: 1985, genre: "R&B", chords: "Eb-Ab-Bbsus" },
            { title: "Never Too Much", artist: "Luther Vandross", year: 1981, genre: "R&B", chords: "Fmaj7-Em7-Dm7-G7" },
            // Neo-Soul
            { title: "Brown Sugar", artist: "D'Angelo", year: 1995, genre: "Neo-Soul", chords: "Cm7-Fm7" },
            { title: "Untitled (How Does It Feel)", artist: "D'Angelo", year: 2000, genre: "Neo-Soul", chords: "Eb-Fm7-Bb7" },
            { title: "On & On", artist: "Erykah Badu", year: 1997, genre: "Neo-Soul", chords: "Am7-Em7" },
            { title: "Bag Lady", artist: "Erykah Badu", year: 2000, genre: "Neo-Soul", chords: "Dm7 groove" },
            // Modern R&B/Pop
            { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", year: 2017, genre: "R&B", chords: "Gmaj7-F#m7-Em7-A7" },
            { title: "Get You", artist: "Daniel Caesar ft. Kali Uchis", year: 2016, genre: "R&B", chords: "Fmaj7-Em7-Am7" },
            { title: "Moonlight", artist: "Ariana Grande", year: 2016, genre: "R&B/Pop", chords: "Bbmaj7-Am7-Gm7" },
            { title: "Pink + White", artist: "Frank Ocean", year: 2016, genre: "R&B", chords: "Db-Fm-Bbm7" },
            { title: "Ivy", artist: "Frank Ocean", year: 2016, genre: "R&B", chords: "Cmaj7-Dm7-Em7" },
            { title: "Sunday Best", artist: "Surfaces", year: 2019, genre: "Pop", chords: "C-Dm7-G7-Am7" },
            { title: "Electric", artist: "Katy Perry", year: 2021, genre: "Pop", chords: "Am7-Dm7-G7" },
            { title: "Peaches", artist: "Justin Bieber", year: 2021, genre: "R&B/Pop", chords: "Cmaj7-F#m7-Bm7-E7" }
        ]
    }
};
