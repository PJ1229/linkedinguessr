import { describe, expect, it } from "vitest";
import { nextClue, scoreAfterWrong, scoreCorrect } from "@/lib/scoring";
describe("scoring", () => { it("awards progressive clue scores with capped streaks", () => { expect(scoreCorrect(0, 0)).toBe(1000); expect(scoreCorrect(1, 2)).toBe(900); expect(scoreCorrect(3, 8)).toBe(375); }); it("never makes a score negative", () => expect(scoreAfterWrong(50)).toBe(0)); it("never reveals beyond the last clue", () => expect(nextClue(3, 4)).toBe(3)); });
