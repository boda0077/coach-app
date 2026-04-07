# Design System Strategy: Kinetic Brutalism

### 1. Overview & Creative North Star
The Creative North Star for this design system is **"Kinetic Brutalism."** 

High-end fitness isn't about soft edges; it’s about the friction between discipline and results. We move away from the "friendly SaaS" look by embracing high-contrast editorial layouts, intentional asymmetry, and a monochromatic foundation punctuated by a singular, aggressive neon accent. This system breaks the template through "The Power of the Void"—using expansive dark space to make typography and imagery feel monumental rather than just functional.

---

### 2. Colors & Surface Logic
Our palette is a study in tonal depth. We use deep blacks to create a "void" where the content is the hero.

*   **Primary Accent (`#f3ffca` / `#cafd00`):** This is your kinetic energy. Use it sparingly for critical actions and brand markers. It should feel like a pulse of electricity against the dark background.
*   **The "No-Line" Rule:** Explicitly prohibited: 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a section, transition from `surface` (`#0e0e0e`) to `surface-container-low` (`#131313`). 
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. 
    *   **Level 0 (Base):** `surface`
    *   **Level 1 (Cards/Sections):** `surface-container-low`
    *   **Level 2 (Inset Components):** `surface-container-high`
*   **The Glass & Gradient Rule:** For floating navigation or over-image components, use Glassmorphism. Apply `surface-container` colors at 60% opacity with a `20px` backdrop blur. Use a subtle linear gradient from `primary` to `primary-container` only for "Hero" CTAs to give them a three-dimensional, "lit" quality.

---

### 3. Typography: The Editorial Voice
We use typography as a structural element, not just for legibility.

*   **Display & Headline (Lexend):** These are your "shouters." Lexend’s geometric precision conveys the discipline of the brand. Use `display-lg` for hero headlines with tight letter-spacing (-2%) to create a sense of density and power.
*   **Title & Body (Inter):** These are your "navigators." Inter provides a technical, high-performance feel. 
*   **Hierarchy Strategy:** Create massive scale contrast. A `display-lg` headline should often sit near a `label-md` metadata point. This "Big/Small" relationship is what creates the high-end editorial feel, moving away from "standard" medium-sized headers.

---

### 4. Elevation & Depth
In this system, depth is earned through tone, not lines.

*   **The Layering Principle:** Stack your containers. A `surface-container-lowest` card sitting on a `surface-container-low` section creates a natural "recessed" look. 
*   **Ambient Shadows:** Avoid traditional drop shadows. If an element must "float" (like a primary action button), use a diffused shadow: `Y: 20px, Blur: 40px, Color: rgba(0,0,0, 0.4)`. The shadow should feel like an atmospheric occlusion, not a stamp.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
*   **Image Integration:** All fitness imagery must use a `surface` or `surface-dim` overlay at 30-50% opacity. This ensures that `on-surface` typography remains passing for WCAG AAA contrast while giving images a "stealth" aesthetic.

---

### 5. Components

*   **Buttons:**
    *   **Primary:** Sharp corners (`sm` rounding: 0.125rem). Background: `primary_container`. Text: `on_primary_container` (Bold).
    *   **Tertiary/Ghost:** No background. Use `on_surface` text with a `primary` underline that expands on hover.
*   **Task Cards:** Use `surface-container-low`. Forgo dividers. Use `spacing-lg` (vertical white space) to separate task items. A vertical `primary` bar on the far left of a card indicates an "active" or "high priority" state.
*   **Checkboxes & Radios:** These should feel like "Equipment." Use `primary` for the checked state. When unchecked, use an `outline` token at 40% opacity. Rounding should be minimal (`sm`).
*   **Input Fields:** Use `surface_container_highest` for the field background. No bottom border. The label (`label-md`) should sit 8px above the field, never inside it, to maintain a technical, data-entry aesthetic.
*   **Signature Component - The "Progress Blade":** Instead of a standard progress bar, use a razor-thin (2px) `primary` line that spans the full width of a container, sitting at the very top or bottom edge to act as a subtle indicator of completion.

---

### 6. Do's and Don'ts

*   **DO:** Use asymmetrical padding. For example, give a header more top-padding than bottom-padding to create an upward "kinetic" energy.
*   **DO:** Use "Dark Overlays" on imagery to make the neon green `primary` color pop with extreme vibrance.
*   **DON'T:** Use the `default` or `lg` rounding scales for primary UI containers. Keep it to `none` or `sm` to maintain the "Brutalist" edge.
*   **DON'T:** Use dividers (lines) to separate list items. Use a background shift (e.g., zebra striping with `surface` and `surface-container-low`) instead.
*   **DO:** Ensure `primary` is never used for long-form text. It is a "signal" color only. All reading text must be `on_surface`.