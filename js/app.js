// Scales Electric - Music Challenge Tracker
// 12-Week Curriculum Version - Enhanced for Emile & Nestor

// Prize configuration
const PERSONAL_MILESTONES = [
    { name: 'Screen Time (30 min)', icon: '📱', weeksRequired: 1, perWeek: true },
    { name: 'Choose Dinner', icon: '🍕', weeksRequired: 2 },
    { name: 'Movie Night Pick', icon: '🎬', weeksRequired: 3 },
];

const JOINT_PRIZE = {
    name: 'PS5 Steering Wheel & Pedals',
    icon: '🏎️',
    requirement: 'Both complete all 12 weeks'
};

// Achievement definitions
const ACHIEVEMENTS = {
    guitar: [
        { id: 'first-strum', name: 'First Strum', icon: '🎸', description: 'Complete your first item', condition: (state) => Object.keys(state.guitar.completed).length > 0 },
        { id: 'week-complete', name: 'Week Master', icon: '📅', description: 'Complete all items in a week', condition: (state) => state.guitar.weeksCompleted >= 1 },
        { id: 'barre-beginner', name: 'Barre Beginner', icon: '💪', description: 'Complete your first barre chord', condition: (state) => state.guitar.barreCount >= 1 },
        { id: 'barre-master', name: 'Barre Master', icon: '🏆', description: 'Complete 5 barre chords', condition: (state) => state.guitar.barreCount >= 5 },
        { id: 'scale-explorer', name: 'Scale Explorer', icon: '🎵', description: 'Complete 3 scales', condition: (state) => state.guitar.scaleCount >= 3 },
        { id: 'pattern-pro', name: 'Pattern Pro', icon: '🧠', description: 'Complete 6 scales', condition: (state) => state.guitar.scaleCount >= 6 },
        { id: 'caged-explorer', name: 'CAGED Explorer', icon: '🔓', description: 'Learn 3 different CAGED shapes', condition: (state) => state.guitar.cagedShapes.size >= 3 },
        { id: 'halfway', name: 'Halfway Hero', icon: '⭐', description: 'Complete 6 weeks', condition: (state) => state.guitar.weeksCompleted >= 6 },
        { id: 'guitar-graduate', name: 'Guitar Graduate', icon: '🎓', description: 'Complete all 12 weeks', condition: (state) => state.guitar.weeksCompleted >= 12 }
    ],
    piano: [
        { id: 'first-keys', name: 'First Keys', icon: '🎹', description: 'Complete your first item', condition: (state) => Object.keys(state.piano.completed).length > 0 },
        { id: 'week-complete', name: 'Week Master', icon: '📅', description: 'Complete all items in a week', condition: (state) => state.piano.weeksCompleted >= 1 },
        { id: 'inversion-explorer', name: 'Inversion Explorer', icon: '🔄', description: 'Master all inversions of a chord', condition: (state) => state.piano.inversionSets >= 1 },
        { id: 'inversion-master', name: 'Inversion Master', icon: '🏅', description: 'Master inversions of 5 chords', condition: (state) => state.piano.inversionSets >= 5 },
        { id: 'speed-demon', name: 'Speed Demon', icon: '⚡', description: 'Record a fast tempo', condition: (state) => state.piano.speedRecords && state.piano.speedRecords.length >= 1 },
        { id: 'black-keys', name: 'Black Key Explorer', icon: '⬛', description: 'Complete 3 scales with black keys', condition: (state) => state.piano.blackKeyScales >= 3 },
        { id: 'two-hands', name: 'Two Hands', icon: '🙌', description: 'Complete scales with both hands', condition: (state) => state.piano.handsTogetherCount >= 3 },
        { id: 'halfway', name: 'Halfway Hero', icon: '⭐', description: 'Complete 6 weeks', condition: (state) => state.piano.weeksCompleted >= 6 },
        { id: 'piano-graduate', name: 'Piano Graduate', icon: '🎓', description: 'Complete all 12 weeks', condition: (state) => state.piano.weeksCompleted >= 12 }
    ]
};

// State
let state = {
    guitar: {
        name: 'Emile',
        tokens: 0,
        completed: {},  // Self-tracked progress
        approvedWeeks: [],  // Weeks approved by Dad [1, 2, 3, ...]
        notes: {},  // { "week-1-scale": "My note here", ... }
        practiceTime: {}, // { "week-1": 300, ... } in seconds per week
        achievements: [],
        barreCount: 0,
        scaleCount: 0,
        cagedShapes: new Set(),
        weeksCompleted: 0  // Calculated from approvedWeeks
    },
    piano: {
        name: 'Nestor',
        tokens: 0,
        completed: {},  // Self-tracked progress
        approvedWeeks: [],  // Weeks approved by Dad
        notes: {},
        practiceTime: {},
        achievements: [],
        speedRecords: [],
        handsTogetherCount: 0,
        inversionSets: 0,
        blackKeyScales: 0,
        weeksCompleted: 0  // Calculated from approvedWeeks
    },
    currentWeek: 1,
    startDate: null,
    metronome: {
        bpm: 60,
        isPlaying: false
    },
    activePracticeTimer: null // { player: 'guitar', week: 1, startTime: timestamp }
};

// Metronome
let metronomeInterval = null;
let audioContext = null;

// Practice timer
let practiceTimerInterval = null;
let practiceTimerPlayer = null;
const WEEKLY_PRACTICE_GOAL = 30 * 60; // 30 minutes in seconds

// Common emojis for notes
const EMOJI_PICKER = ['😊', '😅', '🤔', '😤', '🎉', '⭐', '💪', '👍', '👎', '🔥', '❄️', '🐌', '🚀', '✅', '❌', '⚠️', '💡', '🎯', '🎵', '🎸', '🎹', '👆', '👇', '🔄', '⏰'];

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('scalesElectricState_v3');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to handle new fields
        state = {
            ...state,
            ...parsed,
            guitar: { ...state.guitar, ...parsed.guitar },
            piano: { ...state.piano, ...parsed.piano },
            metronome: { ...state.metronome, ...parsed.metronome }
        };
        // Convert cagedShapes back to Set if it was serialized
        if (Array.isArray(state.guitar.cagedShapes)) {
            state.guitar.cagedShapes = new Set(state.guitar.cagedShapes);
        }
        // Ensure practiceTime objects exist
        if (!state.guitar.practiceTime) state.guitar.practiceTime = {};
        if (!state.piano.practiceTime) state.piano.practiceTime = {};
        if (!state.guitar.notes) state.guitar.notes = {};
        if (!state.piano.notes) state.piano.notes = {};
        // Ensure approvedWeeks arrays exist
        if (!state.guitar.approvedWeeks) state.guitar.approvedWeeks = [];
        if (!state.piano.approvedWeeks) state.piano.approvedWeeks = [];
        // Update weeksCompleted from approvedWeeks
        state.guitar.weeksCompleted = state.guitar.approvedWeeks.length;
        state.piano.weeksCompleted = state.piano.approvedWeeks.length;

        // Resume active timer if page was reloaded
        if (state.activePracticeTimer) {
            const { player, week, startTime } = state.activePracticeTimer;
            // Restart the interval
            practiceTimerPlayer = player;
            practiceTimerInterval = setInterval(() => {
                updatePracticeTimerDisplay(player);
            }, 1000);
        }
    } else {
        // Check for v2 data migration
        const oldSaved = localStorage.getItem('scalesElectricState_v2');
        if (oldSaved) {
            const parsed = JSON.parse(oldSaved);
            state.guitar.completed = parsed.guitar?.completed || {};
            state.piano.completed = parsed.piano?.completed || {};
            state.guitar.tokens = parsed.guitar?.tokens || 0;
            state.piano.tokens = parsed.piano?.tokens || 0;
            state.currentWeek = parsed.currentWeek || 1;
            state.startDate = parsed.startDate;
            // Keep custom names if set
            if (parsed.guitar?.name && parsed.guitar.name !== 'Guitar Hero') {
                state.guitar.name = parsed.guitar.name;
            }
            if (parsed.piano?.name && parsed.piano.name !== 'Piano Master') {
                state.piano.name = parsed.piano.name;
            }
        } else {
            state.startDate = new Date().toISOString();
        }
    }
    // Update achievement tracking
    updateAchievementStats();
}

// Save state to localStorage
function saveState() {
    // Convert Set to Array for JSON serialization
    const stateToSave = {
        ...state,
        guitar: {
            ...state.guitar,
            cagedShapes: Array.from(state.guitar.cagedShapes || [])
        }
    };
    localStorage.setItem('scalesElectricState_v3', JSON.stringify(stateToSave));
}

// Update achievement-related stats from completed items
function updateAchievementStats() {
    // Count barre chords completed (must be ACED)
    let barreCount = 0;
    let scaleCount = 0;
    const cagedShapes = new Set();
    let guitarWeeksComplete = 0;

    CURRICULUM.forEach((week, weekIdx) => {
        let weekComplete = true;
        const weekNum = weekIdx + 1;

        // Check scale (must be ACED, value = 2)
        const scaleProgress = state.guitar.completed[`week-${weekNum}-scale`];
        if (scaleProgress === PROGRESS_STATES.ACED || scaleProgress === true) {
            scaleCount++;
        } else {
            weekComplete = false;
        }

        // Check chords
        week.guitar.chords.forEach((chord, i) => {
            const chordProgress = state.guitar.completed[`week-${weekNum}-chord-${i}`];
            if (chordProgress === PROGRESS_STATES.ACED || chordProgress === true) {
                if (chord.isBarre) barreCount++;
                if (chord.cagedShape) cagedShapes.add(chord.cagedShape);
            } else {
                weekComplete = false;
            }
        });

        if (weekComplete) guitarWeeksComplete++;
    });

    state.guitar.barreCount = barreCount;
    state.guitar.scaleCount = scaleCount;
    state.guitar.cagedShapes = cagedShapes;
    state.guitar.weeksCompleted = guitarWeeksComplete;

    // Piano stats
    let pianoWeeksComplete = 0;
    let inversionSets = 0;
    let blackKeyScales = 0;

    CURRICULUM.forEach((week, weekIdx) => {
        let weekComplete = true;
        const weekNum = weekIdx + 1;

        const scaleProgress = state.piano.completed[`week-${weekNum}-scale`];
        const scaleAced = scaleProgress === PROGRESS_STATES.ACED || scaleProgress === true;

        if (!scaleAced) {
            weekComplete = false;
        } else {
            // Check for black key scales
            const scaleData = PIANO_FINGERING[week.piano.scale.name];
            if (scaleData) {
                const blackKeys = scaleData.notes.filter(n => n.includes('#') || n.includes('b')).length;
                if (blackKeys >= 3) blackKeyScales++;
            }
        }

        // Check for inversion sets (all 3 inversions of a chord)
        let inversionCount = 0;
        week.piano.chords.forEach((chord, i) => {
            const chordProgress = state.piano.completed[`week-${weekNum}-chord-${i}`];
            const chordAced = chordProgress === PROGRESS_STATES.ACED || chordProgress === true;

            if (chordAced) {
                if (chord.name.includes('Inversion') || chord.name.includes('Root Position')) {
                    inversionCount++;
                }
            } else {
                weekComplete = false;
            }
        });
        if (inversionCount >= 3) inversionSets++;

        if (weekComplete) pianoWeeksComplete++;
    });

    state.piano.weeksCompleted = pianoWeeksComplete;
    state.piano.inversionSets = inversionSets;
    state.piano.blackKeyScales = blackKeyScales;
}

// Metronome functions
async function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Always try to resume - needed after user interaction
    if (audioContext.state === 'suspended') {
        try {
            await audioContext.resume();
        } catch (e) {
            console.warn('Could not resume audio context:', e);
        }
    }
    return audioContext;
}

async function playMetronomeTick(accent = false) {
    const ctx = await initAudioContext();
    if (ctx.state !== 'running') return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = accent ? 1000 : 800;
    gain.gain.value = accent ? 0.3 : 0.2;

    osc.start(ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    osc.stop(ctx.currentTime + 0.05);
}

async function startMetronome() {
    if (metronomeInterval) return;

    // Initialize audio context first (requires user gesture)
    await initAudioContext();

    state.metronome.isPlaying = true;
    let beat = 0;

    const tick = () => {
        playMetronomeTick(beat % 4 === 0);
        beat++;
    };

    tick(); // First tick immediately
    metronomeInterval = setInterval(tick, 60000 / state.metronome.bpm);
    render();
}

function stopMetronome() {
    if (metronomeInterval) {
        clearInterval(metronomeInterval);
        metronomeInterval = null;
    }
    state.metronome.isPlaying = false;
    render();
}

function setMetronomeBPM(bpm) {
    state.metronome.bpm = Math.max(40, Math.min(208, bpm));
    if (state.metronome.isPlaying) {
        stopMetronome();
        startMetronome();
    }
    saveState();
}

// Practice Timer Functions
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getWeekPracticeTime(player, weekNum) {
    return state[player].practiceTime[`week-${weekNum}`] || 0;
}

function startPracticeTimer(player) {
    // Stop any existing timer
    if (practiceTimerInterval) {
        stopPracticeTimer();
    }

    const weekNum = state.currentWeek;
    state.activePracticeTimer = {
        player,
        week: weekNum,
        startTime: Date.now()
    };

    practiceTimerPlayer = player;

    // Update display every second
    practiceTimerInterval = setInterval(() => {
        updatePracticeTimerDisplay(player);
    }, 1000);

    saveState();
    render();
}

function stopPracticeTimer() {
    if (state.activePracticeTimer) {
        const { player, week, startTime } = state.activePracticeTimer;
        const elapsed = Math.floor((Date.now() - startTime) / 1000);

        // Add elapsed time to the week's total
        const weekKey = `week-${week}`;
        if (!state[player].practiceTime[weekKey]) {
            state[player].practiceTime[weekKey] = 0;
        }
        state[player].practiceTime[weekKey] += elapsed;

        state.activePracticeTimer = null;
    }

    if (practiceTimerInterval) {
        clearInterval(practiceTimerInterval);
        practiceTimerInterval = null;
    }

    practiceTimerPlayer = null;
    saveState();
    render();
}

function updatePracticeTimerDisplay(player) {
    const timerDisplay = document.querySelector(`#${player}-player .timer-current`);
    if (timerDisplay && state.activePracticeTimer) {
        const elapsed = Math.floor((Date.now() - state.activePracticeTimer.startTime) / 1000);
        const weekTotal = getWeekPracticeTime(player, state.currentWeek);
        timerDisplay.textContent = formatTime(weekTotal + elapsed);
    }
}

function resetWeekPracticeTime(player, weekNum) {
    const weekKey = `week-${weekNum}`;
    state[player].practiceTime[weekKey] = 0;
    saveState();
    render();
}

// Notes Functions
function getItemNote(player, itemId) {
    return state[player].notes[itemId] || '';
}

function setItemNote(player, itemId, note) {
    if (note.trim()) {
        state[player].notes[itemId] = note;
    } else {
        delete state[player].notes[itemId];
    }
    saveState();
}

function openNotesModal(player, itemId, itemName) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('notes-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'notes-modal';
        modal.className = 'notes-modal';
        modal.innerHTML = `
            <div class="notes-modal-content">
                <button class="notes-modal-close">&times;</button>
                <h3 class="notes-modal-title"></h3>
                <div class="emoji-picker"></div>
                <textarea class="notes-textarea" placeholder="Add your notes here... What's tricky? What helped?"></textarea>
                <button class="notes-save-btn">Save Notes</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Close button
        modal.querySelector('.notes-modal-close').addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    // Set up emoji picker
    const emojiPicker = modal.querySelector('.emoji-picker');
    emojiPicker.innerHTML = EMOJI_PICKER.map(emoji =>
        `<button class="emoji-btn" data-emoji="${emoji}">${emoji}</button>`
    ).join('');

    const textarea = modal.querySelector('.notes-textarea');

    // Emoji click handlers
    emojiPicker.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.onclick = () => {
            const emoji = btn.dataset.emoji;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const text = textarea.value;
            textarea.value = text.substring(0, start) + emoji + text.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
            textarea.focus();
        };
    });

    // Populate modal
    modal.querySelector('.notes-modal-title').textContent = `Notes: ${itemName}`;
    textarea.value = getItemNote(player, itemId);

    // Save button
    const saveBtn = modal.querySelector('.notes-save-btn');
    saveBtn.onclick = () => {
        setItemNote(player, itemId, textarea.value);
        modal.classList.remove('show');
        render();
    };

    // Show modal
    modal.classList.add('show');
    textarea.focus();
}

// Get item ID for tracking completion
function getItemId(weekNum, type, index = null) {
    if (type === 'scale') {
        return `week-${weekNum}-scale`;
    }
    return `week-${weekNum}-chord-${index}`;
}

// Progress states: 0 = not started, 1 = in progress, 2 = aced
const PROGRESS_STATES = {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    ACED: 2
};

// Get item progress (0, 1, or 2)
function getItemProgress(player, weekNum, type, index = null) {
    const id = getItemId(weekNum, type, index);
    // Handle legacy boolean data
    const value = state[player].completed[id];
    if (value === true) return PROGRESS_STATES.ACED;
    if (value === false || value === undefined) return PROGRESS_STATES.NOT_STARTED;
    return value;
}

// Check if item is completed (aced) - for backwards compatibility
function isCompleted(player, weekNum, type, index = null) {
    return getItemProgress(player, weekNum, type, index) === PROGRESS_STATES.ACED;
}

// Cycle item progress: not started → in progress → aced → not started
function cycleItemProgress(player, weekNum, type, index, tokens) {
    const id = getItemId(weekNum, type, index);
    const currentProgress = getItemProgress(player, weekNum, type, index);

    // Calculate token changes
    const wasAced = currentProgress === PROGRESS_STATES.ACED;

    // Cycle to next state
    let newProgress;
    if (currentProgress === PROGRESS_STATES.NOT_STARTED) {
        newProgress = PROGRESS_STATES.IN_PROGRESS;
    } else if (currentProgress === PROGRESS_STATES.IN_PROGRESS) {
        newProgress = PROGRESS_STATES.ACED;
    } else {
        newProgress = PROGRESS_STATES.NOT_STARTED;
    }

    // Update state
    if (newProgress === PROGRESS_STATES.NOT_STARTED) {
        delete state[player].completed[id];
    } else {
        state[player].completed[id] = newProgress;
    }

    // Award/remove tokens only for ACED state
    const isNowAced = newProgress === PROGRESS_STATES.ACED;
    if (isNowAced && !wasAced) {
        state[player].tokens += tokens;
        celebrateTokens(player);
    } else if (wasAced && !isNowAced) {
        state[player].tokens -= tokens;
    }

    // Update achievement stats
    updateAchievementStats();
    checkNewAchievements(player);

    saveState();
    render();
}

// Legacy function for compatibility
function toggleItem(player, weekNum, type, index, tokens) {
    cycleItemProgress(player, weekNum, type, index, tokens);
}

// Toggle week approval (Dad approves when player passes the weekly challenge)
function toggleWeekApproval(player, weekNum) {
    if (!state[player].approvedWeeks) {
        state[player].approvedWeeks = [];
    }

    const index = state[player].approvedWeeks.indexOf(weekNum);
    if (index === -1) {
        // Approve the week
        state[player].approvedWeeks.push(weekNum);
        state[player].approvedWeeks.sort((a, b) => a - b);
    } else {
        // Unapprove the week
        state[player].approvedWeeks.splice(index, 1);
    }

    // Update weeksCompleted count
    state[player].weeksCompleted = state[player].approvedWeeks.length;

    saveState();
    render();
}

// Check if a week is approved
function isWeekApproved(player, weekNum) {
    return state[player].approvedWeeks?.includes(weekNum) || false;
}

// Check for newly earned achievements
function checkNewAchievements(player) {
    const achievements = ACHIEVEMENTS[player];
    const earnedIds = state[player].achievements || [];

    achievements.forEach(achievement => {
        if (!earnedIds.includes(achievement.id)) {
            if (achievement.condition(state)) {
                state[player].achievements.push(achievement.id);
                showAchievementPopup(player, achievement);
            }
        }
    });
}

// Show achievement popup
function showAchievementPopup(player, achievement) {
    const popup = document.createElement('div');
    popup.className = `achievement-popup ${player}`;
    popup.innerHTML = `
        <span class="achievement-icon">${achievement.icon}</span>
        <div class="achievement-info">
            <span class="achievement-title">Achievement Unlocked!</span>
            <span class="achievement-name">${achievement.name}</span>
        </div>
    `;
    document.body.appendChild(popup);

    setTimeout(() => popup.classList.add('show'), 100);
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}

// Celebration animation
function celebrateTokens(player) {
    const tokenDisplay = document.querySelector(`#${player}-player .token-count`);
    if (tokenDisplay) {
        tokenDisplay.style.transform = 'scale(1.3)';
        setTimeout(() => {
            tokenDisplay.style.transform = 'scale(1)';
        }, 200);
    }
}

// Calculate week progress (accounts for three states)
function getWeekProgress(player, weekNum) {
    const week = CURRICULUM[weekNum - 1];
    const data = week[player];
    let points = 0;
    let total = 1 + data.chords.length; // 1 scale + chords
    let aced = 0;

    // Scale progress
    const scaleProgress = getItemProgress(player, weekNum, 'scale');
    if (scaleProgress === PROGRESS_STATES.ACED) {
        points += 1;
        aced++;
    } else if (scaleProgress === PROGRESS_STATES.IN_PROGRESS) {
        points += 0.5;
    }

    // Chord progress
    data.chords.forEach((_, i) => {
        const chordProgress = getItemProgress(player, weekNum, 'chord', i);
        if (chordProgress === PROGRESS_STATES.ACED) {
            points += 1;
            aced++;
        } else if (chordProgress === PROGRESS_STATES.IN_PROGRESS) {
            points += 0.5;
        }
    });

    return {
        completed: aced,
        total,
        points,
        percent: Math.round((points / total) * 100),
        isFullyAced: aced === total
    };
}

// Get difficulty label
function getDifficultyLabel(level) {
    const labels = { 1: 'Beginner', 2: 'Intermediate', 3: 'Challenging' };
    return labels[level] || '';
}

// Get progress state class and label
function getProgressInfo(progress) {
    switch (progress) {
        case PROGRESS_STATES.IN_PROGRESS:
            return { class: 'in-progress', label: 'In Progress', icon: '◐' };
        case PROGRESS_STATES.ACED:
            return { class: 'aced', label: 'Aced!', icon: '✓' };
        default:
            return { class: 'not-started', label: 'Not Started', icon: '' };
    }
}

// Create checklist item HTML
function createChecklistItem(item, player, weekNum, type, index = null) {
    const progress = getItemProgress(player, weekNum, type, index);
    const progressInfo = getProgressInfo(progress);
    const difficulty = item.difficulty || 1;
    const itemId = getItemId(weekNum, type, index);
    const hasNote = !!state[player].notes[itemId];

    const div = document.createElement('div');
    div.className = `checklist-item ${progressInfo.class} difficulty-${difficulty}`;

    // Build extra info based on instrument
    let extraInfo = '';
    if (player === 'guitar' && item.cagedShape) {
        extraInfo = `<span class="caged-badge">${item.cagedShape}</span>`;
    }
    if (item.isBarre) {
        extraInfo += `<span class="barre-badge">BARRE</span>`;
    }

    // Get note preview if exists
    const noteText = state[player].notes[itemId] || '';
    const notePreview = noteText ? `<div class="note-preview">${noteText.substring(0, 50)}${noteText.length > 50 ? '...' : ''}</div>` : '';

    div.innerHTML = `
        <div class="progress-indicator" title="Click to change: Not Started → In Progress → Aced">
            <span class="progress-icon">${progressInfo.icon}</span>
        </div>
        <div class="item-info">
            <span class="item-name">${item.name}</span>
            <div class="item-badges">
                <span class="progress-label ${progressInfo.class}">${progressInfo.label}</span>
                <span class="difficulty-badge difficulty-${difficulty}">${getDifficultyLabel(difficulty)}</span>
                ${extraInfo}
            </div>
            ${notePreview}
        </div>
        <div class="item-buttons">
            <button class="notes-btn ${hasNote ? 'has-note' : ''}" title="${hasNote ? 'View/edit notes' : 'Add notes'}">📝</button>
            <button class="show-btn" title="Show how to play">?</button>
            <button class="play-btn" title="Listen">&#9658;</button>
        </div>
        <span class="item-tokens ${progress === PROGRESS_STATES.ACED ? 'earned' : ''}">+${item.tokens} ⚡</span>
    `;

    // Notes button
    const notesBtn = div.querySelector('.notes-btn');
    notesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openNotesModal(player, itemId, item.name);
    });

    // Show diagram button
    const showBtn = div.querySelector('.show-btn');
    showBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showDiagram(player, type === 'scale' ? 'scales' : 'chords', item.name);
    });

    // Play button
    const playBtn = div.querySelector('.play-btn');
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playMusic(player, type === 'scale' ? 'scales' : 'chords', item.name);
        playBtn.classList.add('playing');
        setTimeout(() => playBtn.classList.remove('playing'), 500);
    });

    // Cycle progress on click
    div.addEventListener('click', (e) => {
        if (!e.target.classList.contains('show-btn') &&
            !e.target.classList.contains('play-btn') &&
            !e.target.classList.contains('notes-btn')) {
            cycleItemProgress(player, weekNum, type, index, item.tokens);
        }
    });

    return div;
}

// Render current week content for a player
function renderWeekContent(player) {
    const weekNum = state.currentWeek;
    const week = CURRICULUM[weekNum - 1];
    const data = week[player];
    const progress = getWeekProgress(player, weekNum);

    // Get tips for this week
    const scaleTip = data.scale.tip || '';
    const speedGoal = data.scale.speedGoal;
    const pattern = data.scale.pattern;

    // Practice timer
    const weekPracticeTime = getWeekPracticeTime(player, weekNum);
    const isTimerActive = state.activePracticeTimer?.player === player && state.activePracticeTimer?.week === weekNum;
    const progressPercent = Math.min(100, Math.round((weekPracticeTime / WEEKLY_PRACTICE_GOAL) * 100));
    const goalReached = weekPracticeTime >= WEEKLY_PRACTICE_GOAL;

    const practiceTimerSection = `
        <div class="practice-timer-section ${goalReached ? 'goal-reached' : ''}">
            <div class="timer-header">
                <span class="timer-label">Practice Timer</span>
                <span class="timer-goal ${goalReached ? 'complete' : ''}">Goal: 30 min</span>
            </div>
            <div class="timer-display">
                <div class="timer-progress-bar">
                    <div class="timer-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <span class="timer-current">${formatTime(weekPracticeTime)}</span>
                <span class="timer-separator">/</span>
                <span class="timer-target">30:00</span>
            </div>
            <div class="timer-controls">
                <button class="timer-btn ${isTimerActive ? 'active' : ''}" data-action="${isTimerActive ? 'stop' : 'start'}">
                    ${isTimerActive ? '⏹ Stop' : '▶ Start'}
                </button>
                <button class="timer-reset-btn" title="Reset this week's time">↺</button>
            </div>
        </div>
    `;

    // Build metronome section for piano (speed challenge)
    let metronomeSection = '';
    if (player === 'piano' && speedGoal) {
        const isPlaying = state.metronome.isPlaying;
        metronomeSection = `
            <div class="metronome-section">
                <div class="metronome-header">
                    <span class="metronome-label">Speed Challenge</span>
                    <span class="speed-goal">Goal: ${speedGoal} BPM</span>
                </div>
                <div class="metronome-controls">
                    <button class="bpm-btn" data-delta="-5">-5</button>
                    <button class="bpm-btn" data-delta="-1">-1</button>
                    <span class="bpm-display">${state.metronome.bpm} BPM</span>
                    <button class="bpm-btn" data-delta="1">+1</button>
                    <button class="bpm-btn" data-delta="5">+5</button>
                    <button class="metronome-toggle ${isPlaying ? 'playing' : ''}">${isPlaying ? '⏹' : '▶'}</button>
                </div>
            </div>
        `;
    }

    // Pattern info for guitar
    let patternSection = '';
    if (player === 'guitar' && pattern) {
        patternSection = `
            <div class="pattern-info">
                <span class="pattern-label">Pattern:</span>
                <span class="pattern-name">${pattern}</span>
            </div>
        `;
    }

    // Songs for this week
    const songs = week.songs?.[player] || [];
    const songsSection = songs.length > 0 ? `
        <div class="week-section songs-section">
            <h4>Songs You Can Play Now!</h4>
            <div class="songs-list">
                ${songs.map(song => {
                    const links = song.links || {};
                    const linkButtons = [];
                    if (links.spotify) linkButtons.push(`<a href="${links.spotify}" target="_blank" class="song-link spotify" title="Listen on Spotify">🎧</a>`);
                    if (links.video) linkButtons.push(`<a href="${links.video}" target="_blank" class="song-link video" title="Watch Video">▶️</a>`);
                    if (links.tutorial) linkButtons.push(`<a href="${links.tutorial}" target="_blank" class="song-link tutorial" title="Tutorial">📚</a>`);
                    if (links.tab) linkButtons.push(`<a href="${links.tab}" target="_blank" class="song-link tab" title="Guitar Tab">🎸</a>`);
                    if (links.sheet) linkButtons.push(`<a href="${links.sheet}" target="_blank" class="song-link sheet" title="Sheet Music">🎹</a>`);

                    return `
                    <div class="song-item">
                        <div class="song-header">
                            <span class="song-title">${song.title}</span>
                            <span class="song-artist">by ${song.artist}</span>
                        </div>
                        <div class="song-details">
                            <div class="song-chords">${song.chords}</div>
                            ${linkButtons.length > 0 ? `<div class="song-links">${linkButtons.join('')}</div>` : ''}
                        </div>
                        ${song.note ? `<div class="song-note">${song.note}</div>` : ''}
                    </div>
                `}).join('')}
            </div>
        </div>
    ` : '';

    // Weekly challenge
    const weeklyChallenge = week.weeklyChallenge?.[player] || '';
    const isApproved = isWeekApproved(player, weekNum);
    const challengeSection = weeklyChallenge ? `
        <div class="weekly-challenge ${isApproved ? 'approved' : ''}">
            <div class="challenge-header">
                <h4>Weekly Challenge</h4>
                ${isApproved ? '<span class="approved-badge">✓ PASSED</span>' : ''}
            </div>
            <p class="challenge-description">${weeklyChallenge}</p>
            <button class="approve-btn ${isApproved ? 'approved' : ''}" data-player="${player}" data-week="${weekNum}">
                ${isApproved ? '✓ Week Approved' : 'Dad: Mark as Complete'}
            </button>
        </div>
    ` : '';

    // Generate player-specific title from scale name
    const scaleName = data.scale.name;
    // Simplify the scale name for the title (remove parenthetical details)
    const playerTitle = scaleName.replace(/\s*\([^)]*\)\s*/g, '').trim();

    // Player-specific description
    const playerDescription = week.description.split(player === 'guitar' ? 'Piano:' : 'Guitar:')[0]
        .replace(/^(Guitar:|Piano:)\s*/i, '').trim();

    const container = document.getElementById(`${player}-week-content`);
    container.innerHTML = `
        <div class="week-header-info">
            <div class="week-title-group">
                <span class="week-number">Week ${weekNum} of 12</span>
                <h3 class="week-title">${playerTitle}</h3>
            </div>
            <div class="progress-ring">
                <svg viewBox="0 0 36 36">
                    <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="progress-ring-fill" stroke-dasharray="${progress.percent}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <span class="progress-text">${progress.percent}%</span>
            </div>
        </div>
        <p class="week-description">${playerDescription}</p>
        ${practiceTimerSection}
        ${metronomeSection}
        <div class="week-items">
            <div class="week-section scale-section">
                <h4>Scale ${patternSection}</h4>
                <div class="scale-list"></div>
                ${scaleTip ? `<div class="tip-box"><span class="tip-icon">💡</span> ${scaleTip}</div>` : ''}
            </div>
            <div class="week-section chords-section">
                <h4>Chords</h4>
                <div class="chord-list"></div>
            </div>
        </div>
        ${songsSection}
        ${challengeSection}
    `;

    // Add scale item
    const scaleList = container.querySelector('.scale-list');
    scaleList.appendChild(createChecklistItem(data.scale, player, weekNum, 'scale'));

    // Add chord items
    const chordList = container.querySelector('.chord-list');
    data.chords.forEach((chord, i) => {
        chordList.appendChild(createChecklistItem(chord, player, weekNum, 'chord', i));
        // Add tip for chord if it has one
        if (chord.tip) {
            const tipDiv = document.createElement('div');
            tipDiv.className = 'tip-box small';
            tipDiv.innerHTML = `<span class="tip-icon">💡</span> ${chord.tip}`;
            chordList.appendChild(tipDiv);
        }
        // Add barre info if applicable
        if (chord.barreInfo) {
            const barreDiv = document.createElement('div');
            barreDiv.className = 'tip-box barre-tip';
            barreDiv.innerHTML = `<span class="tip-icon">💪</span> <strong>Barre Technique:</strong> ${chord.barreInfo}`;
            chordList.appendChild(barreDiv);
        }
    });

    // Setup metronome controls if present
    if (player === 'piano') {
        const metronomeToggle = container.querySelector('.metronome-toggle');
        if (metronomeToggle) {
            metronomeToggle.addEventListener('click', () => {
                if (state.metronome.isPlaying) {
                    stopMetronome();
                } else {
                    startMetronome();
                }
            });
        }

        container.querySelectorAll('.bpm-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const delta = parseInt(btn.dataset.delta);
                setMetronomeBPM(state.metronome.bpm + delta);
            });
        });
    }

    // Setup practice timer controls
    const timerBtn = container.querySelector('.timer-btn');
    if (timerBtn) {
        timerBtn.addEventListener('click', () => {
            if (timerBtn.dataset.action === 'start') {
                startPracticeTimer(player);
            } else {
                stopPracticeTimer();
            }
        });
    }

    const resetBtn = container.querySelector('.timer-reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Reset practice time for this week?')) {
                resetWeekPracticeTime(player, weekNum);
            }
        });
    }

    // Setup approve button
    const approveBtn = container.querySelector('.approve-btn');
    if (approveBtn) {
        approveBtn.addEventListener('click', () => {
            const p = approveBtn.dataset.player;
            const w = parseInt(approveBtn.dataset.week);
            toggleWeekApproval(p, w);
        });
    }
}

// Render embedded diagrams for a player
function renderEmbeddedDiagrams(player) {
    const weekNum = state.currentWeek;
    const week = CURRICULUM[weekNum - 1];
    const data = week[player];

    const container = document.getElementById(`${player}-diagrams`);
    container.innerHTML = `
        <h4>Fingering Diagrams <span class="click-hint">(click to play)</span></h4>
        <div class="diagrams-grid"></div>
    `;

    const grid = container.querySelector('.diagrams-grid');

    // Add scale diagram
    const scaleDiagram = createEmbeddedDiagram(player, 'scales', data.scale.name);
    if (scaleDiagram) {
        grid.appendChild(scaleDiagram);
    }

    // Add chord diagrams
    data.chords.forEach(chord => {
        const chordDiagram = createEmbeddedDiagram(player, 'chords', chord.name);
        if (chordDiagram) {
            grid.appendChild(chordDiagram);
        }
    });
}

// Create an embedded diagram card
function createEmbeddedDiagram(instrument, type, name) {
    const card = document.createElement('div');
    card.className = 'diagram-card';

    // Shorten the name for display
    const shortName = name.length > 30 ? name.substring(0, 27) + '...' : name;
    card.innerHTML = `
        <h5 title="${name}">
            <span class="play-hint">&#9658;</span>
            ${shortName}
        </h5>
    `;

    if (instrument === 'guitar') {
        if (type === 'chords') {
            renderGuitarChordInline(card, name);
        } else {
            renderGuitarScaleInline(card, name);
        }
    } else {
        if (type === 'chords') {
            renderPianoChordInline(card, name);
        } else {
            renderPianoScaleInline(card, name);
        }
    }

    // Add click to play functionality
    card.addEventListener('click', () => {
        playMusic(instrument, type, name);
        card.classList.add('playing');
        setTimeout(() => card.classList.remove('playing'), 600);
    });

    return card;
}

// Render guitar chord inline
function renderGuitarChordInline(container, name) {
    const chord = GUITAR_CHORDS[name];
    if (!chord) {
        container.innerHTML += '<p class="fingering-info">Diagram coming soon</p>';
        return;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 150 180');
    svg.setAttribute('class', 'guitar-diagram');

    const startFret = chord.startFret || 0;

    // Fret number indicator
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
}

// Render guitar scale inline - vertical orientation (same as chord diagrams)
function renderGuitarScaleInline(container, name) {
    const scale = GUITAR_SCALES[name];
    if (!scale) {
        container.innerHTML += '<p class="fingering-info">Diagram coming soon</p>';
        return;
    }

    // Find the fret range needed for this scale
    const frets = scale.positions.filter(p => p.fret > 0).map(p => p.fret);
    const minFret = Math.min(...frets, 1);
    const maxFret = Math.max(...frets, 4);
    const startFret = scale.startFret || 0;
    const fretCount = Math.max(5, maxFret - startFret + 1);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // Taller viewBox to accommodate more frets for scales
    const height = 50 + fretCount * 28;
    svg.setAttribute('viewBox', `0 0 150 ${height}`);
    svg.setAttribute('class', 'guitar-diagram guitar-scale-diagram');

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

    // Draw nut or fret line at top
    if (startFret === 0) {
        const nut = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        nut.setAttribute('x', '25');
        nut.setAttribute('y', '30');
        nut.setAttribute('width', '100');
        nut.setAttribute('height', '5');
        nut.setAttribute('fill', '#333');
        svg.appendChild(nut);
    }

    // Draw horizontal frets
    for (let i = 0; i < fretCount; i++) {
        const fret = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        fret.setAttribute('x1', '25');
        fret.setAttribute('y1', 35 + i * 28);
        fret.setAttribute('x2', '125');
        fret.setAttribute('y2', 35 + i * 28);
        fret.setAttribute('stroke', '#666');
        fret.setAttribute('stroke-width', '2');
        svg.appendChild(fret);
    }

    // Draw vertical strings (E A D G B e from left to right)
    const stringNames = ['E', 'A', 'D', 'G', 'B', 'e'];
    for (let i = 0; i < 6; i++) {
        const string = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        string.setAttribute('x1', 25 + i * 20);
        string.setAttribute('y1', '30');
        string.setAttribute('x2', 25 + i * 20);
        string.setAttribute('y2', 35 + (fretCount - 1) * 28);
        string.setAttribute('stroke', '#aaa');
        string.setAttribute('stroke-width', i < 3 ? '2' : '1');
        svg.appendChild(string);

        // String labels at bottom
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', 25 + i * 20);
        label.setAttribute('y', 35 + (fretCount - 1) * 28 + 15);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('fill', '#888');
        label.setAttribute('font-size', '10');
        label.textContent = stringNames[i];
        svg.appendChild(label);
    }

    // Draw scale positions with finger numbers
    scale.positions.forEach((pos, idx) => {
        // String position: string 6 (low E) is index 0, string 1 (high e) is index 5
        const stringIdx = 6 - pos.string;
        const x = 25 + stringIdx * 20;

        if (pos.fret === 0 || pos.finger === 0) {
            // Open string - draw circle above nut
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', '18');
            circle.setAttribute('r', '6');
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', '#2ecc71');
            circle.setAttribute('stroke-width', '2');
            svg.appendChild(circle);
        } else {
            // Fretted note
            const fretPos = pos.fret - startFret;
            const y = 35 + (fretPos - 0.5) * 28;

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', '9');
            circle.setAttribute('fill', '#3498db');
            svg.appendChild(circle);

            // Show finger number
            const finger = pos.finger !== undefined ? pos.finger : '';
            if (finger !== '') {
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x);
                text.setAttribute('y', y + 4);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', 'white');
                text.setAttribute('font-size', '11');
                text.setAttribute('font-weight', 'bold');
                text.textContent = finger;
                svg.appendChild(text);
            }
        }
    });

    container.appendChild(svg);

    // Add finger legend
    const legend = document.createElement('p');
    legend.className = 'fingering-info';
    legend.innerHTML = '<small>Fingers: 1=Index, 2=Middle, 3=Ring, 4=Pinky</small>';
    container.appendChild(legend);
}

// Render piano chord inline
function renderPianoChordInline(container, name) {
    const chord = PIANO_CHORDS_FINGERING[name];
    if (!chord) {
        container.innerHTML += '<p class="fingering-info">Diagram coming soon</p>';
        return;
    }

    const svg = createPianoKeyboardSVG(chord.notes, chord.fingers);
    container.appendChild(svg);

    const info = document.createElement('p');
    info.className = 'fingering-info';
    info.textContent = chord.notes.map((n, i) => `${n}(${chord.fingers[i]})`).join(' ');
    container.appendChild(info);
}

// Render piano scale inline with both hands on diagram
function renderPianoScaleInline(container, name) {
    const fingering = PIANO_FINGERING[name];
    if (!fingering) {
        container.innerHTML += '<p class="fingering-info">Diagram coming soon</p>';
        return;
    }

    // Create scale-specific keyboard starting from root note
    const svg = createPianoScaleKeyboardSVG(fingering);
    container.appendChild(svg);

    // Legend for hand colors
    const legend = document.createElement('div');
    legend.className = 'hand-legend';
    legend.innerHTML = `
        <span class="legend-item rh"><span class="legend-dot"></span> Right Hand</span>
        <span class="legend-item lh"><span class="legend-dot"></span> Left Hand</span>
    `;
    container.appendChild(legend);

    // Thumb-under tip
    if (fingering.thumbUnder) {
        const tipInfo = document.createElement('div');
        tipInfo.className = 'fingering-tip';
        tipInfo.innerHTML = `<em>${fingering.thumbUnder}</em>`;
        container.appendChild(tipInfo);
    }
}

// Create piano keyboard SVG specifically for scales - starts from root note, shows both hands
function createPianoScaleKeyboardSVG(fingering) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'piano-diagram piano-scale-diagram');

    const notes = fingering.notes;
    const fingersRH = fingering.fingersRH || fingering.fingers;
    const fingersLH = fingering.fingersLH;

    // Determine the root note and build keyboard starting from it
    const rootNote = notes[0].replace('#', '').replace('b', '');

    // Full chromatic scale for reference
    const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    // Find starting white key index
    const rootWhiteIndex = whiteNotes.indexOf(rootNote);

    // We'll draw 9 white keys to comfortably fit an octave scale
    const numWhiteKeys = 9;
    const keyWidth = 28;
    const keyHeight = 80;
    const blackKeyWidth = 18;
    const blackKeyHeight = 50;
    const svgWidth = numWhiteKeys * keyWidth + 20;

    svg.setAttribute('viewBox', `0 0 ${svgWidth} 100`);

    // Build the sequence of white keys starting from root
    const whiteKeySequence = [];
    for (let i = 0; i < numWhiteKeys; i++) {
        whiteKeySequence.push(whiteNotes[(rootWhiteIndex + i) % 7]);
    }

    // Normalize note names (convert flats to sharps for matching)
    const normalizeNote = (note) => {
        const flatToSharp = { 'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#' };
        return flatToSharp[note] || note;
    };

    const normalizedNotes = notes.map(normalizeNote);

    // Determine which white keys have black keys after them
    const hasBlackAfter = (note) => ['C', 'D', 'F', 'G', 'A'].includes(note);
    const getBlackNote = (note) => {
        const map = { 'C': 'C#', 'D': 'D#', 'F': 'F#', 'G': 'G#', 'A': 'A#' };
        return map[note];
    };

    // Draw white keys first
    whiteKeySequence.forEach((keyNote, i) => {
        const x = 10 + i * keyWidth;
        const noteIndex = normalizedNotes.indexOf(keyNote);
        const isHighlighted = noteIndex !== -1;

        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', '10');
        rect.setAttribute('width', keyWidth - 2);
        rect.setAttribute('height', keyHeight);
        rect.setAttribute('fill', isHighlighted ? '#2c3e50' : 'white');
        rect.setAttribute('stroke', '#333');
        rect.setAttribute('stroke-width', '1');
        rect.setAttribute('rx', '2');
        svg.appendChild(rect);

        // Add fingering numbers if highlighted
        if (isHighlighted) {
            // Right hand (green) - top of key
            if (fingersRH && fingersRH[noteIndex]) {
                const rhText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                rhText.setAttribute('x', x + (keyWidth - 2) / 2);
                rhText.setAttribute('y', '32');
                rhText.setAttribute('text-anchor', 'middle');
                rhText.setAttribute('fill', '#27ae60');
                rhText.setAttribute('font-size', '14');
                rhText.setAttribute('font-weight', 'bold');
                rhText.textContent = fingersRH[noteIndex];
                svg.appendChild(rhText);
            }

            // Left hand (red) - bottom of key
            if (fingersLH && fingersLH[noteIndex]) {
                const lhText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                lhText.setAttribute('x', x + (keyWidth - 2) / 2);
                lhText.setAttribute('y', keyHeight);
                lhText.setAttribute('text-anchor', 'middle');
                lhText.setAttribute('fill', '#e74c3c');
                lhText.setAttribute('font-size', '14');
                lhText.setAttribute('font-weight', 'bold');
                lhText.textContent = fingersLH[noteIndex];
                svg.appendChild(lhText);
            }
        }
    });

    // Draw black keys
    whiteKeySequence.forEach((keyNote, i) => {
        if (i >= numWhiteKeys - 1) return; // No black key after last white key
        if (!hasBlackAfter(keyNote)) return;

        const blackNote = getBlackNote(keyNote);
        const x = 10 + i * keyWidth + keyWidth - blackKeyWidth / 2 - 1;
        const noteIndex = normalizedNotes.indexOf(blackNote);
        const isHighlighted = noteIndex !== -1;

        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', '10');
        rect.setAttribute('width', blackKeyWidth);
        rect.setAttribute('height', blackKeyHeight);
        rect.setAttribute('fill', isHighlighted ? '#1a252f' : '#222');
        rect.setAttribute('rx', '2');
        svg.appendChild(rect);

        // Add fingering numbers if highlighted
        if (isHighlighted) {
            // Right hand (green) - upper area
            if (fingersRH && fingersRH[noteIndex]) {
                const rhText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                rhText.setAttribute('x', x + blackKeyWidth / 2);
                rhText.setAttribute('y', '28');
                rhText.setAttribute('text-anchor', 'middle');
                rhText.setAttribute('fill', '#2ecc71');
                rhText.setAttribute('font-size', '12');
                rhText.setAttribute('font-weight', 'bold');
                rhText.textContent = fingersRH[noteIndex];
                svg.appendChild(rhText);
            }

            // Left hand (red) - lower area
            if (fingersLH && fingersLH[noteIndex]) {
                const lhText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                lhText.setAttribute('x', x + blackKeyWidth / 2);
                lhText.setAttribute('y', blackKeyHeight + 2);
                lhText.setAttribute('text-anchor', 'middle');
                lhText.setAttribute('fill', '#e74c3c');
                lhText.setAttribute('font-size', '12');
                lhText.setAttribute('font-weight', 'bold');
                lhText.textContent = fingersLH[noteIndex];
                svg.appendChild(lhText);
            }
        }
    });

    return svg;
}

// Create piano keyboard SVG (shared helper)
function createPianoKeyboardSVG(highlightNotes, fingers) {
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

// Create personal milestone card HTML
function createPersonalMilestoneCard(milestone, player) {
    const weeksComplete = state[player].weeksCompleted || 0;
    const playerName = state[player].name;
    const isGuitar = player === 'guitar';

    if (milestone.perWeek) {
        // Screen time - earned per week
        const earned = weeksComplete;
        const div = document.createElement('div');
        div.className = `prize-card personal ${isGuitar ? 'guitar' : 'piano'} ${earned > 0 ? 'unlocked' : ''}`;
        div.innerHTML = `
            <div class="prize-icon">${milestone.icon}</div>
            <div class="prize-name">${milestone.name}</div>
            <div class="prize-player">${playerName}</div>
            <div class="prize-status ${earned > 0 ? 'available' : 'locked'}">
                ${earned > 0 ? `${earned}x earned` : 'Complete 1 week'}
            </div>
        `;
        return div;
    } else {
        const isUnlocked = weeksComplete >= milestone.weeksRequired;
        const div = document.createElement('div');
        div.className = `prize-card personal ${isGuitar ? 'guitar' : 'piano'} ${isUnlocked ? 'unlocked' : ''}`;
        div.innerHTML = `
            <div class="prize-icon">${milestone.icon}</div>
            <div class="prize-name">${milestone.name}</div>
            <div class="prize-player">${playerName}</div>
            <div class="prize-status ${isUnlocked ? 'available' : 'locked'}">
                ${isUnlocked ? 'Unlocked!' : `${milestone.weeksRequired - weeksComplete} week${milestone.weeksRequired - weeksComplete !== 1 ? 's' : ''} to go`}
            </div>
        `;
        return div;
    }
}

// Create joint prize card HTML
function createJointPrizeCard() {
    const guitarComplete = state.guitar.weeksCompleted || 0;
    const pianoComplete = state.piano.weeksCompleted || 0;
    const bothComplete = guitarComplete >= 12 && pianoComplete >= 12;
    const totalWeeks = guitarComplete + pianoComplete;

    const div = document.createElement('div');
    div.className = `prize-card ultimate ${bothComplete ? 'unlocked' : ''}`;
    div.innerHTML = `
        <div class="prize-icon">${JOINT_PRIZE.icon}</div>
        <div class="prize-name">${JOINT_PRIZE.name}</div>
        <div class="prize-requirement">Both complete all 12 weeks</div>
        <div class="prize-progress">
            <span class="guitar-progress">${state.guitar.name}: ${guitarComplete}/12</span>
            <span class="piano-progress">${state.piano.name}: ${pianoComplete}/12</span>
        </div>
        <div class="prize-status ${bothComplete ? 'available' : 'locked'}">
            ${bothComplete ? 'UNLOCKED!' : `${24 - totalWeeks} weeks to go`}
        </div>
    `;
    return div;
}

// Render achievements bar
function renderAchievements(player) {
    const container = document.getElementById(`${player}-achievements`);
    const achievements = ACHIEVEMENTS[player];
    const earnedIds = state[player].achievements || [];

    let html = '<div class="achievements-list">';

    achievements.forEach(achievement => {
        const earned = earnedIds.includes(achievement.id);
        html += `
            <div class="achievement-badge ${earned ? 'earned' : 'locked'}" title="${achievement.name}: ${achievement.description}">
                <span class="badge-icon">${achievement.icon}</span>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Render the 12-week journey progress bar
function renderJourneyProgress() {
    const journeyBar = document.getElementById('journey-bar');
    journeyBar.innerHTML = '';

    for (let week = 1; week <= 12; week++) {
        const guitarProgress = getWeekProgress('guitar', week);
        const pianoProgress = getWeekProgress('piano', week);
        const isCurrentWeek = week === state.currentWeek;
        const isLocked = week > state.currentWeek;

        const segment = document.createElement('div');
        segment.className = `week-segment ${isCurrentWeek ? 'current' : ''} ${isLocked ? 'locked' : ''}`;
        segment.dataset.week = week;

        // Guitar half (top)
        const guitarHalf = document.createElement('div');
        guitarHalf.className = 'segment-half guitar';
        if (!isLocked) {
            if (guitarProgress.isFullyAced) {
                guitarHalf.classList.add('complete');
            } else if (guitarProgress.percent > 0) {
                guitarHalf.classList.add('partial');
                // Calculate aced-only percentage
                const acedPercent = Math.round((guitarProgress.completed / guitarProgress.total) * 100);
                guitarHalf.style.setProperty('--aced-progress', acedPercent + '%');
                guitarHalf.style.setProperty('--progress', guitarProgress.percent + '%');
            }
        }

        // Piano half (bottom)
        const pianoHalf = document.createElement('div');
        pianoHalf.className = 'segment-half piano';
        if (!isLocked) {
            if (pianoProgress.isFullyAced) {
                pianoHalf.classList.add('complete');
            } else if (pianoProgress.percent > 0) {
                pianoHalf.classList.add('partial');
                const acedPercent = Math.round((pianoProgress.completed / pianoProgress.total) * 100);
                pianoHalf.style.setProperty('--aced-progress', acedPercent + '%');
                pianoHalf.style.setProperty('--progress', pianoProgress.percent + '%');
            }
        }

        segment.appendChild(guitarHalf);
        segment.appendChild(pianoHalf);

        // Click to navigate to week
        segment.addEventListener('click', () => {
            if (!isLocked) {
                state.currentWeek = week;
                saveState();
                render();
            }
        });

        journeyBar.appendChild(segment);
    }
}

// Render the UI
function render() {
    // Update player names
    document.querySelector('#guitar-player .player-name').textContent = state.guitar.name;
    document.querySelector('#piano-player .player-name').textContent = state.piano.name;

    // Update header displays
    document.getElementById('guitar-name-display').textContent = state.guitar.name;
    document.getElementById('piano-name-display').textContent = state.piano.name;
    document.getElementById('guitar-tokens-header').textContent = state.guitar.tokens;
    document.getElementById('piano-tokens-header').textContent = state.piano.tokens;

    // Update tab names
    document.querySelector('.player-tab[data-player="guitar"] .tab-name').textContent = state.guitar.name;
    document.querySelector('.player-tab[data-player="piano"] .tab-name').textContent = state.piano.name;

    // Update current week display
    document.getElementById('current-week-num').textContent = state.currentWeek;

    // Render journey progress bar
    renderJourneyProgress();

    // Render current week content for each player
    renderWeekContent('guitar');
    renderWeekContent('piano');

    // Render embedded diagrams
    renderEmbeddedDiagrams('guitar');
    renderEmbeddedDiagrams('piano');

    // Render achievements
    renderAchievements('guitar');
    renderAchievements('piano');

    // Render prizes
    const prizesContainer = document.getElementById('prizes-container');
    prizesContainer.innerHTML = '';

    // Personal milestones for each player
    PERSONAL_MILESTONES.forEach(milestone => {
        prizesContainer.appendChild(createPersonalMilestoneCard(milestone, 'guitar'));
        prizesContainer.appendChild(createPersonalMilestoneCard(milestone, 'piano'));
    });

    // Joint prize
    prizesContainer.appendChild(createJointPrizeCard());
}

// Handle name editing
function setupNameEditing() {
    document.querySelectorAll('.player-name').forEach(nameEl => {
        nameEl.addEventListener('blur', (e) => {
            const player = e.target.dataset.player;
            state[player].name = e.target.textContent.trim() || (player === 'guitar' ? 'Guitar Hero' : 'Piano Master');
            saveState();
        });

        nameEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.target.blur();
            }
        });
    });
}

// Week navigation
function setupWeekNavigation() {
    document.getElementById('prev-week').addEventListener('click', () => {
        if (state.currentWeek > 1) {
            state.currentWeek--;
            saveState();
            render();
        }
    });

    document.getElementById('next-week').addEventListener('click', () => {
        if (state.currentWeek < 12) {
            state.currentWeek++;
            saveState();
            render();
        }
    });
}

// Tab switching
function setupTabs() {
    document.querySelectorAll('.player-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const player = tab.dataset.player;

            // Update active tab
            document.querySelectorAll('.player-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active player card
            document.querySelectorAll('.player-card').forEach(card => card.classList.remove('active'));
            document.getElementById(`${player}-player`).classList.add('active');
        });
    });
}

// Initialize
function init() {
    loadState();
    render();
    setupNameEditing();
    setupWeekNavigation();
    setupTabs();
}

// Save state before page unload (for practice timer)
window.addEventListener('beforeunload', () => {
    // Save any accumulated practice time
    if (state.activePracticeTimer) {
        const { player, week, startTime } = state.activePracticeTimer;
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const weekKey = `week-${week}`;
        if (!state[player].practiceTime[weekKey]) {
            state[player].practiceTime[weekKey] = 0;
        }
        state[player].practiceTime[weekKey] += elapsed;
        // Reset start time to now for next session
        state.activePracticeTimer.startTime = Date.now();
        saveState();
    }
});

// Start the app
document.addEventListener('DOMContentLoaded', init);
