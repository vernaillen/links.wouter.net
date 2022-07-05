<template>
  <div class="itemWrapper">
    <div class="item" @click="openUrl">
      <i v-if="hasIcon()">
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <a :href="url" target="_blank">
          <slot name="heading"></slot>
        </a>
        <br />
        <span class="sub"> <slot name="subheading"></slot> </span><br />
        <p>
          <slot></slot>
        </p>
      </div>
    </div>
    <div v-if="mixcloud" class="player">
      <iframe width="100%" height="60" :src="mixcloud" frameborder="0"></iframe>
    </div>
    <div v-if="youtube" class="player">
      <iframe
        width="100%"
        height="315"
        :src="youtube"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  mixcloud: {
    type: String,
    required: false,
  },
  youtube: {
    type: String,
    required: false,
  },
});
const slots = useSlots();
const hasIcon = () => {
  return !!slots["icon"];
};
const openUrl = () => {
  window.open(props.url, "_blank");
};
</script>

<style scoped>
.itemWrapper {
  position: relative;
  overflow: hidden;
  margin-top: 1.5rem;
  border: 1px solid var(--color-border);
}

.itemWrapper .item {
  display: flex;
  background-color: black;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  margin: 0;
  max-width: 100%;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.itemWrapper .item:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.details {
  flex: 1;
  text-align: center;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);

  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.details a {
  font-size: 1.2rem;
  font-weight: 500;
}
.details .sub {
  font-size: 0.9rem;
  color: var(--color-heading);
}
.details p {
  font-size: 0.8rem;
  padding: 3px 0;
  color: var(--color-text);
}
</style>
