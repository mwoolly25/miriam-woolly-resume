<template>
  <section class="contact">
    <div class="contact-container">
      <div class="section-label">
        <span>05</span>
        <p>CONTACT</p>
      </div>

      <div class="contact-layout">
        <div class="contact-intro">
          <h2>Let's build something worth maintaining.</h2>

          <p class="intro">
            I'm always interested in connecting with developers, technology
            professionals, and teams working on meaningful software and web
            projects.
          </p>

          <div class="direct-contact">
            <p>Prefer to reach out directly?</p>

            <a href="mailto:mvilleda@protonmail.com">
              mvilleda@protonmail.com
              <span>↗</span>
            </a>
          </div>
        </div>

        <div class="form-wrapper">
          <form
            v-if="!submitted"
            class="contact-form"
            @submit.prevent="submitForm"
          >
            <!-- Honeypot -->
            <div class="honeypot" aria-hidden="true">
              <label for="website"> Website </label>

              <input
                id="website"
                v-model="form.website"
                name="website"
                type="text"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <div class="field">
              <label for="name"> YOUR NAME </label>

              <input
                id="name"
                v-model.trim="form.name"
                name="name"
                type="text"
                maxlength="100"
                autocomplete="name"
                required
              />
            </div>

            <div class="field">
              <label for="email"> EMAIL </label>

              <input
                id="email"
                v-model.trim="form.email"
                name="email"
                type="email"
                maxlength="254"
                autocomplete="email"
                required
              />
            </div>

            <div class="field">
              <label for="message"> MESSAGE </label>

              <textarea
                id="message"
                v-model.trim="form.message"
                name="message"
                rows="7"
                maxlength="3000"
                required
              ></textarea>

              <span class="character-count">
                {{ form.message.length }} / 3000
              </span>
            </div>

            <!-- Cloudflare Turnstile -->
            <div class="verification">
              <div ref="turnstile" class="turnstile-widget"></div>
            </div>

            <p v-if="error" class="form-error" role="alert">
              {{ error }}
            </p>

            <button class="submit-button" type="submit" :disabled="submitting">
              <span v-if="!submitting"> Send message </span>

              <span v-else> Sending... </span>

              <span aria-hidden="true"> → </span>
            </button>
          </form>

          <div v-else class="success" role="status">
            <div class="success-icon">✓</div>

            <p class="success-label">MESSAGE SENT</p>

            <h3>Thanks for reaching out.</h3>

            <p>
              Your message was sent successfully. I'll get back to you as soon
              as I can.
            </p>

            <button type="button" class="send-another" @click="resetForm">
              Send another message →
            </button>
          </div>
        </div>
      </div>

      <footer class="contact-footer">
        <div class="footer-brand">
          <img src="../assets/mw.png" alt="" />

          <div>
            <strong>Miriam Woolly</strong>
            <span>Web Developer · Software Engineer</span>
          </div>
        </div>

        <div class="footer-links">
          <a
            href="https://www.linkedin.com/in/miriam-woolly-348750125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/mwoolly25"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="/MiriamWoollyResumeNoReferences.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </div>

        <a class="back-to-top" href="#"> Back to top ↑ </a>
      </footer>

      <div class="site-credit">
        <span> Designed &amp; developed by Miriam Woolly </span>

        <span> Vue · Azure · Cloudflare </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        website: "",
      },

      turnstileToken: "",
      turnstileWidgetId: null,
      submitting: false,
      submitted: false,
      error: "",
    };
  },

  mounted() {
    if (!window.turnstile) {
      console.error("Cloudflare Turnstile script is not loaded.");
      return;
    }

    this.turnstileWidgetId = window.turnstile.render(this.$refs.turnstile, {
      sitekey: "0x4AAAAAAFR_3fdxFh_atUu2",

      callback: (token) => {
        this.turnstileToken = token;
        this.error = "";
      },

      "expired-callback": () => {
        this.turnstileToken = "";
      },

      "error-callback": () => {
        this.turnstileToken = "";
        this.error =
          "Bot verification could not be completed. Please try again.";
      },
    });
  },

  methods: {
    async submitForm() {
      this.error = "";

      // Honeypot
      if (this.form.website) {
        return;
      }

      // Require successful Turnstile verification.
      if (!this.turnstileToken) {
        this.error = "Please complete the bot verification.";
        return;
      }

      this.submitting = true;

      try {
        const response = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            application: "miriam-woolly",
            name: this.form.name,
            email: this.form.email,
            phone: "",
            message: this.form.message,
            turnstileToken: this.turnstileToken,
            company: this.form.website,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to send message.");
        }

        if (this.turnstileWidgetId !== null && window.turnstile) {
          window.turnstile.remove(this.turnstileWidgetId);
          this.turnstileWidgetId = null;
        }

        this.turnstileToken = "";
        this.submitted = true;
      } catch (error) {
        console.error(error);

        this.error =
          error.message ||
          "Something went wrong while sending your message. Please try again.";
      } finally {
        this.submitting = false;
      }
    },

    resetForm() {
      this.form = {
        name: "",
        email: "",
        message: "",
        website: "",
      };

      this.error = "";
      this.turnstileToken = "";

      if (this.turnstileWidgetId !== null && window.turnstile) {
        window.turnstile.remove(this.turnstileWidgetId);
        this.turnstileWidgetId = null;
      }

      this.submitted = false;

      this.$nextTick(() => {
        if (!window.turnstile || !this.$refs.turnstile) {
          return;
        }

        this.turnstileWidgetId = window.turnstile.render(this.$refs.turnstile, {
          sitekey: "0x4AAAAAAFR_3fdxFh_atUu2",

          callback: (token) => {
            this.turnstileToken = token;
            this.error = "";
          },

          "expired-callback": () => {
            this.turnstileToken = "";
          },

          "error-callback": () => {
            this.turnstileToken = "";
            this.error =
              "Bot verification could not be completed. Please try again.";
          },
        });
      });
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 8rem 2rem 2rem;

  background: var(--surface);
  border-top: 1px solid var(--border);
}

.contact-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

/* SECTION LABEL */

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

/* LAYOUT */

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(400px, 0.8fr);

  gap: clamp(4rem, 9vw, 8rem);

  padding-bottom: 7rem;
}

.contact-intro h2 {
  max-width: 650px;

  margin: 0 0 2rem;

  color: var(--text-primary);

  font-size: clamp(2.7rem, 5vw, 4.8rem);
  font-weight: 600;

  line-height: 1.02;
  letter-spacing: -0.055em;
}

.intro {
  max-width: 580px;

  margin: 0;

  color: var(--text-secondary);

  font-size: 1.05rem;
  line-height: 1.8;
}

/* DIRECT CONTACT */

.direct-contact {
  margin-top: 3.5rem;
}

.direct-contact p {
  margin: 0 0 0.5rem;

  color: var(--text-secondary);

  font-size: 0.75rem;
}

.direct-contact a {
  display: inline-flex;
  align-items: center;

  gap: 0.5rem;

  color: var(--text-primary);

  font-size: 1rem;
  font-weight: 600;

  text-decoration: none;
}

.direct-contact a span {
  color: var(--accent);

  transition: transform 0.2s ease;
}

.direct-contact a:hover span {
  transform: translate(2px, -2px);
}

/* FORM */

.form-wrapper {
  align-self: start;

  padding: 2rem;

  background: var(--background);

  border: 1px solid var(--border);
  border-radius: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
}

.field {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 0.55rem;
}

.field label {
  color: var(--accent);

  font-size: 0.65rem;
  font-weight: 700;

  letter-spacing: 0.12em;
}

.field input,
.field textarea {
  width: 100%;

  padding: 0.9rem 0;

  color: var(--text-primary);

  background: transparent;

  border: none;
  border-bottom: 1px solid var(--border);

  border-radius: 0;

  outline: none;

  font-family: inherit;
  font-size: 1rem;

  transition: border-color 0.2s ease;
}

.field textarea {
  resize: vertical;

  min-height: 140px;
}

.field input:focus,
.field textarea:focus {
  border-bottom-color: var(--accent);
}

.character-count {
  align-self: flex-end;

  color: var(--text-secondary);

  font-family: monospace;
  font-size: 0.65rem;
}

/* HONEYPOT */

.honeypot {
  position: absolute;

  width: 1px;
  height: 1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  white-space: nowrap;
}

/* VERIFICATION */

.verification {
  display: flex;
  align-items: center;

  gap: 0.8rem;

  padding: 0.9rem 1rem;

  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: 6px;
}

.verification-icon {
  color: var(--accent);

  font-size: 1.25rem;
}

.verification strong {
  display: block;

  margin-bottom: 0.15rem;

  color: var(--text-primary);

  font-size: 0.72rem;
}

.verification p {
  margin: 0;

  color: var(--text-secondary);

  font-size: 0.68rem;
}

/* SUBMIT */

.submit-button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 1rem 1.15rem;

  color: var(--background);
  background: var(--text-primary);

  border: 1px solid var(--text-primary);
  border-radius: 5px;

  cursor: pointer;

  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.submit-button:disabled {
  cursor: wait;
  opacity: 0.6;
}

.form-error {
  margin: 0;

  color: #b34b4b;

  font-size: 0.8rem;
  line-height: 1.5;
}

/* SUCCESS */

.success {
  padding: 1rem 0;
}

.success-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  margin-bottom: 1.5rem;

  color: var(--accent);

  background: var(--accent-soft);

  border-radius: 50%;

  font-weight: 700;
}

.success-label {
  margin: 0 0 0.7rem;

  color: var(--accent);

  font-size: 0.65rem;
  font-weight: 700;

  letter-spacing: 0.12em;
}

.success h3 {
  margin: 0 0 1rem;

  color: var(--text-primary);

  font-size: 1.8rem;
  font-weight: 600;

  letter-spacing: -0.03em;
}

.success > p:not(.success-label) {
  margin: 0;

  color: var(--text-secondary);

  line-height: 1.7;
}

.send-another {
  margin-top: 2rem;
  padding: 0;

  color: var(--text-primary);
  background: none;

  border: none;

  cursor: pointer;

  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
}

/* FOOTER */

.contact-footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  gap: 2rem;

  padding: 2rem 0;

  border-top: 1px solid var(--border);
}

.footer-brand {
  display: flex;
  align-items: center;

  gap: 0.8rem;
}

.footer-brand img {
  width: 36px;
  height: 36px;

  object-fit: contain;
}

.footer-brand div {
  display: flex;
  flex-direction: column;

  gap: 0.15rem;
}

.footer-brand strong {
  color: var(--text-primary);

  font-size: 0.8rem;
}

.footer-brand span {
  color: var(--text-secondary);

  font-size: 0.65rem;
}

.footer-links {
  display: flex;

  gap: 1.5rem;
}

.footer-links a,
.back-to-top {
  color: var(--text-secondary);

  font-size: 0.75rem;

  text-decoration: none;

  transition: color 0.2s ease;
}

.footer-links a:hover,
.back-to-top:hover {
  color: var(--accent);
}

.back-to-top {
  justify-self: end;
}

/* CREDIT */

.site-credit {
  display: flex;
  justify-content: space-between;

  padding: 1rem 0 0;

  color: var(--text-secondary);

  border-top: 1px solid var(--border);

  font-family: monospace;
  font-size: 0.62rem;
}

/* MOBILE */

@media (max-width: 900px) {
  .contact {
    padding: 5rem 1.25rem 1.5rem;
  }

  .contact-layout {
    grid-template-columns: 1fr;

    gap: 3rem;

    padding-bottom: 5rem;
  }

  .form-wrapper {
    max-width: 600px;
  }

  .contact-footer {
    grid-template-columns: 1fr;
  }

  .footer-links {
    flex-wrap: wrap;
  }

  .back-to-top {
    justify-self: start;
  }
}

@media (max-width: 500px) {
  .form-wrapper {
    padding: 1.4rem;
  }

  .contact-intro h2 {
    font-size: 2.6rem;
  }

  .site-credit {
    flex-direction: column;

    gap: 0.5rem;
  }
}
</style>
