import DefaultTheme from 'vitepress/theme'
import './style/index.scss'
import { ref } from 'vue'

import Video from "./components/Video.vue"
import SvgImage from "./components/SvgImage.vue"
import NavLink from './components/NavLink.vue'

import { h } from "vue";
import { useData, useRoute, type Theme } from "vitepress"

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css"

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'

import giscusTalk from 'vitepress-plugin-comment-with-giscus'
const inBrowser = typeof window !== 'undefined'
const get = (key: string, defaultValue = false): boolean =>
  inBrowser
    ? JSON.parse(localStorage.getItem(key) || String(defaultValue))
    : defaultValue

export default {
  extends: DefaultTheme,
  Layout() {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  enhanceApp({ app }) {
    app.provide('og_title', ref(get('VIPTV资源库', true)))
    app.provide('og_url', ref(get('https://viptv.work', true)))
    app.provide('og_description', ref(get('开源百宝箱 - 简单, 强大, 快速, 无广告', true)))
    // 注册全局组件
    app.component('Video', Video)
    app.component("SvgImage", SvgImage);
    app.component('NavLink', NavLink)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // Get frontmatter and route
    const { frontmatter } = useData();


    // giscus配置
    giscusTalk({
      repo: 'viptvx/viptv.work', //仓库
      repoId: 'R_kgDOKdyFzg', //仓库ID
      category: 'Q&A', // 讨论分类
      categoryId: 'DIC_kwDOKdyFzs4CeLSD', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      loading: "lazy",
      position: "top",
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      true
    );

  },
} satisfies Theme

