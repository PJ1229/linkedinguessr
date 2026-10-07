export type Experience = { id: string; role: string; category: string; period: string; description?: string };
export type Candidate = { id: string; name: string; headline: string; bio: string; why: string; experiences: Experience[]; photoApproved: boolean; difficulty: "Easy" | "Medium" | "Hard" };
export type RoundState = { candidateId: string; clueIndex: number; wrongGuesses: number; status: "active" | "won" | "revealed" | "abandoned" };
