<template>
  <section class="education card">
    <h3>
      <font-awesome-icon :icon="['fas', 'graduation-cap']" class="icon" />
      Education
    </h3>

    <ul class="education-info">
      <li>
        <p class="degree"><strong>Bachelor of Science</strong></p>
        <p>Major: Computer Science</p>
        <p>East Central University</p>
        <p class="date"><em>Graduated: December 10, 2016</em></p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style lang="scss">
.education-info {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.95rem;
    line-height: 1.4;

    .degree {
      font-size: 1.05rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    .date {
      font-style: italic;
      margin-top: 0.5rem;
    }
  }
}

.education h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    color: var(--primary-color);
  }
}
</style>
