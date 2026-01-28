// Audio synthesis for Scales Electric - Improved Realism

class MusicPlayer {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
        this.masterGain = null;
    }

    async init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = 0.7;
            this.masterGain.connect(this.audioContext.destination);
        }
        // Always try to resume - this is needed after user interaction
        if (this.audioContext.state === 'suspended') {
            try {
                await this.audioContext.resume();
            } catch (e) {
                console.warn('Could not resume audio context:', e);
            }
        }
        return this.audioContext.state === 'running';
    }

    getNoteFrequency(note, octave) {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        // Handle flats
        const flatToSharp = { 'Db': 'C#', 'Eb': 'D#', 'Fb': 'E', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#', 'Cb': 'B' };
        const normalizedNote = flatToSharp[note] || note;
        const noteIndex = notes.indexOf(normalizedNote);
        if (noteIndex === -1) return 440; // fallback
        const a4Index = notes.indexOf('A');
        const semitonesFromA4 = (octave - 4) * 12 + (noteIndex - a4Index);
        return 440 * Math.pow(2, semitonesFromA4 / 12);
    }

    // Realistic piano sound with inharmonicity and proper modeling
    playPianoNote(frequency, duration, startTime, volume = 0.3) {
        const ctx = this.audioContext;
        const inharmonicity = 0.0001 * Math.pow(frequency / 261.63, 0.5);
        const noteGain = ctx.createGain();

        const bodyFilter = ctx.createBiquadFilter();
        bodyFilter.type = 'lowpass';
        bodyFilter.frequency.value = Math.min(frequency * 8, 12000);
        bodyFilter.Q.value = 0.5;

        const compressor = ctx.createDynamicsCompressor();
        compressor.threshold.value = -20;
        compressor.knee.value = 20;
        compressor.ratio.value = 4;
        compressor.attack.value = 0.002;
        compressor.release.value = 0.1;

        noteGain.connect(bodyFilter);
        bodyFilter.connect(compressor);
        compressor.connect(this.masterGain);

        const harmonics = [
            { n: 1, gain: 1.0 }, { n: 2, gain: 0.7 }, { n: 3, gain: 0.4 },
            { n: 4, gain: 0.25 }, { n: 5, gain: 0.15 }, { n: 6, gain: 0.1 },
            { n: 7, gain: 0.06 }, { n: 8, gain: 0.04 },
        ];

        harmonics.forEach((h) => {
            const actualRatio = h.n * Math.sqrt(1 + inharmonicity * h.n * h.n);
            for (let d = 0; d < 2; d++) {
                const osc = ctx.createOscillator();
                const oscGain = ctx.createGain();
                osc.type = 'sine';
                const detuneCents = (d - 0.5) * 3 + (Math.random() - 0.5) * 2;
                osc.frequency.value = frequency * actualRatio;
                osc.detune.value = detuneCents;
                const harmonicDecay = Math.pow(0.85, h.n - 1);
                oscGain.gain.value = h.gain * volume * 0.5 * harmonicDecay;
                osc.connect(oscGain);
                oscGain.connect(noteGain);
                osc.start(startTime);
                osc.stop(startTime + duration + 0.8);
            }
        });

        const noiseLength = 0.015;
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * noiseLength, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseData.length; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.003));
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'highpass';
        noiseFilter.frequency.value = frequency * 2;
        const noiseGain = ctx.createGain();
        noiseGain.gain.value = volume * 0.15;

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(noteGain);
        noiseSource.start(startTime);
        noiseSource.stop(startTime + noiseLength);

        const decayMultiplier = 0.5 + (261.63 / frequency) * 0.5;
        noteGain.gain.setValueAtTime(0, startTime);
        noteGain.gain.linearRampToValueAtTime(1, startTime + 0.003);
        noteGain.gain.setValueAtTime(1, startTime + 0.003);
        noteGain.gain.exponentialRampToValueAtTime(0.8, startTime + 0.02);
        noteGain.gain.exponentialRampToValueAtTime(0.5, startTime + 0.1 * decayMultiplier);
        noteGain.gain.exponentialRampToValueAtTime(0.2, startTime + duration * 0.4 * decayMultiplier);
        noteGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration * decayMultiplier);
    }

    // Realistic guitar sound
    playGuitarNote(frequency, duration, startTime, volume = 0.4) {
        const ctx = this.audioContext;
        const noteGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.value = 2000 + (frequency * 2);
        filter.Q.value = 1;

        noteGain.connect(filter);
        filter.connect(this.masterGain);

        const noiseLength = 0.03;
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * noiseLength, ctx.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseData.length; i++) {
            noiseData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.01));
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        const noiseGain = ctx.createGain();
        noiseGain.gain.value = volume * 0.3;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = frequency;
        noiseFilter.Q.value = 2;

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(noteGain);
        noiseSource.start(startTime);
        noiseSource.stop(startTime + noiseLength);

        const harmonics = [
            { ratio: 1, gain: 1.0 }, { ratio: 2, gain: 0.6 }, { ratio: 3, gain: 0.4 },
            { ratio: 4, gain: 0.25 }, { ratio: 5, gain: 0.15 }, { ratio: 6, gain: 0.1 },
        ];

        harmonics.forEach((h) => {
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();
            osc.type = h.ratio === 1 ? 'triangle' : 'sine';
            osc.frequency.value = frequency * h.ratio;

            const vibrato = ctx.createOscillator();
            const vibratoGain = ctx.createGain();
            vibrato.frequency.value = 5;
            vibratoGain.gain.value = 2;
            vibrato.connect(vibratoGain);
            vibratoGain.connect(osc.frequency);
            vibrato.start(startTime + 0.3);
            vibrato.stop(startTime + duration);

            oscGain.gain.value = h.gain * volume;
            osc.connect(oscGain);
            oscGain.connect(noteGain);
            osc.start(startTime);
            osc.stop(startTime + duration + 0.3);
        });

        noteGain.gain.setValueAtTime(0, startTime);
        noteGain.gain.linearRampToValueAtTime(1, startTime + 0.002);
        noteGain.gain.exponentialRampToValueAtTime(0.6, startTime + 0.05);
        noteGain.gain.exponentialRampToValueAtTime(0.3, startTime + duration * 0.6);
        noteGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    }

    playNote(frequency, duration, instrument, startTime, volume = 0.3) {
        if (instrument === 'piano') {
            this.playPianoNote(frequency, duration, startTime, volume);
        } else {
            this.playGuitarNote(frequency, duration, startTime, volume);
        }
    }

    async playChord(notes, instrument, duration = 1.8) {
        const ready = await this.init();
        if (!ready) {
            console.warn('Audio context not ready');
            return;
        }
        if (this.isPlaying) return;
        this.isPlaying = true;

        const startTime = this.audioContext.currentTime;

        if (instrument === 'guitar') {
            notes.forEach((note, i) => {
                const freq = this.getNoteFrequency(note.note, note.octave);
                const strumDelay = i * 0.02;
                this.playNote(freq, duration - strumDelay, instrument, startTime + strumDelay, 0.25);
            });
        } else {
            notes.forEach(note => {
                const freq = this.getNoteFrequency(note.note, note.octave);
                this.playNote(freq, duration, instrument, startTime, 0.2);
            });
        }

        setTimeout(() => { this.isPlaying = false; }, duration * 1000);
    }

    async playScale(notes, instrument, noteDuration = 0.5) {
        const ready = await this.init();
        if (!ready) {
            console.warn('Audio context not ready');
            return;
        }
        if (this.isPlaying) return;
        this.isPlaying = true;

        const startTime = this.audioContext.currentTime;
        notes.forEach((note, index) => {
            const freq = this.getNoteFrequency(note.note, note.octave);
            this.playNote(freq, noteDuration * 1.2, instrument, startTime + index * noteDuration, 0.3);
        });

        setTimeout(() => { this.isPlaying = false; }, notes.length * noteDuration * 1000);
    }
}

// ==================== MUSIC DATA ====================
// All scales and chords for the 12-week curriculum

const MUSIC_DATA = {
    guitar: {
        scales: {
            // Week 1 - C Major
            'C Major Scale (Open Position)': [
                {note: 'C', octave: 4}, {note: 'D', octave: 4}, {note: 'E', octave: 4},
                {note: 'F', octave: 4}, {note: 'G', octave: 4}, {note: 'A', octave: 4},
                {note: 'B', octave: 4}, {note: 'C', octave: 5}
            ],
            // Week 2 - G Major
            'G Major Scale (Open Position)': [
                {note: 'G', octave: 3}, {note: 'A', octave: 3}, {note: 'B', octave: 3},
                {note: 'C', octave: 4}, {note: 'D', octave: 4}, {note: 'E', octave: 4},
                {note: 'F#', octave: 4}, {note: 'G', octave: 4}
            ],
            // Week 3 - D Major
            'D Major Scale (Open Position)': [
                {note: 'D', octave: 4}, {note: 'E', octave: 4}, {note: 'F#', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'B', octave: 4},
                {note: 'C#', octave: 5}, {note: 'D', octave: 5}
            ],
            // Week 4 - Transitions
            'C-G-D Chord Transitions': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4},
                {note: 'G', octave: 3}, {note: 'B', octave: 3}, {note: 'D', octave: 4},
                {note: 'D', octave: 4}, {note: 'F#', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 5 - A Minor
            'A Minor Scale (Natural)': [
                {note: 'A', octave: 3}, {note: 'B', octave: 3}, {note: 'C', octave: 4},
                {note: 'D', octave: 4}, {note: 'E', octave: 4}, {note: 'F', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 6 - E Minor
            'E Minor Scale (Natural)': [
                {note: 'E', octave: 3}, {note: 'F#', octave: 3}, {note: 'G', octave: 3},
                {note: 'A', octave: 3}, {note: 'B', octave: 3}, {note: 'C', octave: 4},
                {note: 'D', octave: 4}, {note: 'E', octave: 4}
            ],
            // Week 7 - A Major
            'A Major Scale (Open Position)': [
                {note: 'A', octave: 3}, {note: 'B', octave: 3}, {note: 'C#', octave: 4},
                {note: 'D', octave: 4}, {note: 'E', octave: 4}, {note: 'F#', octave: 4},
                {note: 'G#', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 8 - E Major
            'E Major Scale (Open Position)': [
                {note: 'E', octave: 3}, {note: 'F#', octave: 3}, {note: 'G#', octave: 3},
                {note: 'A', octave: 3}, {note: 'B', octave: 3}, {note: 'C#', octave: 4},
                {note: 'D#', octave: 4}, {note: 'E', octave: 4}
            ],
            // Week 9 - F Major
            'F Major Scale': [
                {note: 'F', octave: 3}, {note: 'G', octave: 3}, {note: 'A', octave: 3},
                {note: 'Bb', octave: 3}, {note: 'C', octave: 4}, {note: 'D', octave: 4},
                {note: 'E', octave: 4}, {note: 'F', octave: 4}
            ],
            // Week 10 - D Minor
            'D Minor Scale (Natural)': [
                {note: 'D', octave: 4}, {note: 'E', octave: 4}, {note: 'F', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'Bb', octave: 4},
                {note: 'C', octave: 5}, {note: 'D', octave: 5}
            ],
            // Week 11 - Pentatonics
            'A Minor Pentatonic (Box 1)': [
                {note: 'A', octave: 3}, {note: 'C', octave: 4}, {note: 'D', octave: 4},
                {note: 'E', octave: 4}, {note: 'G', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 12 - Blues
            'Blues Scale (A)': [
                {note: 'A', octave: 3}, {note: 'C', octave: 4}, {note: 'D', octave: 4},
                {note: 'Eb', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4},
                {note: 'A', octave: 4}
            ]
        },
        chords: {
            // Week 1 - C Major chords
            'C Major (Open)': [
                {note: 'C', octave: 3}, {note: 'E', octave: 3}, {note: 'G', octave: 3},
                {note: 'C', octave: 4}, {note: 'E', octave: 4}
            ],
            'C Major (A Shape - 3rd fret)': [
                {note: 'C', octave: 3}, {note: 'G', octave: 3}, {note: 'C', octave: 4},
                {note: 'E', octave: 4}, {note: 'G', octave: 4}
            ],
            // Week 2 - G Major chords
            'G Major (Open)': [
                {note: 'G', octave: 2}, {note: 'B', octave: 3}, {note: 'D', octave: 3},
                {note: 'G', octave: 3}, {note: 'B', octave: 3}, {note: 'G', octave: 4}
            ],
            'G Major (E Shape - 3rd fret)': [
                {note: 'G', octave: 2}, {note: 'D', octave: 3}, {note: 'G', octave: 3},
                {note: 'B', octave: 3}, {note: 'D', octave: 4}, {note: 'G', octave: 4}
            ],
            // Week 3 - D Major chords
            'D Major (Open)': [
                {note: 'D', octave: 3}, {note: 'A', octave: 3}, {note: 'D', octave: 4},
                {note: 'F#', octave: 4}
            ],
            'D Major (C Shape - 2nd fret)': [
                {note: 'D', octave: 3}, {note: 'F#', octave: 3}, {note: 'A', octave: 3},
                {note: 'D', octave: 4}, {note: 'F#', octave: 4}
            ],
            // Week 4 - Progression
            'C-G-D Progression (Smooth Changes)': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4}
            ],
            // Week 5 - A Minor chords
            'A Minor (Open)': [
                {note: 'A', octave: 2}, {note: 'E', octave: 3}, {note: 'A', octave: 3},
                {note: 'C', octave: 4}, {note: 'E', octave: 4}
            ],
            'A Minor (E Shape Barre - 5th fret)': [
                {note: 'A', octave: 2}, {note: 'E', octave: 3}, {note: 'A', octave: 3},
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 6 - E Minor chords
            'E Minor (Open)': [
                {note: 'E', octave: 2}, {note: 'B', octave: 2}, {note: 'E', octave: 3},
                {note: 'G', octave: 3}, {note: 'B', octave: 3}, {note: 'E', octave: 4}
            ],
            'E Minor (D Shape - 7th fret)': [
                {note: 'E', octave: 3}, {note: 'B', octave: 3}, {note: 'E', octave: 4},
                {note: 'G', octave: 4}
            ],
            // Week 7 - A Major chords
            'A Major (Open)': [
                {note: 'A', octave: 2}, {note: 'E', octave: 3}, {note: 'A', octave: 3},
                {note: 'C#', octave: 4}, {note: 'E', octave: 4}
            ],
            'A Major (E Shape Barre - 5th fret)': [
                {note: 'A', octave: 2}, {note: 'E', octave: 3}, {note: 'A', octave: 3},
                {note: 'C#', octave: 4}, {note: 'E', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 8 - E Major chords
            'E Major (Open)': [
                {note: 'E', octave: 2}, {note: 'B', octave: 2}, {note: 'E', octave: 3},
                {note: 'G#', octave: 3}, {note: 'B', octave: 3}, {note: 'E', octave: 4}
            ],
            'E Major (A Shape - 7th fret)': [
                {note: 'E', octave: 3}, {note: 'B', octave: 3}, {note: 'E', octave: 4},
                {note: 'G#', octave: 4}, {note: 'B', octave: 4}
            ],
            // Week 9 - F Major chords
            'F Major (Barre - 1st fret)': [
                {note: 'F', octave: 2}, {note: 'C', octave: 3}, {note: 'F', octave: 3},
                {note: 'A', octave: 3}, {note: 'C', octave: 4}, {note: 'F', octave: 4}
            ],
            'F Major (C Shape - 5th fret)': [
                {note: 'F', octave: 3}, {note: 'A', octave: 3}, {note: 'C', octave: 4},
                {note: 'F', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 10 - D Minor chords
            'D Minor (Open)': [
                {note: 'D', octave: 3}, {note: 'A', octave: 3}, {note: 'D', octave: 4},
                {note: 'F', octave: 4}
            ],
            'D Minor (A Shape Barre - 5th fret)': [
                {note: 'D', octave: 3}, {note: 'A', octave: 3}, {note: 'D', octave: 4},
                {note: 'F', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 11 - Pentatonic positions
            'A Minor Pentatonic (Box 2)': [
                {note: 'C', octave: 4}, {note: 'D', octave: 4}, {note: 'E', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'C', octave: 5}
            ],
            'E Minor Pentatonic (Box 1)': [
                {note: 'E', octave: 3}, {note: 'G', octave: 3}, {note: 'A', octave: 3},
                {note: 'B', octave: 3}, {note: 'D', octave: 4}, {note: 'E', octave: 4}
            ],
            // Week 12 - 7th chords
            'A7 (Open)': [
                {note: 'A', octave: 2}, {note: 'E', octave: 3}, {note: 'G', octave: 3},
                {note: 'C#', octave: 4}, {note: 'E', octave: 4}
            ],
            'E7 (Open)': [
                {note: 'E', octave: 2}, {note: 'B', octave: 2}, {note: 'D', octave: 3},
                {note: 'G#', octave: 3}, {note: 'B', octave: 3}, {note: 'E', octave: 4}
            ],
            'D7 (Open)': [
                {note: 'D', octave: 3}, {note: 'A', octave: 3}, {note: 'C', octave: 4},
                {note: 'F#', octave: 4}
            ]
        }
    },
    piano: {
        scales: {
            // Week 1 - C Major
            'C Major Scale': [
                {note: 'C', octave: 4}, {note: 'D', octave: 4}, {note: 'E', octave: 4},
                {note: 'F', octave: 4}, {note: 'G', octave: 4}, {note: 'A', octave: 4},
                {note: 'B', octave: 4}, {note: 'C', octave: 5}
            ],
            // Week 2 - G Major
            'G Major Scale': [
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'B', octave: 4},
                {note: 'C', octave: 5}, {note: 'D', octave: 5}, {note: 'E', octave: 5},
                {note: 'F#', octave: 5}, {note: 'G', octave: 5}
            ],
            // Week 3 - D Major
            'D Major Scale': [
                {note: 'D', octave: 4}, {note: 'E', octave: 4}, {note: 'F#', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'B', octave: 4},
                {note: 'C#', octave: 5}, {note: 'D', octave: 5}
            ],
            // Week 4 - Transitions
            'C-G-D Chord Transitions': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4},
                {note: 'G', octave: 4}, {note: 'B', octave: 4}, {note: 'D', octave: 5},
                {note: 'D', octave: 4}, {note: 'F#', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 5 - A Minor
            'A Minor Scale (Natural)': [
                {note: 'A', octave: 4}, {note: 'B', octave: 4}, {note: 'C', octave: 5},
                {note: 'D', octave: 5}, {note: 'E', octave: 5}, {note: 'F', octave: 5},
                {note: 'G', octave: 5}, {note: 'A', octave: 5}
            ],
            // Week 6 - E Minor
            'E Minor Scale (Natural)': [
                {note: 'E', octave: 4}, {note: 'F#', octave: 4}, {note: 'G', octave: 4},
                {note: 'A', octave: 4}, {note: 'B', octave: 4}, {note: 'C', octave: 5},
                {note: 'D', octave: 5}, {note: 'E', octave: 5}
            ],
            // Week 7 - A Major
            'A Major Scale': [
                {note: 'A', octave: 4}, {note: 'B', octave: 4}, {note: 'C#', octave: 5},
                {note: 'D', octave: 5}, {note: 'E', octave: 5}, {note: 'F#', octave: 5},
                {note: 'G#', octave: 5}, {note: 'A', octave: 5}
            ],
            // Week 8 - E Major
            'E Major Scale': [
                {note: 'E', octave: 4}, {note: 'F#', octave: 4}, {note: 'G#', octave: 4},
                {note: 'A', octave: 4}, {note: 'B', octave: 4}, {note: 'C#', octave: 5},
                {note: 'D#', octave: 5}, {note: 'E', octave: 5}
            ],
            // Week 9 - F Major
            'F Major Scale': [
                {note: 'F', octave: 4}, {note: 'G', octave: 4}, {note: 'A', octave: 4},
                {note: 'Bb', octave: 4}, {note: 'C', octave: 5}, {note: 'D', octave: 5},
                {note: 'E', octave: 5}, {note: 'F', octave: 5}
            ],
            // Week 10 - D Minor
            'D Minor Scale (Natural)': [
                {note: 'D', octave: 4}, {note: 'E', octave: 4}, {note: 'F', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'Bb', octave: 4},
                {note: 'C', octave: 5}, {note: 'D', octave: 5}
            ],
            // Week 11 - Pentatonics
            'C Major Pentatonic': [
                {note: 'C', octave: 4}, {note: 'D', octave: 4}, {note: 'E', octave: 4},
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'C', octave: 5}
            ],
            'A Minor Pentatonic': [
                {note: 'A', octave: 4}, {note: 'C', octave: 5}, {note: 'D', octave: 5},
                {note: 'E', octave: 5}, {note: 'G', octave: 5}, {note: 'A', octave: 5}
            ],
            'G Major Pentatonic': [
                {note: 'G', octave: 4}, {note: 'A', octave: 4}, {note: 'B', octave: 4},
                {note: 'D', octave: 5}, {note: 'E', octave: 5}, {note: 'G', octave: 5}
            ],
            // Week 12 - Blues
            'Blues Scale (C)': [
                {note: 'C', octave: 4}, {note: 'Eb', octave: 4}, {note: 'F', octave: 4},
                {note: 'F#', octave: 4}, {note: 'G', octave: 4}, {note: 'Bb', octave: 4},
                {note: 'C', octave: 5}
            ]
        },
        chords: {
            // Week 1 - C Major inversions
            'C Major (Root Position)': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4}
            ],
            'C Major (1st Inversion)': [
                {note: 'E', octave: 4}, {note: 'G', octave: 4}, {note: 'C', octave: 5}
            ],
            'C Major (2nd Inversion)': [
                {note: 'G', octave: 4}, {note: 'C', octave: 5}, {note: 'E', octave: 5}
            ],
            // Week 2 - G Major inversions
            'G Major (Root Position)': [
                {note: 'G', octave: 4}, {note: 'B', octave: 4}, {note: 'D', octave: 5}
            ],
            'G Major (1st Inversion)': [
                {note: 'B', octave: 4}, {note: 'D', octave: 5}, {note: 'G', octave: 5}
            ],
            'G Major (2nd Inversion)': [
                {note: 'D', octave: 4}, {note: 'G', octave: 4}, {note: 'B', octave: 4}
            ],
            // Week 3 - D Major inversions
            'D Major (Root Position)': [
                {note: 'D', octave: 4}, {note: 'F#', octave: 4}, {note: 'A', octave: 4}
            ],
            'D Major (1st Inversion)': [
                {note: 'F#', octave: 4}, {note: 'A', octave: 4}, {note: 'D', octave: 5}
            ],
            'D Major (2nd Inversion)': [
                {note: 'A', octave: 4}, {note: 'D', octave: 5}, {note: 'F#', octave: 5}
            ],
            // Week 4 - Progression
            'C-G-D Progression (Using Inversions)': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4}
            ],
            // Week 5 - A Minor inversions
            'A Minor (Root Position)': [
                {note: 'A', octave: 4}, {note: 'C', octave: 5}, {note: 'E', octave: 5}
            ],
            'A Minor (1st Inversion)': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'A', octave: 4}
            ],
            'A Minor (2nd Inversion)': [
                {note: 'E', octave: 4}, {note: 'A', octave: 4}, {note: 'C', octave: 5}
            ],
            // Week 6 - E Minor inversions
            'E Minor (Root Position)': [
                {note: 'E', octave: 4}, {note: 'G', octave: 4}, {note: 'B', octave: 4}
            ],
            'E Minor (1st Inversion)': [
                {note: 'G', octave: 4}, {note: 'B', octave: 4}, {note: 'E', octave: 5}
            ],
            'E Minor (2nd Inversion)': [
                {note: 'B', octave: 4}, {note: 'E', octave: 5}, {note: 'G', octave: 5}
            ],
            // Week 7 - A Major inversions
            'A Major (Root Position)': [
                {note: 'A', octave: 4}, {note: 'C#', octave: 5}, {note: 'E', octave: 5}
            ],
            'A Major (1st Inversion)': [
                {note: 'C#', octave: 4}, {note: 'E', octave: 4}, {note: 'A', octave: 4}
            ],
            'A Major (2nd Inversion)': [
                {note: 'E', octave: 4}, {note: 'A', octave: 4}, {note: 'C#', octave: 5}
            ],
            // Week 8 - E Major inversions
            'E Major (Root Position)': [
                {note: 'E', octave: 4}, {note: 'G#', octave: 4}, {note: 'B', octave: 4}
            ],
            'E Major (1st Inversion)': [
                {note: 'G#', octave: 4}, {note: 'B', octave: 4}, {note: 'E', octave: 5}
            ],
            'E Major (2nd Inversion)': [
                {note: 'B', octave: 4}, {note: 'E', octave: 5}, {note: 'G#', octave: 5}
            ],
            // Week 9 - F Major inversions
            'F Major (Root Position)': [
                {note: 'F', octave: 4}, {note: 'A', octave: 4}, {note: 'C', octave: 5}
            ],
            'F Major (1st Inversion)': [
                {note: 'A', octave: 4}, {note: 'C', octave: 5}, {note: 'F', octave: 5}
            ],
            'F Major (2nd Inversion)': [
                {note: 'C', octave: 4}, {note: 'F', octave: 4}, {note: 'A', octave: 4}
            ],
            // Week 10 - D Minor inversions
            'D Minor (Root Position)': [
                {note: 'D', octave: 4}, {note: 'F', octave: 4}, {note: 'A', octave: 4}
            ],
            'D Minor (1st Inversion)': [
                {note: 'F', octave: 4}, {note: 'A', octave: 4}, {note: 'D', octave: 5}
            ],
            'D Minor (2nd Inversion)': [
                {note: 'A', octave: 4}, {note: 'D', octave: 5}, {note: 'F', octave: 5}
            ],
            // Week 12 - 7th chords
            'C Major 7th': [
                {note: 'C', octave: 4}, {note: 'E', octave: 4}, {note: 'G', octave: 4}, {note: 'B', octave: 4}
            ],
            'G7 (Dominant)': [
                {note: 'G', octave: 4}, {note: 'B', octave: 4}, {note: 'D', octave: 5}, {note: 'F', octave: 5}
            ],
            'A Minor 7th': [
                {note: 'A', octave: 4}, {note: 'C', octave: 5}, {note: 'E', octave: 5}, {note: 'G', octave: 5}
            ]
        }
    }
};

// Global player instance
const musicPlayer = new MusicPlayer();

// Helper function to play a scale or chord by name
function playMusic(instrument, type, name) {
    const data = MUSIC_DATA[instrument]?.[type]?.[name];
    if (!data) {
        console.warn(`No audio data for ${instrument} ${type}: ${name}`);
        return;
    }

    if (type === 'scales') {
        musicPlayer.playScale(data, instrument);
    } else {
        musicPlayer.playChord(data, instrument);
    }
}
