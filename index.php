<?php
/* ============================================================
   PORTFOLIO DATA — edit everything in this block
   ============================================================ */

$name      = "Louis";
$initials  = "L";
$city      = "Hamburg, Deutschland";
$email     = "contact@louis-lastella.dev";
$years_exp = date('Y') - 2023;
$photo     = "assets/images/user-pic.jpg";

$socials = [
  "github"  => "https://github.com/Louis-Lastella",
  "Discord" => "https://discord.gg/H7MAcaZXnf",
];

$skills = [
  ["title" => "Web Design",
   "desc"  => "Ich lerne gerade, wie man Seiten baut, die nicht nur funktionieren, sondern auch gut aussehen.",
   "items" => ["HTML / CSS", "JavaScript"]],
  ["title" => "Frontend & PHP",
   "desc"  => "Vom statischen HTML bis zu dynamischen Seiten mit PHP — ich finde es faszinierend, wie das alles zusammenspielt.",
   "items" => ["PHP", "Struktur & Layout"]],
  ["title" => "IT-Systemintegration",
   "desc"  => "Das ist mein Ausbildungsberuf — Netzwerke, Infrastruktur und Systeme lerne ich täglich in der Praxis.",
   "items" => ["Netzwerke", "IT-Systeme"]],
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

// Das erste Projekt wird breit dargestellt.
// "image" = Dateiname in assets/images/projects/ (optional, am besten ein echter Screenshot), "url" leer = kein Link.
$projects = [
  ["title"=>"Synology Chat MCP",
   "desc"=>"Ein MCP-Server, mit dem KI-Assistenten wie Claude Synology Chat bedienen können: Kanäle und Nachrichten lesen, Leute finden, Nachrichten und Dateien schicken. Ursprünglich für den Chat meiner Berufsschule gebaut, jetzt Open Source, in der offiziellen MCP Registry und mit jeder Synology-Chat-Instanz nutzbar.",
   "tags"=>["MCP","Python","Open Source"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/synology-chat-mcp"],
  ["title"=>"Berichtsheft MCP",
   "desc"=>"Füllt mein digitales Berichtsheft (BLok) fast von allein: Der Server sammelt aus meinen KI-Sessions, woran ich in der Woche gearbeitet habe, und trägt es nach meiner Freigabe tageweise ein. Bestehende Einträge werden nie überschrieben.",
   "tags"=>["MCP","Python","Playwright","Open Source"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/berichtsheft-mcp"],
  ["title"=>"Usagecast",
   "desc"=>"Ein selbst gehostetes Dashboard, das zeigt, was mein KI-Kontingent auffrisst: Kosten pro Tool, Skill und Prompt-Teil, eine Prognose für die Limits und Warnungen aufs Handy. Läuft nur mit der Python-Standardbibliothek und ganz ohne KI.",
   "tags"=>["Python","Self-Hosting","Open Source"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/usagecast"],
  ["title"=>"Discord-Bots",
   "desc"=>"Mehrere Bots für Discord-Server aus meinem Freundeskreis, zum Beispiel eine Serien- und Film-Watchlist mit wöchentlicher Erinnerung und ein Bot zum Aufteilen von Einkäufen. Sie laufen selbst gehostet mit Coolify, ein Git-Push deployt sie.",
   "tags"=>["Python","Discord","Self-Hosting"],
   "image"=>"",
   "url"=>""],
  ["title"=>"Portfolio-Website",
   "desc"=>"Diese Seite hier — mein erstes eigenes Web-Projekt. Ich bin frisch dabei, Web Design und Frontend-Entwicklung praktisch zu lernen, und habe die Seite von Grund auf selbst gebaut. Noch im Aufbau, aber mit viel Herzblut.",
   "tags"=>["Web Design","PHP","CSS","JS"],
   "image"=>"",
   "url"=>"https://github.com/Louis-Lastella/louis-lastella.dev"],
];

$marquee_items = ["IT-Systemintegration","Netzwerke","Self-Hosting","Coolify","Python","PHP","HTML & CSS","JavaScript","MCP","Playwright","Discord-Bots"];
$typed_words   = [$name . ".", "neugierig.", "am Lernen.", "dabei."];

function link_label($url) {
  return str_contains($url, 'github.com') ? 'Repo ansehen' : 'Website öffnen';
}
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
<meta name="theme-color" content="#0a0a0a">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="preload" href="assets/fonts/bebas-neue-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/styles.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>

<a class="skip-link" href="#main">Zum Inhalt springen</a>

<nav id="navbar">
  <a href="#" class="nav-logo" aria-label="Nach oben"><?= htmlspecialchars($name[0]) ?><span>.</span></a>
  <ul class="nav-links">
    <li class="nav-extra"><a href="#about">Über mich</a></li>
    <li class="nav-extra"><a href="#skills">Skills</a></li>
    <li class="nav-extra"><a href="#experience">Erfahrung</a></li>
    <li><a href="#projects">Projekte</a></li>
    <li><a href="#contact">Kontakt</a></li>
  </ul>
</nav>

<main id="main">

<section class="hero" id="home">
  <h1 class="hero-headline">
    <span class="line">Ich bin</span>
    <span class="line typed" id="typedEl" aria-hidden="true"><?= htmlspecialchars($typed_words[0]) ?></span>
    <span class="sr-only"><?= htmlspecialchars($typed_words[0]) ?></span>
    <span class="line">Azubi &amp;</span>
    <span class="line">Web-Enthusiast.</span>
  </h1>
  <p class="hero-sub">18 Jahre alt, Azubi in Hamburg — und gerade dabei, das Webbauen für mich zu entdecken.</p>
  <div class="hero-actions">
    <a href="#projects" class="btn-primary">Projekte ansehen</a>
    <a href="#contact" class="btn-ghost">
      Kontakt aufnehmen
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <?php for ($copy = 0; $copy < 2; $copy++): foreach ($marquee_items as $item): ?>
    <span class="marquee-item"><?= htmlspecialchars($item) ?></span>
    <?php endforeach; endfor; ?>
  </div>
</div>

<section id="about">
  <div class="about">
    <figure class="about-visual">
      <div class="about-frame">
        <?php if ($photo && file_exists(__DIR__ . '/' . $photo)): ?>
          <img src="<?= htmlspecialchars($photo) ?>" alt="<?= htmlspecialchars($name) ?> als Kind" width="640" height="640">
        <?php else: ?>
          <div class="about-initials" aria-hidden="true"><?= htmlspecialchars($initials) ?></div>
        <?php endif; ?>
      </div>
      <div class="about-badge">In<br>Ausbildung</div>
    </figure>
    <div class="about-text">
      <h2 class="section-title">Hallo, ich bin Louis.</h2>
      <p>Ich bin 18, wohne in Hamburg und mache gerade meine Ausbildung zum Fachinformatiker für IT-Systemintegration. Technik begeistert mich schon lange — Netzwerke, Hardware, Software, wie alles zusammenhängt.</p>
      <p>Seit 2025 lerne ich auch Web Design und Frontend-Entwicklung. Diese Seite hier ist mein erstes eigenes Projekt — noch lange nicht fertig, aber ich arbeite dran.</p>
      <dl class="about-stats">
        <div class="stat"><dt>Jahre in der IT</dt><dd><?= $years_exp ?>+</dd></div>
        <div class="stat"><dt>Eigene Projekte</dt><dd><?= count($projects) ?></dd></div>
        <div class="stat"><dt>Abschluss</dt><dd>2028</dd></div>
      </dl>
    </div>
  </div>
</section>

<section id="skills">
  <h2 class="section-title">Was ich lerne &amp; kann</h2>
  <div class="skills-grid">
    <?php foreach ($skills as $skill): ?>
    <div class="skill">
      <h3><?= htmlspecialchars($skill['title']) ?></h3>
      <p><?= htmlspecialchars($skill['desc']) ?></p>
      <ul class="skill-list">
        <?php foreach ($skill['items'] as $item): ?>
        <li><?= htmlspecialchars($item) ?></li>
        <?php endforeach; ?>
      </ul>
    </div>
    <?php endforeach; ?>
  </div>
</section>

<section id="experience">
  <h2 class="section-title">Mein Weg</h2>
  <ol class="timeline">
    <?php foreach ($experience as $i => $e): ?>
    <li class="timeline-entry <?= $i % 2 === 0 ? 'left' : 'right' ?>">
      <span class="timeline-dates"><?= htmlspecialchars($e['dates']) ?></span>
      <h3 class="timeline-role"><?= htmlspecialchars($e['role']) ?></h3>
      <span class="timeline-company"><?= htmlspecialchars($e['company']) ?></span>
      <p class="timeline-desc"><?= htmlspecialchars($e['desc']) ?></p>
    </li>
    <?php endforeach; ?>
  </ol>
</section>

<section id="projects">
  <h2 class="section-title">Projekte</h2>
  <div class="projects-grid">
    <?php foreach ($projects as $p): $img = $p['image'] ? 'assets/images/projects/' . $p['image'] : ''; ?>
    <article class="project<?= $p['url'] ? ' has-link' : '' ?>">
      <?php if ($img && file_exists(__DIR__ . '/' . $img)): ?>
        <img class="project-image" src="<?= htmlspecialchars($img) ?>" alt="" loading="lazy">
      <?php endif; ?>
      <h3>
        <?php if ($p['url']): ?>
          <a href="<?= htmlspecialchars($p['url']) ?>" target="_blank" rel="noopener noreferrer"><?= htmlspecialchars($p['title']) ?></a>
        <?php else: ?>
          <?= htmlspecialchars($p['title']) ?>
        <?php endif; ?>
      </h3>
      <div class="project-body">
        <p class="project-desc"><?= htmlspecialchars($p['desc']) ?></p>
        <div class="project-meta">
          <ul class="project-tags">
            <?php foreach ($p['tags'] as $tag): ?>
            <li class="tag"><?= htmlspecialchars($tag) ?></li>
            <?php endforeach; ?>
          </ul>
          <?php if ($p['url']): ?>
            <span class="project-link" aria-hidden="true"><?= link_label($p['url']) ?> <span class="arrow">→</span></span>
          <?php endif; ?>
        </div>
      </div>
    </article>
    <?php endforeach; ?>
  </div>
</section>

<section class="contact" id="contact">
  <h2>Meld<br>dich.</h2>
  <p>Ich freue mich über jede Nachricht — egal ob Frage, Austausch oder einfach Hallo.</p>
  <div class="contact-links">
    <a href="mailto:<?= htmlspecialchars($email) ?>" class="contact-link">E-Mail schreiben</a>
    <a href="<?= htmlspecialchars($socials['github']) ?>" class="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="<?= htmlspecialchars($socials['Discord']) ?>" class="contact-link" target="_blank" rel="noopener noreferrer">Discord</a>
  </div>
</section>

</main>

<footer>
  <span>© <?= date('Y') ?> <?= htmlspecialchars($name) ?></span>
  <a href="mailto:<?= htmlspecialchars($email) ?>"><?= htmlspecialchars($email) ?></a>
  <span><?= htmlspecialchars($city) ?></span>
</footer>

<script>window.typedWords = <?= json_encode($typed_words, JSON_UNESCAPED_UNICODE) ?>;</script>
<script src="js/main.js"></script>
</body>
</html>
