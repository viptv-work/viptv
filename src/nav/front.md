---
description: 前端导航收录了大量高质量前端相关站点，为前端开发工程师提供最简单便捷的网址导航服务
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
<br />

::: tip
该导航由 [viptv-work](https://github.com/viptv-work) 开发，如有引用、借鉴的请保留版权声明：<https://github.com/viptv-work/docs>
:::
