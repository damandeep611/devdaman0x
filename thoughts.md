# Engineering Decisions Log

## 2025-12-07: Theme Toggle Implementation Strategy

### Context
The repository contained two conflicting implementations for handling theme switching (Dark/Light mode):
1.  **`src/components/theme/mode-toggle.tsx`**: Uses the `next-themes` library.
2.  **`src/components/layout/NavPill.tsx`**: Uses local React state (`useState`) and manual DOM manipulation.

### Decision
**Adopt `next-themes` logic (from `mode-toggle.tsx`)** and refactor `NavPill.tsx` to use it, discarding the local state implementation.

### Reasoning
1.  **Single Source of Truth (SSOT):**
    - The `NavPill` implementation used local state (`useState(true)`), which defaults to "dark" on every reload regardless of the actual active theme.
    - `next-themes` manages the global state correctly, ensuring the UI reflects the actual current theme.

2.  **Persistence & System Preferences:**
    - `next-themes` automatically handles `localStorage` persistence and respects system-level preference changes (OS light/dark mode).
    - The manual `NavPill` implementation had no memory; users would lose their preference on page reload.

3.  **Hydration & Safety:**
    - Manual DOM manipulation (`document.documentElement.classList.toggle`) in React/Next.js can lead to hydration mismatches and inconsistent UI states.
    - `next-themes` handles hydration warnings and attribute injection gracefully in `layout.tsx`.

### Action Items
-   Refactor `NavPill.tsx` to remove `useState` for theme control.
-   Integrate `useTheme` hook from `next-themes` into `NavPill.tsx`.
-   Fix import/export mismatch in `src/app/layout.tsx` (Default export vs Named import for `NavPill`).

## 2025-12-07: Theme Toggle Hydration Fix

### Context
Using Javascript conditionals (`theme === 'dark' ? <IconA/> : <IconB/>`) for icons causes hydration errors because server state (undefined/system) may mismatch initial client state.

### Decision
**Use CSS-based toggling** instead of JS conditional rendering.

### Reasoning
- Render **both** icons always.
- Use CSS classes (e.g., `scale-0`, `dark:scale-100`) to show/hide them based on the parent class.
- Ensures identical HTML structure on server and client, eliminating hydration mismatches.
