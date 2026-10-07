# Past Lives GitHub Project plan

Board: **Backlog → Ready → In Progress → In Review → Done**. Recommended labels: `type: feature`, `type: bug`, `type: chore`, `area: game`, `area: auth`, `area: privacy`, `area: admin`, `area: ui`, `priority: p0`, `priority: p1`, `priority: p2`, `good first issue`.

## Milestone 1 — Foundation

### Next.js setup
**Description:** Establish app shell, developer commands, and quality checks. **Acceptance:** App Router starts; lint/type/test/build commands work; env example has placeholders only. **Dependencies:** none. **Labels:** type: chore, area: ui, priority: p0. **Priority:** P0.

### Professional networking design system
**Description:** Build responsive nav, cards, buttons, form, focus, and loading primitives. **Acceptance:** Blue/white professional palette, keyboard focus, mobile and desktop layouts. **Dependencies:** Next.js setup. **Labels:** type: feature, area: ui, priority: p1. **Priority:** P1.

### Supabase authentication
**Description:** Add session handling and sign-in/onboarding boundary. **Acceptance:** authenticated user is provisioned and protected routes redirect appropriately. **Dependencies:** Next.js setup. **Labels:** type: feature, area: auth, priority: p0. **Priority:** P0.

### Database schema and migrations
**Description:** Apply consent, experience, deck, game, and leaderboard schema with RLS. **Acceptance:** migrations are repeatable; all participant writes are owner-only. **Dependencies:** Supabase authentication. **Labels:** type: feature, area: privacy, priority: p0. **Priority:** P0.

## Milestone 2 — Core game

### Deck generation
**Description:** Generate eligible decks only from approved, opted-in experiences. **Acceptance:** excluded/unapproved data cannot enter a deck. **Dependencies:** schema. **Labels:** type: feature, area: game, priority: p0. **Priority:** P0.

### Progressive clue flow
**Description:** Serve one to four anonymized clues with no identity leakage. **Acceptance:** server contract reveals one clue at a time and answer only after resolution. **Dependencies:** deck generation. **Labels:** type: feature, area: game, area: privacy, priority: p0. **Priority:** P0.

### Candidate search and guess submission
**Description:** Search valid candidates server-side and score submitted guesses. **Acceptance:** browser never receives full candidate dataset; wrong guesses deduct 75. **Dependencies:** progressive clue flow. **Labels:** type: feature, area: game, priority: p0. **Priority:** P0.

### Scoring and streak logic
**Description:** Validate 1000/750/500/250 points and 10–50% multiplier. **Acceptance:** unit tests cover boundaries and score never drops below zero. **Dependencies:** clue flow. **Labels:** type: feature, area: game, priority: p1. **Priority:** P1.

### Round persistence
**Description:** Persist completed rounds and prevent point farming. **Acceptance:** unique round enforcement and resume behavior tested. **Dependencies:** auth, schema. **Labels:** type: feature, area: game, priority: p0. **Priority:** P0.

## Milestone 3 — Player experience

### Player profile
**Description:** Show personal stats, streak, settings. **Acceptance:** data is scoped to current user. **Dependencies:** auth, persistence. **Labels:** type: feature, area: ui, priority: p1. **Priority:** P1.

### Daily challenge
**Description:** One shared deck per date. **Acceptance:** one completion per player/day and clear expiry behavior. **Dependencies:** deck generation. **Labels:** type: feature, area: game, priority: p1. **Priority:** P1.

### Quick-play mode
**Description:** Deliver five non-replayable rounds. **Acceptance:** progress survives refresh and completion is reflected in stats. **Dependencies:** round persistence. **Labels:** type: feature, area: game, priority: p1. **Priority:** P1.

### Leaderboard, results, sharing
**Description:** Weekly snapshots and spoiler-safe share card. **Acceptance:** no answer identity leaks through sharing. **Dependencies:** persistence. **Labels:** type: feature, area: ui, priority: p2. **Priority:** P2.

## Milestone 4 — Consent and moderation

### Opt-in career profile flow and preview
**Description:** Add 2–5 experiences with Zod validation and exact anonymized previews. **Acceptance:** every display field is previewable before approval. **Dependencies:** schema. **Labels:** type: feature, area: privacy, priority: p0. **Priority:** P0.

### Removal/deletion flow
**Description:** Pause participation and delete approved data. **Acceptance:** removed profiles cannot enter new decks; deletion confirmation is clear. **Dependencies:** opt-in flow. **Labels:** type: feature, area: privacy, priority: p0. **Priority:** P0.

### Admin review and deck management
**Description:** Role-protected review, approval, and archive workflow. **Acceptance:** non-admin client requests are rejected by policy and server. **Dependencies:** auth, schema. **Labels:** type: feature, area: admin, priority: p0. **Priority:** P0.

### Privacy policy page
**Description:** Publish clear consent, data-use, and removal policy. **Acceptance:** explicitly says no scraping/LinkedIn integration. **Dependencies:** none. **Labels:** type: feature, area: privacy, priority: p1. **Priority:** P1.

## Milestone 5 — Launch readiness

### Accessibility and mobile QA
**Description:** Test keyboard, screen reader landmarks, contrast, focus, and breakpoints. **Acceptance:** no blocking issues in documented checklist. **Dependencies:** player experience. **Labels:** type: chore, area: ui, priority: p1. **Priority:** P1.

### Analytics and error tracking abstractions
**Description:** Create provider-neutral interfaces with privacy-safe events. **Acceptance:** no identity or clue data in event payloads. **Dependencies:** core game. **Labels:** type: chore, area: privacy, priority: p2. **Priority:** P2.

### Vercel deployment
**Description:** Configure production deployment and environment handling. **Acceptance:** preview deploy works and secrets stay server-side. **Dependencies:** all P0 work. **Labels:** type: chore, priority: p1. **Priority:** P1.

### Security and privacy review
**Description:** Verify RLS/RPC boundaries and active-round response shape. **Acceptance:** documented tests prove identity is unavailable before resolution. **Dependencies:** all P0 work. **Labels:** type: chore, area: privacy, priority: p0. **Priority:** P0.
