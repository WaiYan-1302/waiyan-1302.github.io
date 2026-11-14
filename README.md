# The Living Sketchbook — A Signal Garden

A cinematic, illustrated portfolio for Lin: an interdisciplinary university student exploring engineering, creative technology, music, and visual storytelling.

The site is built with React, TypeScript, Vite, GSAP/ScrollTrigger, Lucide React, and original layered SVG scenery. It uses normal browser scrolling, remains fully navigable without animation, and respects `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local preview URL in the terminal. The default is usually `http://localhost:5173`.

## Validate and build

```bash
npm run check
npm run build
npm run preview
```

The production output is written to `dist/`.

## Edit the portfolio

- Name, introduction, interests, email, and social links: `src/data/siteConfig.ts`
- Project titles, descriptions, technologies, status, and URLs: `src/data/projects.ts`
- Scene asset paths and parallax depth: `src/data/scenes.ts`
- Color, type, and motion tokens: `src/styles/tokens.css`
- Layout and responsive composition: `src/styles/global.css`
- Scene components: `src/sections/`
- Original artwork: `public/assets/`

Project fields with empty URLs are intentionally rendered as unavailable rather than as dead links. Replace `your-email@example.com` before using the contact button publicly.

## Project details

All project cards open a shared accessible project panel. The panel:

- moves focus to its close button;
- closes with Escape or a backdrop click;
- traps keyboard focus while open;
- restores focus to the originating card;
- uses a full-screen reading layout on mobile.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Keep the detected framework as **Vite**.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.
6. Deploy.

No runtime environment variables are required for this version.

## Artwork replacement

See [ASSET_GUIDE.md](./ASSET_GUIDE.md) for the scene-layer contract, sizing recommendations, transparency requirements, and the image replacement procedure.
