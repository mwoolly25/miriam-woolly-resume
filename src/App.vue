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

/* Dark mode */
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

/* Layout grid for desktop */
.layout {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  padding: 2rem;
  align-items: start;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
}
.left-column {
  gap: 2rem;
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
  padding: 1.5rem;
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

/* Hover animations */
button:hover,
a:hover,
svg:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile layout fix */
@media (max-width: 768px) {
  .layout {
    display: flex;
    flex-direction: column;
  }

  .left-column,
  .right-column {
    display: contents;
  }

  .experience-section,
  .projects-section,
  .aboutme-section,
  .contact-section,
  .education-section {
    width: 100%; 
  }
  
  .aboutme-section   { order: 1; }
  .contact-section   { order: 2; }
  .experience-section{ order: 3; }
  .projects-section  { order: 4; }
  .education-section { order: 5; }
}

</style>
