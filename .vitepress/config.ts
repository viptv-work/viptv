import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress/types";

const Nav: DefaultTheme.NavItem[] = [
  {
    text: "指引",
    link: "/guide/",
  },
  {
    text: "资源",
    link: "/source/",
  },
  {
    text: "导航",
    link: "/nav/",
  },
];
const SidebarNav: DefaultTheme.SidebarItem[] = [
  {
    text: "程序员导航",
    items: [
      {
        text: "前端导航",
        link: "/nav/front",
      },
    ],
  },
];
const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: "快速开始",
    items: [
      {
        text: "为什么选 VIPTV",
        link: "/guide/why",
      },
      {
        text: "开始",
        link: "/guide/index",
      },
      {
        text: "安装准备",
        link: "/guide/install",
      },
    ],
  },
  {
    text: "高阶工具",
    items: [
      {
        text: "播放组件",
        link: "/guide/plays",
      },
      {
        text: "解析封装",
        link: "/guide/jiexi",
      },
      {
        text: "代理教程",
        link: "/guide/phpdl",
      },
      {
        text: "语法相关",
        link: "/guide/css",
      },
    ],
  },
  {
    text: "资源接口",
    items: [
      {
        text: "电视直播",
        link: "/guide/tvbs",
      },
      {
        text: "网络直播",
        link: "/guide/live",
      },
      {
        text: "影视接口",
        link: "/guide/movie",
      },
      {
        text: "音乐接口",
        link: "/guide/music",
      },
      {
        text: "追书资源",
        link: "/guide/book",
      },
    ],
  },
];

const SidebarSource: DefaultTheme.SidebarItem[] = [
  {
    text: "IPTV资源",
    items: [
      {
        text: "北邮直播",
        link: "/source/byou",
      },
      {
        text: "咪咕直播",
        link: "/source/migu",
      },
      {
        text: "天途直播",
        link: "/source/ttou",
      },
      {
        text: "世界直播",
        link: "/source/org",
      },
      {
        text: "成人直播",
        link: "/source/xxx",
      },
      {
        text: "资源采集",
        link: "/source/movie",
      },
      {
        text: "一锅端源",
        link: "/source/ygd",
      },
    ],
  },
  {
    text: "电脑软件",
    items: [
      {
        text: "广告设计",
        link: "/source/ads",
      },
      {
        text: "其它软件",
        link: "/source/windows",
      },
    ],
  },
  {
    text: "手机软件",
    items: [
      {
        text: "影视小说",
        link: "/source/mlive",
      },
    ],
  },
  {
    text: "电视盒子",
    items: [
      {
        text: "电视盒子",
        link: "/source/tvhezi",
      },
    ],
  },
];
const SidebarHao: DefaultTheme.SidebarItem[] = [
  {
    text: "资源导航",
    items: [
      {
        text: "影视资源",
        link: "/hao/movie",
      },
      {
        text: "读书学习",
        link: "/hao/reads",
      },
    ],
  },
  {
    text: "工具资源",
    items: [
      {
        text: "软件工具",
        link: "/hao/Pc",
      },
      {
        text: "AI工具",
        link: "/hao/Ai",
      },
      {
        text: "在线工具",
        link: "/hao/On",
      },
    ],
  },
  {
    text: "VIP资源",
    items: [
      {
        text: "福利小车",
        link: "/hao/vipa",
      },
    ],
  },
];
const SidebarTikTok: DefaultTheme.SidebarItem[] = [
  {
    text: "正常类",
    items: [
      {
        text: "国内小姐姐",
        link: "/tiktok/xjj",
      },
      {
        text: "国外小姐姐",
        link: "/tiktok/tiktok",
      },
    ],
  },

  {
    text: "涩情类",
    items: [
      {
        text: "国内小姐姐",
        link: "/xjj",
      },
      {
        text: "国外小姐姐",
        link: "/tiktok",
      },
    ],
  },
];

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

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/logo.png" }],
    ["link", { rel: "mask-icon", href: "/icons/logo.svg", color: "#8921ff" }],
    ["meta", { name: "msapplication-TileImage", content: "/icons/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "VIPTV - 网链工作室" }],
    ["meta", { property: "og:image", content: "/VIPTV-LOGO-LONG@1x.png" }],
    ["meta", { property: "og:url", content: "https://viptv.work" }],
    ["meta", { property: "og:description", content: "新一代网络工具链" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],

  srcDir: "src",
  locales: {
    root: { label: "简体中文" },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },
    nav: Nav,
    sidebar: {
      "/guide/": SidebarGuide,
      "/source/": SidebarSource,
      "/nav/": SidebarNav,
      "/tiktok/": SidebarTikTok,
    },
    editLink: {
      pattern: "https://github.com/vitejs/docs-cn/edit/main/:path",
      text: "为此页提供修改建议",
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1671270284061" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1920" width="64" height="64"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1921"></path></svg>',
        },
        link: "https://gitee.com/viptv-work/viptv-work.gitee.io",
      },

      {
        icon: {
          svg: '<svg t="1685841853530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3800" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"><path d="M352.814545 385.396364m-33.512727 0a33.512727 33.512727 0 1 0 67.025455 0 33.512727 33.512727 0 1 0-67.025455 0Z" fill="#50B674" p-id="3801"></path><path d="M502.690909 384.465455m-33.512727 0a33.512727 33.512727 0 1 0 67.025454 0 33.512727 33.512727 0 1 0-67.025454 0Z" fill="#50B674" p-id="3802"></path><path d="M576.232727 534.341818m-23.272727 0a23.272727 23.272727 0 1 0 46.545455 0 23.272727 23.272727 0 1 0-46.545455 0Z" fill="#50B674" p-id="3803"></path><path d="M694.458182 536.203636m-23.272727 0a23.272727 23.272727 0 1 0 46.545454 0 23.272727 23.272727 0 1 0-46.545454 0Z" fill="#50B674" p-id="3804"></path><path d="M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m-87.505455 630.225455c-26.996364 0-48.407273-5.585455-75.403636-11.17091l-75.403636 37.236364 21.410909-64.232727c-53.992727-37.236364-85.643636-85.643636-85.643637-145.221818 0-102.4 96.814545-182.458182 215.04-182.458182 105.192727 0 198.283636 64.232727 216.901819 150.807273-6.516364-0.930909-13.963636-0.930909-20.48-0.93091-102.4 0-182.458182 76.334545-182.458182 170.356364 0 15.825455 2.792727 30.72 6.516363 44.683636-7.447273 0-13.963636 0.930909-20.48 0.93091z m314.647273 75.403636l15.825455 53.992727-58.647273-32.581818c-21.410909 5.585455-42.821818 11.170909-64.232727 11.170909-102.4 0-182.458182-69.818182-182.458182-155.461818s80.058182-155.461818 182.458182-155.461818c96.814545 0 182.458182 69.818182 182.458182 155.461818 0 47.476364-31.650909 90.298182-75.403637 122.88z" fill="#50B674" p-id="3805"></path></svg>',
        },
        link: "https://blog.csdn.net/GISShiXiSheng",
      },

      {
        icon: "github",
        link: "https://github.com/viptv-work/viptv-work.github.io",
      },
    ],

    footer: {
      message: "收集来自世界各地的8000 + 公开可用的 IPTV 频道.",
      copyright: `The Best Live TV Services for ${new Date().getFullYear()} © viptv.work`,
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                displayDetails: "显示详细列表",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
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
