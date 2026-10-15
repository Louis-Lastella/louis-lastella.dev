# louis-lastella.dev

Mein Portfolio, live unter [louis-lastella.dev](https://louis-lastella.dev). Gebaut mit [Astro](https://astro.build) und TypeScript.

- Inhalte (Projekte, Skills, Weg, "Gerade dran", feste Texte), zweisprachig `{ de, en }`: `src/data.ts`
- Seite: `src/components/Page.astro`, gerendert als `/` (Deutsch) und `/en/` (Englisch)
- Lebenslauf: `src/pages/lebenslauf.astro`, wird beim Deploy zu `/lebenslauf.pdf` gedruckt
- Styles: `src/styles/global.css`, Schriften: `src/styles/fonts.css`
- Schriften, Bilder, Vorschaubilder (`og-de.png`, `og-en.png`), Favicon: `public/`

Bei jedem Push auf `main` (und jeden Montag) prüft eine GitHub Action die Typen, baut die Seite zu statischem HTML, holt dabei das letzte Push-Datum der verlinkten Repos, druckt den Lebenslauf mit Chrome als PDF und veröffentlicht alles über GitHub Pages. Fehlt in einem Projekt ein Pflichtfeld, ein Bild oder das PDF, bricht der Build ab und die alte Version bleibt online.

Lokal:

```bash
npm install
npm run dev     # Vorschau mit Live-Reload auf localhost:4321
npm run build   # Typprüfung + Build nach dist/
```
