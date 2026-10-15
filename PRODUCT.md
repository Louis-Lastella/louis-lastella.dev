# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Betriebe und Arbeitgeber: Ausbildungsbetrieb (Übernahme) und Firmen für Jobs nach der Ausbildung. Sie kommen meist über eine Bewerbung oder einen Link und wollen in kurzer Zeit verstehen, wer Louis ist, was er kann und ob er ernsthaft arbeitet.
- Tech-Leute über GitHub und die MCP-Szene. Sie kommen vom GitHub-Profil oder einem Repo und wollen sehen, was er sonst noch gebaut hat und wie man ihn erreicht.

## Product Purpose

Persönliches Portfolio von Louis: zeigen, wer er ist, was er baut und wie man ihn erreicht. Erfolg heißt, dass ein Betrieb oder ein Tech-Mensch nach kurzer Zeit ein klares Bild hat und Kontakt aufnimmt oder ein Repo öffnet.

## Positioning

Louis ist Azubi zum Fachinformatiker für Systemintegration beim Berufsbildungswerk Hamburg (Aug. 2025 bis 2028). Systemintegration und Web stehen gleichberechtigt nebeneinander. Er baut Tools, die ihm Alltag und Ausbildung abnehmen, und hostet das meiste selbst (Coolify, eigene Server). Seine Projekte sind echte, laufende Werkzeuge, keine Übungsaufgaben.

## Operating Context

- Besucher kommen vom GitHub-Profil (github.com/Louis-Lastella), aus Bewerbungen oder über direkte Links.
- Kontaktwege: Mail contact@louis-lastella.dev, GitHub, Discord-Server.
- Sprache der Seite: Deutsch, lockerer, ehrlicher Ton, keine Werbesprache.

## Capabilities and Constraints

- Statische Seite mit Astro und TypeScript. Eine GitHub Action prüft die Typen (`astro check`), baut nach `dist/` und veröffentlicht über GitHub Pages (Domain louis-lastella.dev via `public/CNAME`). Im Browser kommt nur HTML, CSS und ein kleines Inline-Skript an.
- Kein Backend. JavaScript im Browser nur, wo es wirklich gebraucht wird.
- Inhalte pflegt Louis in `src/data.ts` (zweisprachig, `{ de, en }`); neue Projekte müssen dort ohne Design-Arbeit ergänzt werden können. Seite: `src/components/Page.astro` (gerendert als `/` und `/en/`), Lebenslauf: `src/pages/lebenslauf.astro` (wird beim Deploy zu `/lebenslauf.pdf` gedruckt), Styles: `src/styles/global.css` + `fonts.css`, statische Dateien: `public/`.
- Beim Build holt die Seite das letzte Push-Datum der GitHub-Repos ("Aktualisiert <Monat>"); montags baut die Action neu.
- Schriften und Assets sollen lokal ausgeliefert werden (DSGVO, keine Google-Server).

## Brand Commitments

- Die Seite bleibt dunkel (von Louis festgelegt).
- Der bestehende Look bleibt: schwarzer Grund, Rot als Akzent, Bebas-Neue-Überschriften, DM Sans, Abschnittsfolge Hero, Über mich, Skills, Weg, Projekte, Kontakt. Louis hat neue Stilrichtungen abgelehnt; Arbeit an der Seite verfeinert diesen Look.
- Das Kinderfoto (`assets/images/user-pic.jpg`, Louis als Kind in einer blauen Tonne) bleibt, weil es Charme hat.
- Name: Louis Lastella, Domain louis-lastella.dev.

## Evidence on Hand

- Projekte mit Beschreibungen in `src/data.ts`: Synology Chat MCP (auch in der offiziellen MCP Registry), Berichtsheft MCP, Fumata (iOS-App mit Mia, öffentlich als "Know your habits", Website fumata.app), Homelab, Discord-Bots (selbst gehostet mit Coolify), Vinylon, Usagecast, Jellyfin Discord RPC, Claudios MC Mod, Portfolio-Website. Brokkoli Tracker gibt es nicht mehr.
- Ausbildung beim Berufsbildungswerk Hamburg (Aug. 2025 bis 2028).
- Der Proxmox-Host gehört Mia: Proxmox und LXC werden auf der Seite nicht genannt, das Homelab wird über Coolify, Docker und Linux beschrieben.
- Öffentliche Repos: synology-chat-mcp, berichtsheft-mcp, usagecast, louis-lastella.dev. Private Projekte stehen ohne Link da.
- Echte Screenshots: Usagecast (Dark Mode, `usagecast.webp`), Coolify-Übersicht mit allen Diensten (`coolify.webp`), beide in `public/assets/images/projects/`. Berichtsheft braucht kein Bild. Vorschaubilder für Links: `public/assets/images/og-de.png` / `og-en.png`.
- Die alten Projektbilder (früher `assets/images/projects/`, jetzt `public/assets/images/projects/`) sind KI-Renderings, keine echten Screenshots, und werden nicht mehr verwendet. Neue Projektbilder nur als echte Screenshots.
- Nicht vorhanden und nicht erfinden: Referenzen, Kundenstimmen, Zahlen zu Nutzern oder Stars, Zertifikate, Prozent-Skills.

## Product Principles

- Zeigen statt behaupten: echte Projekte, echte Links, keine Füll-Statistiken.
- Ehrlich über den Stand: Azubi, lernt, baut trotzdem Dinge, die laufen.
- Schnell erfassbar für Betriebe, tief genug für Tech-Leute.
- Pflegbar: ein neues Projekt ist ein Eintrag im Datenblock.

## Accessibility & Inclusion

Normaler Mauszeiger, Tastaturbedienung, ausreichender Kontrast, Rücksicht auf reduzierte Bewegung.
