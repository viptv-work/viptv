import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
  ["link", { rel: "icon", type: "image/svg", href: "/icons/logo.svg" }],
  ["link", { rel: "icon", type: "image/png", href: "//icons/logo.png" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["link", { rel: "apple-touch-icon", href: "/icons/logo.png" }],
  ["link", { rel: "mask-icon", href: "/icons/logo.svg", color: "#8921ff" }],
  ["meta", { name: "msapplication-TileImage", content: "/icons/logo.png" }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:title", content: "VIPTV - 网链工作室" }],
  ["meta", { property: "og:image", content: "/VIPTV-LOGO-LONG@1x.png" }],
  ["meta", { property: "og:url", content: "https://viptv.work" }],
  ["meta", { property: "og:description", content: "新一代网络工具链" }],
  ["meta", { name: "theme-color", content: "#646cff" }],
];
