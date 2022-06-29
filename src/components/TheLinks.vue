<script setup lang="ts">
import LinkItem from "./LinkItem.vue";
</script>

<template>
  <LinkItem url="https://vernaillen.dev">
    <template #heading>Vernaillen.dev</template>
    <template #subheading>Senior Full Stack Developer</template>
    new website for my freelance consultancy services
  </LinkItem>

  <LinkItem url="https://harmonics.be">
    <template #heading>Harmonics.be</template>
    <template #subheading>Healing power of sound & music</template>
    ecstatic dance, soundbaths, music production
  </LinkItem>
</template>
