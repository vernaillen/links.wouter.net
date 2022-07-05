<script setup lang="ts">
import LinkItem from "./LinkItem.vue";
</script>

<template>
  <LinkItem url="https://vernaillen.dev">
    <template #heading>Vernaillen.dev</template>
    <template #subheading>Senior Full Stack Developer</template>
    a brand new website for my freelance consultancy services
  </LinkItem>

  <LinkItem url="https://harmonics.be">
    <template #heading>Harmonics.be</template>
    <template #subheading>Healing power of sound & music</template>
    ecstatic dance, soundbaths, music production
  </LinkItem>

  <LinkItem
    url="https://www.mixcloud.com/woutervernaillen/rebirth-ecstatic-dance-krimpvarkie-huisi/"
    mixcloud="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fwoutervernaillen%2Frebirth-ecstatic-dance-krimpvarkie-huisi%2F"
  >
    <template #heading>Rebirth Ecstatic Dance</template>
    <template #subheading
      >DJ-set played during a private birthday/rebirth event</template
    >
  </LinkItem>

  <LinkItem
    url="https://www.youtube.com/watch?v=whKBW_hu4nE"
    youtube="https://www.youtube.com/embed/whKBW_hu4nE"
  >
    <template #heading>Meditative melody</template>
    <template #subheading>Live jam on the Subharmonicon</template>
  </LinkItem>
</template>
