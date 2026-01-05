# Gemini Project Context: DevDaman0x Portfolio

## Project Overview
**Type:** Personal Portfolio & Blog
**Framework:** Next.js 16 (App Router)
**Styling:** Tailwind CSS 4, CSS Variables for theming
**Animation:** Framer Motion
**Content:** `@content-collections` (MDX)
**Package Manager:** pnpm

## Key Architecture

### 1. File Structure
- `src/app`: App Router pages (`layout.tsx`, `page.tsx`, `blog/`, `work/`).
- `src/components/ui`: Core UI components (complex, high-fidelity).
- `src/content/blog`: MDX blog posts.
- `content-collections.ts`: Configuration for content collections.

### 2. Design System
- **Theme:** High-contrast Light/Dark mode ("Clean Technical" vs "Cinematic OLED").
- **Metaphors:**
    - **"Work Folder" (Dossier):** Physical folder look with tabs and clips.
    - **"Creator Studio":** Dashboard-like interfaces with "recording" states.
- **Typography:**
    - **Sans:** `Geist` (Primary UI)
    - **Mono:** `Geist_Mono` (Code, technical data)
    - **Handwriting:** `Caveat` (Personal notes, signatures)
    - **Serif Italic:** Custom styling for specific headers.
- **Micro-interactions:** Extensive use of `framer-motion` for hover states, scale-on-tap, and entrance animations.

### 3. Key Components
- **`HeroSection.tsx`:** Interactive profile card with rotated layers and spring physics.
- **`CaseStudy.tsx`:** Showcase section. *Unique Implementation:* Uses HTML/CSS to build UI mockups (e.g., "DotOS Notes", "Pearl" charts) directly within the code rather than using screenshots.
- **`BlogPage` (`src/app/blog/page.tsx`):** Minimalist list of articles with hover effects.

## content-collections Configuration
- **Directory:** `src/content/blog`
- **Schema:** `title`, `description`, `date`, `author` (optional), `tags` (optional), `image` (optional).
- **Transformation:** Adds `mdx`, `slug`, and `url` fields. Uses `rehype-pretty-code`.

## Development Guidelines
1.  **Style:** Use Tailwind semantic classes (e.g., `bg-card`, `text-muted-foreground`) to ensure dark mode compatibility.
2.  **Animation:** Prefer `framer-motion` for complex interactions.
3.  **Icons:** Use `lucide-react` for UI icons, `react-icons` for brand logos.
4.  **Content:** Add new blog posts to `src/content/blog`.
