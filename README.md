# Only For Minhyuk Bakery

A fan-made birthday web event: decorate a cake, add candles, write a public
birthday letter, and browse the birthday table of cakes other fans made.
Mobile web only, no accounts/login.

## Status

**Phase 1 (static prototype) and Phase 2 (functional editor) are built,
running on mock/in-memory data.** Phase 3 (Supabase persistence) is
scaffolded but not wired up yet — see "Connecting Supabase" below.

What works today, against mock data:

- Home / Birthday Table with the one-point-perspective scroll effect, NEW /
  MOST VIEWED / RANDOM discovery, and progressive loading
- Full cake editor: background & cake color, decorations (fruit, ribbon,
  dog, whale, rose, hate), image upload, presets & custom-text toppers —
  drag / scale+rotate / duplicate / delete / reorder / undo / redo / reset
- Candles step with the 4 candle types and their independent limits
- Letter step (nickname, optional country, 500-char letter) → review →
  complete → share (copy link works; save-image is stubbed)
- Cake detail page with the November 3 KST birthday gate (unlit candles +
  "open letter" before, lit candles + tap-to-blow-out + reveal after),
  extinguished state persisted per-browser via `localStorage`
- ko / en / ja UI locales (`src/lib/i18n`)

Known Phase-1/2 limitations (by design, until Phase 3):

- Cakes created in the editor are stored in an in-memory array
  (`src/lib/mock/submissions.ts`) — they disappear on a full page reload
  and are not visible to other browsers/devices.
- `POST /api/cakes` has full request validation and rate limiting already,
  but returns `501` until Supabase env vars are set (see below).
- View-count increment / dedup, real moderation, and bot protection are not
  implemented yet — see spec Phase 6.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connecting Supabase (Phase 3)

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor — it
   creates the `cakes` table (with the public read-only RLS policy) and the
   `cake_views` dedup table.
3. Copy `.env.example` to `.env.local` and fill in the three values from
   Project Settings → API (`NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`). Never
   prefix the service-role key with `NEXT_PUBLIC_` — it must stay
   server-only.
4. `POST /api/cakes` ([src/app/api/cakes/route.ts](src/app/api/cakes/route.ts))
   will then insert through the service-role client. The remaining wiring
   (swap the home feed / cake detail / review-complete flow from the mock
   store to real Supabase reads) is the next chunk of work.

## Deploying to Vercel

Standard Next.js project — no `vercel.json` needed. Set the same three env
vars from the previous section in the Vercel project settings before the
first deploy that should hit real data.

## Project layout

- `src/app` — routes (`/`, `/create/*` editor flow, `/cake/[publicId]`, `/api/cakes`)
- `src/components` — `editor/` (canvas + pickers), `cake/` (shared cake
  renderer used by the table, review, complete, and detail pages), `home/`,
  `icons/` (the vintage-sticker SVG asset set), `ui/`
- `src/store` — `editorStore` (cake canvas state + undo/redo history),
  `submissionStore` (in-progress nickname/country/letter)
- `src/lib` — `assets.tsx` (decoration/topper/candle registry), `birthday.ts`
  (Nov 3 KST gate), `i18n/`, `mock/`, `supabase/`
- `supabase/schema.sql` — Phase 3 database schema
