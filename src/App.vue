<template>
  <div id="app">
    <!--
      Skip navigation allows keyboard users to bypass
      the repeated navigation and move directly to
      the main page content.
    -->
    <a class="skip-link" href="#main-content">
      Skip to main content
    </a>

    <Header />

    <main id="main-content" tabindex="-1">
      <AboutMe id="about" />

      <Experience id="experience" />

      <Projects id="projects" />

      <Education id="education" />

      <Contact id="contact" />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",

  components: {
    Header,
    AboutMe,
    Experience,
    Projects,
    Education,
    Contact,
  },
};
</script>

<style>
/* =========================================================
   COLOR SYSTEM — LIGHT MODE

   Inspired by the Alaska mountain photograph:
   spruce, glacier, river, sky, and snow.
========================================================= */

:root {
  /* Page backgrounds */
  --background: #ffffff;
  --surface: #f3f8f8;
  --surface-alt: #e7f1f1;

  /* Text */
  --text-primary: #10232b;
  --text-secondary: #374f59;

  /* Primary teal */
  --accent: #00666b;
  --accent-hover: #004b4f;
  --accent-soft: #d9eeee;

  /* Secondary glacier blue */
  --secondary-accent: #005d75;
  --secondary-soft: #e0f0f4;

  /* Additional teal */
  --cyan: #00666b;
  --cyan-soft: #d9eeee;

  /* Borders */
  --border: #aebfc4;

  /* Decorative gradient */
  --gradient: linear-gradient(
    135deg,
    #00666b 0%,
    #007c83 50%,
    #005d75 100%
  );

  /*
   * Hero colors.
   * These are specifically intended for use over
   * the dark mountain-image overlay.
   */
  --hero-text: #ffffff;
  --hero-secondary: #f4f8f8;
  --hero-accent: #72eeee;

  /* Focus system */
  --focus-color: #003cff;
  --focus-inner: #ffffff;

  /* Status colors */
  --success: #176b3a;
  --error: #a51d2d;

  /* Layout */
  --max-width: 1180px;
  --navbar-height: 72px;
}

/* =========================================================
   DARK MODE
========================================================= */

html.dark {
  /* Page backgrounds */
  --background: #07191e;
  --surface: #0d242a;
  --surface-alt: #123038;

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #d0dfe2;

  /* Primary teal */
  --accent: #72eeee;
  --accent-hover: #a1ffff;
  --accent-soft: #123a3d;

  /* Secondary glacier blue */
  --secondary-accent: #8bdbea;
  --secondary-soft: #12323a;

  --cyan: #72eeee;
  --cyan-soft: #123a3d;

  /* Borders */
  --border: #657b81;

  /* Decorative gradient */
  --gradient: linear-gradient(
    135deg,
    #72eeee 0%,
    #5dc9d3 50%,
    #8bdbea 100%
  );

  /*
   * Hero remains dark even when the rest
   * of the site switches themes.
   */
  --hero-text: #ffffff;
  --hero-secondary: #f4f8f8;
  --hero-accent: #72eeee;

  /* High-visibility dark-mode focus */
  --focus-color: #ffe36e;
  --focus-inner: #07191e;

  /* Status */
  --success: #9be8ae;
  --error: #ffabb4;
}

/* =========================================================
   DOCUMENT
========================================================= */

html {
  scroll-behavior: smooth;

  /*
   * Prevent anchor destinations from being hidden
   * behind the fixed navigation.
   */
  scroll-padding-top: calc(
    var(--navbar-height) + 1.5rem
  );

  background: var(--background);

  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  min-width: 320px;

  margin: 0;

  background: var(--background);
  color: var(--text-primary);

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif;

  font-size: 1rem;
  line-height: 1.5;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

#app {
  min-height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* =========================================================
   MAIN CONTENT
========================================================= */

main {
  width: 100%;
}

/*
 * Additional anchor protection for the fixed navbar.
 */
main > section {
  scroll-margin-top: calc(
    var(--navbar-height) + 1.5rem
  );
}

/*
 * The main element receives focus from the skip link.
 * It does not need its own focus outline because it
 * is not an interactive control.
 */
main:focus {
  outline: none;
}

/* =========================================================
   SKIP NAVIGATION
========================================================= */

.skip-link {
  position: fixed;

  top: 0;
  left: 1rem;

  z-index: 10000;

  padding: 0.9rem 1.25rem;

  color: #ffffff;
  background: #07191e;

  border: 3px solid #ffffff;
  border-top: 0;

  border-radius: 0 0 6px 6px;

  font-size: 1rem;
  font-weight: 700;

  line-height: 1.4;

  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;

  transform: translateY(-120%);

  transition: transform 0.2s ease;
}

.skip-link:focus,
.skip-link:focus-visible {
  transform: translateY(0);

  outline: 3px solid #ffe36e;
  outline-offset: 3px;

  box-shadow: none;
}

/* =========================================================
   LINKS
========================================================= */

a {
  color: inherit;
}

/*
 * Normal inline links remain visibly identifiable
 * without depending on color alone.
 *
 * Components such as buttons and navigation links
 * can provide their own visual treatment.
 */
main a:not([class]) {
  color: var(--accent);

  font-weight: 600;

  text-decoration: underline;
  text-decoration-thickness: 0.1em;
  text-underline-offset: 0.2em;
}

main a:not([class]):hover {
  color: var(--accent-hover);

  text-decoration-thickness: 0.15em;
}

/* =========================================================
   BUTTONS + FORM CONTROLS
========================================================= */

button,
input,
textarea,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button:disabled,
input:disabled,
textarea:disabled,
select:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

/* =========================================================
   KEYBOARD FOCUS
========================================================= */

/*
 * Strong global keyboard focus treatment.

 * Individual components should not remove this unless
 * they provide an equally visible replacement.
 */
:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 4px;
}

/*
 * Interactive elements also receive an inner separation
 * ring so the focus indicator remains visible against
 * different surfaces and photographs.
 */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible,
summary:focus-visible,
[tabindex]:not([tabindex="-1"]):focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 4px;

  box-shadow:
    0 0 0 2px var(--focus-inner);
}

/* =========================================================
   FORMS
========================================================= */

input,
textarea,
select {
  color: var(--text-primary);
  background: var(--background);
}

/*
 * Placeholders are supplementary.
 * Contact.vue should still use visible labels.
 */
::placeholder {
  color: var(--text-secondary);
  opacity: 1;
}

/* =========================================================
   TEXT SELECTION
========================================================= */

::selection {
  color: #ffffff;
  background: #00535a;
}

html.dark ::selection {
  color: #07191e;
  background: #72eeee;
}

/* =========================================================
   MEDIA
========================================================= */

img,
svg,
video,
picture {
  max-width: 100%;
}

img,
video {
  height: auto;
}

/* =========================================================
   TEXT
========================================================= */

p,
li {
  overflow-wrap: break-word;
}

strong,
b {
  font-weight: 700;
}

/* =========================================================
   FORCED COLORS / WINDOWS HIGH CONTRAST
========================================================= */

@media (forced-colors: active) {
  :focus-visible {
    outline: 3px solid Highlight;
  }

  .skip-link {
    color: ButtonText;
    background: ButtonFace;

    border-color: ButtonText;
  }

  a {
    forced-color-adjust: auto;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;

    animation-duration: 0.01ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;
    transition-delay: 0ms !important;
  }
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 768px) {
  :root {
    --max-width: 100%;
  }

  .skip-link {
    left: 0.75rem;
  }
}

/* =========================================================
   PRINT
========================================================= */

@media print {
  :root,
  html.dark {
    --background: #ffffff;
    --surface: #ffffff;

    --text-primary: #000000;
    --text-secondary: #000000;

    --accent: #000000;
    --accent-hover: #000000;

    --border: #777777;
  }

  html,
  body {
    color: #000000;
    background: #ffffff;
  }

  .skip-link {
    display: none;
  }
}
</style>