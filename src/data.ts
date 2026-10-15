/* ============================================================
   PORTFOLIO-DATEN: alles Inhaltliche wird hier gepflegt.
   TypeScript prüft beim Build, dass jeder Eintrag vollständig ist.
   ============================================================ */

export type Skill = { title: string; desc: string; items: string[] };
export type Step = { role: string; company: string; dates: string; desc: string };
export type Project = {
  title: string;
  desc: string;
  tags: string[];
  /** Dateiname in public/assets/images/projects/, am besten ein echter Screenshot. */
  image?: string;
  /** Weglassen = Projekt ohne Link. */
  url?: string;
};

export const name = "Louis";
export const initials = "L";
export const city = "Hamburg, Deutschland";
export const email = "contact@louis-lastella.dev";
export const yearsExp = new Date().getFullYear() - 2023;
/** Pfad unter public/. */
export const photo = "/assets/images/user-pic.jpg";

export const socials = {
  github: "https://github.com/Louis-Lastella",
  discord: "https://discord.gg/H7MAcaZXnf",
};

export const skills: Skill[] = [
  { title: "Web Design",
    desc: "Ich lerne gerade, wie man Seiten baut, die nicht nur funktionieren, sondern auch gut aussehen.",
    items: ["HTML / CSS", "JavaScript"] },
  { title: "Frontend & PHP",
    desc: "Vom statischen HTML bis zu dynamischen Seiten mit PHP — ich finde es faszinierend, wie das alles zusammenspielt.",
    items: ["PHP", "Struktur & Layout"] },
  { title: "IT-Systemintegration",
    desc: "Das ist mein Ausbildungsberuf — Netzwerke, Infrastruktur und Systeme lerne ich täglich in der Praxis.",
    items: ["Netzwerke", "IT-Systeme"] },
];

export const experience: Step[] = [
  { role: "IT-Enthusiast",
    company: "Eigeninitiative",
    dates: "seit 2023",
    desc: "Intensive Beschäftigung mit IT-Themen seit dem 16. Lebensjahr — Hardware, Netzwerke, Software und Systeme." },
  { role: "Fachinformatiker IT-Systemintegration",
    company: "Ausbildung",
    dates: "Aug. 2025 – 2028",
    desc: "Praktische Ausbildung in IT-Systemintegration, Netzwerktechnik und IT-Infrastruktur." },
  { role: "Web Design & Entwicklung",
    company: "Eigeninitiative",
    dates: "2025 – heute",
    desc: "Aktive Auseinandersetzung mit modernem Web Design und Frontend-Entwicklung. Kontinuierliche Verbesserung durch eigene Projekte." },
];

// Das erste Projekt wird breit dargestellt.
export const projects: Project[] = [
  { title: "Synology Chat MCP",
    desc: "Ein MCP-Server, mit dem KI-Assistenten wie Claude Synology Chat bedienen können: Kanäle und Nachrichten lesen, Leute finden, Nachrichten und Dateien schicken. Ursprünglich für den Chat meiner Berufsschule gebaut, jetzt Open Source, in der offiziellen MCP Registry und mit jeder Synology-Chat-Instanz nutzbar.",
    tags: ["MCP", "Python", "Open Source"],
    url: "https://github.com/Louis-Lastella/synology-chat-mcp" },
  { title: "Berichtsheft MCP",
    desc: "Füllt mein digitales Berichtsheft (BLok) fast von allein: Der Server sammelt aus meinen KI-Sessions, woran ich in der Woche gearbeitet habe, und trägt es nach meiner Freigabe tageweise ein. Bestehende Einträge werden nie überschrieben.",
    tags: ["MCP", "Python", "Playwright", "Open Source"],
    url: "https://github.com/Louis-Lastella/berichtsheft-mcp" },
  { title: "Usagecast",
    desc: "Ein selbst gehostetes Dashboard, das zeigt, was mein KI-Kontingent auffrisst: Kosten pro Tool, Skill und Prompt-Teil, eine Prognose für die Limits und Warnungen aufs Handy. Läuft nur mit der Python-Standardbibliothek und ganz ohne KI.",
    tags: ["Python", "Self-Hosting", "Open Source"],
    url: "https://github.com/Louis-Lastella/usagecast" },
  { title: "Discord-Bots",
    desc: "Mehrere Bots für Discord-Server aus meinem Freundeskreis, zum Beispiel eine Serien- und Film-Watchlist mit wöchentlicher Erinnerung und ein Bot zum Aufteilen von Einkäufen. Sie laufen selbst gehostet mit Coolify, ein Git-Push deployt sie.",
    tags: ["Python", "Discord", "Self-Hosting"] },
  { title: "Portfolio-Website",
    desc: "Diese Seite hier — mein erstes eigenes Web-Projekt. Ich bin frisch dabei, Web Design und Frontend-Entwicklung praktisch zu lernen, und habe die Seite von Grund auf selbst gebaut. Noch im Aufbau, aber mit viel Herzblut.",
    tags: ["Web Design", "Astro", "TypeScript", "CSS"],
    url: "https://github.com/Louis-Lastella/louis-lastella.dev" },
];

export const marqueeItems = ["IT-Systemintegration", "Netzwerke", "Self-Hosting", "Coolify", "Python", "PHP", "HTML & CSS", "JavaScript", "MCP", "Playwright", "Discord-Bots"];
export const typedWords = [`${name}.`, "neugierig.", "am Lernen.", "dabei."];
