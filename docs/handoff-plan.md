# Continuation handoff

## Current state (initial scaffold)
The `linkedinguessr` repository contains a functional local five-round Past Lives game in `components/game.tsx`, 15 fictional-only candidates in `lib/seed.ts`, scoring tests, all requested routes, a Supabase schema migration, and starter GitHub/documentation configuration. The game currently uses `LocalGameRepository`; it never sends data over a network but does contain all seed candidates in the client bundle. This is acceptable only for the local MVP, never the Supabase implementation.

## Next agent priorities
1. Install dependencies, run `npm run typecheck`, `npm test`, and `npm run build`; repair version/type issues.
2. Commit the current scaffold if not already committed.
3. Add Supabase clients, auth callback/middleware, generated database types, and a server-only `SupabaseGameRepository` with RPCs for create round, reveal clue, candidate search, and submit guess.
4. Implement SECURITY DEFINER SQL functions that return no candidate identity until `game_rounds.status` is resolved. Add RLS verification tests/scripts.
5. Replace browser-side `candidates` imports with server actions/API calls. Do not expose deck or candidate tables client-side.
6. Complete consent form: 2–5 experience validation with Zod, preview transformed clues, exclusions, soft delete and account deletion.
7. Add proper admin authorization based on `users.role`, review/deck generator workflows, and audit trail.
8. Create/verify public GitHub repo using `gh repo create past-lives --public --description ... --source . --push` only after initial commit; do not publish env files.

## Architecture decisions
- Keep `GameRepository` as the game boundary; game rules live in `lib/scoring.ts`.
- All career experience visibility is consent-controlled and admin-approved.
- Provider imports must implement a future provider-agnostic adapter that emits a draft only; no scraper or LinkedIn integration.

## Definition of production-ready
- No hidden identity/candidate search data reaches browser for active rounds.
- Auth + RPC authorization are covered by integration checks.
- All onboarding and deletion actions have clear confirmation/error UI.
- Accessibility smoke test includes keyboard play, focus visibility, and mobile layout.
