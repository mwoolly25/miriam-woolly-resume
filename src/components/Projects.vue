<template>
  <section class="projects">
    <h3>Projects</h3>

    <div class="carousel" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
      <transition name="fade-slide" mode="out-in">
        <div :key="currentIndex" class="job-card">
          <h4>{{ jobs[currentIndex].title }}</h4>
          <p class="company">{{ jobs[currentIndex].company }}</p>
          <p class="date" v-if="jobs[currentIndex].dates">{{ jobs[currentIndex].dates }}</p>
          <ul>
            <li v-for="(duty, i) in jobs[currentIndex].duties" :key="i">
              {{ duty }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- Controls -->
    <div class="controls">
      <button @click="prevSlide">‹</button>
      <button @click="toggleAutoPlay">
        {{ isPaused ? "▶" : "❚❚" }}
      </button>
      <button @click="nextSlide">›</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      currentIndex: 0,
      interval: null,
      isPaused: false,
      jobs: [
        {
          title: "CNO Election Service",
          company: "Choctaw Nation of Oklahoma",
          duties: [
            "Developed Azure Function App, Logic App, and Service Bus integration to sync Voter Registration with AES API.",
            "Enabled real-time syncing of ~90,000 voter records and batch processing of ~130,000 member records.",
            "Improved sync time from 48+ hours to ~8 hours with fault-tolerant workflows and alerting.",
            "Ensured accurate ballot creation, mailing, and same-day registration during tribal elections."
          ],
        },
        {
          title: "Preferred Supplier Program",
          company: "Choctaw Nation of Oklahoma",
          duties: [
            "Reskilled and modernized a legacy application by migrating the front-end to Vue.js.",
            "Updated the back-end to use RESTful APIs with .NET Framework for improved maintainability and scalability.",
            "Upgraded and optimized the database structure to support new business requirements.",
            "Implemented unit testing to ensure reliability and long-term code quality.",
          ],
        },
      ],
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startAutoPlay() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    },
    pauseAutoPlay() {
      clearInterval(this.interval);
    },
    resumeAutoPlay() {
      if (!this.isPaused) {
        this.startAutoPlay();
      }
    },
    toggleAutoPlay() {
      if (this.isPaused) {
        this.isPaused = false;
        this.startAutoPlay();
      } else {
        this.isPaused = true;
        this.pauseAutoPlay();
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.jobs.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.jobs.length) % this.jobs.length;
    },
  },
};
</script>


<style lang="scss">
:root {
  --primary-color: #e1c790;
  --bg-light: #f9e4e2;
  --text-dark: #000;
}

html.dark {
  --bg-light: #30595b;
  --text-dark: #fff;
}

.projects {
  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem; 
    border-bottom: 2px solid var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

.carousel {
  position: relative;
  overflow: visible;
  min-height: auto;
  display: flex;
  align-items: stretch;
}

.job-card {
  position: relative;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  background: var(--bg-light);
  box-sizing: border-box;


    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }

    .company {
      font-weight: bold;
      margin-bottom: 0.3rem;
    }

    .date {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
      font-style: italic;
    }

    ul {
      margin: 0;
      padding-left: 1.2rem;
      li {
        margin-bottom: 0.4rem;
      }
    }
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-slide-enter {
    opacity: 0;
    transform: translateY(15px);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }

  .controls {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    button {
      background: none;
      border: 2px solid var(--primary-color);
      color: var(--text-dark);
      font-size: 1.2rem;
      margin: 0 0.5rem;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--primary-color);
        color: #fff;
        transform: scale(1.05);
      }
    }
  }
}
</style>
