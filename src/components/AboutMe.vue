<template>
  <section class="about card">
    <h3>About Me</h3>
 <p>
  I’m a <strong>Full-Stack Developer</strong> with experience designing, building, 
  and maintaining applications across both front-end and back-end stacks. 
  Skilled in <strong>HTML, JavaScript, jQuery, Vue.js, Angular, .NET/C#, SQL, Bootstrap, and Tailwind</strong>, 
  with a strong focus on creating efficient APIs and scalable solutions.
</p>
<p>
  Experienced in <strong>Microsoft Azure (Logic Apps, Function Apps, Service Bus)</strong> 
  for cloud integrations and workflow automation. I’ve mentored and overseen 
  college interns, fostering collaboration and growth within teams.
</p>
<p>
  Proficient in <strong>Azure DevOps</strong> for agile project management 
  and CLI workflows, always aiming to deliver reliable, high-impact solutions.
  In my free time, I’m also teaching myself <strong>Swift</strong> to expand into iOS app development.
</p>

  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

.about p {
  margin-bottom: 1rem;
  line-height: 1.5;
}

</style>
