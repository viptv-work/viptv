import type { DefaultTheme } from "vitepress";

const SidebarNav: DefaultTheme.SidebarItem[] = [
  {
    items: [
      {
        text: "前端导航",
        link: "/nav/front",
      },
      {
        text: "综合导航",
        link: "/nav/mm",
      },
      {
        text: "精选导航",
        link: "/nav/dsdh",
      }
    ],
  },
];
const SidebarGuide: DefaultTheme.SidebarItem[] = [

  {
    text: "快速开始",
    items: [
      {
        text: "安装",
        link: "/guide/install",
      },
      {
        text: "常见问题",
        link: "/guide/install",
      },
    ],
  },


];

const SidebarAbout: DefaultTheme.SidebarItem[] = [

  {
    text: "介绍我们",
    items: [

      {
        text: "为什么选择VIPTV?",
        link: "/about/why",
      },
      {
        text: "关于我",
        link: "/about/me",
      },
      {
        text: "赞助支持",
        link: "/about/support",
      },
      {
        text: "我们团队",
        link: "/about/team",
      },
    ]
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
const Sidebartools: DefaultTheme.SidebarItem[] = [
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
const SidebarVod: DefaultTheme.SidebarItem[] = [
  {
    text: "国内美女",
    items: [
      {
        text: "大尺码类",
        link: "/vod/cnxjj",
      },
      {
        text: "妹子视频",
        link: "/vod/mzsp",
      },
      {
        text: "甜妹视频",
        link: "/vod/tm",
      },
      {
        text: "纯情女高",
        link: "/vod/ng",
      },
      {
        text: "美女穿搭",
        link: "/vod/cd",
      },
      {
        text: "清纯美女",
        link: "/vod/qc",
      },
      {
        text: "美女吊带",
        link: "/vod/dd",
      },
      {
        text: "少萝妹妹",
        link: "/vod/sl",
      },
      {
        text: "美女穿搭",
        link: "/vod/jk",
      },
      {
        text: "美腿玉足",
        link: "/vod/yz",
      },
      {
        text: "热舞系列",
        link: "/vod/rewu",
      },
      {
        text: "小姐姐类",
        link: "/vod/xjj",
      },
      {
        text: "女大学生",
        link: "/vod/nvda",
      }
    ],
  },

  {
    text: "影视剧",
    items: [

    ],
  },
];

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/guide/": SidebarGuide,
  "/about/": SidebarAbout,
  "/source/": SidebarSource,
  "/nav/": SidebarNav,
  "/vod/": SidebarVod,
  "/tools/": Sidebartools

};
