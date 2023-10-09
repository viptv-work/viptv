
<template>
  <Layout>
    <template #doc-after>
      <Issue />
    </template>
  </Layout>
</template>

<script lang=ts setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
import Issue from './Issue.vue';
</script>