---
layout: page
title: Meet the Team
description: The development of Vite is guided by an international team.
---

<div class="comment-container"></div>

<script setup>
import { onMounted, watch } from 'vue';   
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
const initGitalk = () => {
  if (typeof window !== undefined) {
    const s_div = document.createElement('div'); // 创建节点
    s_div.setAttribute('id', 'gitalk-page-container'); // 设置id
    const container = document.querySelector('.comment-container'); // querySelector的节点可自己根据自己想加载的地方设置
    if (container) {
      emptyNode(container);
      container.appendChild(s_div);
      const gitment = new Gitalk({
        id: { name: `${location.pathname.replace(/\W/g, '')}` }, // 可选。默认为 location.href
        owner: '*****', // GitHub repository 所有者
        repo: '**********', // GitHub repository
        clientID: '*************', // 自己的clientID
        clientSecret: '*************', // 自己的clientSecret
        admin: ['lesonky'], // GitHub repository 所有者
        labels: [{ name: 'Gitalk' }], // GitHub issue 的标签
        createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
        // proxy: "https://vercel.younglina.top/github_access_token",
      });
      gitment.render('gitalk-page-container');
    }
  }
};
onMounted(initGitalk);

watch(
  () => route.path,
  () => {
    initGitalk();
  }
);
</script>