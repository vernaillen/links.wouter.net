<script setup lang="ts">
import LinksItem from "./LinksItem.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
</script>

<template>
  <LinksItem url="https://vernaillen.dev">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Vernaillen.dev</template>
    <template #subheading>Freelance Full Stack Developer</template>
    On <a href="https://vernaillen.dev" target="_blank">vernaillen.dev</a> you
    find information about my freelance consultancy business as a Senior Full
    Stack Developer
  </LinksItem>

  <LinksItem url="https://harmonics.be">
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Harmonics.be</template>
    <template #subheading>Healing power of sound & music</template>

    In 2022 I started new activities and renamed my business to Harmonics BV. I
    created a basic version already for a new website about these new activities
    @ <a href="https://harmonics.be" target="_blank">harmonics.be</a>
  </LinksItem>
</template>
