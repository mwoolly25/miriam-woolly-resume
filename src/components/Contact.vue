<template>
  <section class="contact card">
    <h3>Contact</h3>

    <!-- Contact Info -->
    <ul class="contact-info">
      <li>
        <font-awesome-icon :icon="['fas', 'phone']" />
        <span>(907) 317-7125</span>
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <a href="mailto:mvilleda@protonmail.com">mvilleda@protonmail.com</a>
      </li>
      <li>
        <font-awesome-icon :icon="['fas', 'home']" />
        <span>11920 Nebesna Dr<br />Anchorage, AK 99507</span>
      </li>
    </ul>

    <!-- Social Media -->
    <ul class="social-links">
      <li>
        <a href="https://www.linkedin.com/in/miriam-woolly-348750125/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a href="https://github.com/mwoolly25" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>
      <li>
        <a href="/resume.pdf" target="_blank">
          <font-awesome-icon :icon="['fas', 'file-pdf']" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss">
:root {
  --primary-color: #E1C790;
  --bg-light: #f9e4e2;
  --text-dark: #000;
}

html.dark {
  --bg-light: #30595b;
  --text-dark: #fff;
}

/* Shared card style */
.card {
  padding: 1.5rem;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  color: var(--text-dark);
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid var(--primary-color);
  }
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
      color: var(--primary-color);
      font-size: 1.1rem;
      margin-top: 0.2rem;
    }

    a {
      color: var(--text-dark);
      text-decoration: none;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
}

.social-links {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;

  li svg {
    font-size: 1.4rem;
    color: var(--primary-color);

    &:hover {
      color: var(--text-dark);
    }
  }
}
</style>
