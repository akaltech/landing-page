# DESIGN_SYSTEM.md — Visual Design Reference for AKal Eats

This document is the single source of truth for all visual decisions. Read it fully before any layout or styling work.

---

## 1. Design Philosophy

### Brand Personality

AKal Eats is a London-based halal food content collective for young British Muslims. The brand is **bold, warm, community-driven, and food-forward**. It speaks with confidence but never shouts without purpose. It feels like a friend who knows every spot in the city — trustworthy, opinionated, generous.

### Five Principles

| # | Principle | What It Means |
|---|-----------|---------------|
| 1 | **Dark-first, food-forward** | Dark backgrounds make food photography pop. The UI serves the content, never competes with it. |
| 2 | **Restraint over decoration** | Every element earns its place. If removing it loses nothing, remove it. Whitespace is a feature. |
| 3 | **Confident typography** | Big, bold headlines set the tone. Type does the heavy lifting — not gradients, not shadows, not effects. |
| 4 | **Warm, not corporate** | Warm charcoals over cool grays. Cream over white. The palette should feel like a dimly lit restaurant, not a SaaS dashboard. |
| 5 | **Community trust** | Design choices should feel inclusive and approachable. No elitism, no gatekeeping. Accessible by default. |

### Rhythm Rule

Sections follow a **LOUD → quiet → quiet → LOUD → quiet → LOUD** energy pattern:

| Section | Energy | Characteristics |
|---------|--------|-----------------|
| Hero | LOUD | Full-bleed, oversized type, lime accent, high contrast |
| About / Intro | quiet | Measured body text, generous whitespace, secondary colors |
| Features | quiet | Grid layout, restrained cards, subtle reveals |
| Social Proof / Stats | LOUD | Big numbers, lime highlights, bold statements |
| Content Preview | quiet | Photography-forward, minimal chrome |
| CTA / Footer | LOUD | Full-width lime accent, confident headline, clear action |

This rhythm prevents fatigue and creates natural visual breathing room.

---

## 2. Color System

### Backgrounds (Warm Charcoals)

All backgrounds use warm undertones. Never use pure black or cool grays.

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| bg-primary | `#141211` | Main canvas, page background | `--bg-primary` |
| bg-secondary | `#1C1A18` | Cards, surfaces, elevated panels | `--bg-secondary` |
| bg-tertiary | `#252220` | Hover states, nested surfaces | `--bg-tertiary` |
| bg-inverse | `#FAF7F2` | Cream contrast sections | `--bg-inverse` |

### Section-Specific Backgrounds

LOUD sections can use tinted dark backgrounds to establish their own atmosphere while staying within the dark-first principle. These are not interchangeable utility colors — they belong to specific sections.

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| bg-hero | `#112117` | Hero section — dark forest green | `--bg-hero` |

When introducing a new section background, ensure all text tokens used on it pass WCAG AA contrast. Document the pairing here.

### Brand-Specific Colors

These colors are used for unique brand elements (wordmark, logo treatments) and are **not** general-purpose text or background tokens.

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| text-wordmark | `#637148` | AKAL wordmark on hero — muted olive | `--text-wordmark` |

> **Note:** The wordmark color is intentionally low-contrast — it functions as a textural brand mark, not readable text. At 448px, legibility comes from sheer scale, not contrast ratio. This is an intentional departure from WCAG body text requirements, justified by the element's decorative/brand role at display sizes only.

### Text (Warm Cream)

Never use pure white (`#FFFFFF`) for text. Warm cream reduces eye strain on dark backgrounds.

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| text-primary | `#F5F0E8` | Headings, emphasis, primary copy | `--text-primary` |
| text-secondary | `#A8A29E` | Body text on dark backgrounds | `--text-secondary` |
| text-tertiary | `#78716C` | Captions, metadata, timestamps | `--text-tertiary` |
| text-inverse | `#1C1A18` | Text on light/cream surfaces | `--text-inverse` |

### Accent — Chartreuse Lime

The signature brand color. Electric, bold, unmistakable.

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| accent-primary | `#BEFF03` | CTAs, active links, key highlights | `--accent-primary` |
| accent-hover | `#D4FF4D` | Hover state on lime elements | `--accent-hover` |
| accent-pressed | `#A3E600` | Active/pressed state | `--accent-pressed` |
| accent-muted | `#BEFF0315` | Subtle backgrounds, badges (~8% opacity) | `--accent-muted` |
| accent-text | `#BEFF03` | Text accent on dark backgrounds | `--accent-text` |

### Semantic Colors

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| success | `#4ADE80` | Positive states, confirmations | `--color-success` |
| error | `#F87171` | Error states, destructive actions | `--color-error` |
| info | `#A8A29E` | Neutral informational states | `--color-info` |

### Borders

| Token | Hex | Usage | CSS Variable |
|-------|-----|-------|--------------|
| border-subtle | `#252220` | Card borders, dividers | `--border-subtle` |
| border-default | `#3D3835` | Input borders, separators | `--border-default` |
| border-emphasis | `#BEFF0333` | Lime-tinted borders for emphasis (~20% opacity) | `--border-emphasis` |

### WCAG Contrast Ratios

All text/background combinations must meet WCAG 2.1 AA minimum (4.5:1 for body, 3:1 for large text).

| Text | Background | Contrast Ratio | Rating |
|------|------------|----------------|--------|
| `#F5F0E8` (primary) | `#141211` (bg-primary) | **16.5:1** | AAA |
| `#F5F0E8` (primary) | `#1C1A18` (bg-secondary) | **15.3:1** | AAA |
| `#A8A29E` (secondary) | `#141211` (bg-primary) | **7.4:1** | AA |
| `#A8A29E` (secondary) | `#1C1A18` (bg-secondary) | **6.9:1** | AA |
| `#78716C` (tertiary) | `#141211` (bg-primary) | **3.9:1** | AA Large |
| `#BEFF03` (accent) | `#141211` (bg-primary) | **15.6:1** | AAA |
| `#BEFF03` (accent) | `#1C1A18` (bg-secondary) | **14.5:1** | AAA |
| `#1C1A18` (inverse) | `#FAF7F2` (bg-inverse) | **16.2:1** | AAA |
| `#1C1A18` (inverse) | `#BEFF03` (accent bg) | **14.5:1** | AAA |

> **Note:** Tertiary text (`#78716C`) at 3.8:1 only passes AA for large text (18px+ bold or 24px+ regular). Use it exclusively for captions, metadata, and labels — never for body copy.

---

## 3. Typography

### Font Families

| Role | Font | Weights | Variable | Usage |
|------|------|---------|----------|-------|
| Display | **Plus Jakarta Sans** | 700, 800 | `--font-display` | Headlines, hero text, section titles |
| Body | **Geist Sans** | 400, 500 | `--font-sans` | Body copy, descriptions, UI text |
| Mono | **Geist Mono** | 400 | `--font-mono` | Overlines, labels, tags, metadata |

### Wordmark Typography

The AKAL wordmark is a special case — it's a brand mark, not a reading headline. It sits outside the standard type scale.

| Property | Value | Notes |
|----------|-------|-------|
| Font | Plus Jakarta Sans | `font-display` |
| Weight | 800 | Extra bold |
| Size | `clamp(4.5rem, 25vw, 28rem)` | Scales from 72px to 448px — viewport-dominant |
| Line height | `0.85` | Tighter than any standard token — letters nearly touch |
| Letter spacing | `-0.07em` | Extreme tightening for visual density |
| Color | `--text-wordmark` (`#637148`) | Muted olive on dark green — textural, not high-contrast |

The wordmark fills the viewport width as a brand statement. It uses `vw`-based sizing, not the standard fluid `clamp()` scale. This is the only element that should use this treatment.

### Fluid Type Scale

All sizes use `clamp()` for fluid scaling between 375px and 1440px viewports.

| Token | Min (375px) | Max (1440px) | CSS `clamp()` | Usage |
|-------|-------------|--------------|---------------|-------|
| display-xl | 48px | 96px | `clamp(3rem, 1.5rem + 6.57vw, 6rem)` | Section headlines (not the wordmark) |
| display-lg | 40px | 72px | `clamp(2.5rem, 1.5rem + 4.23vw, 4.5rem)` | Secondary hero text |
| display-md | 32px | 48px | `clamp(2rem, 1.5rem + 2.11vw, 3rem)` | Section titles |
| heading-lg | 28px | 36px | `clamp(1.75rem, 1.5rem + 1.06vw, 2.25rem)` | Major sub-sections |
| heading-md | 24px | 28px | `clamp(1.5rem, 1.375rem + 0.53vw, 1.75rem)` | Card titles, feature headers |
| heading-sm | 20px | 24px | `clamp(1.25rem, 1.125rem + 0.53vw, 1.5rem)` | Minor headings |
| body-lg | 18px | 18px | `1.125rem` | Lead paragraphs, featured text |
| body-md | 16px | 16px | `1rem` | Standard body copy |
| body-sm | 14px | 14px | `0.875rem` | Secondary text, descriptions |
| caption | 12px | 12px | `0.75rem` | Timestamps, helper text |
| overline | 12px | 12px | `0.75rem` | Section labels (uppercase) |

### Line Height & Letter Spacing

| Category | Line Height | Letter Spacing |
|----------|-------------|----------------|
| Display (xl, lg) | `1.0` — `1.1` | `-0.02em` (tight) |
| Display (md) | `1.15` | `-0.015em` |
| Heading (lg, md, sm) | `1.2` — `1.3` | `-0.01em` |
| Body (lg, md, sm) | `1.6` — `1.7` | `0` (normal) |
| Caption | `1.5` | `0.01em` |
| Overline | `1.5` | `0.1em` (wide) |

### Typography Rules

- **One wordmark per page.** The AKAL wordmark in the hero. Everything else uses the standard scale.
- **`display-xl` is for section headlines**, not the wordmark. It's the largest standard token.
- **Overlines precede section titles.** Use Geist Mono, uppercase, wide tracking, lime accent color.
- **Body text uses `--text-secondary`**, headings use `--text-primary`**.** This 2-level contrast creates hierarchy without extra weights or sizes.
- **Max line length: `65ch`.** Apply `max-w-prose` or `max-w-[65ch]` to all running text.
- **No orphans on headlines.** Use `text-balance` (CSS `text-wrap: balance`) on display and heading text.

### Brand Voice in Type

The brand voice is **lowercase, casual, warm**. This is reflected in the typography:

- **Section headings use sentence case or lowercase** — not Title Case, not UPPERCASE (except overlines).
- **Parenthetical labels** for people/items: `(abdullah)`, `(dishoom)` — intimate, not formal.
- **Ellipsis for continuation**: "we've worked with..." — conversational, like mid-sentence.
- **No periods on headings.** The ellipsis is the only trailing punctuation used.

This voice should feel like a friend texting you a recommendation — confident but never stiff.

---

## 4. Spacing System

### Base Unit

The spacing system is built on a **4px base unit**, aligned with Tailwind's default scale.

| Tailwind Class | Value | Common Use |
|----------------|-------|------------|
| `p-1` / `gap-1` | 4px | Icon padding, tight gaps |
| `p-2` / `gap-2` | 8px | Inline element spacing |
| `p-3` / `gap-3` | 12px | Button padding, compact cards |
| `p-4` / `gap-4` | 16px | Card padding, form groups |
| `p-6` / `gap-6` | 24px | Card inner spacing |
| `p-8` / `gap-8` | 32px | Section inner spacing, grid gaps |
| `p-12` / `gap-12` | 48px | Between content blocks |
| `p-16` / `gap-16` | 64px | Major content separations |

### Section Rhythm (Vertical Spacing)

Fluid vertical padding between major page sections:

| Size | Min (mobile) | Max (desktop) | CSS `clamp()` | When to Use |
|------|-------------|---------------|---------------|-------------|
| SM | 48px | 80px | `clamp(3rem, 2rem + 4.23vw, 5rem)` | Dense sections, FAQ, footer |
| MD | 64px | 128px | `clamp(4rem, 2rem + 8.45vw, 8rem)` | Default section spacing |
| LG | 80px | 160px | `clamp(5rem, 2.5rem + 10.56vw, 10rem)` | Hero, major transitions, CTA |

### Spacing Principles

- **Consistent rhythm > pixel-perfect values.** Sections should breathe evenly.
- **More space between unrelated elements, less between related ones.** Group by proximity.
- **Never collapse spacing on mobile.** Scale down, but maintain proportion.
- **Padding, not margin, for section spacing.** It prevents margin collapse issues and simplifies backgrounds.

---

## 5. Grid & Layout

### The Brockmann Grid (Primary Layout System)

Every section uses a responsive column grid inspired by Josef Müller-Brockmann. This is the **primary** layout system — not `max-w` containers.

```
grid grid-cols-4 gap-x-4 px-4
sm:grid-cols-8 sm:gap-x-6 sm:px-6
lg:grid-cols-12 lg:gap-x-6 lg:px-12
```

| Breakpoint | Columns | Gutter | Margin (padding) | Ratio |
|------------|---------|--------|-------------------|-------|
| Mobile (<640px) | 4 | 16px (`gap-x-4`) | 16px (`px-4`) | 1:1 |
| Tablet (640px+) | 8 | 24px (`gap-x-6`) | 24px (`px-6`) | 1:1 |
| Desktop (1024px+) | 12 | 24px (`gap-x-6`) | 48px (`px-12`) | margin = 2× gutter |

#### Grid Principles

1. **Every element snaps to column boundaries** using `col-span-*` and `col-start-*`.
2. **Asymmetry creates tension.** Not everything is centered. Headings might span 4 cols while content spans 9.
3. **The most important element can break the grid** — e.g., full-bleed wordmark using negative margins (`-mx-4 sm:-mx-6 lg:-mx-12`).
4. **Nested grids** for sub-layouts (e.g., a 3-column card grid inside a 9-column span).
5. **Empty columns are active whitespace.** Leaving 3 cols empty on the right is a deliberate design choice, not wasted space.

#### Full-Bleed Within the Grid

To make an element span the full viewport width while still being a grid child:

```
col-span-4 -mx-4
sm:col-span-8 sm:-mx-6
lg:col-span-12 lg:-mx-12
```

This negates the grid's padding, allowing the element to touch the viewport edges.

### Legacy Container Widths

Use these only for non-grid contexts (e.g., standalone prose pages, modals):

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Default | `1280px` (`max-w-7xl`) | Fallback content width |
| Narrow | `768px` (`max-w-3xl`) | Blog-style content, long-form text |
| Prose | `65ch` (`max-w-prose`) | Running body text within grid cells |

### Breakpoints

Standard Tailwind breakpoints:

| Breakpoint | Width | Typical Layout Change |
|------------|-------|-----------------------|
| `sm` | 640px | 4-col → 8-col grid |
| `md` | 768px | Tablet adjustments |
| `lg` | 1024px | 8-col → 12-col grid, full desktop layout |
| `xl` | 1280px | Extra breathing room |
| `2xl` | 1536px | Wide layouts |

### Grid Placement Patterns

**Hero (full-viewport, multi-zone):**
```
grid-rows-[auto_auto_1fr]
Nav: col-span-4 → lg:col-span-3 lg:col-start-10 (top-right)
Wordmark: full-bleed with negative margins
Body: col-span-4 → lg:col-span-5 (left-anchored)
Portraits: col-span-4 → lg:col-span-3 lg:col-start-8 (offset right)
```

**Quiet section (heading + card grid):**
```
Heading: col-span-4 (left-anchored, ~33% of desktop width)
Cards: col-span-4 → sm:col-span-8 → lg:col-span-9 (asymmetric, empty cols on right)
Nested: grid-cols-2 → sm:grid-cols-3 within the card span
```

**Content + Image (split layout):**
```
Text: col-span-4 → lg:col-span-5
Image: col-span-4 → lg:col-span-6 lg:col-start-7 (gap column between)
```

---

## 6. Visual Hierarchy

### Element Mapping

| Element | Font | Size Token | Weight | Color | Spacing Above |
|---------|------|------------|--------|-------|---------------|
| Wordmark (Hero H1) | Plus Jakarta Sans | See Wordmark Typography | 800 | `--text-wordmark` | — (top of section) |
| H2 (Section title) | Plus Jakarta Sans | `display-md` | 700 | `--text-primary` | Section rhythm LG |
| H3 (Sub-section) | Plus Jakarta Sans | `heading-lg` | 700 | `--text-primary` | `32px` |
| H4 (Card title) | Plus Jakarta Sans | `heading-md` | 700 | `--text-primary` | `24px` |
| Body | Geist Sans | `body-md` | 400 | `--text-secondary` | `16px` |
| Body (lead) | Geist Sans | `body-lg` | 400 | `--text-secondary` | `16px` |
| Section label (quiet) | Geist Sans | `body-lg` | 400 | `--text-tertiary` | — (grid-positioned) |
| Caption | Geist Sans | `caption` | 400 | `--text-tertiary` | `8px` |
| Parenthetical label | Geist Sans | `body-sm` | 400 | `--text-primary` | `8px` |
| Overline | Geist Mono | `overline` | 400 | `--accent-text` | `32px` |

### Hierarchy Rules

1. **One H1 per page.** The AKAL wordmark in the hero. Everything else is H2+.
2. **Quiet sections don't need headings.** A simple `<p>` label in `--text-tertiary` (e.g., "we've worked with...") is often more appropriate than a bold H2. Match the section's energy level.
3. **Overlines precede H2s in LOUD sections.** Format: Geist Mono, 12px, uppercase, `letter-spacing: 0.1em`, lime accent color. They categorize the section ("WHAT WE DO", "FROM THE COMMUNITY").
4. **Body text is `--text-secondary`**, headings are `--text-primary`.** This 2-level contrast creates hierarchy without needing extra weights or sizes.
5. **`--text-tertiary` for section labels in quiet sections.** These are whispered introductions, not demands for attention.
6. **Max line length: `65ch`.** Applies to all body and lead text. Headlines can run wider.
7. **Headings use `text-balance`.** Prevents awkward single-word last lines.
8. **Don't skip heading levels.** H1 → H2 → H3, never H1 → H3.

---

## 7. Component Styling

### Border Radius

| Element | Radius | Tailwind Class |
|---------|--------|----------------|
| Buttons | Full pill | `rounded-full` |
| Cards | 12px | `rounded-xl` |
| Images (in cards) | 12px (match card) | `rounded-xl` |
| Badges / Tags | Full pill | `rounded-full` |
| Inputs | 8px | `rounded-lg` |
| Modals / Dialogs | 16px | `rounded-2xl` |

### Shadows

On dark backgrounds, box shadows are nearly invisible. Use **background elevation** and **subtle borders** instead.

| Level | Technique | Example |
|-------|-----------|---------|
| Base | `--bg-primary` | Page canvas |
| Surface | `--bg-secondary` + `--border-subtle` | Cards, panels |
| Elevated | `--bg-tertiary` + `--border-default` | Hover states, dropdowns |
| Overlay | `--bg-secondary` + stronger border | Modals, popovers |

### Button Variants

**Primary (lime):**
```
bg-[--accent-primary] text-[--text-inverse] font-medium rounded-full
px-6 py-3
hover:bg-[--accent-hover]
active:bg-[--accent-pressed]
transition-colors duration-150
```

**Secondary (outline):**
```
bg-transparent text-[--text-primary] font-medium rounded-full
border border-[--border-default]
px-6 py-3
hover:bg-[--bg-tertiary] hover:border-[--border-emphasis]
active:bg-[--bg-secondary]
transition-colors duration-150
```

**Ghost:**
```
bg-transparent text-[--text-secondary] font-medium rounded-full
px-6 py-3
hover:text-[--text-primary] hover:bg-[--bg-tertiary]
active:bg-[--bg-secondary]
transition-colors duration-150
```

All buttons must have visible focus rings:
```
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent-primary]
```

### Card Specs

```
bg-[--bg-secondary]
border border-[--border-subtle]
rounded-xl
p-6
hover:bg-[--bg-tertiary] hover:border-[--border-default]
transition-colors duration-150
```

Cards should **never** use box-shadow on dark backgrounds. Elevation is communicated through background color steps.

### Placeholder Elements

Before real images/logos are available, use clean white blocks as placeholders:

```
bg-white aspect-[3/2] w-full    // Landscape placeholders (partner logos)
bg-white aspect-square w-full    // Square placeholders (portraits, avatars)
```

Placeholders use `bg-white` (not `--bg-inverse`) for maximum contrast against the dark canvas. They have **no border, no rounded corners, no inner content** — just clean geometric shapes. This creates a striking modernist aesthetic that works well in the Brockmann grid.

Add `aria-label` with the entity name for accessibility.

On hover, use `scale-[1.03]` with `transition-transform duration-100 ease-linear` — snappy, not mushy.

---

## 8. Image & Media Guidelines

### Food Photography

Food is the hero. Treat images with the same care as typography.

| Aspect Ratio | Usage | Implementation |
|--------------|-------|----------------|
| 4:3 (landscape) | Feature cards, content previews | `aspect-[4/3]` |
| 1:1 (square) | Thumbnails, avatars, grids | `aspect-square` |
| 9:16 (portrait) | Reels, vertical video, mobile-first content | `aspect-[9/16]` |
| 16:9 (widescreen) | Hero backgrounds, full-width banners | `aspect-video` |

### Image Treatment

- Always use `next/image` with explicit `width`, `height`, and `alt` text.
- Use `sizes` prop for responsive images (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`).
- Use `priority` on above-the-fold images (hero, first visible card).
- Match card border radius: `rounded-xl` (12px).
- Prefer WebP/AVIF formats for optimal compression.

### Text Over Image Gradient

When placing text over food photography, use a gradient overlay:

```
// Bottom-aligned text
background: linear-gradient(to top, #141211 0%, #14121100 60%)

// Full overlay for readability
background: linear-gradient(to top, #141211CC 0%, #14121166 50%, #14121100 100%)
```

Tailwind:
```
bg-gradient-to-t from-[--bg-primary] to-transparent
```

### Video Embeds

- Aspect ratio: `aspect-[9/16]` for vertical content, `aspect-video` for widescreen.
- Lazy load below the fold: `loading="lazy"`.
- Show a poster frame / thumbnail before play.
- Rounded corners matching cards: `rounded-xl overflow-hidden`.

---

## 9. Dark / Light Mode Strategy

### v1: Dark-Only

AKal Eats launches dark-only. This is intentional:

1. **Food photography pops on dark.** Colors are more vibrant, textures more visible.
2. **Brand identity is built on dark.** The lime accent only works at full impact on dark backgrounds.
3. **Simpler implementation.** One palette to get right, not two.

### Implementation

- Remove the `@media (prefers-color-scheme: dark)` block from `globals.css`.
- Set all color tokens directly on `:root` — no media query switching.
- `<html>` does not need a `class="dark"` — the tokens are the source of truth.

### Contrast Sections (Cream Panels)

For sections that need visual break from the dark canvas, use the inverse palette:

| Property | Value |
|----------|-------|
| Background | `--bg-inverse` (`#FAF7F2`) |
| Text | `--text-inverse` (`#1C1A18`) |
| Accent | `--accent-primary` still works (14.5:1 contrast on cream) |
| Borders | `#1C1A1815` (~8% dark on cream) |

Use sparingly — one or two sections per page maximum. The dark theme is the identity.

### Future Light Mode Path

When light mode is needed (v2+), extend with:
- A `data-theme="light"` attribute on `<html>`.
- Duplicate CSS variables under `[data-theme="light"]`.
- The existing token names remain the same — only values change.
- Do **not** use Tailwind's `dark:` modifier. Use CSS variables for theme switching.

---

## Appendix A: Tailwind v4 Integration

Replace the existing `@theme inline` block in `globals.css` with the following to make all design tokens available as Tailwind utilities:

```css
@import "tailwindcss";

:root {
  /* Backgrounds */
  --bg-primary: #141211;
  --bg-secondary: #1C1A18;
  --bg-tertiary: #252220;
  --bg-inverse: #FAF7F2;

  /* Text */
  --text-primary: #F5F0E8;
  --text-secondary: #A8A29E;
  --text-tertiary: #78716C;
  --text-inverse: #1C1A18;

  /* Accent */
  --accent-primary: #BEFF03;
  --accent-hover: #D4FF4D;
  --accent-pressed: #A3E600;
  --accent-muted: #BEFF0315;
  --accent-text: #BEFF03;

  /* Semantic */
  --color-success: #4ADE80;
  --color-error: #F87171;
  --color-info: #A8A29E;

  /* Borders */
  --border-subtle: #252220;
  --border-default: #3D3835;
  --border-emphasis: #BEFF0333;
}

@theme inline {
  /* Colors — exposes as bg-*, text-*, border-* utilities */
  --color-bg-primary: var(--bg-primary);
  --color-bg-secondary: var(--bg-secondary);
  --color-bg-tertiary: var(--bg-tertiary);
  --color-bg-inverse: var(--bg-inverse);

  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-tertiary: var(--text-tertiary);
  --color-text-inverse: var(--text-inverse);

  --color-accent-primary: var(--accent-primary);
  --color-accent-hover: var(--accent-hover);
  --color-accent-pressed: var(--accent-pressed);
  --color-accent-muted: var(--accent-muted);
  --color-accent-text: var(--accent-text);

  --color-success: var(--color-success);
  --color-error: var(--color-error);
  --color-info: var(--color-info);

  --color-border-subtle: var(--border-subtle);
  --color-border-default: var(--border-default);
  --color-border-emphasis: var(--border-emphasis);

  /* Fonts */
  --font-display: var(--font-plus-jakarta);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--bg-primary);
  color: var(--text-secondary);
  font-family: var(--font-sans);
}
```

This enables utility classes like:
- `bg-bg-primary`, `bg-bg-secondary`, `bg-accent-primary`
- `text-text-primary`, `text-text-secondary`, `text-accent-text`
- `border-border-subtle`, `border-border-default`
- `font-display`, `font-sans`, `font-mono`

---

## Appendix B: Font Setup

Add Plus Jakarta Sans to `app/layout.tsx`:

```tsx
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// In the <body> tag:
<body className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}>
```

This makes `font-display` available as a Tailwind utility once the `@theme inline` block maps `--font-display: var(--font-plus-jakarta)`.
