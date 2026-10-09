<template>
  <section
    class="about"
    aria-labelledby="about-heading"
  >
    <!-- Decorative background elements -->
    <div
      class="about-decoration"
      aria-hidden="true"
    >
      <span class="ridge ridge-one"></span>
      <span class="ridge ridge-two"></span>
    </div>

    <div class="about-container">
      <!-- Section label -->
      <div class="section-label">
        <span class="section-number">01</span>

        <span class="section-line" aria-hidden="true"></span>

        <p>ABOUT</p>
      </div>

      <div class="about-grid">
        <!-- ================================================
             LEFT COLUMN
        ================================================= -->
        <div class="about-intro">
          <p class="intro-eyebrow">
            THOUGHTFUL DEVELOPMENT
          </p>

          <h2 id="about-heading">
            Building better systems,
            <span>
              one improvement at a time.
            </span>
          </h2>

 <!-- Profile -->
<div class="profile">
  <div class="portrait-wrapper">
    <img
      src="/miriam.jpg"
      alt="Miriam Woolly"
      class="about-image"
    />
  </div>

  <div class="profile-info">
    <strong>Miriam Woolly</strong>

    <span class="profile-title">
      Web Developer · Software Engineer
    </span>

    <p class="profile-summary">
      Creating accessible, maintainable, and user-friendly
      web experiences.
    </p>

    <a
      href="/Miriam-Woolly-Resume.pdf"
      class="resume-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      View résumé
      <span aria-hidden="true">→</span>
    </a>
  </div>
</div>
</div>

        <!-- ================================================
             RIGHT COLUMN
        ================================================= -->
        <div class="about-content">
          <p class="lead">
            I'm a web developer and software engineer with
            experience building, maintaining, and modernizing
            enterprise and public-sector web applications.
          </p>

          <div class="body-copy">
            <p>
              My work spans front-end development, .NET
              applications, content management systems, cloud
              integrations, accessibility, DevOps, and the
              technical infrastructure that keeps web platforms
              maintainable.
            </p>

            <p>
              I enjoy taking complex or legacy systems and
              making them easier to develop, deploy, document,
              and maintain—while creating better experiences
              for both users and development teams.
            </p>
          </div>

          <!-- ==============================================
               SKILLS
          =============================================== -->
          <div class="skills-area">
            <p class="skills-heading">
              TECHNOLOGIES &amp; FOCUS
            </p>

            <ul
              class="skills"
              aria-label="Technologies and areas of focus"
            >
              <li>C# / .NET</li>
              <li>Sitefinity</li>
              <li>Vue.js</li>
              <li>JavaScript</li>
              <li>Azure</li>
              <li>Azure DevOps</li>
              <li>SQL</li>
              <li>WCAG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
/* =========================================================
   ABOUT SECTION
========================================================= */

.about {
  position: relative;

  padding:
    8rem
    2rem
    8.5rem;

  overflow: hidden;

  background:
    linear-gradient(
      180deg,
      var(--background) 0%,
      var(--surface) 100%
    );
}

.about-container {
  position: relative;

  z-index: 2;

  width: 100%;
  max-width: var(--max-width);

  margin: 0 auto;
}

/* =========================================================
   DECORATIVE MOUNTAIN / RIDGE DETAIL
========================================================= */

.about-decoration {
  position: absolute;

  right: 0;
  bottom: 0;
  left: 0;

  height: 190px;

  overflow: hidden;

  pointer-events: none;

  opacity: 0.6;
}

.ridge {
  position: absolute;

  right: -5%;
  bottom: -120px;

  width: 70%;
  height: 210px;

  border-top: 1px solid var(--border);

  transform-origin: center;
}

.ridge-one {
  transform:
    skewY(-7deg)
    rotate(-2deg);

  background:
    linear-gradient(
      180deg,
      transparent,
      var(--accent-soft)
    );
}

.ridge-two {
  right: 30%;
  bottom: -150px;

  width: 55%;

  transform:
    skewY(6deg)
    rotate(1deg);

  opacity: 0.55;

  background:
    linear-gradient(
      180deg,
      transparent,
      var(--secondary-soft)
    );
}

/* =========================================================
   SECTION LABEL
========================================================= */

.section-label {
  display: flex;
  align-items: center;

  gap: 0.8rem;

  margin-bottom: 4rem;

  color: var(--accent);

  font-size: 0.78rem;
  font-weight: 800;

  line-height: 1.4;

  letter-spacing: 0.16em;
}

.section-label p {
  margin: 0;
}

.section-number {
  font-family:
    "SFMono-Regular",
    Consolas,
    "Liberation Mono",
    monospace;

  font-weight: 800;
}

.section-line {
  width: 36px;
  height: 2px;

  flex-shrink: 0;

  background: var(--accent);
}

/* =========================================================
   ABOUT GRID
========================================================= */

.about-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(0, 1.1fr);

  align-items: start;

  gap: clamp(
    4rem,
    8vw,
    7rem
  );
}

/* =========================================================
   LEFT COLUMN
========================================================= */

.about-intro {
  position: relative;
}

.intro-eyebrow {
  margin:
    0
    0
    1.1rem;

  color: var(--text-secondary);

  font-size: 0.72rem;
  font-weight: 800;

  line-height: 1.5;

  letter-spacing: 0.14em;
}

/* =========================================================
   HEADING
========================================================= */

.about-intro h2 {
  max-width: 540px;

  margin: 0;

  color: var(--text-primary);

  font-size:
    clamp(
      2.5rem,
      4.2vw,
      4.25rem
    );

  font-weight: 700;

  line-height: 1.06;

  letter-spacing: -0.045em;
}

.about-intro h2 span {
  display: block;

  margin-top: 0.15em;

  color: var(--accent);
}

/* =========================================================
   PROFILE
========================================================= */

.profile {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  align-items: center;

  gap: 2rem;

  margin-top: 3rem;
  padding-top: 2.25rem;

  border-top: 1px solid var(--border);
}

/* =========================================================
   PORTRAIT
========================================================= */

.portrait-wrapper {
  position: relative;

  width: 220px;
  height: 220px;

  padding: 5px;

  background:
    linear-gradient(
      135deg,
      var(--accent),
      var(--secondary-accent)
    );

  border-radius: 50%;
}

.about-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  background: var(--surface);

  border:
    4px solid
    var(--background);

  border-radius: 50%;
}

/* =========================================================
   PROFILE INFORMATION
========================================================= */
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.65rem;

  min-width: 0;
}

.profile-info strong {
  color: var(--text-primary);

  font-size: 1.5rem;
  font-weight: 750;

  line-height: 1.2;
}

.profile-title {
  max-width: 260px;

  color: var(--text-secondary);

  font-size: 1rem;
  font-weight: 550;

  line-height: 1.5;
}

.profile-summary {
  max-width: 300px;

  margin: 0.25rem 0 0;

  color: var(--text-secondary);

  font-size: 0.9rem;
  line-height: 1.6;
}

.resume-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  min-width: 190px;

  margin-top: 0.4rem;
  padding: 0.75rem 1rem;

  color: var(--accent);
  text-decoration: none;

  border: 1px solid var(--accent);
  border-radius: 7px;

  font-size: 0.9rem;
  font-weight: 700;

  transition:
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.resume-link:hover {
  color: var(--background);
  background: var(--accent);

  transform: translateY(-2px);
}

.resume-link:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}

/* =========================================================
   RIGHT COLUMN
========================================================= */

.about-content {
  padding-top: 0.35rem;
}

/* =========================================================
   LEAD
========================================================= */

.about-content .lead {
  position: relative;

  margin:
    0
    0
    2.2rem;

  padding-left: 1.5rem;

  color: var(--text-primary);

  font-size:
    clamp(
      1.2rem,
      1.8vw,
      1.4rem
    );

  font-weight: 600;

  line-height: 1.7;

  border-left:
    4px solid
    var(--accent);
}

/* =========================================================
   BODY COPY
========================================================= */

.body-copy {
  max-width: 650px;
}

.body-copy p {
  margin:
    0
    0
    1.5rem;

  color: var(--text-secondary);

  font-size: 1rem;

  line-height: 1.85;
}

/* =========================================================
   SKILLS AREA
========================================================= */

.skills-area {
  margin-top: 2.75rem;

  padding-top: 2rem;

  border-top:
    1px solid
    var(--border);
}

.skills-heading {
  margin:
    0
    0
    1rem;

  color: var(--text-primary);

  font-size: 0.72rem;
  font-weight: 800;

  line-height: 1.5;

  letter-spacing: 0.14em;
}

/* =========================================================
   SKILLS
========================================================= */

.skills {
  display: flex;
  flex-wrap: wrap;

  gap: 0.65rem;

  margin: 0;
  padding: 0;

  list-style: none;
}

.skills li {
  display: inline-flex;
  align-items: center;

  min-height: 38px;

  padding:
    0.5rem
    0.85rem;

  color: var(--text-primary);

  background: var(--background);

  border:
    1px solid
    var(--border);

  border-radius: 6px;

  font-size: 0.8rem;
  font-weight: 700;

  line-height: 1.3;
}

/*
 * Alternating accent treatment adds personality without
 * using color as the only way information is communicated.
 */
.skills li:nth-child(3n + 1) {
  border-left:
    4px solid
    var(--accent);
}

.skills li:nth-child(3n + 2) {
  border-left:
    4px solid
    var(--secondary-accent);
}

.skills li:nth-child(3n + 3) {
  border-left:
    4px solid
    var(--cyan);
}

/* =========================================================
   DARK MODE
========================================================= */

html.dark .about {
  background:
    linear-gradient(
      180deg,
      var(--background) 0%,
      var(--surface) 100%
    );
}

html.dark .portrait-wrapper {
  background:
    linear-gradient(
      135deg,
      var(--accent),
      var(--secondary-accent)
    );
}

html.dark .about-image {
  border-color:
    var(--background);
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {
  .about {
    padding:
      6rem
      2rem;
  }

  .section-label {
    margin-bottom: 3rem;
  }

  .about-grid {
    grid-template-columns: 1fr;

    gap: 3.5rem;
  }

  .about-intro h2 {
    max-width: 650px;
  }

.profile {
  grid-template-columns: 180px minmax(0, 1fr);
  max-width: 600px;
}

.portrait-wrapper {
  width: 180px;
  height: 180px;
}

  .about-content {
    max-width: 700px;

    padding-top: 0;
  }

  .about-decoration {
    opacity: 0.4;
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {
  .about {
    padding:
      5rem
      1.25rem;
  }

  .section-label {
    margin-bottom: 2.5rem;
  }

  .about-intro h2 {
    font-size:
      clamp(
        2.35rem,
        11vw,
        3.25rem
      );
  }

  .profile {
    grid-template-columns: 130px minmax(0, 1fr);

    gap: 1.25rem;

    margin-top: 2.5rem;
    padding-top: 1.5rem;
  }

  .portrait-wrapper {
    width: 130px;
    height: 130px;
  }

  .profile-info strong {
    font-size: 1.25rem;
  }

  .profile-summary {
    display: none;
  }

  .resume-link {
    min-width: 0;

    padding: 0.65rem 0.85rem;
  }

  .about-content .lead {
    padding-left: 1.1rem;

    font-size: 1.15rem;
  }

  .body-copy p {
    line-height: 1.75;
  }

  .skills-area {
    margin-top: 2.25rem;
  }

  .skills li {
    min-height: 44px;
  }
}

/* =========================================================
   VERY SMALL SCREENS
========================================================= */

@media (max-width: 400px) {
   .profile {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .portrait-wrapper {
    width: 160px;
    height: 160px;
  }

  .profile-info {
    width: 100%;
  }

  .skills {
    gap: 0.5rem;
  }
}

/* =========================================================
   FORCED COLORS / HIGH CONTRAST
========================================================= */

@media (forced-colors: active) {
  .about {
    background: Canvas;
  }

  .about-decoration {
    display: none;
  }

  .section-label,
  .section-number,
  .about-intro h2,
  .about-intro h2 span,
  .profile-info strong,
  .profile-info span,
  .about-content .lead,
  .body-copy p,
  .skills-heading {
    color: CanvasText;
  }

  .section-line {
    background: CanvasText;
  }

  .portrait-wrapper {
    background: Canvas;
  }

  .about-image {
    border:
      2px solid
      CanvasText;
  }

  .about-content .lead {
    border-left-color:
      CanvasText;
  }

  .skills li {
    color: CanvasText;
    background: Canvas;

    border:
      1px solid
      CanvasText;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .about *,
  .about *::before,
  .about *::after {
    transition: none;
    animation: none;
  }
}
</style>