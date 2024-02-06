import { defineConfig } from "vitepress";

import { head, nav, sidebar, socialLinks, search } from "./configs";

export default defineConfig({
  title: "VIPTV - 网络电视工具链",
  description: "简单, 强大, 快速, 无广告, VIPTV是高质量IPTV服务",
  lang: "zh-CN",
  base: "",

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: "https://docs.viptv.work",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },
  head,
  srcDir: "src",
  srcExclude: ["tutorial/**/description.md"],
  locales: {
    root: { label: "国内云镜像" },
    en: { label: "国外云镜像", link: "/" },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/viptv-work/docs/edit/main/:path",
      text: "为此页提供修改建议",
    },
    socialLinks,
    footer: {
      message: "VIPTV是最优质的IPTV服务，可满足您在世界任何地方的所有观看需求.",
      copyright: `The Best Live TV Services for ${new Date().getFullYear()} © viptv.work`,
    },
    search,
    outline: {
      label: "本页目录",
    },
    lastUpdatedText: "最近更新时间",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "菜单",

    returnToTopLabel: "返回顶部",
    docFooter: { prev: "上一页", next: "下一页" },
  },
});
