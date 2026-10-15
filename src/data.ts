/* ============================================================
   PORTFOLIO-DATEN: alles Inhaltliche wird hier gepflegt.
   Texte stehen zweisprachig da: { de: "...", en: "..." } (Seite / und /en).
   TypeScript prüft beim Build, dass jeder Eintrag vollständig ist.
   ============================================================ */

export type Lang = "de" | "en";
export type Text = Record<Lang, string>;

export type Skill = { title: Text; desc: Text; items: string[] };
export type Step = { role: Text; company: Text; dates: Text; desc: Text };
export type Project = {
  title: string;
  desc: Text;
  /** Ein Satz: was ich dabei gelernt hab. */
  learned: Text;
  tags: string[];
  /** Dateiname in public/assets/images/projects/, nur echte Screenshots. */
  image?: string;
  /** Weglassen = Projekt ohne Link. GitHub-Links bekommen beim Build automatisch "Aktualisiert <Monat>". */
  url?: string;
  /** Befehl zum Ausprobieren, wird als Code angezeigt (ein Klick markiert alles). */
  install?: string;
  /** Weitere Links unter dem Text. */
  links?: { label: Text; url: string }[];
  /** Aufbau in Schichten, wird als kleines Diagramm gezeigt. */
  stack?: { layer: Text; items: string[] }[];
  /** Karte über die volle Breite. Normale Karten am besten in Paaren, sonst bleibt eine Lücke im Raster. */
  wide?: boolean;
};

export const name = "Louis";
export const fullName = "Louis Lastella";
export const initials = "L";
export const city: Text = { de: "Hamburg, Deutschland", en: "Hamburg, Germany" };
export const email = "contact@louis-lastella.dev";
export const yearsExp = new Date().getFullYear() - 2023;
/** Pfad unter public/. */
export const photo = "/assets/images/user-pic.jpg";
/** Lebenslauf: wird beim Deploy aus /lebenslauf/ als PDF erzeugt. */
export const cvPdf = "/lebenslauf.pdf";

export const socials = {
  github: "https://github.com/Louis-Lastella",
  discord: "https://discord.gg/H7MAcaZXnf",
};

/** "Gerade dran": kurz halten und beim Ändern das Datum mitziehen. */
export const now: { updated: Text; items: Text[] } = {
  updated: { de: "Oktober 2026", en: "October 2026" },
  items: [
    { de: "Synology Chat MCP und Berichtsheft MCP sollen in die Liste awesome-mcp-servers, der Pull Request ist offen.",
      en: "Getting Synology Chat MCP and Berichtsheft MCP into the awesome-mcp-servers list, the pull request is open." },
    { de: "Diese Seite: Homelab, Lebenslauf zum Download und eine englische Version.",
      en: "This site: homelab, downloadable CV and an English version." },
  ],
};

export const skills: Skill[] = [
  { title: { de: "Systemintegration", en: "Systems integration" },
    desc: { de: "Mein Ausbildungsberuf. Zu Hause betreibe ich ein Homelab, auf dem alles läuft, was ich baue: Bots, Dashboards und mein KI-Assistent.",
            en: "My apprenticeship trade. At home I run a homelab that hosts everything I build: bots, dashboards and my AI assistant." },
    items: ["Linux", "Docker / Coolify", "DNS / Cloudflare", "Tailscale", "Monitoring"] },
  { title: { de: "Automatisierung", en: "Automation" },
    desc: { de: "Ich baue Tools, die mir Alltag und Ausbildung abnehmen, meistens in Python.",
            en: "I build tools that take work off my plate at home and in my apprenticeship, mostly in Python." },
    items: ["Python", "MCP", "Playwright", "Node.js", "GitHub Actions"] },
  { title: { de: "Web", en: "Web" },
    desc: { de: "Seiten, die nicht nur funktionieren, sondern auch gut aussehen. Diese hier ist mit Astro und TypeScript gebaut.",
            en: "Sites that don't just work but look good too. This one is built with Astro and TypeScript." },
    items: ["HTML / CSS", "JavaScript / TypeScript", "Astro", "PHP"] },
];

export const experience: Step[] = [
  { role: { de: "IT-Enthusiast", en: "IT enthusiast" },
    company: { de: "Eigeninitiative", en: "Self-taught" },
    dates: { de: "seit 2023", en: "since 2023" },
    desc: { de: "Intensive Beschäftigung mit IT-Themen seit dem 16. Lebensjahr — Hardware, Netzwerke, Software und Systeme.",
            en: "Deep into IT since I was 16: hardware, networks, software and systems." } },
  { role: { de: "Web Design & Entwicklung", en: "Web design & development" },
    company: { de: "Eigeninitiative", en: "Self-taught" },
    dates: { de: "2025 – heute", en: "2025 – today" },
    desc: { de: "Aktive Auseinandersetzung mit modernem Web Design und Frontend-Entwicklung. Kontinuierliche Verbesserung durch eigene Projekte.",
            en: "Learning modern web design and frontend development, and getting better through my own projects." } },
  { role: { de: "Fachinformatiker IT-Systemintegration", en: "IT specialist for systems integration" },
    company: { de: "Berufsbildungswerk Hamburg", en: "Berufsbildungswerk Hamburg" },
    dates: { de: "Aug. 2025 – 2028", en: "Aug 2025 – 2028" },
    desc: { de: "Praktische Ausbildung in IT-Systemintegration, Netzwerktechnik und IT-Infrastruktur.",
            en: "Hands-on training in systems integration, networking and IT infrastructure (German dual apprenticeship, Fachinformatiker)." } },
];

/** Nur für den Lebenslauf. Leer = Abschnitt wird nicht angezeigt. */
export const education: Step[] = [];
export const languages: { name: string; level: string }[] = [];

export const projects: Project[] = [
  { title: "Synology Chat MCP",
    wide: true,
    desc: { de: "Ein MCP-Server, mit dem KI-Assistenten wie Claude Synology Chat bedienen können: Kanäle und Nachrichten lesen, Leute finden, Nachrichten und Dateien schicken. Ursprünglich für den Chat meiner Berufsschule gebaut, jetzt Open Source, in der offiziellen MCP Registry und mit jeder Synology-Chat-Instanz nutzbar.",
            en: "An MCP server that lets AI assistants like Claude use Synology Chat: read channels and posts, find people, send messages and files. Originally built for my vocational school's chat, now open source, listed in the official MCP Registry and usable with any Synology Chat instance." },
    learned: { de: "Wie die Web-API von Synology mit Login und Sitzungen funktioniert, und wie man ein Tool so veröffentlicht, dass andere es mit einem Befehl starten: per uvx, als Docker-Image und über die MCP Registry.",
               en: "How Synology's web API handles login and sessions, and how to publish a tool so others can start it with one command: via uvx, as a Docker image and through the MCP Registry." },
    tags: ["MCP", "Python", "Docker", "Open Source"],
    url: "https://github.com/Louis-Lastella/synology-chat-mcp",
    install: "uvx --from git+https://github.com/Louis-Lastella/synology-chat-mcp synology-chat-mcp",
    links: [{ label: { de: "Eintrag in der MCP Registry", en: "MCP Registry entry" },
              url: "https://registry.modelcontextprotocol.io/v0/servers?search=io.github.Louis-Lastella/synology-chat-mcp" }] },
  { title: "Berichtsheft MCP",
    desc: { de: "Füllt mein digitales Berichtsheft (BLok) fast von allein: Der Server sammelt aus meinen KI-Sessions, woran ich in der Woche gearbeitet habe, und trägt es nach meiner Freigabe tageweise ein. Bestehende Einträge werden nie überschrieben.",
            en: "Fills in my digital apprenticeship logbook (BLok) almost by itself: the server collects what I worked on during the week from my AI sessions and enters it day by day once I approve. Existing entries are never overwritten." },
    learned: { de: "Browser-Automatisierung mit Playwright für eine Seite ohne API, und dass ein Tool, das in echte Daten schreibt, vorsichtig sein muss: erst Freigabe, nie überschreiben.",
               en: "Browser automation with Playwright for a site without an API, and that a tool writing to real data has to be careful: approval first, never overwrite." },
    tags: ["MCP", "Python", "Playwright", "Open Source"],
    url: "https://github.com/Louis-Lastella/berichtsheft-mcp" },
  { title: "Fumata",
    desc: { de: "Eine iOS-App, mit der man seine Gewohnheiten festhält und versteht, ein gemeinsames Projekt mit Mia. Ich baue die App für iPhone und Apple Watch: schnelles Eintragen mit Rückgängig, Statistiken mit Swift Charts, Erinnerungen mit Stimmungs-Auswahl direkt in der Mitteilung, eine Live-Aktivität auf dem Sperrbildschirm und Ruhepuls-Daten aus Apple Health.",
            en: "An iOS app for tracking and understanding your habits, a joint project with Mia. I build the app for iPhone and Apple Watch: quick logging with undo, stats with Swift Charts, reminders with a mood pick right in the notification, a Live Activity on the lock screen and resting heart rate from Apple Health." },
    learned: { de: "SwiftUI, Swift Charts und HealthKit, und wie man iPhone, Apple Watch und Sperrbildschirm in einer App zusammenhält, ohne dass es auf älteren Geräten ruckelt.",
               en: "SwiftUI, Swift Charts and HealthKit, and how to keep iPhone, Apple Watch and lock screen together in one app without it stuttering on older devices." },
    tags: ["Swift", "SwiftUI", "iOS", "watchOS"],
    url: "https://www.fumata.app" },
  { title: "Homelab",
    wide: true,
    image: "coolify.webp",
    desc: { de: "Hier läuft alles, was ich baue: Linux-Server mit Coolify und Docker. Ein Git-Push auf GitHub reicht, und Coolify baut und startet die neue Version. Beszel zeigt, wie es den Servern geht, Warnungen kommen per ntfy aufs Handy, und von unterwegs komme ich über Tailscale ran.",
            en: "This is where everything I build runs: Linux servers with Coolify and Docker. A git push to GitHub is enough for Coolify to build and start the new version. Beszel shows how the servers are doing, alerts reach my phone via ntfy, and Tailscale gets me in from anywhere." },
    learned: { de: "Wie man Dienste so betreibt, dass sie von allein laufen: Container, automatische Deploys, Monitoring und eine Nachricht, wenn doch mal was hängt.",
               en: "How to run services so they keep running on their own: containers, automatic deploys, monitoring and a ping when something does get stuck." },
    tags: ["Docker", "Coolify", "Linux", "Self-Hosting"],
    stack: [
      { layer: { de: "Deploy", en: "Deploy" }, items: ["Git-Push", "GitHub", "Coolify"] },
      { layer: { de: "Dienste", en: "Services" }, items: ["Discord-Bots", "Jellyfin", "Usagecast", "Hermes Agent"] },
      { layer: { de: "Plattform", en: "Platform" }, items: ["Docker", "Linux"] },
      { layer: { de: "Netz", en: "Network" }, items: ["Cloudflare DNS", "Tailscale"] },
      { layer: { de: "Überwachung", en: "Monitoring" }, items: ["Beszel", "ntfy"] },
    ] },
  { title: "Discord-Bots",
    desc: { de: "Mehrere Bots für Discord-Server aus meinem Freundeskreis: eine Serien- und Film-Watchlist mit wöchentlicher Erinnerung, ein Bot zum Aufteilen von Einkäufen, einer, der Nachrichten als Zitat festhält, und einer, der Rollen und Onboarding eines Servers verwaltet. Alle laufen selbst gehostet mit Coolify, ein Git-Push deployt sie.",
            en: "Several bots for my friends' Discord servers: a show and movie watchlist with a weekly reminder, a bot for splitting grocery bills, one that saves messages as quotes, and one that manages a server's roles and onboarding. All self-hosted with Coolify, a git push deploys them." },
    learned: { de: "Wie Discord mit Slash-Commands, Rollen und Embeds funktioniert, und Versionierung mit Changelog und Git-Tags.",
               en: "How Discord works with slash commands, roles and embeds, plus versioning with a changelog and git tags." },
    tags: ["Python", "Discord", "Self-Hosting"] },
  { title: "Vinylon",
    desc: { de: "Ein Musik-Bot für Discord in Node.js: spielt YouTube-Audio im Sprachkanal, mit Warteschlange pro Server, Loop, Shuffle und Lautstärke. Für den Ton startet er yt-dlp und ffmpeg als eigene Prozesse, statt auf Bibliotheken zu setzen, die bei jeder YouTube-Änderung brechen.",
            en: "A Discord music bot in Node.js: plays YouTube audio in voice channels, with a queue per server, loop, shuffle and volume. For the audio it spawns yt-dlp and ffmpeg as separate processes instead of relying on libraries that break with every YouTube change." },
    learned: { de: "Externe Prozesse sauber starten, ihren Ton streamen und wieder aufräumen, damit keine Zombie-Prozesse übrig bleiben.",
               en: "Starting external processes cleanly, streaming their audio and cleaning up afterwards so no zombie processes are left behind." },
    tags: ["Node.js", "Discord", "yt-dlp"] },
  { title: "Usagecast",
    wide: true,
    image: "usagecast.webp",
    desc: { de: "Ein selbst gehostetes Dashboard, das zeigt, was mein KI-Kontingent auffrisst: Kosten pro Tool, Skill und Prompt-Teil, eine Prognose für die Limits und Warnungen aufs Handy. Läuft nur mit der Python-Standardbibliothek und ganz ohne KI.",
            en: "A self-hosted dashboard that shows what eats my AI quota: cost per tool, skill and prompt part, a forecast for the limits and alerts on my phone. Runs on the Python standard library alone and without any AI." },
    learned: { de: "Wie weit man nur mit der Standardbibliothek kommt, und wie man aus Rohdaten eine Prognose macht, die man auf einen Blick versteht.",
               en: "How far the standard library alone gets you, and how to turn raw data into a forecast you understand at a glance." },
    tags: ["Python", "Self-Hosting", "Open Source"],
    url: "https://github.com/Louis-Lastella/usagecast" },
  { title: "Jellyfin Discord RPC",
    desc: { de: "Zeigt in Discord an, welche Serie oder welchen Film ich gerade auf Jellyfin schaue. Braucht nur einen normalen Jellyfin-Login, keinen Admin-Zugang, und gibt es auch als Mac-App zum Doppelklicken.",
            en: "Shows in Discord which show or movie I'm watching on Jellyfin. Needs only a normal Jellyfin login, no admin access, and also comes as a Mac app you just double-click." },
    learned: { de: "Wie man ein Python-Skript mit py2app in eine eigenständige Mac-App verpackt, die ohne Terminal läuft.",
               en: "How to package a Python script with py2app into a standalone Mac app that runs without a terminal." },
    tags: ["Python", "Discord", "macOS"] },
  { title: "Claudios MC Mod",
    desc: { de: "Eine NeoForge-Mod für Minecraft 1.21.1, die Claudios, die KI-Persona aus unserem Discord-Bot, in den Spiel-Chat bringt. Er liest mit und antwortet ab und zu per Gemini. Bot und Mod tauschen über Dateien Kontext aus, so weiß Claudios im Spiel, was im Discord los war.",
            en: "A NeoForge mod for Minecraft 1.21.1 that brings Claudios, the AI persona from our Discord bot, into the game chat. He reads along and replies now and then via Gemini. Bot and mod share context through files, so Claudios knows in-game what happened on Discord." },
    learned: { de: "Java, Gradle und das Mod-System von NeoForge, und wie man eine KI so einstellt, dass sie nicht nervt: Zufall, Abklingzeit und begrenzter Kontext.",
               en: "Java, Gradle and NeoForge's mod system, and how to tune an AI so it doesn't get annoying: randomness, a cooldown and limited context." },
    tags: ["Java", "NeoForge", "Gemini"] },
  { title: "Portfolio-Website",
    wide: true,
    desc: { de: "Diese Seite hier, von Grund auf selbst gebaut. Die Inhalte stehen typisiert in einer Datei, eine GitHub Action prüft die Typen, baut die Seite auf Deutsch und Englisch, erzeugt den Lebenslauf als PDF und veröffentlicht alles auf GitHub Pages. Einmal pro Woche baut sie neu, damit die Projektdaten aktuell bleiben.",
            en: "This site, built from scratch. The content lives typed in one file; a GitHub Action checks the types, builds the site in German and English, renders the CV as a PDF and publishes everything to GitHub Pages. It rebuilds once a week so the project dates stay current." },
    learned: { de: "Wie man eine Seite barrierearm baut, mit Tastaturbedienung, gutem Kontrast und Rücksicht auf reduzierte Bewegung, und das fast ohne JavaScript im Browser.",
               en: "How to build an accessible site with keyboard support, good contrast and respect for reduced motion, with almost no JavaScript in the browser." },
    tags: ["Astro", "TypeScript", "CSS", "GitHub Actions"],
    url: "https://github.com/Louis-Lastella/louis-lastella.dev" },
];

/** Laufband unter dem Hero, sprachneutral. */
export const marqueeItems = ["Systemintegration", "Linux", "Docker", "Coolify", "Self-Hosting", "Python", "MCP", "Playwright", "Astro", "TypeScript", "PHP", "Discord-Bots"];
export const typedWords: Record<Lang, string[]> = {
  de: [`${name}.`, "neugierig.", "am Lernen.", "dabei."],
  en: [`${name}.`, "curious.", "learning.", "building."],
};

/** Feste Texte der Seite. Die englische Fassung muss dieselben Felder haben, sonst bricht der Build ab. */
const uiDe = {
  title: `${fullName} — Azubi Fachinformatiker Systemintegration`,
  description: `Portfolio von ${fullName}, Azubi zum Fachinformatiker für Systemintegration in Hamburg. Homelab, Self-Hosting, MCP-Server, Discord-Bots und Web.`,
  skip: "Zum Inhalt springen",
  toTop: "Nach oben",
  nav: { about: "Über mich", skills: "Skills", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt" },
  langSwitch: { label: "English version", short: "EN" },
  hero: { before: "Ich bin", after: ["Azubi &", "Web-Enthusiast."],
          sub: "18 Jahre alt, Azubi in Hamburg — und gerade dabei, das Webbauen für mich zu entdecken.",
          projects: "Projekte ansehen", contact: "Kontakt aufnehmen" },
  about: { title: "Hallo, ich bin Louis.", photoAlt: `${name} als Kind`, badge: ["In", "Ausbildung"],
           text: [
             `Ich bin ${fullName}, 18, wohne in Hamburg und mache gerade meine Ausbildung zum Fachinformatiker für IT-Systemintegration beim Berufsbildungswerk Hamburg. Technik begeistert mich schon lange — Netzwerke, Hardware, Software, wie alles zusammenhängt.`,
             "Zu Hause betreibe ich ein kleines Homelab, auf dem meine Bots und Tools laufen. Seit 2025 lerne ich außerdem Web Design und Frontend-Entwicklung, diese Seite hab ich selbst gebaut.",
           ],
           stats: { years: "Jahre in der IT", projects: "Eigene Projekte", graduation: "Abschluss" } },
  now: { title: "Gerade dran", updated: "Stand" },
  skillsTitle: "Was ich lerne & kann",
  experienceTitle: "Mein Weg",
  projects: { title: "Projekte", learned: "Gelernt", updated: "Aktualisiert", tryIt: "Ausprobieren", repo: "Repo ansehen", site: "Website öffnen" },
  contact: { title: ["Meld", "dich."], text: "Ich freue mich über jede Nachricht — egal ob Frage, Austausch oder einfach Hallo.",
             email: "E-Mail schreiben", cv: "Lebenslauf (PDF)" },
};

export const ui: Record<Lang, typeof uiDe> = {
  de: uiDe,
  en: {
    title: `${fullName} — IT systems integration apprentice`,
    description: `Portfolio of ${fullName}, IT systems integration apprentice in Hamburg, Germany. Homelab, self-hosting, MCP servers, Discord bots and web.`,
    skip: "Skip to content",
    toTop: "Back to top",
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    langSwitch: { label: "Deutsche Version", short: "DE" },
    hero: { before: "I'm", after: ["Apprentice &", "web enthusiast."],
            sub: "18, an apprentice in Hamburg, and just discovering how much I enjoy building for the web.",
            projects: "See projects", contact: "Get in touch" },
    about: { title: "Hi, I'm Louis.", photoAlt: `${name} as a kid`, badge: ["In", "training"],
             text: [
               `I'm ${fullName}, 18, I live in Hamburg and I'm training as an IT specialist for systems integration (Fachinformatiker) at Berufsbildungswerk Hamburg. I've been into tech for a long time: networks, hardware, software and how it all fits together.`,
               "At home I run a small homelab that hosts my bots and tools. Since 2025 I've also been learning web design and frontend development, and I built this site myself.",
             ],
             stats: { years: "Years in IT", projects: "Own projects", graduation: "Graduating" } },
    now: { title: "Currently on", updated: "As of" },
    skillsTitle: "What I know & am learning",
    experienceTitle: "My path",
    projects: { title: "Projects", learned: "Learned", updated: "Updated", tryIt: "Try it", repo: "View repo", site: "Open website" },
    contact: { title: ["Get in", "touch."], text: "Happy to hear from you, whether it's a question, a chat or just hello.",
               email: "Send an email", cv: "CV (PDF, German)" },
  },
};
