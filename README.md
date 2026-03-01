# CheoTech Studio — Portfolio

Portfolio site for [cheotechstudio.com](https://cheotechstudio.com), built with Next.js 15, Tailwind CSS, Framer Motion, and Lenis smooth scroll.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion
- **Smooth scroll:** Lenis
- **Theme:** next-themes (dark/light)
- **UI:** Custom components + shadcn-style (Button, etc.)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — Routes (layout, home, projects, project detail)
- `src/components/` — Layout (header, footer, theme toggle), sections (hero, projects grid, about, contact), providers (theme, Lenis), UI
- `src/lib/` — Data (projects), utils

## Deploy on Vercel

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repository.
3. Deploy (default Next.js settings are fine).
4. **Custom domain:** In the project dashboard go to **Settings → Domains** → add **cheotechstudio.com** (and optionally **www.cheotechstudio.com**).
5. At your domain registrar, add the DNS records Vercel shows (A record or CNAME). Vercel will provision SSL automatically.

## Contact (embedded on site)

- **Emails:** contact@cheotechstudio.com, cheotechstudio@gmail.com
- **Phone:** +84 373 167 306
- **Domain:** cheotechstudio.com
