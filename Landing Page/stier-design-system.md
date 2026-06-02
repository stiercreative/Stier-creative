# s.tier — Design System
> Dark Navy Command Center. Imagine a war room for paid media — deep navy and black, illuminated by electric gold, and anchored by type that doesn't ask for attention — it demands it.

**Theme:** dark

s.tier's visual identity mirrors its positioning: no-fluff, no decoration, no apology. The deep navy-to-black palette communicates authority and focus, while the electric gold serves as a singular high-voltage accent — used sparingly so that when it appears, it means something. Boldonse headlines are blunt and unapologetic. Sora body text is clean, readable, and efficient. Together, they say: *we know what we're doing, and we've already done it.*

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000814` | `--color-void-black` | Primary page background, deepest layer. |
| Deep Navy | `#001D3D` | `--color-deep-navy` | **Restricted — do not use unless instructed.** |
| Electric Gold | `#FFC300` | `--color-electric-gold` | Primary CTA background, key accent — use sparingly. |
| Bright Gold | `#FFD60A` | `--color-bright-gold` | Hover state for CTAs, highlight emphasis on headlines. |
| Ghost White | `#F5F8FF` | `--color-ghost-white` | Primary body text, icon fills on dark backgrounds. |
| Navy Gradient | `linear-gradient(180deg, #001D3D 0%, #000814 100%)` | `--gradient-navy-depth` | Feature section backgrounds — depth without distraction. |
| Gold Button | `linear-gradient(90deg, #FFD60A 0%, #FFC300 100%)` | `--gradient-gold-button` | Primary CTA button fill — 90° left-to-right, Bright Gold to Electric Gold. |
| Gold Glow | `linear-gradient(135deg, #FFD60A 0%, #FFC300 100%)` | `--gradient-gold-glow` | Hero accent elements, decorative highlights. |
| Midnight Fade | `linear-gradient(180deg, #000814 0%, #001D3D 50%, #000814 100%)` | `--gradient-midnight-fade` | Full-page section separators, alternating background rhythm. |

> **Restricted Colors — use only when explicitly instructed:**
> - **`#003566` (Royal Blue):** Reserved for future use or specific one-off applications. Do not introduce into components, backgrounds, borders, or typography without a direct instruction.
> - **`#001D3D` (Deep Navy):** Reserved for future use or specific one-off applications. Do not introduce into components, backgrounds, borders, or typography without a direct instruction.

---

## Tokens — Typography

### Boldonse — Display & Headlines · `--font-boldonse`
- **File:** `Boldonse-Regular.ttf`
- **Weight:** 400 (the font is inherently heavy by design)
- **Role:** Hero headlines, section titles, standout pull quotes. Boldonse is blunt and architectural — it signals confidence without ornamentation. Use it large or not at all. Never use it for body copy or UI labels.
- **Substitute:** Impact, Anton

### Sora — Body & UI · `--font-sora`
- **File:** `Sora-VariableFont_wght.ttf`
- **Weights:** 300, 400, 500, 600, 700
- **Role:** All body copy, navigation, buttons, form labels, captions, and metadata. Sora is geometric and precise — it pairs with Boldonse without competing.
- **Substitute:** DM Sans

---

### Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing | Token |
|------|------|------|--------|-------------|----------------|-------|
| caption | Sora | 12px | 400 | 1.5 | 0.08em | `--text-caption` |
| body-sm | Sora | 14px | 400 | 1.43 | 0.02em | `--text-body-sm` |
| body | Sora | 16px | 400 | 1.6 | 0 | `--text-body` |
| label | Sora | 14px | 600 | 1.2 | 0.08em uppercase | `--text-label` |
| subheading | Sora | 22px | 600 | 1.3 | -0.02em | `--text-subheading` |
| heading | Boldonse | 36px | 400 | 1.1 | -0.02em | `--text-heading` |
| heading-lg | Boldonse | 52px | 400 | 1.05 | -0.03em | `--text-heading-lg` |
| display | Boldonse | 80px | 400 | 0.95 | -0.04em | `--text-display` |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px  
**Density:** focused — tight enough to signal precision, open enough to breathe

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value | Rationale |
|---------|-------|-----------|
| buttons | 999px | Fully rounded pill — bold yet approachable |
| cards | 12px | Consistent with the rounded system language |
| tags/badges | 999px | Pill-shaped to match button family |
| modals | 16px | Softer for overlay contexts |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| card | `0px 4px 24px rgba(0, 8, 20, 0.6)` | `--shadow-card` |
| elevated | `0px 8px 40px rgba(0, 8, 20, 0.8)` | `--shadow-elevated` |
| gold-glow | `0px 0px 20px rgba(255, 195, 0, 0.25)` | `--shadow-gold-glow` |
| inset | `inset 0px 1px 0px rgba(245, 248, 255, 0.06)` | `--shadow-inset` |

### Layout

- **Max content width:** 1160px
- **Section vertical padding:** 96px
- **Card padding:** 24px
- **Element gap:** 8px
- **Grid columns:** 12 (desktop), 4 (mobile)

---

## Components

### Primary CTA Button
**Role:** Main conversion action ("Work With Us", "See the Work", "Get a Quote")

Background: `linear-gradient(90deg, #FFD60A 0%, #FFC300 100%)` — left-to-right, Bright Gold to Electric Gold. Void Black (`#000814`) text. Sora 14px weight 600, uppercase, 0.08em letter-spacing. Padding: 14px vertical, 28px horizontal. Border radius: 999px (pill).

**Flow animation (idle):** The gradient shifts position slowly on a loop — achieved by setting `background-size: 200% 100%` and animating `background-position` from `0% 50%` to `100% 50%` and back over 4s ease-in-out infinite. This gives the button a subtle, living shimmer that signals energy without being distracting.

**Hover state:** Animation accelerates (`animation-duration: 1s`), button lifts with `transform: translateY(-2px)`, and `--shadow-gold-glow` activates. Transition: `all 0.25s ease`.

**CSS implementation:**
```css
.btn-primary {
  background: linear-gradient(90deg, #FFD60A 0%, #FFC300 100%);
  background-size: 200% 100%;
  animation: goldFlow 4s ease-in-out infinite;
  color: #000814;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, animation-duration 0.25s ease;
}

.btn-primary:hover {
  animation-duration: 1s;
  transform: translateY(-2px);
  box-shadow: 0px 0px 20px rgba(255, 195, 0, 0.35);
}

@keyframes goldFlow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Secondary Button
**Role:** Supporting actions ("See Case Studies", "Learn More")

Transparent background, Ghost White (`#F5F8FF`) text, 1.5px solid Electric Gold (`#FFC300`) border. Same sizing and pill radius (999px) as primary. On hover: background fills with Electric Gold, text shifts to Void Black.

### Ghost / Text Link Button
**Role:** Navigation, inline actions, low-priority CTAs

Transparent background, Ghost White (`#F5F8FF`) text at 50% opacity. No border. Sora 14px weight 500. Border radius: 999px. On hover: full opacity Ghost White. Underline optional depending on context.

### Navigation Link
**Role:** Primary nav items

Sora 15px weight 500, Ghost White (`#F5F8FF`). No background. On hover: Electric Gold.

### Tag / Badge
**Role:** Labeling services, categories ("Meta Ads", "Creative", "Media Buying")

Void Black (`#000814`) background, Ghost White text, 1px solid Electric Gold (`#FFC300`) border. Sora 11px weight 600, uppercase, 0.1em letter-spacing. Padding: 4px 12px. Border radius: 999px (pill).

---

## Do's and Don'ts

### Do
- Use Boldonse **only** for hero/section headlines — let it dominate at large sizes.
- Use Sora for everything else: navigation, body, buttons, labels, captions.
- Keep Electric Gold as a **singular accent** — it should never appear more than once or twice per viewport. Its power comes from scarcity.
- Use the Navy Gradient for section backgrounds to create depth rhythm as the user scrolls.
- Write CTAs in the first person and benefit-first: "Show Me What You've Built", "Get My Ads Fixed".
- Maintain high contrast: Ghost White on Void Black meets WCAG AA minimum (and usually AAA).
- Use uppercase Sora labels (weight 600, tracking 0.08em) for section intros, categories, and form labels — it signals structure without shouting.
- Use Ghost White at reduced opacity (40–60%) for secondary and supporting text to create visual hierarchy without additional colors.

### Don't
- Never use Boldonse for body copy, UI labels, buttons, or anything below 32px.
- Do not introduce additional accent colors. The gold-navy-black system is the identity — a third hue dilutes it.
- Do not use `#003566` (Royal Blue) unless explicitly instructed. It is a restricted color.
- Do not flatten buttons to sharp corners — the pill radius (999px) is a deliberate system-wide decision.
- Do not use more than two font families. Boldonse + Sora is the complete system.
- Avoid shadow stacking — one shadow layer per element maximum.
- Do not place Electric Gold text on Void Black at small sizes — small text requires Ghost White for legibility.
- Never use generic stock illustrations or decorative vector art. If imagery is used, it should be real ad creative or device mockups showing the work.

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Base | `#000814` | Primary page background |
| 1 | Accent | `#FFC300` | CTAs, key highlights — use at this level only |

---

## Accessibility

| Feature | Standard | s.tier Implementation |
|---------|----------|-----------------------|
| Color contrast (body) | WCAG AA 4.5:1 | Ghost White on Void Black = ~18:1 ✓ |
| Color contrast (CTA) | WCAG AA 4.5:1 | Black on Electric Gold = ~10:1 ✓ |
| Keyboard access | All interactive elements | Tab order + focus ring: 2px solid `#FFC300` |
| Focus visibility | WCAG 2.2 AA | Gold ring on all focused elements |
| Target size | Min 24×24px | All buttons minimum 44×44px |
| Alt text | Required for all non-decorative images | Required — especially ad creative examples |

---

## Imagery & Visual Language

s.tier does not use decorative illustration. Imagery falls into three categories:

1. **Ad Creative Mockups** — screenshots of actual Meta ads (static, carousel, video thumbnails) displayed in clean device frames or raw on dark backgrounds. This demonstrates the product without describing it.
2. **Performance Callouts** — data overlaid on dark surfaces. ROAS numbers, CTR lifts, spend figures — styled as typographic elements, not charts.
3. **Process / Behind-the-Scenes** — raw briefs, Figma frames, Ads Manager screenshots. Shows the work is real.

No stock photography. No generic "team working at laptop" imagery. If it doesn't show the actual product or result, it doesn't exist on the page.

---

## Layout Philosophy

Full-bleed sections with centered content containers (max 1160px). The hero leads with the Boldonse display headline — one sentence, maximum impact. Every section has one job and one CTA.

Navigation is fixed top, minimal: logo left, 3–4 links center or right, single CTA button. No hamburger menu on desktop.

---

## Similar Visual References

- **Linear** — Same restrained dark mode, precision typography, no decorative flourishes
- **Vercel** — Developer-tool confidence; dark with white text, single accent color
- **WorkOS** — B2B dark aesthetic, strong typographic hierarchy, trust-signaling through clarity

---

## CSS Custom Properties

```css
@font-face {
  font-family: 'Boldonse';
  src: url('Boldonse-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Sora';
  src: url('Sora-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
}

:root {
  /* Colors */
  --color-void-black: #000814;
  --color-deep-navy: #001D3D;
  --color-electric-gold: #FFC300;
  --color-bright-gold: #FFD60A;
  --color-ghost-white: #F5F8FF;

  /* Gradients */
  --gradient-navy-depth: linear-gradient(180deg, #001D3D 0%, #000814 100%);
  --gradient-gold-button: linear-gradient(90deg, #FFD60A 0%, #FFC300 100%);
  --gradient-gold-glow: linear-gradient(135deg, #FFD60A 0%, #FFC300 100%);
  --gradient-midnight-fade: linear-gradient(180deg, #000814 0%, #001D3D 50%, #000814 100%);

  /* Typography */
  --font-display: 'Boldonse', Impact, sans-serif;
  --font-body: 'Sora', 'DM Sans', ui-sans-serif, system-ui, sans-serif;

  /* Type Scale */
  --text-caption: 12px;
  --text-body-sm: 14px;
  --text-body: 16px;
  --text-label: 14px;
  --text-subheading: 22px;
  --text-heading: 36px;
  --text-heading-lg: 52px;
  --text-display: 80px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-pill: 999px;
  --radius-card: 12px;
  --radius-modal: 16px;

  /* Shadows */
  --shadow-card: 0px 4px 24px rgba(0, 8, 20, 0.6);
  --shadow-elevated: 0px 8px 40px rgba(0, 8, 20, 0.8);
  --shadow-gold-glow: 0px 0px 20px rgba(255, 195, 0, 0.25);
  --shadow-inset: inset 0px 1px 0px rgba(245, 248, 255, 0.06);

  /* Surfaces */
  --surface-base: #000814;

  /* Layout */
  --layout-max-width: 1160px;
  --section-padding: 96px;
  --card-padding: 24px;
  --element-gap: 8px;
}
```

---

## Quick Component Reference

### Hero Headline
```
Font: Boldonse, 80px, weight 400
Color: Ghost White (#F5F8FF)
Letter-spacing: -0.04em
Line-height: 0.95
```
Optionally apply `--color-electric-gold` to a single key word or phrase — never the full headline.

### Section Label (above a heading)
```
Font: Sora, 12px, weight 600
Color: Electric Gold (#FFC300)
Letter-spacing: 0.12em
Text-transform: uppercase
```

### Body Paragraph
```
Font: Sora, 16px, weight 400
Color: Ghost White (#F5F8FF) at 55% opacity for supporting/secondary text
Color: Ghost White (#F5F8FF) at 100% for primary/featured text
Line-height: 1.6
```

### Primary CTA
```
Background: linear-gradient(90deg, #FFD60A 0%, #FFC300 100%)
Background-size: 200% 100% — animated via goldFlow keyframes (4s loop, accelerates to 1s on hover)
Text: Void Black (#000814), Sora 14px weight 600, uppercase, tracking 0.08em
Padding: 14px 28px
Border-radius: 999px (pill)
Hover: translateY(-2px) + shadow-gold-glow + animation speed ↑
```

### Secondary CTA
```
Background: transparent
Border: 1.5px solid Electric Gold (#FFC300)
Text: Ghost White (#F5F8FF), Sora 14px weight 600, uppercase, tracking 0.08em
Padding: 14px 28px
Border-radius: 999px (pill)
Hover: background → Electric Gold (#FFC300), text → Void Black (#000814)
```
