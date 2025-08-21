<template>
  <section class="experience">
    <h3>Experience</h3>

    <!-- Carousel with autoplay + pause on hover -->
    <div class="carousel" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
      <transition name="fade-slide" mode="out-in">
        <div :key="currentIndex" class="job-card">
          <h4>{{ jobs[currentIndex].title }}</h4>
          <p class="company">
            {{ jobs[currentIndex].company }} | {{ jobs[currentIndex].location }}
          </p>
          <p class="date">{{ jobs[currentIndex].dates }}</p>
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
  name: "Experience",
  data() {
    return {
      currentIndex: 0,
      interval: null,
      isPaused: false,
      jobs: [
        {
          title: "Web Developer II",
          company: "Choctaw Nation of Oklahoma",
          location: "Durant, OK",
          dates: "January 2017 – July 2024",
          duties: [
            "Collaborated with cross-functional teams (analysts, QA, scrum masters, devs, managers).",
            "Designed and deployed cloud-based solutions using Microsoft Azure (APIM, Logic Apps, Cosmos DB).",
            "Analyzed user needs, implemented and tested applications in .NET Framework.",
            "Ensured scalability, performance, and security in applications.",
          ],
        },
        {
          title: "Server",
          company: "Abendigo's Grill & Patio",
          location: "Broken Bow, OK",
          dates: "March 2012 – October 2014",
          duties: [
            "Ensured guest satisfaction by providing excellent table service in a fast-paced restaurant and bar setting.",
            "Managed a high volume of orders with accuracy and efficiency.",
            "Maintained a clean and organized work area to promote a positive guest experience.",
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
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 6000);
      this.isPaused = false;
    },
    pauseAutoPlay() {
      clearInterval(this.interval);
      this.isPaused = true;
    },
    resumeAutoPlay() {
      if (!this.isPaused) {
        this.startAutoPlay();
      }
    },
    toggleAutoPlay() {
      if (this.isPaused) {
        this.startAutoPlay();
      } else {
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

.experience {
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
