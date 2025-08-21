<template>
  <div id="app">
    <Header />

  <main class="layout">
  <!-- Left Column -->
  <div class="left-column">
    <AnimatedSection class="experience-section"><Experience /></AnimatedSection>
    <AnimatedSection class="projects-section"><Projects /></AnimatedSection>
  </div>

  <!-- Right Column -->
  <div class="right-column">
    <AnimatedSection class="aboutme-section"><AboutMe /></AnimatedSection>
    <AnimatedSection class="contact-section"><Contact /></AnimatedSection>
    <AnimatedSection class="education-section"><Education /></AnimatedSection>
  </div>
</main>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Contact from "./components/Contact.vue";
import Education from "./components/Education.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import AboutMe from "./components/AboutMe.vue";
import AnimatedSection from "./components/AnimatedSection.vue";

export default {
  name: "App",
  components: { Header, Contact, Education, Projects, Experience, AboutMe, AnimatedSection },
};
</script>


<style>
:root {
  --primary-color: #e1c790;
  --bg-light: #f9e4e2;
  --text-dark: #000;
}

/* Dark mode overrides */
html.dark {
  --bg-light: #30595b;
  --text-dark: #fff;
  background-color: #393939;
  color: white;
}

html {
  background-color: white;
  color: black;
}


/* Layout grid */
.layout {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  padding: 2rem;
  align-items: start;
}

/* Columns stack cards with spacing */
.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 🔑 spacing between Experience/Skills & Contact/Education */
}

/* Card styling */
.experience,
.projects,
.contact,
.education {
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  color: var(--text-dark);
  transition: all 0.3s ease;
  padding: 1.5rem; /* 🔑 consistent padding inside */
}

/* Hover effect */
.experience:hover,
.contact:hover,
.education:hover,
.skills:hover,
.projects:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

/* Subtle hover animations */
button:hover,
a:hover,
svg:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr; /* stack everything */
  }

  .aboutme-section   { order: 1; }
  .contact-section   { order: 2; }
  .experience-section{ order: 3; }
  .projects-section  { order: 4; }
  .education-section { order: 5; }
}


</style>
