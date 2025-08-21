<template>
  <section v-intersect="onIntersect" :class="{ visible: isVisible }" class="card-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AnimatedSection",
  data() {
    return { isVisible: false };
  },
  directives: {
    intersect: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) binding.value();
        }, { threshold: 0.2 }); // reveal when 20% visible
        observer.observe(el);
      }
    }
  },
  methods: {
    onIntersect() {
      this.isVisible = true;
    }
  }
};
</script>

<style scoped>
.card-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.card-section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
