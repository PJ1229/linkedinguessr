export const POINTS_BY_CLUE = [1000, 750, 500, 250] as const;
export function scoreCorrect(clueIndex: number, currentStreak: number) { const base = POINTS_BY_CLUE[Math.min(Math.max(clueIndex, 0), 3)]; return Math.round(base * (1 + Math.min(currentStreak, 5) * .1)); }
export function scoreAfterWrong(score: number) { return Math.max(0, score - 75); }
export function nextClue(current: number, clueCount: number) { return Math.min(current + 1, clueCount - 1); }
