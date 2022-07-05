import { defineStore } from "pinia";

export const useLinkItemState = defineStore("linkItemState", {
  state: () => ({
    isAllCollapsed: true,
  }),
  actions: {
    collapseAll() {
      this.isAllCollapsed = true;
    },
    expandItem() {
      this.isAllCollapsed = false;
    },
  },
});
