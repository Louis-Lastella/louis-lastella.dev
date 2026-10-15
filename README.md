# louis-lastella.dev

Mein Portfolio, live unter [louis-lastella.dev](https://louis-lastella.dev). Gebaut mit [Astro](https://astro.build) und TypeScript.

- Inhalte (Projekte, Skills, Weg): `src/data.ts`
- Seite: `src/pages/index.astro`
- Styles: `src/styles/global.css`
- Schriften, Bilder, Favicon: `public/`

Bei jedem Push auf `main` prüft eine GitHub Action die Typen, baut die Seite zu statischem HTML und veröffentlicht sie über GitHub Pages. Fehlt in einem Projekt ein Pflichtfeld oder ein Bild, bricht der Build ab und die alte Version bleibt online.

Lokal:

```bash
npm install
npm run dev     # Vorschau mit Live-Reload auf localhost:4321
npm run build   # Typprüfung + Build nach dist/
```
