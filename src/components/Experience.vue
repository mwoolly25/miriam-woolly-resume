<template>
  <section class="experience">
    <div class="experience-container">

      <div class="section-label">
        <span>02</span>
        <p>EXPERIENCE</p>
      </div>

      <div class="section-heading">
        <h2>Where I've worked.</h2>

        <p>
          Experience building, maintaining, and improving
          enterprise and public-facing web applications.
        </p>
      </div>

      <div class="timeline">

        <!-- STATE OF ALASKA -->
        <article class="job current">
          <div class="job-meta">
            <p class="dates">JUN 2026 — PRESENT</p>

            <div class="current-badge">
              <span></span>
              CURRENT
            </div>
          </div>

          <div class="job-content">
            <h3>Web Developer / Webmaster</h3>

            <p class="company">
              State of Alaska
            </p>

            <p class="department">
              Department of Revenue · Anchorage, Alaska
            </p>

            <p class="summary">
              Maintain and modernize public-facing web platforms for
              the Alaska Department of Revenue, with a focus on
              maintainability, accessibility, development standards,
              and long-term platform improvements.
            </p>

            <ul>
              <li>
                Maintain and develop department websites using
                Sitefinity, ASP.NET MVC, C#, JavaScript, HTML, and CSS.
              </li>

              <li>
                Establish and improve source-control, repository,
                development, and deployment practices using Git and
                Azure DevOps.
              </li>

              <li>
                Standardize development, staging, and production
                environments to improve deployment reliability and
                maintainability.
              </li>

              <li>
                Improve accessibility and reusable UI patterns with
                WCAG compliance and consistent component design in mind.
              </li>

              <li>
                Document application architecture, environment
                configuration, deployment procedures, and development
                standards for long-term maintainability.
              </li>
            </ul>

            <div class="tech-stack">
              <span>Sitefinity</span>
              <span>C#</span>
              <span>ASP.NET MVC</span>
              <span>.NET Framework</span>
              <span>Azure DevOps</span>
              <span>Git</span>
              <span>WCAG</span>
            </div>
          </div>
        </article>


        <!-- CHOCTAW NATION -->
        <article class="job">
          <div class="job-meta">
            <p class="dates">JAN 2017 — JUL 2024</p>
          </div>

          <div class="job-content">
            <h3>Web Developer II</h3>

            <p class="company">
              Choctaw Nation of Oklahoma
            </p>

            <p class="department">
              Durant, Oklahoma
            </p>

            <p class="summary">
              Developed and supported enterprise web applications,
              APIs, integrations, and cloud-based solutions across
              front-end and back-end systems.
            </p>

            <ul>
              <li>
                Designed, developed, tested, and maintained
                applications using C#, .NET Framework, JavaScript,
                SQL, and modern front-end technologies.
              </li>

              <li>
                Built cloud integrations and automated workflows
                using Microsoft Azure services including Logic Apps,
                Function Apps, API Management, Service Bus, and
                Cosmos DB.
              </li>

              <li>
                Collaborated with developers, analysts, QA engineers,
                Scrum Masters, managers, and business stakeholders
                throughout the software development lifecycle.
              </li>

              <li>
                Mentored and supported college interns while
                contributing to team development and knowledge sharing.
              </li>
            </ul>

            <div class="tech-stack">
              <span>C#</span>
              <span>.NET</span>
              <span>Azure</span>
              <span>SQL</span>
              <span>JavaScript</span>
              <span>Vue.js</span>
              <span>Angular</span>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
.experience {
  padding: 8rem 2rem;

  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.experience-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section-label {
  display: flex;
  align-items: center;

  gap: 0.75rem;

  margin-bottom: 2rem;

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

.section-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 4rem;

  margin-bottom: 5rem;
}

.section-heading h2 {
  margin: 0;

  color: var(--text-primary);

  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 600;

  letter-spacing: -0.045em;
}

.section-heading > p {
  max-width: 500px;

  margin: 0;

  color: var(--text-secondary);

  line-height: 1.7;
}

/* TIMELINE */

.timeline {
  border-top: 1px solid var(--border);
}

.job {
  display: grid;
  grid-template-columns: 260px 1fr;

  gap: 3rem;

  padding: 3.5rem 0;

  border-bottom: 1px solid var(--border);
}

.job-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.8rem;
}

.dates {
  margin: 0;

  color: var(--text-secondary);

  font-family: monospace;
  font-size: 0.78rem;

  letter-spacing: 0.06em;
}

.current-badge {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  padding: 0.3rem 0.55rem;

  color: var(--accent);

  background: var(--accent-soft);

  border-radius: 4px;

  font-size: 0.65rem;
  font-weight: 700;

  letter-spacing: 0.08em;
}

.current-badge span {
  width: 6px;
  height: 6px;

  background: #4e9b6c;

  border-radius: 50%;
}

.job-content {
  max-width: 760px;
}

.job-content h3 {
  margin: 0 0 0.4rem;

  color: var(--text-primary);

  font-size: 1.65rem;
  font-weight: 600;

  letter-spacing: -0.025em;
}

.company {
  margin: 0;

  color: var(--accent);

  font-size: 1rem;
  font-weight: 600;
}

.department {
  margin: 0.25rem 0 1.5rem;

  color: var(--text-secondary);

  font-size: 0.9rem;
}

.summary {
  margin: 0 0 1.7rem;

  color: var(--text-primary);

  font-size: 1rem;
  line-height: 1.75;
}

.job-content ul {
  margin: 0 0 2rem;
  padding: 0;

  list-style: none;
}

.job-content li {
  position: relative;

  margin-bottom: 0.85rem;
  padding-left: 1.4rem;

  color: var(--text-secondary);

  font-size: 0.92rem;
  line-height: 1.65;
}

.job-content li::before {
  content: "→";

  position: absolute;
  left: 0;

  color: var(--accent);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
}

.tech-stack span {
  padding: 0.4rem 0.65rem;

  color: var(--text-secondary);

  background: var(--background);

  border: 1px solid var(--border);
  border-radius: 4px;

  font-family: monospace;
  font-size: 0.72rem;
}

/* MOBILE */

@media (max-width: 800px) {
  .experience {
    padding: 5rem 1.25rem;
  }

  .section-heading {
    grid-template-columns: 1fr;

    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .job {
    grid-template-columns: 1fr;

    gap: 1.5rem;

    padding: 2.5rem 0;
  }
}
</style>