# Spacing System — 8pt Grid

All spacing values are multiples of **8px**. Use these tokens consistently across layout, components, and typography to maintain visual rhythm.

---

## Base Unit

```
base: 8px
```

---

## Scale

| Token     | Value  | Usage                                              |
|-----------|--------|----------------------------------------------------|
| `space-1` | 4px    | Micro — icon padding, tight inline gaps            |
| `space-2` | 8px    | XS — badge padding, compact list item gaps         |
| `space-3` | 12px   | SM — input padding (vertical), tag spacing         |
| `space-4` | 16px   | MD — input padding (horizontal), button padding    |
| `space-5` | 24px   | LG — card padding, section element spacing         |
| `space-6` | 32px   | XL — section padding (mobile), between components  |
| `space-7` | 48px   | 2XL — section padding (desktop), large gaps        |
| `space-8` | 64px   | 3XL — page section separation                      |
| `space-9` | 96px   | 4XL — hero padding, major layout sections          |
| `space-10`| 128px  | 5XL — full-width section breathing room            |

> `space-1` (4px) is the only half-step allowed — reserved for tight micro-adjustments only.

---

## CSS Custom Properties

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;
}
```

---

## Usage Guidelines

### Layout
- Page horizontal padding (mobile): `space-5` (24px)
- Page horizontal padding (desktop): `space-7` (48px)
- Max content width gutter: `space-6`–`space-8`
- Grid column gap: `space-5` (24px)
- Grid row gap: `space-6` (32px)

### Components
- Button padding: `space-3` vertical / `space-5` horizontal
- Card padding: `space-5` (24px)
- Input padding: `space-3` vertical / `space-4` horizontal
- Modal padding: `space-6` (32px)
- Icon-to-label gap: `space-2` (8px)

### Typography
- Heading margin-bottom: `space-4` (16px)
- Paragraph gap: `space-4`–`space-5`
- Label-to-input gap: `space-2` (8px)
- Section heading margin-bottom: `space-5`–`space-6`

### Between Sections
- Within a section block: `space-6`–`space-7`
- Between major page sections: `space-8`–`space-9`

---

## Rules

1. **Always use a token.** Never use arbitrary pixel values for spacing.
2. **No odd numbers.** Spacing must stay on the 8pt grid (4px half-step is the only exception).
3. **Scale intentionally.** Jump at least one step when creating visual hierarchy — don't use adjacent tokens for related elements.
4. **Responsive scaling.** Drop one token step down on mobile for section-level spacing (e.g., `space-8` desktop → `space-7` mobile).
5. **Padding ≠ margin.** Use padding for internal component space; use margin (or gap) for spacing between elements.
