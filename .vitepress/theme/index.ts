import { h, watch } from "vue";
import { useData, EnhanceAppContext } from "vitepress";
import Theme from "vitepress/theme";
//import NavVisitor from "./components/NavVisitor.vue";
//import HomeSponsors from "./components/HomeSponsors.vue";
import AsideSponsors from "./components/AsideSponsors.vue";
import WwAds from "./components/WwAds.vue";
import SvgImage from "./components/SvgImage.vue";
import "./styles/vars.css";
import "./styles/custom.css";
import vuetify from "./vuetify";

if (typeof window !== "undefined") {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }

  /* 删除浏览器中的缓存 */
  if ("caches" in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          return caches.delete(key);
        })
      );
    });
  }
}

let homePageStyle: HTMLStyleElement | undefined;
export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      //'home-features-after': () => h(HomeSponsors),
      //"nav-bar-title-after": () => h(NavVisitor),
      "aside-outline-after": () => h(WwAds),
      "aside-ads-before": () => h(AsideSponsors),
    });
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component("SvgImage", SvgImage);
    app.use(vuetify);
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/"),
        { immediate: true }
      );
    }
  },
};
if (typeof window !== "undefined") {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
