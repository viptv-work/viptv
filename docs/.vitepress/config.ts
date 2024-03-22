import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
import { head, nav, sidebar, socialLinks, search } from "./configs";
import { buildEnd } from './buildEnd.config'
const ogUrl = !!process.env.ogUrl ? process.env.ogUrl : `https://vodtv.cn` || `https://viptv.work`
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || `2019-${new Date().getFullYear()} `
export const github = 'https://github.com/hefung'
export default defineConfig({

  title: `VIPTV资源库`,
  description: "开源百宝箱 - 简单, 强大, 快速, 无广告",
  lang: 'zh-CN',
  head,

  locales: {
    root: { label: '简体中文' },
    web: { label: '主站', link: 'https://viptv.work' },
    cdn: { label: '镜像', link: 'https://vodtv.cn' },

  },

  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/viptvx/viptv.work/edit/main/:path",
      text: "在 GitHub 上编辑此页面",
    },
    socialLinks,

    footer: {
      message: `用心去做高质量的网站，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,

      copyright: `版权所有 © ${commitRef} <a target="_blank" href="${github}">HE FUNG</a> Contributors`,
    },
    search,
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    sidebarMenuLabel: "菜单",
    langMenuLabel: '多语言',
    returnToTopLabel: "回到顶部",
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  },
  outDir: 'dist',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线 
    config: (md) => {
      md.use(timeline);
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

  },
  sitemap: {
    hostname: 'https://viptv.work',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  transformPageData(pageData) {
    const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '/')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.unshift([
      'link',
      { rel: 'canonical', href: canonicalUrl },
    ])
    return pageData
  },
  buildEnd,
});
