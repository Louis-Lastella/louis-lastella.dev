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

Louis ist Azubi zum Fachinformatiker für Systemintegration in Hamburg (Aug. 2025 bis 2028). Systemintegration und Web stehen gleichberechtigt nebeneinander. Er baut Tools, die ihm Alltag und Ausbildung abnehmen, und hostet das meiste selbst (Coolify, eigene Server). Seine Projekte sind echte, laufende Werkzeuge, keine Übungsaufgaben.

## Operating Context

- Besucher kommen vom GitHub-Profil (github.com/Louis-Lastella), aus Bewerbungen oder über direkte Links.
- Kontaktwege: Mail contact@louis-lastella.dev, GitHub, Discord-Server.
- Sprache der Seite: Deutsch, lockerer, ehrlicher Ton, keine Werbesprache.

## Capabilities and Constraints

- Statische Seite. `index.php` ist nur ein Template mit Datenblock oben; eine GitHub Action rendert es zu `index.html` und veröffentlicht über GitHub Pages (Domain louis-lastella.dev via CNAME). Nur `css`, `js`, `assets`, `favicon.svg`, `CNAME` werden mit ausgeliefert.
- Kein Build-System, kein Framework, kein Backend.
- Inhalte pflegt Louis im Datenblock von `index.php`; neue Projekte müssen dort ohne Design-Arbeit ergänzt werden können.
- Schriften und Assets sollen lokal ausgeliefert werden (DSGVO, keine Google-Server).

## Brand Commitments

- Die Seite bleibt dunkel (von Louis festgelegt).
- Der bestehende Look bleibt: schwarzer Grund, Rot als Akzent, Bebas-Neue-Überschriften, DM Sans, Abschnittsfolge Hero, Über mich, Skills, Weg, Projekte, Kontakt. Louis hat neue Stilrichtungen abgelehnt; Arbeit an der Seite verfeinert diesen Look.
- Das Kinderfoto (`assets/images/user-pic.jpg`, Louis als Kind in einer blauen Tonne) bleibt, weil es Charme hat.
- Name: Louis Lastella, Domain louis-lastella.dev.

## Evidence on Hand

- Projekte mit Beschreibungen im Datenblock von `index.php`: Synology Chat MCP (auch in der offiziellen MCP Registry), Berichtsheft MCP, Usagecast, Discord-Bots (selbst gehostet mit Coolify), Portfolio-Website. Brokkoli Tracker gibt es nicht mehr.
- Öffentliche Repos: synology-chat-mcp, berichtsheft-mcp, usagecast, louis-lastella.dev.
- Die alten Projektbilder (`assets/images/projects/`) sind KI-Renderings, keine echten Screenshots, und werden nicht mehr verwendet. Neue Projektbilder nur als echte Screenshots.
- Nicht vorhanden und nicht erfinden: Referenzen, Kundenstimmen, Zahlen zu Nutzern oder Stars, Zertifikate, Prozent-Skills.

## Product Principles

- Zeigen statt behaupten: echte Projekte, echte Links, keine Füll-Statistiken.
- Ehrlich über den Stand: Azubi, lernt, baut trotzdem Dinge, die laufen.
- Schnell erfassbar für Betriebe, tief genug für Tech-Leute.
- Pflegbar: ein neues Projekt ist ein Eintrag im Datenblock.

## Accessibility & Inclusion

Normaler Mauszeiger, Tastaturbedienung, ausreichender Kontrast, Rücksicht auf reduzierte Bewegung.
