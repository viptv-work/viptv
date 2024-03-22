---
layout: doc
layoutClass: m-nav-layout
---

<script setup>
import { NAV_DATA } from './_data/index_data'
</script>

<NavLink v-for="{title,desc, items} in NAV_DATA" :desc="desc" :title="title" :items="items"/>