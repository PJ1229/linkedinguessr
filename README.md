# linkedinguessr

The repository for **Past Lives**, a consent-first social game where you guess people from anonymized career paths. This repository ships a fictional, local-first MVP; no seed profile represents a real person. It is not affiliated with or integrated with LinkedIn.

## Screenshot placeholder
Add an approved gameplay screenshot here before launch.

## Product principles
- Consent before participation: people approve their data, clues, bio, and photo settings and can remove themselves.
- No scraping, LinkedIn integration claims, private activity data, exact location, age, graduation year, contact details, or direct profile links.
- Active identities stay hidden until a round resolves.

## Architecture
Next.js App Router renders routes and UI. `lib/scoring.ts` owns pure game scoring; `lib/repository.ts` is the replaceable data boundary. The local repository uses fictional `lib/seed.ts`; a future server-only Supabase repository must implement the same interface and call protected RPCs.

## Stack
Next.js, TypeScript, Tailwind CSS, Lucide icons, Zod, Supabase (auth/Postgres/RLS), Vitest, and Vercel.

## Local setup
```bash
cp .env.example .env.local
npm install
npm run dev
```
Open `http://localhost:3000`. Run checks with `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.

## Environment variables
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are browser-safe project values. `SUPABASE_SERVICE_ROLE_KEY` is server-only and must never be exposed or committed.

## Supabase
Create a project, configure `.env.local`, then apply `supabase/migrations/202610070001_initial_schema.sql` with the Supabase CLI or SQL editor. The schema enables RLS and intentionally exposes no deck/candidate table query to browser clients. Use only server RPCs for active game flow; see `docs/handoff-plan.md`.

The initial local demo data lives in `lib/seed.ts`; it is fictional and does not need database seeding. `supabase/seed.sql` is a safe placeholder for future local-auth seeds.

## Deploy to Vercel
Import the GitHub repository, add the two public Supabase values and server-only service key, apply production migrations, then deploy. Confirm active-round network responses contain only rendered clue fields before launch.

## Contributing
Read [CONTRIBUTING.md](CONTRIBUTING.md), open an issue first for substantial changes, and never contribute personal career data or credentials.

## License
MIT. See [LICENSE](LICENSE).
