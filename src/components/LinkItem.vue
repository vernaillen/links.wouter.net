<template>
  <div class="item" @click="openUrl">
    <i>
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
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
const openUrl = () => {
  document.location.href = props.url;
};
</script>

<style scoped>
.item {
  margin-top: 1.5rem;
  margin-left: 26px;
  display: flex;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  padding: 15px 20px 15px 35px;
  cursor: pointer;
}
.item:hover {
  background-color: black;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);

  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
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

.item:before {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:after {
  content: " ";
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}
</style>
