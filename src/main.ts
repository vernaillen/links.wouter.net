// src/main.ts
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import LinksView from "./views/LinksView.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faInstagram, faLinkedin, faGithub, faTwitter);

const routes = [
  {
    path: "/",
    name: "links",
    component: LinksView,
  },
];

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component("font-awesome-icon", FontAwesomeIcon);
});
