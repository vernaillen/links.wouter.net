// src/main.ts
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faInstagram, faLinkedin, faGithub, faTwitter);

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router }) => {
    app.component("font-awesome-icon", FontAwesomeIcon);
    router.push("links");
  }
);
