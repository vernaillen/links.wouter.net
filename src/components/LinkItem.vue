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
        :
        <span class="sub"> <slot name="subheading"></slot> </span><br />
        <p>
          <slot></slot>
        </p>
      </div>
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
  font-size: 1.1rem;
  font-weight: 500;
}
.details .sub {
  font-size: 1rem;
  color: var(--color-heading);
}
.details p {
  padding: 3px 0;
}
</style>
