<template>
  <header class="header">
    <!-- Name & Title -->
    <div class="text-section">
     <h1>MIRIAM WOOLLY</h1>
<h2>SOFTWARE ENGINEER</h2>

    </div>

    <!-- Logo Overlapping Bottom Border -->
    <div class="logo-wrapper">
      <img src="../assets/mw.png" alt="MW Logo" class="logo" />
    </div>

    <!-- Dark/Light Mode Toggle -->
    <button class="theme-toggle" @click="toggleTheme">
      <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return { isDark: false };
  },
  mounted() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.isDark = true;
      document.documentElement.classList.add("dark");
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle("dark", this.isDark);
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
    },
  },
};
</script>

<style lang="scss">
:root {
  --primary-color: #a07b2c;
  --bg-light: #f9e4e2;
  --text-dark: #000;
}

html.dark {
  --bg-light: #30595b;
  --text-dark: #fff;
}

.header {
  background-color: var(--bg-light);
  text-align: center;
  padding: 1px;
  position: relative;

  .logo-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    .logo {
      width: 5rem;
      height: 5rem;
      object-fit: contain;
    }
  }

  .text-section {
    .name {
      font-size: 2rem;
      font-weight: 900;
      color: var(--text-dark);
      margin-bottom: 0.3rem;
    }

    .title {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--text-dark);
      letter-spacing: 1px;
    }
  }

  .theme-toggle {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    color: var(--text-dark);
  }
}
</style>
