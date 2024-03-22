import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] =
  [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link',{ rel: 'alternate', type: 'application/rss+xml', href: '/blog.rss' },],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'cn' }],
    ['meta', { property: 'og:title', content: 'VIPTV | IPTV & 新一代网络资源百宝箱' }],
    ['meta', { property: 'og:site_name', content: 'VIPTV' }],
    ['meta', { property: 'og:image', content: '/viptv-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://viptv.work || https://vodtv.cn' }]
  ]