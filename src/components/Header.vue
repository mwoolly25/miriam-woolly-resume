<template>
  <header>
    <!-- =====================================================
         FIXED NAVIGATION
    ====================================================== -->
    <nav class="navbar" aria-label="Primary navigation">
      <div class="nav-container">
        <a href="#top" class="brand" aria-label="Miriam Woolly home">
          <img
            src="../assets/mw.png"
            alt=""
            class="brand-logo"
          />
        </a>

        <!-- Desktop Navigation -->
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="nav-actions">
          <!-- Theme Toggle -->
          <button
            class="theme-toggle"
            type="button"
            @click="toggleTheme"
            :aria-label="
              isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            "
          >
            <font-awesome-icon
              :icon="isDark ? 'sun' : 'moon'"
              aria-hidden="true"
            />
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="menu-toggle"
            type="button"
            @click="toggleMenu"
            :aria-expanded="menuOpen.toString()"
            aria-controls="mobile-navigation"
            :aria-label="
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            "
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        id="mobile-navigation"
        class="mobile-nav"
        :class="{ open: menuOpen }"
      >
        <a href="#about" @click="closeMenu">
          About
        </a>

        <a href="#experience" @click="closeMenu">
          Experience
        </a>

        <a href="#projects" @click="closeMenu">
          Projects
        </a>

        <a href="#education" @click="closeMenu">
          Education
        </a>

        <a href="#contact" @click="closeMenu">
          Contact
        </a>
      </div>
    </nav>

    <!-- =====================================================
         MOUNTAIN HERO
    ====================================================== -->
    <section
      id="top"
      class="hero"
      aria-labelledby="hero-title"
    >
      <!-- Decorative mountain photograph -->
      <div
        class="hero-photo"
        aria-hidden="true"
      ></div>

      <!--
        Keeps the text side dark while allowing the
        photograph to become much brighter on the right.
      -->
      <div
        class="hero-overlay"
        aria-hidden="true"
      ></div>

      <div class="hero-container">
        <div class="hero-content">
          <p class="eyebrow">
            WEB DEVELOPER
            <span aria-hidden="true">·</span>
            SOFTWARE ENGINEER
          </p>

          <h1 id="hero-title">
            Hi, I'm
            <span class="name-highlight">
              Miriam.
            </span>
          </h1>

          <h2>
            I build and
            <span class="word-highlight">
              modernize
            </span>
            <br />
            web applications.
          </h2>

          <p class="hero-description">
            Web developer focused on accessible,
            maintainable web platforms, modernizing legacy
            systems, and creating better digital experiences.
          </p>

          <div class="hero-actions">
            <a
              href="#projects"
              class="primary-button"
            >
              <span>View my work</span>

              <span
                class="button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href="#experience"
              class="secondary-button"
            >
              Experience
            </a>
          </div>

          <p class="hero-location">
            <span
              class="location-marker"
              aria-hidden="true"
            ></span>

            Anchorage, Alaska
          </p>
        </div>
      </div>

      <!-- =====================================================
           VALUES STRIP
      ====================================================== -->
      <div class="values-strip">
        <div class="values-container">
          <div class="value">
            <span class="value-number">
              01
            </span>

            <div>
              <strong>Clean Code</strong>
              <span>Maintainable systems</span>
            </div>
          </div>

          <div class="value">
            <span class="value-number">
              02
            </span>

            <div>
              <strong>Accessibility</strong>
              <span>Inclusive experiences</span>
            </div>
          </div>

          <div class="value">
            <span class="value-number">
              03
            </span>

            <div>
              <strong>Performance</strong>
              <span>Thoughtful engineering</span>
            </div>
          </div>

          <div class="value">
            <span class="value-number">
              04
            </span>

            <div>
              <strong>Reliability</strong>
              <span>Built to maintain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      isDark: false,
      menuOpen: false,
    };
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      this.isDark = true;

      document.documentElement.classList.add(
        "dark"
      );
    }
  },

  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;

      document.documentElement.classList.toggle(
        "dark",
        this.isDark
      );

      localStorage.setItem(
        "theme",
        this.isDark ? "dark" : "light"
      );
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/* =========================================================
   NAVIGATION
========================================================= */

.navbar {
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  z-index: 1000;

  background: #061c23;

  border-bottom: 1px solid #557078;

  box-shadow:
    0 2px 12px
    rgba(0, 0, 0, 0.12);
}

.nav-container {
  width: 100%;
  max-width: var(--max-width);
  height: var(--navbar-height);

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* =========================================================
   BRAND
========================================================= */

.brand {
  min-width: 44px;
  min-height: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  border-radius: 50%;
}

.brand-logo {
  width: 42px;
  height: 42px;

  object-fit: contain;
}

/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

.nav-links {
  display: flex;
  align-items: center;

  gap: 0.5rem;
}

.nav-links a {
  position: relative;

  min-height: 44px;

  display: inline-flex;
  align-items: center;

  padding: 0 0.8rem;

  color: #ffffff;

  font-size: 0.95rem;
  font-weight: 700;

  text-decoration: none;

  border-radius: 5px;
}

.nav-links a::after {
  content: "";

  position: absolute;

  left: 0.8rem;
  right: 0.8rem;
  bottom: 5px;

  height: 3px;

  background: #8ff4ee;

  transform: scaleX(0);
  transform-origin: left;

  transition: transform 0.2s ease;
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  transform: scaleX(1);
}

/* =========================================================
   NAVIGATION ACTIONS
========================================================= */

.nav-actions {
  display: flex;
  align-items: center;

  gap: 0.65rem;
}

/* =========================================================
   THEME TOGGLE
========================================================= */

.theme-toggle,
.menu-toggle {
  width: 44px;
  height: 44px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  padding: 0;

  color: #ffffff;
  background: #061c23;

  border: 2px solid #8ca1a7;
  border-radius: 50%;

  cursor: pointer;
}

.theme-toggle:hover,
.menu-toggle:hover {
  color: #061c23;

  background: #8ff4ee;

  border-color: #8ff4ee;
}

/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.menu-toggle {
  display: none;

  border-radius: 7px;
}

.menu-toggle span {
  display: block;

  width: 20px;
  height: 2px;

  margin: 2px 0;

  background: currentColor;
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

.mobile-nav {
  display: none;
}

/* =========================================================
   HERO
========================================================= */

.hero {
  position: relative;

  min-height: 100vh;

  padding-top: var(--navbar-height);

  overflow: hidden;

  background: #061c23;
}

/* =========================================================
   MOUNTAIN PHOTO
========================================================= */

.hero-photo {
  position: absolute;

  inset: var(--navbar-height) 0 0;

  z-index: 0;

  background-image:
    url("/OfficePrint68.jpg");

  background-repeat: no-repeat;

  /*
   * Moves the photograph slightly toward the right
   * so the mountain ridge gets more visual emphasis.
   */
  background-position: 58% center;

  background-size: cover;
}

/* =========================================================
   HERO OVERLAY
========================================================= */

.hero-overlay {
  position: absolute;

  inset: var(--navbar-height) 0 0;

  z-index: 1;

  /*
   * Strong contrast behind the text.
   *
   * The overlay fades significantly after the center
   * so the mountains retain their natural blue/green
   * colors on the right side.
   */
  background:
    linear-gradient(
      90deg,
      rgba(3, 25, 31, 0.99) 0%,
      rgba(3, 25, 31, 0.98) 25%,
      rgba(3, 25, 31, 0.94) 38%,
      rgba(3, 25, 31, 0.76) 50%,
      rgba(3, 25, 31, 0.38) 64%,
      rgba(3, 25, 31, 0.12) 78%,
      rgba(3, 25, 31, 0.04) 100%
    );
}

/* =========================================================
   HERO CONTENT CONTAINER
========================================================= */

.hero-container {
  position: relative;

  z-index: 2;

  width: 100%;
  max-width: var(--max-width);

  min-height: calc(
    100vh -
    var(--navbar-height) -
    92px
  );

  margin: 0 auto;

  padding:
    5.5rem
    2rem
    5rem;

  display: flex;
  align-items: center;
}

/* =========================================================
   HERO CONTENT
========================================================= */

.hero-content {
  width: 100%;
  max-width: 720px;
}

/* =========================================================
   EYEBROW
========================================================= */

.eyebrow {
  margin: 0 0 1.5rem;

  color: #8ff4ee;

  font-size: 0.82rem;
  font-weight: 800;

  line-height: 1.5;

  letter-spacing: 0.17em;
}

/* =========================================================
   PRIMARY HEADING
========================================================= */

.hero h1 {
  margin: 0 0 0.5rem;

  color: #ffffff;

  font-size: clamp(
    3.8rem,
    6.6vw,
    6.4rem
  );

  font-weight: 750;

  line-height: 0.98;

  letter-spacing: -0.055em;
}

.name-highlight {
  color: #8ff4ee;
}

/* =========================================================
   SECONDARY HEADING
========================================================= */

.hero h2 {
  max-width: 760px;

  margin: 0;

  color: #ffffff;

  font-size: clamp(
    2.2rem,
    4vw,
    3.8rem
  );

  font-weight: 550;

  line-height: 1.08;

  letter-spacing: -0.04em;
}

.word-highlight {
  color: #8ff4ee;
}

/* =========================================================
   DESCRIPTION
========================================================= */

.hero-description {
  max-width: 640px;

  margin: 2rem 0;

  color: #ffffff;

  font-size: 1.1rem;
  font-weight: 450;

  line-height: 1.8;
}

/* =========================================================
   HERO BUTTONS
========================================================= */

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 1rem;

  margin-bottom: 2rem;
}

.primary-button,
.secondary-button {
  min-height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  padding: 0.85rem 1.4rem;

  border: 2px solid transparent;
  border-radius: 7px;

  font-size: 0.95rem;
  font-weight: 750;

  text-decoration: none;
}

/* =========================================================
   PRIMARY BUTTON
========================================================= */

.primary-button {
  color: #06262d;

  background: #8ff4ee;

  border-color: #8ff4ee;
}

.primary-button:hover {
  color: #03191e;

  background: #c0fffb;

  border-color: #c0fffb;
}

.button-arrow {
  font-size: 1.15rem;
}

/* =========================================================
   SECONDARY BUTTON
========================================================= */

.secondary-button {
  color: #ffffff;

  background: rgba(
    3,
    22,
    28,
    0.82
  );

  border-color: #ffffff;
}

.secondary-button:hover {
  color: #06262d;

  background: #ffffff;
}

/* =========================================================
   LOCATION
========================================================= */

.hero-location {
  display: flex;
  align-items: center;

  gap: 0.7rem;

  margin: 0;

  color: #ffffff;

  font-size: 0.95rem;
  font-weight: 650;
}

.location-marker {
  width: 12px;
  height: 12px;

  flex-shrink: 0;

  background: #8ff4ee;

  border: 3px solid #06262d;

  outline: 2px solid #8ff4ee;

  border-radius: 50%;
}

/* =========================================================
   VALUES STRIP
========================================================= */

.values-strip {
  position: relative;

  z-index: 3;

  background: #062f35;

  border-top: 1px solid #668087;
}

/* =========================================================
   VALUES CONTAINER
========================================================= */

.values-container {
  width: 100%;
  max-width: var(--max-width);

  min-height: 92px;

  margin: 0 auto;

  padding:
    1rem
    2rem;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  align-items: center;
}

/* =========================================================
   INDIVIDUAL VALUE
========================================================= */

.value {
  min-height: 56px;

  display: flex;
  align-items: center;

  gap: 1rem;

  padding: 0 1.5rem;

  color: #ffffff;

  border-right:
    1px solid #668087;
}

.value:first-child {
  padding-left: 0;
}

.value:last-child {
  padding-right: 0;

  border-right: 0;
}

.value-number {
  color: #8ff4ee;

  font-family:
    "SFMono-Regular",
    Consolas,
    monospace;

  font-size: 0.78rem;
  font-weight: 800;
}

.value div {
  display: flex;
  flex-direction: column;

  gap: 0.15rem;
}

.value strong {
  color: #ffffff;

  font-size: 0.9rem;
  font-weight: 750;
}

.value div span {
  color: #e6f1f2;

  font-size: 0.76rem;

  line-height: 1.4;
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1000px) {
  .hero-photo {
    background-position:
      62% center;
  }

  .hero-overlay {
    background:
      linear-gradient(
        90deg,
        rgba(3, 25, 31, 0.99) 0%,
        rgba(3, 25, 31, 0.97) 42%,
        rgba(3, 25, 31, 0.75) 65%,
        rgba(3, 25, 31, 0.35) 100%
      );
  }

  .hero-content {
    max-width: 660px;
  }

  .values-container {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .value {
    border-bottom:
      1px solid #668087;
  }

  .value:nth-child(2) {
    border-right: 0;
  }

  .value:nth-child(3),
  .value:nth-child(4) {
    border-bottom: 0;
  }
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

@media (max-width: 850px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .mobile-nav {
    position: absolute;

    top: var(--navbar-height);
    left: 0;
    right: 0;

    display: none;

    padding:
      0.75rem
      1.25rem
      1.25rem;

    background: #061c23;

    border-bottom:
      2px solid #668087;
  }

  .mobile-nav.open {
    display: flex;
    flex-direction: column;
  }

  .mobile-nav a {
    min-height: 48px;

    display: flex;
    align-items: center;

    padding:
      0.65rem
      0.75rem;

    color: #ffffff;

    font-weight: 700;

    text-decoration: none;

    border-bottom:
      1px solid #668087;
  }

  .mobile-nav a:last-child {
    border-bottom: 0;
  }

  /* ===============================================
     MOBILE HERO
  =============================================== */

  .hero-photo {
    background-position:
      64% center;
  }

  .hero-overlay {
    background:
      linear-gradient(
        90deg,
        rgba(3, 25, 31, 0.98) 0%,
        rgba(3, 25, 31, 0.94) 60%,
        rgba(3, 25, 31, 0.7) 100%
      );
  }

  .hero-container {
    min-height:
      calc(
        100vh -
        var(--navbar-height)
      );

    padding:
      5rem
      1.5rem
      4rem;
  }

  .hero-content {
    max-width: 620px;
  }
}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 600px) {
  .nav-container {
    padding:
      0
      1.25rem;
  }

  .brand-logo {
    width: 38px;
    height: 38px;
  }

  /* ===============================================
     PHOTO
  =============================================== */

  .hero-photo {
    background-position:
      62% center;
  }

  /*
   * Mobile receives a stronger overall overlay because
   * the text occupies more of the photograph.
   */
  .hero-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(3, 25, 31, 0.92) 0%,
        rgba(3, 25, 31, 0.88) 45%,
        rgba(3, 25, 31, 0.78) 100%
      );
  }

  .hero-container {
    min-height: auto;

    padding:
      4rem
      1.25rem
      3.5rem;
  }

  /* ===============================================
     TYPOGRAPHY
  =============================================== */

  .eyebrow {
    font-size: 0.75rem;

    letter-spacing: 0.13em;
  }

  .hero h1 {
    font-size:
      clamp(
        3.25rem,
        16vw,
        4.5rem
      );
  }

  .hero h2 {
    font-size:
      clamp(
        2rem,
        10vw,
        2.8rem
      );
  }

  .hero-description {
    font-size: 1rem;

    line-height: 1.7;
  }

  /* ===============================================
     BUTTONS
  =============================================== */

  .hero-actions {
    align-items: stretch;

    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    width: 100%;

    min-height: 52px;
  }

  /* ===============================================
     VALUES
  =============================================== */

  .values-container {
    grid-template-columns: 1fr;

    padding:
      0.4rem
      1.25rem;
  }

  .value {
    min-height: 68px;

    padding: 0.85rem 0;

    border-right: 0;

    border-bottom:
      1px solid #668087;
  }

  .value:nth-child(3) {
    border-bottom:
      1px solid #668087;
  }

  .value:last-child {
    border-bottom: 0;
  }
}

/* =========================================================
   FORCED COLORS / HIGH CONTRAST
========================================================= */

@media (forced-colors: active) {
  .hero-photo,
  .hero-overlay {
    display: none;
  }

  .navbar,
  .hero,
  .values-strip,
  .mobile-nav {
    background: Canvas;
  }

  .nav-links a,
  .mobile-nav a,
  .hero h1,
  .hero h2,
  .hero-description,
  .hero-location,
  .eyebrow,
  .name-highlight,
  .word-highlight,
  .value,
  .value strong,
  .value div span,
  .value-number {
    color: CanvasText;
  }

  .primary-button,
  .secondary-button {
    color: ButtonText;
    background: ButtonFace;

    border:
      2px solid
      ButtonText;
  }

  .theme-toggle,
  .menu-toggle {
    color: ButtonText;
    background: ButtonFace;

    border-color: ButtonText;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .nav-links a::after {
    transition: none;
  }
}
</style>