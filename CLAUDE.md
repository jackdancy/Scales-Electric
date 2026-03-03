# CLAUDE.md

## Project Overview

Scales Electric is a 12-chapter music learning challenge for Emile (guitar, age 12) and Nestor (piano, age 9). Each chapter introduces a key with its scale and chord voicings. Players complete items to earn chapter approval from Dad, unlocking personal milestones and working toward the joint prize (PS5 steering wheel and pedals).

## Tech Stack

- Pure HTML/CSS/JavaScript (no build tools or dependencies)
- LocalStorage for persistence (`scalesElectricState_v3`)
- Web Audio API for sound synthesis

## Running

Open `index.html` in a browser, or: `python -m http.server 8000`

## File Structure

- `index.html` - Main page
- `css/styles.css` - Dark "rock" theme (Bebas Neue + Outfit fonts)
- `js/app.js` - State management, UI rendering, practice timer, achievements
- `js/curriculum.js` - 12-chapter lesson plan (scales, chords, riffs, difficulty, tips, week notes)
- `js/audio.js` - Web Audio synthesis (piano + guitar). Data in `MUSIC_DATA` must match curriculum item names.
- `js/diagrams.js` - SVG diagrams for piano keys and guitar fretboard
- `js/famousSongs.js` - Famous songs list per chapter (popup feature)
- `images/` - Trophy and progress graphics

## State Structure

```javascript
{
  guitar: {
    name, tokens, completed: {},
    approvedWeeks: [],    // Dad-approved chapters [1, 2, 3, ...]
    notes: {},            // Per-item notes
    practiceTime: {},     // Seconds per chapter
    achievements: [], weeksCompleted: 0,
    // Computed stats: barreCount, scaleCount, cagedShapes
  },
  piano: {
    name, tokens, completed: {},
    approvedWeeks: [], notes: {}, practiceTime: {},
    achievements: [], weeksCompleted: 0,
    sprintBonus: {},  // Per-chapter daily sprints: { "week-1": { date, sessions, pointsEarned }, ... }
    // Computed stats: speedRecords, handsTogetherCount, inversionSets, blackKeyScales
  },
  currentWeek: 1,
  startDate: "ISO date",
  metronome: { bpm, isPlaying },
  activePracticeTimer: null  // { player, week, startTime }
}
```

## Key Concepts

- **Chapters (not weeks)**: The UI and code use "chapter" terminology, though some variable names still say `week` internally
- **Dad approval**: Chapters are approved via `approvedWeeks` array, which gates milestone rewards
- **Prizes**: `PERSONAL_MILESTONES` (per-player, gated by chapters completed) + `JOINT_PRIZE` (both complete all 12)
- **Practice timer**: Tracks practice time per chapter with a 30-min weekly goal (`WEEKLY_PRACTICE_GOAL`)
- **Sprint Bonus (piano)**: Nestor earns screen time minutes (5/10/20) for 4+ min focused practice sessions, max 3 per day per chapter. Tracked in `sprintBonus` per chapter, resets daily. Constants: `SPRINT_DURATION`, `SPRINT_REWARDS`
- **Riff of the Chapter (guitar)**: Each chapter has a bonus riff (`riff` object in curriculum guitar data) — display only, no tokens or tracking. Just a fun challenge for Emile
- **Achievements**: Defined in `ACHIEVEMENTS` object in `app.js`, per instrument

## Adding a New Scale or Chord

1. Add to `CURRICULUM` in `js/curriculum.js`
2. Add audio data to `MUSIC_DATA` in `js/audio.js`
3. Add diagram data to the appropriate object in `js/diagrams.js`
