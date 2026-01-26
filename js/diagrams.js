// Visual diagrams for piano keys and guitar fingering
// Complete diagrams for 12-week curriculum

// ==================== GUITAR CHORD DIAGRAMS ====================
// Format: [E, A, D, G, B, e] (low to high), x = muted, 0 = open, 1-12 = fret
const GUITAR_CHORDS = {
    // Week 1 - C Major
    'C Major (Open)': {
        frets: ['x', 3, 2, 0, 1, 0],
        fingers: ['x', 3, 2, 0, 1, 0],
        barreAt: null
    },
    'C Major (A Shape - 3rd fret)': {
        frets: ['x', 3, 5, 5, 5, 3],
        fingers: ['x', 1, 2, 3, 4, 1],
        barreAt: 3,
        startFret: 3
    },
    // Week 2 - G Major
    'G Major (Open)': {
        frets: [3, 2, 0, 0, 0, 3],
        fingers: [2, 1, 0, 0, 0, 3],
        barreAt: null
    },
    'G Major (E Shape - 3rd fret)': {
        frets: [3, 5, 5, 4, 3, 3],
        fingers: [1, 3, 4, 2, 1, 1],
        barreAt: 3,
        startFret: 3
    },
    // Week 3 - D Major
    'D Major (Open)': {
        frets: ['x', 'x', 0, 2, 3, 2],
        fingers: ['x', 'x', 0, 1, 3, 2],
        barreAt: null
    },
    'D Major (C Shape - 2nd fret)': {
        frets: ['x', 5, 4, 2, 3, 2],
        fingers: ['x', 4, 3, 1, 2, 1],
        barreAt: 2,
        startFret: 2
    },
    // Week 4 - Progression
    'C-G-D Progression (Smooth Changes)': {
        frets: ['x', 3, 2, 0, 1, 0],
        fingers: ['x', 3, 2, 0, 1, 0],
        barreAt: null
    },
    // Week 5 - A Minor
    'A Minor (Open)': {
        frets: ['x', 0, 2, 2, 1, 0],
        fingers: ['x', 0, 2, 3, 1, 0],
        barreAt: null
    },
    'A Minor (E Shape Barre - 5th fret)': {
        frets: [5, 7, 7, 5, 5, 5],
        fingers: [1, 3, 4, 1, 1, 1],
        barreAt: 5,
        startFret: 5
    },
    // Week 6 - E Minor
    'E Minor (Open)': {
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 2, 3, 0, 0, 0],
        barreAt: null
    },
    'E Minor (D Shape - 7th fret)': {
        frets: ['x', 'x', 9, 9, 8, 7],
        fingers: ['x', 'x', 3, 4, 2, 1],
        barreAt: null,
        startFret: 7
    },
    // Week 7 - A Major
    'A Major (Open)': {
        frets: ['x', 0, 2, 2, 2, 0],
        fingers: ['x', 0, 1, 2, 3, 0],
        barreAt: null
    },
    'A Major (E Shape Barre - 5th fret)': {
        frets: [5, 7, 7, 6, 5, 5],
        fingers: [1, 3, 4, 2, 1, 1],
        barreAt: 5,
        startFret: 5
    },
    // Week 8 - E Major
    'E Major (Open)': {
        frets: [0, 2, 2, 1, 0, 0],
        fingers: [0, 2, 3, 1, 0, 0],
        barreAt: null
    },
    'E Major (A Shape - 7th fret)': {
        frets: ['x', 7, 9, 9, 9, 7],
        fingers: ['x', 1, 2, 3, 4, 1],
        barreAt: 7,
        startFret: 7
    },
    // Week 9 - F Major
    'F Major (Barre - 1st fret)': {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barreAt: 1
    },
    'F Major (C Shape - 5th fret)': {
        frets: ['x', 'x', 3, 2, 1, 1],
        fingers: ['x', 'x', 3, 2, 1, 1],
        barreAt: 1,
        startFret: 1
    },
    // Week 10 - D Minor
    'D Minor (Open)': {
        frets: ['x', 'x', 0, 2, 3, 1],
        fingers: ['x', 'x', 0, 2, 3, 1],
        barreAt: null
    },
    'D Minor (A Shape Barre - 5th fret)': {
        frets: ['x', 5, 7, 7, 6, 5],
        fingers: ['x', 1, 3, 4, 2, 1],
        barreAt: 5,
        startFret: 5
    },
    // Week 11 - Pentatonic (shown as scale patterns)
    'A Minor Pentatonic (Box 2)': {
        frets: ['x', 'x', 5, 5, 5, 5],
        fingers: ['x', 'x', 1, 1, 1, 1],
        barreAt: 5,
        startFret: 5
    },
    'E Minor Pentatonic (Box 1)': {
        frets: [0, 2, 2, 0, 0, 0],
        fingers: [0, 2, 3, 0, 0, 0],
        barreAt: null
    },
    // Week 12 - 7th chords
    'A7 (Open)': {
        frets: ['x', 0, 2, 0, 2, 0],
        fingers: ['x', 0, 1, 0, 2, 0],
        barreAt: null
    },
    'E7 (Open)': {
        frets: [0, 2, 0, 1, 0, 0],
        fingers: [0, 2, 0, 1, 0, 0],
        barreAt: null
    },
    'D7 (Open)': {
        frets: ['x', 'x', 0, 2, 1, 2],
        fingers: ['x', 'x', 0, 2, 1, 3],
        barreAt: null
    }
};

// ==================== GUITAR SCALE DIAGRAMS ====================
const GUITAR_SCALES = {
    // Week 1
    'C Major Scale (Open Position)': {
        startFret: 0,
        positions: [
            {string: 5, fret: 3, note: 'C'}, {string: 5, fret: 5, note: 'D'},
            {string: 4, fret: 2, note: 'E'}, {string: 4, fret: 3, note: 'F'},
            {string: 4, fret: 5, note: 'G'}, {string: 3, fret: 2, note: 'A'},
            {string: 3, fret: 4, note: 'B'}, {string: 3, fret: 5, note: 'C'}
        ]
    },
    // Week 2
    'G Major Scale (Open Position)': {
        startFret: 0,
        positions: [
            {string: 6, fret: 3, note: 'G'}, {string: 5, fret: 0, note: 'A'},
            {string: 5, fret: 2, note: 'B'}, {string: 5, fret: 3, note: 'C'},
            {string: 4, fret: 0, note: 'D'}, {string: 4, fret: 2, note: 'E'},
            {string: 4, fret: 4, note: 'F#'}, {string: 3, fret: 0, note: 'G'}
        ]
    },
    // Week 3
    'D Major Scale (Open Position)': {
        startFret: 0,
        positions: [
            {string: 4, fret: 0, note: 'D'}, {string: 4, fret: 2, note: 'E'},
            {string: 4, fret: 4, note: 'F#'}, {string: 3, fret: 0, note: 'G'},
            {string: 3, fret: 2, note: 'A'}, {string: 3, fret: 4, note: 'B'},
            {string: 2, fret: 2, note: 'C#'}, {string: 2, fret: 3, note: 'D'}
        ]
    },
    // Week 4
    'C-G-D Chord Transitions': {
        startFret: 0,
        positions: [
            {string: 5, fret: 3, note: 'C'}, {string: 4, fret: 2, note: 'E'},
            {string: 3, fret: 0, note: 'G'}, {string: 6, fret: 3, note: 'G'},
            {string: 5, fret: 2, note: 'B'}, {string: 4, fret: 0, note: 'D'}
        ]
    },
    // Week 5
    'A Minor Scale (Natural)': {
        startFret: 0,
        positions: [
            {string: 5, fret: 0, note: 'A'}, {string: 5, fret: 2, note: 'B'},
            {string: 5, fret: 3, note: 'C'}, {string: 4, fret: 0, note: 'D'},
            {string: 4, fret: 2, note: 'E'}, {string: 4, fret: 3, note: 'F'},
            {string: 3, fret: 0, note: 'G'}, {string: 3, fret: 2, note: 'A'}
        ]
    },
    // Week 6
    'E Minor Scale (Natural)': {
        startFret: 0,
        positions: [
            {string: 6, fret: 0, note: 'E'}, {string: 6, fret: 2, note: 'F#'},
            {string: 6, fret: 3, note: 'G'}, {string: 5, fret: 0, note: 'A'},
            {string: 5, fret: 2, note: 'B'}, {string: 5, fret: 3, note: 'C'},
            {string: 4, fret: 0, note: 'D'}, {string: 4, fret: 2, note: 'E'}
        ]
    },
    // Week 7
    'A Major Scale (Open Position)': {
        startFret: 0,
        positions: [
            {string: 5, fret: 0, note: 'A'}, {string: 5, fret: 2, note: 'B'},
            {string: 5, fret: 4, note: 'C#'}, {string: 4, fret: 0, note: 'D'},
            {string: 4, fret: 2, note: 'E'}, {string: 4, fret: 4, note: 'F#'},
            {string: 3, fret: 1, note: 'G#'}, {string: 3, fret: 2, note: 'A'}
        ]
    },
    // Week 8
    'E Major Scale (Open Position)': {
        startFret: 0,
        positions: [
            {string: 6, fret: 0, note: 'E'}, {string: 6, fret: 2, note: 'F#'},
            {string: 6, fret: 4, note: 'G#'}, {string: 5, fret: 0, note: 'A'},
            {string: 5, fret: 2, note: 'B'}, {string: 5, fret: 4, note: 'C#'},
            {string: 4, fret: 1, note: 'D#'}, {string: 4, fret: 2, note: 'E'}
        ]
    },
    // Week 9
    'F Major Scale': {
        startFret: 1,
        positions: [
            {string: 6, fret: 1, note: 'F'}, {string: 6, fret: 3, note: 'G'},
            {string: 5, fret: 0, note: 'A'}, {string: 5, fret: 1, note: 'Bb'},
            {string: 5, fret: 3, note: 'C'}, {string: 4, fret: 0, note: 'D'},
            {string: 4, fret: 2, note: 'E'}, {string: 4, fret: 3, note: 'F'}
        ]
    },
    // Week 10
    'D Minor Scale (Natural)': {
        startFret: 0,
        positions: [
            {string: 4, fret: 0, note: 'D'}, {string: 4, fret: 2, note: 'E'},
            {string: 4, fret: 3, note: 'F'}, {string: 3, fret: 0, note: 'G'},
            {string: 3, fret: 2, note: 'A'}, {string: 3, fret: 3, note: 'Bb'},
            {string: 2, fret: 1, note: 'C'}, {string: 2, fret: 3, note: 'D'}
        ]
    },
    // Week 11
    'A Minor Pentatonic (Box 1)': {
        startFret: 5,
        positions: [
            {string: 6, fret: 5, note: 'A'}, {string: 6, fret: 8, note: 'C'},
            {string: 5, fret: 5, note: 'D'}, {string: 5, fret: 7, note: 'E'},
            {string: 4, fret: 5, note: 'G'}, {string: 4, fret: 7, note: 'A'}
        ]
    },
    // Week 12
    'Blues Scale (A)': {
        startFret: 5,
        positions: [
            {string: 6, fret: 5, note: 'A'}, {string: 6, fret: 8, note: 'C'},
            {string: 5, fret: 5, note: 'D'}, {string: 5, fret: 6, note: 'Eb'},
            {string: 5, fret: 7, note: 'E'}, {string: 4, fret: 5, note: 'G'},
            {string: 4, fret: 7, note: 'A'}
        ]
    }
};

// ==================== PIANO SCALE FINGERING ====================
// RH = Right Hand, LH = Left Hand
// For scales, LH typically mirrors RH but starting from the top going down
const PIANO_FINGERING = {
    // Week 1
    'C Major Scale': {
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'RH: Thumb crosses under after E (finger 3) to play F'
    },
    // Week 2
    'G Major Scale': {
        notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'RH: Thumb under after B. LH: Finger 3 crosses over after thumb plays D'
    },
    // Week 3
    'D Major Scale': {
        notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'Same pattern as C and G - the black keys make the crossing easier!'
    },
    // Week 4
    'C-G-D Chord Transitions': {
        notes: ['C', 'E', 'G', 'G', 'B', 'D', 'D', 'F#', 'A'],
        fingersRH: [1, 3, 5, 1, 3, 5, 1, 3, 5],
        fingersLH: [5, 3, 1, 5, 3, 1, 5, 3, 1],
        thumbUnder: 'Keep hand position stable - move the whole arm between chords'
    },
    // Week 5
    'A Minor Scale (Natural)': {
        notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'Same as C Major fingering - same white keys!'
    },
    // Week 6
    'E Minor Scale (Natural)': {
        notes: ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'RH thumb goes under after G to play A'
    },
    // Week 7
    'A Major Scale': {
        notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'RH: Thumb under after C# (black key). The black key helps guide placement!'
    },
    // Week 8
    'E Major Scale': {
        notes: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'RH: Thumb under after G#. Four black keys but standard fingering still works!'
    },
    // Week 9
    'F Major Scale': {
        notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'],
        fingersRH: [1, 2, 3, 4, 1, 2, 3, 4],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'SPECIAL: RH uses finger 4 on Bb, then thumb crosses under to C. Different from other scales!'
    },
    // Week 10
    'D Minor Scale (Natural)': {
        notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C', 'D'],
        fingersRH: [1, 2, 3, 1, 2, 3, 4, 5],
        fingersLH: [5, 4, 3, 2, 1, 3, 2, 1],
        thumbUnder: 'Standard fingering. The Bb is played with finger 3 in RH.'
    },
    // Week 11
    'C Major Pentatonic': {
        notes: ['C', 'D', 'E', 'G', 'A', 'C'],
        fingersRH: [1, 2, 3, 1, 2, 5],
        fingersLH: [5, 4, 3, 2, 1, 1],
        thumbUnder: 'Skip F and B - the gaps make this scale feel open and free'
    },
    'A Minor Pentatonic': {
        notes: ['A', 'C', 'D', 'E', 'G', 'A'],
        fingersRH: [1, 2, 3, 1, 2, 5],
        fingersLH: [5, 3, 2, 1, 3, 1],
        thumbUnder: 'The skips between notes require smooth hand repositioning'
    },
    'G Major Pentatonic': {
        notes: ['G', 'A', 'B', 'D', 'E', 'G'],
        fingersRH: [1, 2, 3, 1, 2, 5],
        fingersLH: [5, 4, 3, 2, 1, 1],
        thumbUnder: 'Notice the gap from B to D - lift and reposition smoothly'
    },
    // Week 12
    'Blues Scale (C)': {
        notes: ['C', 'Eb', 'F', 'F#', 'G', 'Bb', 'C'],
        fingersRH: [1, 2, 3, 4, 1, 2, 5],
        fingersLH: [5, 4, 3, 2, 1, 2, 1],
        thumbUnder: 'The chromatic F-F#-G passage uses fingers 3-4-1 in RH. Feel the blues!'
    }
};

// Backwards compatibility - map 'fingers' to 'fingersRH' for existing code
Object.keys(PIANO_FINGERING).forEach(key => {
    if (!PIANO_FINGERING[key].fingers) {
        PIANO_FINGERING[key].fingers = PIANO_FINGERING[key].fingersRH;
    }
});

// ==================== PIANO CHORD FINGERING ====================
const PIANO_CHORDS_FINGERING = {
    // Week 1 - C Major inversions
    'C Major (Root Position)': { notes: ['C', 'E', 'G'], fingers: [1, 3, 5] },
    'C Major (1st Inversion)': { notes: ['E', 'G', 'C'], fingers: [1, 2, 5] },
    'C Major (2nd Inversion)': { notes: ['G', 'C', 'E'], fingers: [1, 3, 5] },
    // Week 2 - G Major inversions
    'G Major (Root Position)': { notes: ['G', 'B', 'D'], fingers: [1, 3, 5] },
    'G Major (1st Inversion)': { notes: ['B', 'D', 'G'], fingers: [1, 2, 5] },
    'G Major (2nd Inversion)': { notes: ['D', 'G', 'B'], fingers: [1, 3, 5] },
    // Week 3 - D Major inversions
    'D Major (Root Position)': { notes: ['D', 'F#', 'A'], fingers: [1, 3, 5] },
    'D Major (1st Inversion)': { notes: ['F#', 'A', 'D'], fingers: [1, 2, 5] },
    'D Major (2nd Inversion)': { notes: ['A', 'D', 'F#'], fingers: [1, 3, 5] },
    // Week 4
    'C-G-D Progression (Using Inversions)': { notes: ['C', 'E', 'G'], fingers: [1, 3, 5] },
    // Week 5 - A Minor inversions
    'A Minor (Root Position)': { notes: ['A', 'C', 'E'], fingers: [1, 3, 5] },
    'A Minor (1st Inversion)': { notes: ['C', 'E', 'A'], fingers: [1, 2, 5] },
    'A Minor (2nd Inversion)': { notes: ['E', 'A', 'C'], fingers: [1, 3, 5] },
    // Week 6 - E Minor inversions
    'E Minor (Root Position)': { notes: ['E', 'G', 'B'], fingers: [1, 3, 5] },
    'E Minor (1st Inversion)': { notes: ['G', 'B', 'E'], fingers: [1, 2, 5] },
    'E Minor (2nd Inversion)': { notes: ['B', 'E', 'G'], fingers: [1, 3, 5] },
    // Week 7 - A Major inversions
    'A Major (Root Position)': { notes: ['A', 'C#', 'E'], fingers: [1, 3, 5] },
    'A Major (1st Inversion)': { notes: ['C#', 'E', 'A'], fingers: [1, 2, 5] },
    'A Major (2nd Inversion)': { notes: ['E', 'A', 'C#'], fingers: [1, 3, 5] },
    // Week 8 - E Major inversions
    'E Major (Root Position)': { notes: ['E', 'G#', 'B'], fingers: [1, 3, 5] },
    'E Major (1st Inversion)': { notes: ['G#', 'B', 'E'], fingers: [1, 2, 5] },
    'E Major (2nd Inversion)': { notes: ['B', 'E', 'G#'], fingers: [1, 3, 5] },
    // Week 9 - F Major inversions
    'F Major (Root Position)': { notes: ['F', 'A', 'C'], fingers: [1, 3, 5] },
    'F Major (1st Inversion)': { notes: ['A', 'C', 'F'], fingers: [1, 2, 5] },
    'F Major (2nd Inversion)': { notes: ['C', 'F', 'A'], fingers: [1, 3, 5] },
    // Week 10 - D Minor inversions
    'D Minor (Root Position)': { notes: ['D', 'F', 'A'], fingers: [1, 3, 5] },
    'D Minor (1st Inversion)': { notes: ['F', 'A', 'D'], fingers: [1, 2, 5] },
    'D Minor (2nd Inversion)': { notes: ['A', 'D', 'F'], fingers: [1, 3, 5] },
    // Week 12 - 7th chords
    'C Major 7th': { notes: ['C', 'E', 'G', 'B'], fingers: [1, 2, 3, 5] },
    'G7 (Dominant)': { notes: ['G', 'B', 'D', 'F'], fingers: [1, 2, 3, 5] },
    'A Minor 7th': { notes: ['A', 'C', 'E', 'G'], fingers: [1, 2, 3, 5] }
};

// ==================== DIAGRAM MODAL CLASS ====================
class DiagramModal {
    constructor() {
        this.modal = null;
        this.createModal();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'diagram-modal';
        this.modal.innerHTML = `
            <div class="diagram-content">
                <button class="diagram-close">&times;</button>
                <h2 class="diagram-title"></h2>
                <div class="diagram-container"></div>
                <div class="diagram-notes"></div>
            </div>
        `;
        document.body.appendChild(this.modal);

        this.modal.querySelector('.diagram-close').addEventListener('click', () => this.hide());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.hide();
        });
    }

    show(instrument, type, name) {
        const title = this.modal.querySelector('.diagram-title');
        const container = this.modal.querySelector('.diagram-container');
        const notes = this.modal.querySelector('.diagram-notes');

        title.textContent = name;
        container.innerHTML = '';
        notes.innerHTML = '';

        if (instrument === 'guitar') {
            if (type === 'chords') {
                this.renderGuitarChord(container, notes, name);
            } else {
                this.renderGuitarScale(container, notes, name);
            }
        } else {
            if (type === 'chords') {
                this.renderPianoChord(container, notes, name);
            } else {
                this.renderPianoScale(container, notes, name);
            }
        }

        this.modal.classList.add('show');
    }

    hide() {
        this.modal.classList.remove('show');
    }

    renderGuitarChord(container, notesDiv, name) {
        const chord = GUITAR_CHORDS[name];
        if (!chord) {
            container.innerHTML = '<p style="text-align:center;color:#aaa;">Diagram coming soon</p>';
            return;
        }

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 150 180');
        svg.setAttribute('class', 'guitar-diagram');

        const startFret = chord.startFret || 0;

        // Fret number indicator if not at nut
        if (startFret > 0) {
            const fretNum = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            fretNum.setAttribute('x', '15');
            fretNum.setAttribute('y', '55');
            fretNum.setAttribute('fill', '#888');
            fretNum.setAttribute('font-size', '12');
            fretNum.textContent = startFret + 'fr';
            svg.appendChild(fretNum);
        }

        // Draw nut or fret line
        if (startFret === 0) {
            const nut = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            nut.setAttribute('x', '25');
            nut.setAttribute('y', '30');
            nut.setAttribute('width', '100');
            nut.setAttribute('height', '5');
            nut.setAttribute('fill', '#333');
            svg.appendChild(nut);
        }

        // Draw frets
        for (let i = 0; i < 5; i++) {
            const fret = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            fret.setAttribute('x1', '25');
            fret.setAttribute('y1', 35 + i * 30);
            fret.setAttribute('x2', '125');
            fret.setAttribute('y2', 35 + i * 30);
            fret.setAttribute('stroke', '#666');
            fret.setAttribute('stroke-width', '2');
            svg.appendChild(fret);
        }

        // Draw strings
        const stringNames = ['E', 'A', 'D', 'G', 'B', 'e'];
        for (let i = 0; i < 6; i++) {
            const string = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            string.setAttribute('x1', 25 + i * 20);
            string.setAttribute('y1', '30');
            string.setAttribute('x2', 25 + i * 20);
            string.setAttribute('y2', '155');
            string.setAttribute('stroke', '#aaa');
            string.setAttribute('stroke-width', i < 3 ? '2' : '1');
            svg.appendChild(string);

            // String label
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', 25 + i * 20);
            label.setAttribute('y', '170');
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('fill', '#888');
            label.setAttribute('font-size', '10');
            label.textContent = stringNames[i];
            svg.appendChild(label);
        }

        // Draw barre if present
        if (chord.barreAt) {
            const barreY = 35 + 15;
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', '22');
            rect.setAttribute('y', barreY - 6);
            rect.setAttribute('width', '106');
            rect.setAttribute('height', '12');
            rect.setAttribute('rx', '6');
            rect.setAttribute('fill', '#3498db');
            rect.setAttribute('opacity', '0.6');
            svg.appendChild(rect);
        }

        // Draw finger positions
        chord.frets.forEach((fret, stringIdx) => {
            const x = 25 + stringIdx * 20;
            const displayFret = startFret > 0 ? fret - startFret : fret;

            if (fret === 'x') {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x);
                text.setAttribute('y', '22');
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', '#e74c3c');
                text.setAttribute('font-size', '14');
                text.setAttribute('font-weight', 'bold');
                text.textContent = 'X';
                svg.appendChild(text);
            } else if (fret === 0 || (startFret > 0 && fret === startFret)) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', '18');
                circle.setAttribute('r', '6');
                circle.setAttribute('fill', 'none');
                circle.setAttribute('stroke', '#2ecc71');
                circle.setAttribute('stroke-width', '2');
                svg.appendChild(circle);
            } else {
                const fretPos = startFret > 0 ? fret - startFret : fret;
                const y = 35 + (fretPos - 0.5) * 30;
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', y);
                circle.setAttribute('r', '8');
                circle.setAttribute('fill', '#3498db');
                svg.appendChild(circle);

                const finger = chord.fingers[stringIdx];
                if (finger && finger !== 0 && finger !== 'x') {
                    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    text.setAttribute('x', x);
                    text.setAttribute('y', y + 4);
                    text.setAttribute('text-anchor', 'middle');
                    text.setAttribute('fill', 'white');
                    text.setAttribute('font-size', '10');
                    text.setAttribute('font-weight', 'bold');
                    text.textContent = finger;
                    svg.appendChild(text);
                }
            }
        });

        container.appendChild(svg);

        notesDiv.innerHTML = `
            <div class="finger-legend">
                <span><strong>Fingers:</strong> 1=Index, 2=Middle, 3=Ring, 4=Pinky</span>
            </div>
        `;
    }

    renderGuitarScale(container, notesDiv, name) {
        const scale = GUITAR_SCALES[name];
        if (!scale) {
            container.innerHTML = '<p style="text-align:center;color:#aaa;">Diagram coming soon</p>';
            return;
        }

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 280 160');
        svg.setAttribute('class', 'guitar-scale-diagram');

        const startFret = Math.max(0, scale.startFret);
        const fretCount = 6;

        // Draw fret numbers
        for (let i = 0; i < fretCount; i++) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', 40 + i * 40);
            text.setAttribute('y', '15');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#888');
            text.setAttribute('font-size', '10');
            text.textContent = startFret + i;
            svg.appendChild(text);
        }

        // Draw nut or fret marker
        if (startFret === 0) {
            const nut = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            nut.setAttribute('x', '18');
            nut.setAttribute('y', '25');
            nut.setAttribute('width', '4');
            nut.setAttribute('height', '110');
            nut.setAttribute('fill', '#333');
            svg.appendChild(nut);
        }

        // Draw frets
        for (let i = 0; i <= fretCount; i++) {
            const fret = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            fret.setAttribute('x1', 20 + i * 40);
            fret.setAttribute('y1', '25');
            fret.setAttribute('x2', 20 + i * 40);
            fret.setAttribute('y2', '135');
            fret.setAttribute('stroke', '#666');
            fret.setAttribute('stroke-width', '2');
            svg.appendChild(fret);
        }

        // Draw strings
        const stringNames = ['e', 'B', 'G', 'D', 'A', 'E'];
        for (let i = 0; i < 6; i++) {
            const string = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            string.setAttribute('x1', '20');
            string.setAttribute('y1', 30 + i * 22);
            string.setAttribute('x2', 20 + fretCount * 40);
            string.setAttribute('y2', 30 + i * 22);
            string.setAttribute('stroke', '#aaa');
            string.setAttribute('stroke-width', i > 2 ? '2' : '1');
            svg.appendChild(string);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', '10');
            label.setAttribute('y', 34 + i * 22);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('fill', '#888');
            label.setAttribute('font-size', '10');
            label.textContent = stringNames[i];
            svg.appendChild(label);
        }

        // Draw scale positions
        scale.positions.forEach((pos, idx) => {
            const stringY = 30 + (6 - pos.string) * 22;
            const fretX = 20 + (pos.fret - startFret + 0.5) * 40;

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', fretX);
            circle.setAttribute('cy', stringY);
            circle.setAttribute('r', '10');
            circle.setAttribute('fill', idx === 0 ? '#e74c3c' : '#3498db');
            svg.appendChild(circle);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', fretX);
            text.setAttribute('y', stringY + 4);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', 'white');
            text.setAttribute('font-size', '9');
            text.setAttribute('font-weight', 'bold');
            text.textContent = pos.note;
            svg.appendChild(text);
        });

        container.appendChild(svg);

        notesDiv.innerHTML = `
            <div class="scale-notes">
                <strong>Notes:</strong> ${scale.positions.map(p => p.note).join(' - ')}
            </div>
        `;
    }

    renderPianoScale(container, notesDiv, name) {
        const fingering = PIANO_FINGERING[name];
        if (!fingering) {
            container.innerHTML = '<p style="text-align:center;color:#aaa;">Diagram coming soon</p>';
            return;
        }

        const svg = this.createPianoKeyboard(fingering.notes, fingering.fingers);
        container.appendChild(svg);

        notesDiv.innerHTML = `
            <div class="piano-fingering">
                <strong>Right Hand Fingering:</strong><br>
                ${fingering.notes.map((n, i) => `${n}(${fingering.fingers[i]})`).join(' - ')}
            </div>
            <div class="finger-legend">
                <span>1=Thumb, 2=Index, 3=Middle, 4=Ring, 5=Pinky</span>
            </div>
        `;
    }

    renderPianoChord(container, notesDiv, name) {
        const chord = PIANO_CHORDS_FINGERING[name];
        if (!chord) {
            container.innerHTML = '<p style="text-align:center;color:#aaa;">Diagram coming soon</p>';
            return;
        }

        const svg = this.createPianoKeyboard(chord.notes, chord.fingers);
        container.appendChild(svg);

        notesDiv.innerHTML = `
            <div class="piano-fingering">
                <strong>Right Hand:</strong> ${chord.notes.map((n, i) => `${n}(${chord.fingers[i]})`).join(' - ')}
            </div>
            <div class="finger-legend">
                <span>1=Thumb, 2=Index, 3=Middle, 4=Ring, 5=Pinky</span>
            </div>
        `;
    }

    createPianoKeyboard(highlightNotes, fingers) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 350 120');
        svg.setAttribute('class', 'piano-diagram');

        const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const blackKeyPositions = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12];
        const blackKeyNames = ['C#', 'D#', 'F#', 'G#', 'A#', 'C#', 'D#', 'F#', 'G#', 'A#'];

        const keyWidth = 24;
        const keyHeight = 90;
        const blackKeyWidth = 14;
        const blackKeyHeight = 55;

        const normalizeNote = (note) => {
            const flatToSharp = { 'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#' };
            return flatToSharp[note] || note;
        };

        const normalizedHighlight = highlightNotes.map(normalizeNote);

        // Draw white keys
        whiteKeys.forEach((key, i) => {
            const x = 10 + i * keyWidth;
            const isHighlighted = normalizedHighlight.includes(key);
            const noteIndex = normalizedHighlight.indexOf(key);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', '10');
            rect.setAttribute('width', keyWidth - 2);
            rect.setAttribute('height', keyHeight);
            rect.setAttribute('fill', isHighlighted ? '#3498db' : 'white');
            rect.setAttribute('stroke', '#333');
            rect.setAttribute('stroke-width', '1');
            rect.setAttribute('rx', '2');
            svg.appendChild(rect);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', x + (keyWidth - 2) / 2);
            label.setAttribute('y', keyHeight);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('fill', isHighlighted ? 'white' : '#666');
            label.setAttribute('font-size', '10');
            label.textContent = key;
            svg.appendChild(label);

            if (isHighlighted && fingers && noteIndex !== -1) {
                const finger = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                finger.setAttribute('x', x + (keyWidth - 2) / 2);
                finger.setAttribute('y', keyHeight - 15);
                finger.setAttribute('text-anchor', 'middle');
                finger.setAttribute('fill', 'white');
                finger.setAttribute('font-size', '14');
                finger.setAttribute('font-weight', 'bold');
                finger.textContent = fingers[noteIndex];
                svg.appendChild(finger);
            }
        });

        // Draw black keys
        blackKeyPositions.forEach((pos, i) => {
            const x = 10 + pos * keyWidth + keyWidth - blackKeyWidth / 2 - 1;
            const key = blackKeyNames[i];
            const isHighlighted = normalizedHighlight.includes(key);
            const noteIndex = normalizedHighlight.indexOf(key);

            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', '10');
            rect.setAttribute('width', blackKeyWidth);
            rect.setAttribute('height', blackKeyHeight);
            rect.setAttribute('fill', isHighlighted ? '#e74c3c' : '#222');
            rect.setAttribute('rx', '2');
            svg.appendChild(rect);

            if (isHighlighted && fingers && noteIndex !== -1) {
                const finger = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                finger.setAttribute('x', x + blackKeyWidth / 2);
                finger.setAttribute('y', blackKeyHeight);
                finger.setAttribute('text-anchor', 'middle');
                finger.setAttribute('fill', 'white');
                finger.setAttribute('font-size', '11');
                finger.setAttribute('font-weight', 'bold');
                finger.textContent = fingers[noteIndex];
                svg.appendChild(finger);
            }
        });

        return svg;
    }
}

// Global diagram modal instance
const diagramModal = new DiagramModal();

// Show diagram function
function showDiagram(instrument, type, name) {
    diagramModal.show(instrument, type, name);
}
