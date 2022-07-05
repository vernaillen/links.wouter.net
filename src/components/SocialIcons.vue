<template>
  <div class="socialIcons">
    <a
      class="ud-text-body-color hover:ud-text-primary ud-mx-3"
      href="https://github.com/vernaillen/"
      rel="noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'github']" class="animated fadeIn" />
    </a>
    <a
      class="ud-text-body-color hover:ud-text-primary ud-mx-3"
      href="https://www.linkedin.com/in/woutervernaillen/"
      rel="noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" class="animated fadeIn" />
    </a>
    <a
      class="ud-text-body-color hover:ud-text-primary ud-mx-3"
      href="https://www.instagram.com/woutervernaillen/"
      rel="noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" class="animated fadeIn" />
    </a>
    <a
      class="ud-text-body-color hover:ud-text-primary ud-mx-3"
      href="https://twitter.com/vernaillen"
      rel="noopener"
      target="_blank"
    >
      <font-awesome-icon :icon="['fab', 'twitter']" class="animated fadeIn" />
    </a>
  </div>
</template>

<style scoped>
.socialIcons {
  margin: 10px;
  text-align: center;
}
a {
  font-size: 1.5rem;
  margin: 6px;
}
</style>
