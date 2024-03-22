---
layout: doc
layoutClass: m-nav-layout
---

<script setup>
  import { NAV_DATA } from './_data/mm_data'
</script>

<NavLink v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>