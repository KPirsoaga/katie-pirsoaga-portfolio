# Katie Pirsoaga Portfolio

Source code for Katie Pirsoaga's professional portfolio website.

Live website: [katie-pirsoaga-portfolio.katiepirsoaga.chatgpt.site](https://katie-pirsoaga-portfolio.katiepirsoaga.chatgpt.site)

## Website structure

- `app/page.tsx`: reduced homepage and professional introduction
- `app/projects/page.tsx`: detailed project case studies
- `app/experience/page.tsx`: professional history and experience
- `app/components.tsx`: shared navigation and interface components
- `app/globals.css`: typography, spacing, responsive layout and green colour system
- `app/layout.tsx`: shared page layout and metadata
- `public/`: icons and public assets

The website content is stored directly in these source files. It does not use a database or content management system.

## Technology

- TypeScript
- React
- Vinext
- Vite
- Cloudflare-compatible Worker output

## Run locally

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal.

## Production build

```bash
npm run build
```

The private OpenAI Sites deployment identity is intentionally excluded from this public source package. It is not required for editing the website or running it locally.

## Repository

This package is prepared for:

`https://github.com/KPirsoaga/katie-pirsoaga-portfolio`
