<template>
  <section class="education">
    <div class="education-container">
      <div class="section-label">
        <span>04</span>
        <p>EDUCATION</p>
      </div>

      <div class="education-grid">
        <div class="education-heading">
          <h2>Education.</h2>
        </div>

        <div class="education-details">
          <div class="degree-block">
            <div>
              <p class="degree-type">BACHELOR OF SCIENCE</p>

              <h3>Computer Science</h3>

              <p class="university">
                East Central University
              </p>
            </div>

            <div class="graduation">
              <span>DEC 2016</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
.education {
  padding: 7rem 2rem;

  background: var(--surface);

  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.education-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section-label {
  display: flex;
  align-items: center;

  gap: 0.75rem;

  margin-bottom: 3rem;

  color: var(--accent);

  font-size: 0.75rem;
  font-weight: 700;

  letter-spacing: 0.16em;
}

.section-label span {
  font-family: monospace;
  opacity: 0.7;
}

.section-label p {
  margin: 0;
}

.education-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;

  gap: 5rem;

  align-items: start;
}

.education-heading h2 {
  margin: 0;

  color: var(--text-primary);

  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 600;

  letter-spacing: -0.045em;
}

.degree-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 2rem;

  padding-top: 0.5rem;
}

.degree-type {
  margin: 0 0 0.5rem;

  color: var(--accent);

  font-size: 0.7rem;
  font-weight: 700;

  letter-spacing: 0.12em;
}

.degree-block h3 {
  margin: 0 0 0.5rem;

  color: var(--text-primary);

  font-size: 1.6rem;
  font-weight: 600;

  letter-spacing: -0.025em;
}

.university {
  margin: 0;

  color: var(--text-secondary);

  font-size: 0.95rem;
}

.graduation {
  flex-shrink: 0;

  color: var(--text-secondary);

  font-family: monospace;
  font-size: 0.75rem;

  letter-spacing: 0.06em;
}

@media (max-width: 800px) {
  .education {
    padding: 5rem 1.25rem;
  }

  .education-grid {
    grid-template-columns: 1fr;

    gap: 2rem;
  }
}

@media (max-width: 500px) {
  .degree-block {
    flex-direction: column;

    gap: 1rem;
  }
}
</style>