<?php
/* ============================================================
   PORTFOLIO DATA — edit everything in this block
   ============================================================ */

$name           = "Louis";
$initials       = "L";
$tagline        = "";
$city           = "Hamburg, Deutschland";
$email          = "contact@louis-lastella.dev";
$years_exp      = date('Y') - 2023;
$photo          = "assets/images/user-pic.jpg";

$socials = [
 
  "github"   => "https://github.com/Louis-Lastella", 
  "Discord"  => "https://discord.gg/H7MAcaZXnf",  
];

$skills = [
  ["icon" => "✦", "title" => "Web Design",           "desc" => "Ich lerne gerade, wie man Seiten baut, die nicht nur funktionieren, sondern auch gut aussehen.",    "bars" => [["label"=>"HTML / CSS","val"=>78],["label"=>"JavaScript","val"=>60]]],
  ["icon" => "◈", "title" => "Frontend & PHP",       "desc" => "Vom statischen HTML bis zu dynamischen Seiten mit PHP — ich finde es faszinierend, wie das alles zusammenspielt.", "bars" => [["label"=>"PHP","val"=>65],["label"=>"Struktur & Layout","val"=>75]]],
  ["icon" => "◎", "title" => "IT-Systemintegration", "desc" => "Das ist mein Ausbildungsberuf — Netzwerke, Infrastruktur und Systeme lerne ich täglich in der Praxis.", "bars" => [["label"=>"Netzwerke","val"=>70],["label"=>"IT-Systeme","val"=>68]]],
];

$experience = [
  ["role" => "IT-Enthusiast",
   "company" => "Eigeninitiative",
   "dates" => "seit 2023",
   "desc" => "Intensive Beschäftigung mit IT-Themen seit dem 16. Lebensjahr — Hardware, Netzwerke, Software und Systeme."],
  ["role" => "Fachinformatiker IT-Systemintegration",
   "company" => "Ausbildung",
   "dates" => "Aug. 2025 – 2028",
   "desc" => "Praktische Ausbildung in IT-Systemintegration, Netzwerktechnik und IT-Infrastruktur."],
  ["role" => "Web Design & Entwicklung",
   "company" => "Eigeninitiative",
   "dates" => "2025 – heute",
   "desc" => "Aktive Auseinandersetzung mit modernem Web Design und Frontend-Entwicklung. Kontinuierliche Verbesserung durch eigene Projekte."],
];

$projects = [
  ["num"=>"01",
   "title"=>"Portfolio-Website",
   "desc"=>"Diese Seite hier — mein erstes eigenes Web-Projekt. Ich bin frisch dabei, Web Design und Frontend-Entwicklung praktisch zu lernen, und habe die Seite von Grund auf selbst gebaut. Noch im Aufbau, aber mit viel Herzblut.",
   "tags"=>["Web Design","PHP","CSS","JS"],
   "image"=>"portfolio-website.jpg",
   "url"=>"#"],
  ["num"=>"02",
   "title"=>"Brokkoli Tracker",
   "desc"=>"Eine kostenlose Web-App zum bewussten Tracken des eigenen Cannabis-Konsums — mit Session-Logging, Streak-Tracking, Statistiken und Reduktionsprogrammen. Privacy-first: keine Werbung. Als Co-CEO mitverantwortlich für Produkt, Konzept und Wachstum. Native Android- & iOS-App in Planung.",
   "tags"=>["Mobile App","Android","iOS","PWA","Co-CEO"],
   "image"=>"brokkoli-tracker.jpg",
   "url"=>"https://brokkoli-tracker.com"],
  ["num"=>"03",
   "title"=>"Synology Chat MCP",
   "desc"=>"Ein MCP-Server, mit dem KI-Assistenten wie Claude Synology Chat bedienen können: Kanäle und Nachrichten lesen, Leute finden, Nachrichten und Dateien schicken. Ursprünglich für den Chat meiner Berufsschule gebaut, jetzt Open Source und mit jeder Synology-Chat-Instanz nutzbar.",
   "tags"=>["MCP","Python","Open Source"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/synology-chat-mcp"],
  ["num"=>"04",
   "title"=>"Berichtsheft MCP",
   "desc"=>"Füllt mein digitales Berichtsheft (BLok) fast von allein: Der Server sammelt aus meinen KI-Sessions, woran ich in der Woche gearbeitet habe, und trägt es nach meiner Freigabe tageweise ein. Bestehende Einträge werden nie überschrieben.",
   "tags"=>["MCP","Python","Playwright","Open Source"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/berichtsheft-mcp"],
  ["num"=>"05",
   "title"=>"Usagecast",
   "desc"=>"Ein selbst gehostetes Dashboard, das zeigt, was mein KI-Kontingent auffrisst: Kosten pro Tool, Skill und Prompt-Teil, eine Prognose für die Limits und Warnungen aufs Handy. Läuft nur mit der Python-Standardbibliothek und ganz ohne KI.",
   "tags"=>["Python","Self-Hosting","Open Source"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/usagecast"],
  ["num"=>"06",
   "title"=>"Discord-Bots",
   "desc"=>"Mehrere Bots für Discord-Server aus meinem Freundeskreis, zum Beispiel eine Serien- und Film-Watchlist mit wöchentlicher Erinnerung und ein Bot zum Aufteilen von Einkäufen. Sie laufen selbst gehostet mit Coolify, ein Git-Push deployt sie.",
   "tags"=>["Python","Discord","Self-Hosting"],
   "image"=>"",
   "url"=>"#"],
];
// Weitere Projekte hier eintragen sobald vorhanden:


$marquee_items = ["UI/UX Design","Frontend","React","Branding","Motion","TypeScript","Tailwind","Node.js","IT-Systemintegration","Illustrator"];
$typed_words   = [$name . ".", "neugierig.", "am Lernen.", "dabei."];
?>
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= htmlspecialchars($name) ?> — Portfolio</title>
<meta name="description" content="Portfolio von <?= htmlspecialchars($name) ?>, Fachinformatiker für IT-Systemintegration in Ausbildung. Web Design, PHP-Entwicklung und IT-Projekte.">
<meta property="og:title" content="<?= htmlspecialchars($name) ?> — Portfolio">
<meta property="og:description" content="Fachinformatiker für IT-Systemintegration in Ausbildung. Web Design, PHP-Entwicklung und IT-Projekte.">
<meta property="og:type" content="website">
<meta property="og:image" content="https://louis-lastella.dev/<?= htmlspecialchars($photo) ?>">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a0a0a'/%3E%3Crect x='32' y='18' width='14' height='50' fill='%23ffffff'/%3E%3Crect x='32' y='54' width='28' height='14' fill='%23ffffff'/%3E%3Crect x='62' y='54' width='14' height='14' fill='%23e8284f'/%3E%3C/svg%3E">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
</head>
<body>

<div class="global-glow" id="globalGlow"></div>
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- NAV -->
<nav id="navbar">
  <a href="#" class="nav-logo"><?= htmlspecialchars($name[0]) ?><span>.</span></a>
  <ul class="nav-links">
    <li><a href="#about">Über mich</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Erfahrung</a></li>
    <li><a href="#projects">Projekte</a></li>
    <li><a href="#contact">Kontakt</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <p class="hero-tag"><?= htmlspecialchars($tagline) ?></p>
  <h1 class="hero-headline">
    <span class="line">Ich bin</span>
    <span class="line highlight typed-text" id="typedEl"></span>
    <span class="line">Azubi &</span>
    <span class="line">Web-Enthusiast.</span>
  </h1>
  <p class="hero-sub">18 Jahre alt, Azubi in Hamburg — und gerade dabei, das Webbauen für mich zu entdecken.</p>
  <div class="hero-actions">
    <a href="#projects" class="btn-primary">Projekte ansehen</a>
    <a href="#contact" class="btn-ghost">
      Kontakt aufnehmen
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    </a>
  </div>
  <div class="hero-scroll">
    <div class="scroll-line"></div>
    Nach unten scrollen
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-wrap">
  <div class="marquee-track" id="marqueeTrack"></div>
</div>

<!-- ABOUT -->
<section id="about">
  <div class="about">
    <div class="about-visual reveal">
      <div class="about-img-bg">
        <?php if ($photo && file_exists(__DIR__ . '/' . $photo)): ?>
          <img src="<?= htmlspecialchars($photo) ?>" alt="<?= htmlspecialchars($name) ?>"
               style="width:100%;height:100%;object-fit:cover;object-position:top;position:relative;z-index:0;">
          <div class="about-initials" style="display:none;"><?= htmlspecialchars($initials) ?></div>
        <?php else: ?>
          <div class="about-initials"><?= htmlspecialchars($initials) ?></div>
        <?php endif; ?>
        <div class="about-corner"><?= date('Y') ?></div>
      </div>
      <div class="about-badge">
        <div class="about-badge-text">In<br>Ausbildung</div>
      </div>
    </div>
    <div class="about-text">
      <p class="section-label reveal">Über mich</p>
      <h2 class="reveal reveal-delay-1">Hallo, ich bin Louis.</h2>
      <p class="reveal reveal-delay-2">Ich bin 18, wohne in Hamburg und mache gerade meine Ausbildung zum Fachinformatiker für IT-Systemintegration. Technik begeistert mich schon lange — Netzwerke, Hardware, Software, wie alles zusammenhängt.</p>
      <p class="reveal reveal-delay-3">Seit 2025 lerne ich auch Web Design und Frontend-Entwicklung. Diese Seite hier ist mein erstes eigenes Projekt — noch lange nicht fertig, aber ich arbeite dran.</p>
      <div class="about-stats reveal">
        <div class="stat">
          <div class="stat-num"><?= $years_exp ?>+</div>
          <div class="stat-label">Jahre dabei</div>
        </div>
        <div class="stat">
          <div class="stat-num"><?= count($projects) ?: '—' ?></div>
          <div class="stat-label">Projekte</div>
        </div>
        <div class="stat">
          <div class="stat-num">100%</div>
          <div class="stat-label">Hingabe</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills" style="padding-top:0;">
  <p class="section-label reveal">Was ich kann</p>
  <h2 class="reveal" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:400;letter-spacing:0.02em;line-height:1;">Was ich lerne & kann</h2>
  <div class="skills-grid">
    <?php foreach ($skills as $i => $skill): ?>
    <div class="skill-card reveal<?= $i > 0 ? " reveal-delay-$i" : "" ?>" data-num="<?= str_pad($i+1,2,'0',STR_PAD_LEFT) ?>">
      <div class="skill-icon"><?= $skill['icon'] ?></div>
      <h3><?= htmlspecialchars($skill['title']) ?></h3>
      <p><?= htmlspecialchars($skill['desc']) ?></p>
      <div class="skill-bar-wrap">
        <?php foreach ($skill['bars'] as $bar): ?>
        <div class="skill-bar-label"><span><?= htmlspecialchars($bar['label']) ?></span><span><?= $bar['val'] ?>%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" data-width="<?= $bar['val'] ?>"></div></div>
        <?php endforeach; ?>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- EXPERIENCE TIMELINE -->
<section id="experience">
  <p class="section-label reveal">Werdegang</p>
  <h2 class="reveal" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:400;letter-spacing:0.02em;line-height:1;">Mein Weg</h2>
  <div class="timeline">
    <div class="timeline-line"></div>
    <?php foreach ($experience as $i => $e): ?>
    <div class="timeline-entry <?= $i % 2 === 0 ? 'left' : 'right' ?> reveal reveal-delay-<?= min($i + 1, 3) ?>">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-dates"><?= htmlspecialchars($e['dates']) ?></span>
        <h3 class="timeline-role"><?= htmlspecialchars($e['role']) ?></h3>
        <span class="timeline-company"><?= htmlspecialchars($e['company']) ?></span>
        <p class="timeline-desc"><?= htmlspecialchars($e['desc']) ?></p>
      </div>
    </div>
    <?php endforeach; ?>
    <div class="timeline-entry right upcoming-entry reveal reveal-delay-3">
      <div class="timeline-dot upcoming-dot"></div>
      <div class="timeline-content">
        <span class="timeline-dates">demnächst</span>
        <h3 class="timeline-role">Mehr folgt bald</h3>
        <p class="timeline-desc">Neue Projekte, Erkenntnisse und Fortschritte werden hier laufend ergänzt. Ausbildung und Eigeninitiative laufen weiter.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="projects-header">
    <div>
      <p class="section-label reveal">Ausgewählte Arbeiten</p>
      <h2 class="reveal">Projekte</h2>
    </div>
  </div>
  <div class="projects-grid">
    <?php foreach ($projects as $p): ?>
    <div class="project-card"
         data-title="<?= htmlspecialchars($p['title']) ?>"
         data-desc="<?= htmlspecialchars($p['desc']) ?>"
         data-image="<?= htmlspecialchars($p['image'] ? 'assets/images/projects/' . $p['image'] : '') ?>"
         data-url="<?= htmlspecialchars($p['url']) ?>"
         data-tags="<?= htmlspecialchars(implode(',', $p['tags'])) ?>">
      <div class="project-card-image">
        <?php if ($p['image'] && file_exists(__DIR__ . '/assets/images/projects/' . $p['image'])): ?>
          <img src="assets/images/projects/<?= htmlspecialchars($p['image']) ?>"
               alt="<?= htmlspecialchars($p['title']) ?>">
        <?php else: ?>
          <div class="project-placeholder"><?= htmlspecialchars($p['num']) ?></div>
        <?php endif; ?>
        <div class="project-overlay">
          <p class="project-overlay-desc"><?= htmlspecialchars($p['desc']) ?></p>
          <span class="project-overlay-arrow">→</span>
        </div>
      </div>
      <div class="project-card-footer">
        <h3><?= htmlspecialchars($p['title']) ?></h3>
        <div class="project-tags">
          <?php foreach ($p['tags'] as $tag): ?>
          <span class="tag"><?= htmlspecialchars($tag) ?></span>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
    <!-- Upcoming placeholder — immer als letztes -->
    <div class="project-card project-upcoming"
         data-title="Weitere Projekte folgen"
         data-desc="Ich lerne aktiv und arbeite kontinuierlich an neuen Dingen. Hier werden nach und nach weitere Projekte erscheinen — schau gerne wieder vorbei."
         data-image="" data-url="" data-tags="Demnächst">
      <div class="project-card-image">
        <div class="project-placeholder">···</div>
      </div>
      <div class="project-card-footer">
        <h3>Mehr folgt</h3>
        <div class="project-tags">
          <span class="tag">Demnächst</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact">
  <div class="contact-bg"></div>
  <p class="section-label reveal" style="justify-content:center;">Kontakt</p>
  <h2 class="reveal">Meld<br>dich.</h2>
  <p class="reveal reveal-delay-1">Ich freue mich über jede Nachricht — egal ob Frage, Austausch oder einfach Hallo.</p>
  <div class="contact-links reveal reveal-delay-2">
    <a href="mailto:<?= htmlspecialchars($email) ?>" class="contact-link" target="_blank" rel="noopener noreferrer">Email schreiben</a>
    <a href="<?= htmlspecialchars($socials['github']) ?>"   class="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="<?= htmlspecialchars($socials['Discord']) ?>"  class="contact-link" target="_blank" rel="noopener noreferrer">Discord</a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <span>© <?= date('Y') ?> <?= htmlspecialchars($name) ?>. Alle Rechte vorbehalten.</span>
  <span><?= htmlspecialchars($city) ?></span>
</footer>

<!-- PROJECT MODAL -->
<div id="projectModal" class="modal">
  <div class="modal-backdrop"></div>
  <div class="modal-panel">
    <button class="modal-close" id="modalClose">×</button>
    <img class="modal-img" src="" alt="" style="display:none;">
    <div class="modal-img-placeholder" style="display:none;"></div>
    <div class="modal-body">
      <h3 class="modal-title"></h3>
      <p class="modal-desc"></p>
      <div class="modal-tags"></div>
      <a class="modal-link" href="#" target="_blank" rel="noopener noreferrer">Projekt öffnen →</a>
    </div>
  </div>
</div>

<script>
window.typedWords   = <?= json_encode($typed_words,   JSON_UNESCAPED_UNICODE) ?>;
window.marqueeItems = <?= json_encode($marquee_items, JSON_UNESCAPED_UNICODE) ?>;
</script>
<script src="js/main.js"></script>
</body>
</html>
