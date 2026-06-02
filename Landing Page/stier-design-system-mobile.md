# s.tier — Design System (Mobile)
> **Viewport scope: max-width 767px only.** Every rule, token, size, spacing value, component spec, and behavior in this file applies exclusively to mobile. Nothing here affects desktop or tablet. A separate file — `stier-design-system-desktop` — governs those viewports. When implementing, all values in this file must be wrapped in `@media (max-width: 767px)` unless they are shared brand tokens (colors, font files, gradient definitions) that do not change between viewports.

**Theme:** dark

s.tier's visual identity mirrors its positioning: no-fluff, no decoration, no apology. The deep navy-to-black palette communicates authority and focus, while the electric gold serves as a singular high-voltage accent — used sparingly so that when it appears, it means something. Boldonse is reserved for the single display headline only. Sora handles everything else — clean, readable, efficient.

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
- **Role:** Hero display headline only (`--text-display`, 80px). Boldonse is reserved exclusively for the largest, most impactful text on the page — the single hero statement per section. It is never used for heading, heading-lg, subheading, or any smaller text. Use Sora weight 700 for all other heading tiers.
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
| heading | Sora | 36px | 700 | 1.1 | -0.02em | `--text-heading` |
| heading-lg | Sora | 52px | 700 | 1.05 | -0.03em | `--text-heading-lg` |
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
- Never use Boldonse for anything other than the display role (80px hero headline). heading, heading-lg, subheading, body, buttons, labels — all Sora.
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

## Navigation Behavior — Smart Hide / Reveal Navbar

> **Mobile only (`max-width: 767px`).** This behavior is defined here for the mobile viewport. Desktop navbar behavior is specified in the desktop design system file.

The s.tier mobile navbar uses the **Smart Hide / Reveal** pattern (also known as the "headroom" pattern). The navbar hides itself as the user scrolls down — getting out of the way of content — and slides back into view the moment the user scrolls up, even a single pixel.

### Behavior Rules

- **At rest (top of page):** Navbar is fully visible, fixed to the top of the viewport. No background — transparent over the hero.
- **After scrolling down 80px:** A background activates — `#000814` at 95% opacity with a `backdrop-filter: blur(12px)` — so the nav remains legible as it overlaps page content beneath it.
- **Scrolling down:** After the 80px threshold, if the user continues scrolling down, the navbar translates upward off-screen (`transform: translateY(-100%)`) over `300ms ease`. It is hidden but still in the DOM and still `position: fixed`.
- **Scrolling up (any amount):** The navbar immediately slides back down into view (`transform: translateY(0)`) over `300ms ease`. No delay — the response is instant to the direction change.
- **At the very top of the page:** Navbar background returns to transparent (no blur, no background color).

### Transition Timing

| State | Transform | Duration | Easing |
|-------|-----------|----------|--------|
| Reveal (scroll up) | `translateY(0)` | 300ms | ease |
| Hide (scroll down) | `translateY(-100%)` | 300ms | ease |
| Background fade in | opacity 0 → 1 on bg | 200ms | ease |
| Background fade out | opacity 1 → 0 on bg | 200ms | ease |

### CSS Implementation

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: transform 300ms ease, background-color 200ms ease, backdrop-filter 200ms ease;
  background-color: transparent;
}

.navbar.scrolled {
  background-color: rgba(0, 8, 20, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.navbar.hidden {
  transform: translateY(-100%);
}
```

### JavaScript Implementation

```javascript
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 80;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Toggle background once past threshold
  if (currentScrollY > scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('hidden'); // Always show at top
  }

  // Hide on scroll down, reveal on scroll up
  if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
    navbar.classList.add('hidden');
  } else if (currentScrollY < lastScrollY) {
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
}, { passive: true });
```

### Rules & Edge Cases

- **Hamburger overlay:** When the mobile menu overlay is open, scroll is locked — pause the hide/reveal listener while the overlay is active to prevent the navbar from hiding behind an open menu.
- **Do not hide immediately:** The 80px threshold prevents the nav from flickering on small accidental scrolls at the top of the page.
- **Performance:** Use `{ passive: true }` on the scroll listener. Never do layout reads inside the scroll handler — only class toggling. CSS handles all visual transitions.
- **Accessibility:** The navbar must remain focusable even when hidden (it is off-screen, not `display: none`). Ensure keyboard users can still Tab to nav items — if the nav is hidden, it should receive `visibility: hidden` or `inert` attribute to remove it from the tab order while out of view.

```javascript
// Accessibility: remove from tab order when hidden
navbar.addEventListener('transitionend', () => {
  if (navbar.classList.contains('hidden')) {
    navbar.setAttribute('inert', '');
  } else {
    navbar.removeAttribute('inert');
  }
});
```

---

## Mobile View

All rules in this file are scoped to mobile (`max-width: 767px`). The sections below define how each design element behaves at this viewport. Shared brand tokens (colors, font files, gradients) do not require a media query — only layout, sizing, spacing, and behavioral properties do.

---

### Mobile — Typography Scaling

Boldonse headlines are built for large screens. At mobile widths, they must be scaled down aggressively to prevent overflow and maintain readability. Body text and labels remain close to their desktop values — the main changes are concentrated in the display and heading tiers.

| Role | Desktop Size | Desktop Font | Mobile Size | Notes |
|------|-------------|-------------|-------------|-------|
| display | 80px | Boldonse | 40px | Half-scale. One headline per screen — it still dominates. |
| heading-lg | 52px | Sora 700 | 32px | Used for major section titles. |
| heading | 36px | Sora 700 | 26px | Sub-section headers. |
| subheading | 22px | Sora 600 | 18px | Minimal change, already compact. |
| body | 16px | Sora 400 | 15px | Marginally tighter for density. |
| body-sm | 14px | Sora 400 | 13px | Captions, metadata. |
| label | 14px | Sora 600 | 12px | Uppercase labels — reduce tracking slightly to 0.06em. |

**Line height adjustments:** At mobile sizes, Boldonse headlines should use a slightly looser line height than desktop — `1.1` at display, `1.15` at heading-lg — to prevent tight stacking on narrow widths.

**Letter spacing:** Reduce negative tracking on Boldonse headlines by half at mobile. Example: desktop `display` uses `-0.04em` → mobile uses `-0.02em`. This prevents characters from feeling cramped on small screens.

```css
@media (max-width: 767px) {
  --text-display: 40px;
  --text-heading-lg: 32px;
  --text-heading: 26px;
  --text-subheading: 18px;
  --text-body: 15px;
  --text-body-sm: 13px;
  --text-label: 12px;
}
```

---

### Mobile — Button Sizing & Touch Targets

All interactive elements must meet a minimum touch target of **44×44px** per WCAG 2.2 and Apple/Google HIG standards. Buttons remain pill-shaped (999px radius) — do not flatten corners on mobile.

| Property | Desktop | Mobile |
|----------|---------|--------|
| Padding (primary) | 14px 28px | 16px 32px |
| Padding (secondary) | 14px 28px | 16px 32px |
| Min height | — | 52px |
| Min width | — | 160px |
| Font size | 14px | 15px |
| Full-width CTA | No | Yes — buttons stretch to 100% container width in single-column layouts |

**Full-width rule:** On mobile, primary and secondary CTAs within hero sections and single-column layouts should expand to `width: 100%` to maximize tap surface and visual weight. When two buttons appear side by side on desktop, they stack vertically on mobile with `gap: 12px` between them.

```css
@media (max-width: 767px) {
  .btn-primary,
  .btn-secondary {
    width: 100%;
    min-height: 52px;
    padding: 16px 32px;
    font-size: 15px;
    justify-content: center;
  }
}
```

---

### Mobile — Spacing Adjustments

Section padding and element gaps are reduced on mobile to preserve breathing room without wasting vertical real estate. The spacing scale tokens themselves do not change — only the values applied to layout-level properties.

| Property | Desktop | Mobile |
|----------|---------|--------|
| Section vertical padding | 96px | 56px |
| Content container horizontal padding | 0px (centered) | 20px (side gutters) |
| Card padding | 24px | 16px |
| Gap between stacked elements | 8px | 8px (unchanged) |
| Gap between sections | 72px | 40px |
| Hero headline bottom margin | 32px | 20px |

**Single-column only:** All multi-column grid layouts (2-col, 3-col) collapse to a single column on mobile. No exceptions. Content order follows the DOM order — no visual reordering via CSS that contradicts the reading flow.

```css
@media (max-width: 767px) {
  --section-padding: 56px;
  --card-padding: 16px;

  .section-inner {
    padding-left: 20px;
    padding-right: 20px;
  }

  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

---

### Mobile — Navigation Behavior

Desktop navigation (fixed top bar, horizontal links, CTA button) is replaced by a minimal mobile nav on screens below 767px. The hamburger menu is the only acceptable pattern — do not use a bottom tab bar or a drawer that covers more than 80% of the screen.

**Mobile nav structure:**
- **Logo** — left-aligned, same as desktop. Links to home.
- **Hamburger icon** — right-aligned. Three horizontal lines, Ghost White (`#F5F8FF`), 24×24px tap area minimum (actual icon 18px). On tap: icon animates to an ✕ (X).
- **Menu overlay** — full-screen, Void Black (`#000814`) background at 98% opacity. Nav links centered vertically and horizontally, Boldonse, 32px, Ghost White. Each link has 24px vertical padding for tap comfort.
- **CTA button** — appears at the bottom of the overlay menu, full-width, primary button style (gold gradient, pill, 52px min-height).
- **Close behavior** — tapping ✕, tapping outside the menu, or tapping a link closes the overlay with a 200ms fade-out.

**Behavior rules:**
- The fixed top bar height on mobile is **56px** (vs. implicit desktop height). Logo and hamburger are vertically centered within it.
- The top bar does not show any navigation links — only logo and hamburger.
- Do not show a desktop CTA button in the mobile top bar. It lives inside the overlay only.
- Scrolling does not hide the top bar on mobile — it remains fixed.

```css
@media (max-width: 767px) {
  .nav-desktop-links,
  .nav-desktop-cta {
    display: none;
  }

  .nav-hamburger {
    display: flex;
  }

  .nav-mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 8, 20, 0.98);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    z-index: 100;
  }
}
```

---

### Mobile — Display Headline Scaling (Boldonse)

Boldonse is used **only** for the display role — the single hero headline per page. On mobile, this scales down as follows. All other heading tiers (heading-lg, heading) use Sora weight 700 and follow the mobile typography table above. These rules apply only within `@media (max-width: 767px)` and must not affect desktop or tablet rendering.

- **Display (hero headline):** 40px, line-height 1.1, letter-spacing -0.02em. Maximum 3 lines. If copy runs longer, it must be edited — do not let a hero headline wrap beyond 3 lines on mobile.
- **Electric Gold accent word:** Still permitted on a single word or short phrase within the display headline — same rule as desktop. Do not apply it to more than one word.
- **Text alignment:** The display headline is centered on mobile. On desktop it may be left-aligned depending on layout — on mobile, center alignment prevents uneven ragged edges on narrow viewports.

```css
@media (max-width: 767px) {
  .headline-display {
    font-family: var(--font-display); /* Boldonse */
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .headline-lg {
    font-family: var(--font-body); /* Sora */
    font-size: 32px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .headline {
    font-family: var(--font-body); /* Sora */
    font-size: 26px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    text-align: center;
  }
}
```

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

### Hero Headline (Display)
```
Font: Boldonse, 80px, weight 400
Color: Ghost White (#F5F8FF)
Letter-spacing: -0.04em
Line-height: 0.95
```
Optionally apply `--color-electric-gold` to a single key word or phrase — never the full headline.

### Section Heading (heading-lg)
```
Font: Sora, 52px, weight 700
Color: Ghost White (#F5F8FF)
Letter-spacing: -0.03em
Line-height: 1.05
```

### Sub-section Heading (heading)
```
Font: Sora, 36px, weight 700
Color: Ghost White (#F5F8FF)
Letter-spacing: -0.02em
Line-height: 1.1
```

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
