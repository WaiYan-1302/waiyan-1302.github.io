# Artwork replacement guide

The portfolio uses a small scene system so illustration files can be replaced without changing animation code.

## Scene contract

Each environment has three independent visual layers:

```text
public/assets/<scene>/background.svg
public/assets/<scene>/midground.svg
public/assets/<scene>/foreground.svg
```

The runtime manifest is `src/data/scenes.ts`. `IllustratedScene` reads that manifest and renders each layer as an independent `<img>`. Scroll and pointer parallax operate on the image element, not on the SVG internals, so any layer can later become a PNG, WebP, AVIF, or replacement SVG.

## Recommended production sizes

| Use | Recommended canvas | Aspect ratio | Alpha |
| --- | --- | --- | --- |
| Desktop scene | 2400 × 1350 px | 16:9 | Background opaque; other layers transparent |
| Tablet scene | 1800 × 1350 px | 4:3 | Same layer contract |
| Mobile scene | 1200 × 1800 px | 2:3 | Same layer contract |
| Project thumbnail | 1200 × 900 px | 4:3 | Optional |

The current SVGs use a `1600 × 900` viewBox. Raster replacements should ideally be exported at 2× the largest expected CSS display size. Use WebP or AVIF for opaque painted layers and lossless WebP, PNG, or SVG for transparent layers.

## What belongs in each layer

1. **Background** — sky, distant light, far mountains, atmospheric color. Usually opaque.
2. **Midground** — hills, architecture, tree lines, lake, workshop furniture. Transparent outside the painted forms unless it intentionally covers the full canvas.
3. **Foreground** — nearby leaves, reeds, rocks, framing silhouettes. Must preserve alpha transparency.

Interactive HTML/SVG elements such as project cards, signal paths, particles, and water ripples are rendered separately and should not be baked into replacement art.

## Replacement procedure

1. Export the new layers with identical framing and canvas dimensions.
2. Copy them into the matching folder under `public/assets/`.
3. Either keep the existing filenames or update `src/data/scenes.ts`.
4. Adjust the `depth` values in that manifest if a layer should move more or less during parallax. Recommended range: `0.04` to `0.4`.
5. Run `npm run build`.
6. Check the scene at about 375 px, 768 px, and 1440 px wide. Important subjects should remain visible when `object-fit: cover` crops the sides.

## Adding dedicated mobile art

The first version uses responsive cropping. If dedicated mobile compositions are added later, extend each manifest entry with a mobile source and render it through `<picture>` inside `IllustratedScene`. The animation target remains the `<picture>`/image wrapper, so no scroll logic needs to change.

## Art direction checklist

- Preserve calm, organic silhouettes and broad negative space.
- Keep key text regions visually quiet.
- Use warm highlights sparingly against muted forest and night colors.
- Avoid tiny high-frequency detail near project cards.
- Keep transparent layer edges clean to prevent halos.
- Do not include text inside raster art; keep content editable in React.
