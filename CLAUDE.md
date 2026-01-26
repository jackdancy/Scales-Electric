# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Scales Electric is a 12-week music learning challenge for Emile (guitar, age 12) and Nestor (piano, age 9). Each week introduces a key with its scale and multiple chord voicings. Players earn tokens by completing items, which can be redeemed for prizes (ultimate prize: PS5 steering wheel and pedals).

### Learning Goals
- **Emile (Guitar)**: Learn repeatable scale patterns that transfer across keys, master chord shapes (especially barre chords), understand the CAGED system
- **Nestor (Piano)**: Play scales with both hands using correct fingering, build up speed using the metronome, master chord inversions

## Tech Stack

- Pure HTML/CSS/JavaScript (no build tools or dependencies)
- LocalStorage for data persistence
- Web Audio API for sound synthesis

## Running the Project

Open `index.html` directly in a browser, or use a local server:
```bash
python -m http.server 8000
```

## Architecture

- `index.html` - Main page with week navigator, progress bar, and player cards
- `css/styles.css` - Dark "rock" theme with Bebas Neue + Outfit fonts, section cards, progress bar
- `js/curriculum.js` - 12-week lesson plan with scales and chord voicings
- `js/app.js` - Application logic, state management, UI rendering, inline diagram rendering
- `js/audio.js` - Web Audio API synthesis (piano with inharmonicity, guitar with pluck)
- `js/diagrams.js` - SVG diagrams for piano keys and guitar fretboard (modal popups)

### Layout Structure

The UI shows:
1. **Header**: Title, tagline, week navigator (arrows + current week display)
2. **Journey Progress Bar**: 12-segment bar showing completion for each week (top half = guitar/red, bottom half = piano/blue). Clickable to navigate to any unlocked week.
3. **Player Cards**: Side-by-side cards showing:
   - Player name (editable) + instrument icon
   - Token count
   - Current week's scale and chords as a checklist
   - Embedded fingering diagrams below the checklist
4. **Prize Shop**: Cards showing available prizes based on token count

### State Management

State is stored in `localStorage` under key `scalesElectricState_v2`:
```javascript
{
  guitar: { name, tokens, completed: { "week-1-scale": true, ... } },
  piano: { name, tokens, completed: { ... } },
  currentWeek: 1,
  startDate: "ISO date"
}
```

### Curriculum Structure

`js/curriculum.js` defines 12 weeks, each with:
```javascript
{
  week: 1,
  title: "The Key of C",
  description: "...",
  guitar: { scale: {...}, chords: [{...}, {...}] },
  piano: { scale: {...}, chords: [{...}, {...}, {...}] }
}
```

**Week progression:**
- Weeks 1-4: Foundation keys (C, G, D) + I-IV-V progression
- Weeks 5-8: Minor keys (Am, Em) + more majors (A, E)
- Weeks 9-12: Flats (F, Dm), pentatonics, blues, 7th chords

**Chord voicings:**
- Guitar: Open position + barre/CAGED positions
- Piano: Root position + 1st/2nd inversions

**Enhanced curriculum data includes:**
- `difficulty`: 1 (Beginner), 2 (Intermediate), 3 (Challenging)
- `tip`: Practice advice specific to each item
- `cagedShape`: CAGED shape name for guitar chords
- `isBarre`: Boolean for barre chord identification
- `barreInfo`: Detailed barre technique tips
- `pattern`: Scale pattern name for guitar (shows how patterns repeat)
- `speedGoal`: Target BPM for piano scales

### Audio System

`js/audio.js` - Realistic synthesis:
- Piano: Inharmonicity modeling, multiple detuned oscillators (simulates 2-3 strings), hammer strike noise, register-dependent decay
- Guitar: Pluck noise burst, body resonance filter, strum delay, vibrato

Audio data in `MUSIC_DATA` object must match item names in curriculum.

### Diagram System

`js/diagrams.js` - SVG visualizations:
- `GUITAR_CHORDS` - Fret positions, finger numbers, barre indicators
- `GUITAR_SCALES` - Fretboard note positions
- `PIANO_FINGERING` - Scale fingering with both hands:
  - `fingersRH`: Right hand fingering array
  - `fingersLH`: Left hand fingering array
  - `thumbUnder`: Tips for thumb crossing technique
- `PIANO_CHORDS_FINGERING` - Chord fingering

### Practice Tools

**Metronome** (Piano):
- Adjustable BPM (40-208)
- Speed goals displayed per scale
- Start/stop with visual feedback

**Achievement System**:
- Guitar achievements: First Strum, Barre Beginner/Master, CAGED Explorer, Pattern Pro, etc.
- Piano achievements: First Keys, Inversion Explorer, Speed Demon, Two Hands, etc.
- Stored in `state.[player].achievements` array

**Difficulty Badges**:
- Visual indicators on each item (Beginner/Intermediate/Challenging)
- Color coded (green/yellow/red)

## Customization

- **Modify curriculum**: Edit `CURRICULUM` array in `js/curriculum.js`
- **Add audio for new items**: Add entries to `MUSIC_DATA` in `js/audio.js`
- **Add diagrams for new items**: Add entries to the appropriate object in `js/diagrams.js`
- **Adjust prizes**: Edit `PRIZES` array in `js/app.js`
- **Change week unlock behavior**: Modify `isLocked` logic in `createWeekCard()` function

## Adding a New Scale or Chord

1. Add to `CURRICULUM` in `js/curriculum.js` with name and token value
2. Add audio data to `MUSIC_DATA` in `js/audio.js` (array of {note, octave})
3. Add diagram data to appropriate object in `js/diagrams.js`
