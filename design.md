# Design — Viaggi 360°

A locked design system for this app, produced by `hallmark redesign` (multi-page flow).
Every page redesign in this project reads this file before emitting code. Extend or
amend this file when the system needs to grow — don't regenerate per page.

## Genre
editorial

## Pre-flight — what was preserved vs. introduced
Preserved (already good, already brand-established on a live production site):
font stack (Fraunces display + Inter body), the alpine/cream/rosso/stone/ink palette,
Tailwind v4 + `@theme inline` token wiring, `motion` (framer-motion) as the
microinteraction library.

Introduced: OKLCH token values (converted 1:1 from the existing hex, no colour
changes — see below), a named macrostructure per page family, a nav/footer archetype
away from the two most-recognised AI fingerprints (N1a, Ft3), a quieter motion
discipline, and the 58-gate slop-test as an ongoing check.

**One flagged conflict, resolved in favour of preservation:** Hallmark's typography
rules list Inter among the banned default sans-serifs when used as *both* display and
body with no pairing (the "Inter-everywhere" tell). Here Inter is only the **body**
face, paired with Fraunces as a distinctive **display** face — that's a legitimate
pairing, not the banned pattern, and swapping a working body font on a live site for a
skill's stylistic preference would violate the non-destructive rule. Kept as-is.

## Macrostructure families
Three named families, one per page type. Pages within a family share the family's
shape; they vary only in component archetypes/content.

- **Home** (`/`) — **08 · Photographic**. A single real photograph fills the fold;
  text is caption-scale, not headline-scale. Replaces the previous dark
  radial-gradient hero (an "aurora-blob" anti-pattern) with real travel photography
  already on disk (`public/images/**/*.jpg`).
- **Index / hub pages** (`/viaggi`, `/destinazioni`, `/destinazioni/[paese]`) —
  **20 · Ecosystem Index**. Multiple discovery surfaces (featured trip, all trips,
  destinations grid, experiences grid) presented as separate rails, not one generic
  card grid. Matches what these pages already try to do structurally.
- **Content pages** (`/viaggi/[slug]`, `/destinazioni/[paese]/[slug]`,
  `/esperienze/[paese]/[slug]`) — **02 · Long Document**. Continuous narrative prose
  with inline section heads, single measure column, sparse dividers. This is the
  closest fit to what's already there (markdown diary text, `DayTimeline`,
  `StickyTableOfContents`) — lightest-touch family, refine rhythm rather than
  restructure.

## Nav
**N6 · Newspaper masthead.** Full-width, centred wordmark, thin "Diario di viaggio"
line in small caps above/below it, double rule beneath. Replaces N1a (wordmark +
inline links — the most-recognised AI nav fingerprint). The masthead vocabulary was
already half-present (the "Diario di viaggio" eyebrow existed under the logo); N6
formalises it.

## Footer
**Ft1 · Mast-headed.** Wordmark + tagline anchor a single quiet band, a few links
beside, colophon line below. Replaces Ft3 (3 columns of links + copyright — the other
most-recognised AI fingerprint). Also fixes a real bug found during pre-flight: the
old footer's "Destinazioni / Esperienze / Continenti" links were all hardcoded to
`/destinazioni/messico` regardless of which continent was listed.

## Theme — custom (locked, ported from existing hex 1:1)

```css
:root {
  --color-alpine:       oklch(39.1% 0.079 239.9);  /* was #124a6b */
  --color-alpine-dark:  oklch(28.0% 0.053 239.0);  /* was #0a2c40 */
  --color-cream:        oklch(99.1% 0.003  84.6);  /* was #fdfcfa */
  --color-cream-dark:   oklch(95.1% 0.006 197.0);  /* was #eaf0f0 */
  --color-rosso:        oklch(58.5% 0.181  32.4);  /* was #d1452c */
  --color-rosso-dark:   oklch(49.9% 0.153  33.6);  /* was #a8371f */
  --color-stone:        oklch(43.6% 0.024 246.0);  /* was #47535e */
  --color-ink:          oklch(23.9% 0.018 245.0);  /* was #182027 */
}
```

Roles: `cream` = paper, `ink` = primary text, `alpine`/`alpine-dark` = deep-navy
anchor (dark sections, nav rule, links), `rosso`/`rosso-dark` = the one accent
(badges, eyebrows, active states — kept under 5% of any viewport), `stone` = muted
secondary text. Paper band: **light** (cream L 99%). Display style: **classical
serif** (Fraunces). Accent hue: **warm** (rosso ~32°).

Diversification axes for this run's `.hallmark/log.json` entry: `light / serif /
warm`.

## Typography

- Display: **Fraunces**, weights 400/500/600/700/900, roman only (no italic
  headers — italic survives as body-copy emphasis only).
- Body: **Inter** (preserved — see conflict note above).
- Outlier: none. Two families is the right ceiling for this site; a third
  (e.g. a mono for captions) isn't earning its place here.
- Scale: keep the existing Tailwind type scale (`text-sm` … `text-7xl`); no new
  scale introduced. Hero headline on Home stays caption-scale per the Photographic
  macrostructure, not display-scale.

## Spacing
Tailwind v4's default spacing scale (0.25rem/4px base) already satisfies Hallmark's
4pt-scale requirement — no new scale introduced. Use `gap` for sibling spacing over
stacked margins.

## Motion
- Library: `motion` (framer-motion), already installed — kept.
- Easings: standardise on `[0.16, 1, 0.3, 1]` (Hallmark's `--ease-out`) for entrances;
  existing code already uses `[0.22, 1, 0.36, 1]` in most places, which is close
  enough perceptually — no forced rewrite of every transition, but new/touched
  components use `[0.16, 1, 0.3, 1]`.
- Durations: micro 120ms · short 220ms · long 420ms.
- **Discipline change from before:** cut the per-word `TextEffect` fade-in-blur on
  the homepage h1 and the dual radial-gradient hero background — both read as
  decorative motion without a communicative purpose. One quiet reveal per page load,
  not a cascade of independent ones. `prefers-reduced-motion` already respected by
  the existing `Reveal` component — kept.

## Microinteractions stance
- Silent success, no celebratory toasts (site has none — stays that way).
- Hover: 1px lift or colour shift, never both. No `hover:scale-105` on cards.
- Focus rings: instant, ≥3:1 contrast, never transitioned.

## CTA voice
- Primary: filled `rosso` pill (existing `Button` `primary` variant) — reserved for
  the single most important action per page (e.g. "Scopri il mio itinerario").
- Secondary: typographic underline link with arrow icon, no border/fill — the site's
  existing "Esplora tutti i viaggi" pattern. Preferred over a second button
  side-by-side with the primary.
- Never two filled buttons in the same view.

## Per-page allowances
- Home MAY use photographic enrichment (Tier: real photography already on disk —
  no generated stock).
- Index/hub pages MAY use photography in cards (already do via `DestinationCard`,
  `TripCard`) but the page shell itself stays typographic (Ecosystem Index rails).
- Content pages: typography-first, inline images sized to the text measure, no
  full-bleed photography inside the article body (the markdown content isn't
  structured for it yet).

## What pages MUST share
- Fraunces + Inter, alpine/cream/rosso/stone/ink tokens.
- The N6 masthead nav and Ft1 footer.
- The `rosso` accent used the same way everywhere (badges, active nav state,
  primary CTA) — never as a large fill.
- Section-heading rhythm: no eyebrow tags unless the section is genuinely ordinal
  (day numbers in `DayTimeline` qualify; a generic "ITINERARI" kicker above a
  section title does not, and should be dropped in favour of the heading alone).

## What pages MAY differ on
- Macrostructure within/across the three families above.
- Whether a given hub page uses 2 or 3 discovery rails (Ecosystem Index scales to
  the content available — a Paese hub with few destinations doesn't force a third
  empty rail).

## Exports

### tokens.css
```css
:root {
  --color-alpine:       oklch(39.1% 0.079 239.9);
  --color-alpine-dark:  oklch(28.0% 0.053 239.0);
  --color-cream:        oklch(99.1% 0.003  84.6);
  --color-cream-dark:   oklch(95.1% 0.006 197.0);
  --color-rosso:        oklch(58.5% 0.181  32.4);
  --color-rosso-dark:   oklch(49.9% 0.153  33.6);
  --color-stone:        oklch(43.6% 0.024 246.0);
  --color-ink:          oklch(23.9% 0.018 245.0);

  --font-display: "Fraunces", ui-serif, Georgia, serif;
  --font-body:    "Inter", ui-sans-serif, system-ui, sans-serif;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:  cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 120ms;
  --dur-short: 220ms;
  --dur-long:  420ms;
}
```

### Tailwind v4 `@theme` (already the project's format, see `src/app/globals.css`)
```css
@theme inline {
  --color-alpine: var(--color-alpine);
  --color-alpine-dark: var(--color-alpine-dark);
  --color-cream: var(--color-cream);
  --color-cream-dark: var(--color-cream-dark);
  --color-rosso: var(--color-rosso);
  --color-rosso-dark: var(--color-rosso-dark);
  --color-stone: var(--color-stone);
  --color-ink: var(--color-ink);
  --font-display: var(--font-fraunces);
  --font-sans: var(--font-inter);
}
```

### DTCG `tokens.json`
```json
{
  "color": {
    "alpine":      { "$value": "oklch(39.1% 0.079 239.9)", "$type": "color" },
    "alpine-dark": { "$value": "oklch(28.0% 0.053 239.0)", "$type": "color" },
    "cream":       { "$value": "oklch(99.1% 0.003 84.6)",  "$type": "color" },
    "cream-dark":  { "$value": "oklch(95.1% 0.006 197.0)", "$type": "color" },
    "rosso":       { "$value": "oklch(58.5% 0.181 32.4)",  "$type": "color" },
    "rosso-dark":  { "$value": "oklch(49.9% 0.153 33.6)",  "$type": "color" },
    "stone":       { "$value": "oklch(43.6% 0.024 246.0)", "$type": "color" },
    "ink":         { "$value": "oklch(23.9% 0.018 245.0)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Fraunces", "$type": "fontFamily" },
    "body":    { "$value": "Inter", "$type": "fontFamily" }
  }
}
```
