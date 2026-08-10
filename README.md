# Katie Pirsoaga Portfolio

Professional portfolio website for Katie Pirsoaga, covering English communication, international conference operations and human-centred digital systems.

Live site: [katie-pirsoaga-portfolio.katiepirsoaga.chatgpt.site](https://katie-pirsoaga-portfolio.katiepirsoaga.chatgpt.site)

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with professional introduction, selected work and contact |
| `/projects` | Work catalogue and case studies |
| `/experience` | Professional history, credentials and education |

Content lives directly in the React source files. The site does not use a CMS or database.

## Technology

- TypeScript and React
- Vinext (Next.js App Router compatibility layer)
- Vite
- Cloudflare Workers deployment via `@cloudflare/vite-plugin`

## Requirements

Node.js 22.13 or later.

## Local development

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Build and test

```bash
npm run build
npm test
npm run lint
npx tsc --noEmit
```

The production build outputs a Cloudflare Worker in `dist/` together with a packaged hosting manifest at `dist/.openai/hosting.json`.

## Repository structure

| Path | Purpose |
| --- | --- |
| `app/` | Pages, shared components and styles |
| `public/` | Favicon and static assets |
| `worker/` | Cloudflare Worker entry point |
| `build/` | Vite build plugin for hosting manifest packaging |
| `.openai/hosting.json` | Cloudflare binding configuration consumed at build time |
| `scripts/` | Build, install and validation scripts |
| `tests/` | Content and HTML validation tests |

## Deployment

Cloudflare production deploys from the `main` branch. The build command is `npm run build`.

## Accessibility and content checks

Tests verify British spelling, factual content labels, route rendering, semantic metadata and editorial requirements such as verified project status labels.
