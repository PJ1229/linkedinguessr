import { candidates, getCandidate } from "./seed";
import type { Candidate } from "./types";
export interface GameRepository { getDeck(): Promise<{ id: string; candidateId: string }[]>; getCandidateForReveal(id: string): Promise<Candidate>; searchCandidates(query: string): Promise<Pick<Candidate,"id"|"name">[]>; }
export class LocalGameRepository implements GameRepository {
 async getDeck() { return candidates.map(c => ({ id: `deck-${c.id}`, candidateId: c.id })); }
 async getCandidateForReveal(id: string) { return getCandidate(id); }
 async searchCandidates(query: string) { const q = query.toLowerCase(); return candidates.filter(c => c.name.toLowerCase().includes(q)).slice(0, 5).map(({id,name}) => ({id,name})); }
}
// Replace this implementation with SupabaseGameRepository after auth/session wiring.
export const gameRepository: GameRepository = new LocalGameRepository();
