<script setup lang="ts">
import { RouterView } from "vue-router";
import IconLogo from "@/components/icons/IconLogo.vue";
import SocialIcons from "@/components/SocialIcons.vue";
</script>

<template>
  <header>
    <IconLogo class="logo" />

    <div class="wrapper">
      <h3 class="wouternet">wouter <span class="primary">on the</span> net</h3>
      <img
        src="./assets/wouter_profileImage.jpg"
        alt="Wouter Vernaillen Profile Image"
        class="profileImage"
      />
      <p>
        Wouter Vernaillen<br />Sound alchemist, Freelance Java/JS Developer,
        Forever learning...
      </p>
      <SocialIcons />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 620px;
  margin: 0 auto 30px auto;
  padding: 0 1rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 30px;
}

.logo {
  display: block;
  margin: 0 auto 1.6rem;
}

.profileImage {
  border-radius: 25%;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

a,
.primary {
  text-decoration: none;
  color: hsla(53, 70.5%, 35.9%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsla(53, 70.5%, 35.9%, 0.8);
  }
}

.wrapper {
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2rem;
}
h3 {
  font-size: 1rem;
}
h3.wouternet {
  margin-bottom: 40px;
}
p {
  padding: 15px;
}
</style>
