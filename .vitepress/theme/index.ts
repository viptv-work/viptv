import { h } from "vue";
import Theme from "vitepress/theme";

import SvgImage from "./components/SvgImage.vue";
import "./styles/vars.css";
import "./styles/custom.css";
import vuetify from "./vuetify";
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("SvgImage", SvgImage);
    app.use(vuetify);
  },
};
