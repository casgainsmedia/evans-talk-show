# Felmon Talks News website

Editorial journalism site inspired by Little Dot Studios — serif display type, grid layout, press-wall legitimacy. Built with Vite + React + TypeScript + Tailwind + shadcn/ui.

## Quick start

```bash
pnpm install     # if not already
pnpm dev         # http://localhost:5173
pnpm build       # outputs to ./dist
pnpm preview     # serve the built site locally
```

Requires Node 18+ and pnpm (`npm install -g pnpm` if needed).

## Where to edit content

Every swappable string lives in **`src/lib/content.ts`**. Open that file and replace anything marked `[PLACEHOLDER: ...]`.

| Area | What to update |
|---|---|
| Name, role, email, location | `SITE.name`, `SITE.role`, `SITE.email`, `SITE.location` |
| Hero statement + tagline | `SITE.heroStatement`, `SITE.tagline` |
| Bio (home teaser + full) | `SITE.aboutShort`, `SITE.aboutLong` (array of 3 paragraphs) |
| Beats & credentials | `SITE.beats`, `SITE.credentials` |
| Social URLs | `SITE.social` |
| Videos (YouTube) | `VIDEOS` — each needs an `id` (the part after `v=` in the URL) and a `title` |
| Press outlets | `PRESS` — array of `{ name, url? }` |
| Pull quotes | `QUOTES` — `{ quote, attribution }` |

The HTML `<title>`, meta description, and OpenGraph tags live in **`index.html`** — update those too.

## Replace the headshot

Replace `public/channel-portrait.png` with your own. Any aspect ratio works but **square or portrait reads best** (the About page crops to a square). Recommended: 1200×1200 PNG or JPG, under 500KB.

## Add videos

Grab each YouTube video ID (the `dQw4w9WgXcQ` part of `youtu.be/dQw4w9WgXcQ`) and drop them into `VIDEOS` in `content.ts`.

```ts
export const VIDEOS: Video[] = [
  { id: "dQw4w9WgXcQ", title: "Interview with …", date: "2025" },
  // …
]
```

The home page shows the first three; the `/work` page shows all of them.

## Deploy

### Vercel / Netlify (recommended — zero config)
1. Push this folder to a GitHub repo.
2. Import it in Vercel or Netlify.
3. Build command `pnpm build`, output `dist`.
4. **Enable SPA fallback** (so deep links like `/about` don't 404):
   - Netlify: create `public/_redirects` with `/* /index.html 200`
   - Vercel: already automatic via framework detection

### GitHub Pages
1. `pnpm build`
2. Commit `dist/` to the `gh-pages` branch, or use the `actions/deploy-pages` workflow.
3. Set the `base` option in `vite.config.ts` to `'/your-repo-name/'` so assets resolve.

### Static host (S3, Cloudflare Pages, etc.)
Serve `dist/` with SPA fallback — any unmatched path should return `index.html`.

## Upgrade paths

- **Real contact form** — the form currently uses `mailto:`. Swap in [Formspree](https://formspree.io) (drop-in action URL), [Resend](https://resend.com) (needs a tiny serverless function), or Netlify Forms (just add `data-netlify="true"` to the form tag).
- **Blog / articles** — add a `/writing` route pulling from MDX files or a CMS (Sanity, Contentful).
- **SEO** — install `react-helmet-async` to set per-page titles/meta.

## Design system

- **Palette:** ink `#050505`, paper `#F4EEE8`, signal red `#FF3B30`, charcoal `#111111`.
- **Typography:** Fraunces (display/serif) + IBM Plex Sans (body) — loaded from Google Fonts in `index.html`.
- **Layout utilities:** `.container-edge` (max-width 1400 + responsive padding), `.eyebrow` (uppercase metadata), `.rule` (top divider).
- **Corner radius:** intentionally tight (`0.125rem`) for editorial sharpness.

## Find-and-replace checklist

Before going live, grep for anything left over:

```bash
grep -rn "PLACEHOLDER" src/ index.html
```

You should see zero matches when you're done.
