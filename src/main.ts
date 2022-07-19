// src/main.ts
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import LinksView from "./views/LinksView.vue";
import { createPinia } from "pinia";
import "animate.css/animate.compat.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faAngleDown,
  faAngleRight,
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter
);
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

const routes = [
  {
    path: "/",
    name: "links",
    component: LinksView,
  },
];

export const createApp = ViteSSG(App, { routes }, ({ app, isClient }) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
  const pinia = createPinia();
  app.use(pinia);
  if (isClient) {
    const hostname = window.location.hostname;
    if (
      hostname != "links.wouter.net" &&
      hostname != "localhost" &&
      hostname != "127.0.0.1"
    ) {
      window.location.href = "https://links.wouter.net";
    }
  }
});
