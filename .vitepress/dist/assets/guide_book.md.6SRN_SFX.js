import{_ as s,c as a,o as i,V as n}from"./chunks/framework.QFmjjZgg.js";const c=JSON.parse('{"title":"追书神器接口","description":"","frontmatter":{},"headers":[],"relativePath":"guide/book.md","filePath":"guide/book.md","lastUpdated":null}'),p={name:"guide/book.md"},t=n(`<h1 id="追书神器接口" tabindex="-1">追书神器接口 <a class="header-anchor" href="#追书神器接口" aria-label="Permalink to &quot;追书神器接口&quot;">​</a></h1><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><h3 id="带书籍数量的父分类" tabindex="-1">带书籍数量的父分类 <a class="header-anchor" href="#带书籍数量的父分类" aria-label="Permalink to &quot;带书籍数量的父分类&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/ranking/gender</code></p><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;male&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;bookCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">429247</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;奇幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;bookCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41711</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;female&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;古代言情&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;bookCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">338664</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;现代言情&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;bookCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">395887</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;press&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="带子分类的父分类" tabindex="-1">带子分类的父分类 <a class="header-anchor" href="#带子分类的父分类" aria-label="Permalink to &quot;带子分类的父分类&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/cats/lv2</code></p><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;male&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;major&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;mins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;东方玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;异界大陆&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;异界争霸&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;远古神话&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;major&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;奇幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;mins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;西方奇幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;领主贵族&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;亡灵异族&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;魔法校园&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="获取分类书籍-categoryinfo" tabindex="-1">获取分类书籍(categoryInfo) <a class="header-anchor" href="#获取分类书籍-categoryinfo" aria-label="Permalink to &quot;获取分类书籍(categoryInfo)&quot;">​</a></h3><p>request:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  gender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;male&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 性别</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;reputation&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 按照不同的类型获取分类下的书籍(hot, new, reputation, over)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  major</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;玄幻&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 父分类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  minor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;东方玄幻&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 子分类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 起始位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //每页数量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    _id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 书籍id</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 书籍名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 作者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    shortIntro</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 简介</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    cover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 封面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    site</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 书源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    latelyFollower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 追书人数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    retentionRatio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">好评率</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    lastChater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 最新章节</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h2 id="书籍" tabindex="-1">书籍 <a class="header-anchor" href="#书籍" aria-label="Permalink to &quot;书籍&quot;">​</a></h2><h3 id="书籍详情" tabindex="-1">书籍详情 <a class="header-anchor" href="#书籍详情" aria-label="Permalink to &quot;书籍详情&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/book/:id</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>url params: {</span></span>
<span class="line"><span>  id: BookId</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5106099abb1c67cf28000016&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//书籍id</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;禹枫&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//作者</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;cover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/agent/http://images.zhulang.com/book_cover/image/18/98/189843.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 封面</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;creater&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;iPhone 4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;longIntro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//长介绍</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;异世灵武天下&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//书名</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;cat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;东方玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;majorCate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//主分类</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;minorCate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;东方玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//子分类</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;_le&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;allowMonthly&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;allowVoucher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;allowBeanVoucher&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;hasCp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;postCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3183</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;latelyFollower&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">43192</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//追书人数</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;followerCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5164</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;wordCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11241234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//总字数</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;serializeWordCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">129762</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//平均</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;retentionRatio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;66.16&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//好评率</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;updated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2017-01-19T05:58:53.799Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//更新于</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;isSerial&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//连载中</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;chaptersCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3577</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//总章数</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;lastChapter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;后续第五章:大结局终章&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//最新章节</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;gender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;male&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;tags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;donate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="书籍章节" tabindex="-1">书籍章节 <a class="header-anchor" href="#书籍章节" aria-label="Permalink to &quot;书籍章节&quot;">​</a></h3><p>这部分相对比较复杂</p><p>步骤如下:</p><p>书籍id -&gt; 获取所有书源 -&gt; 书源id -&gt; 获取章节目录 -&gt; 章节link -&gt; 章节内容</p><p>url : <code>http://api.zhuishushenqi.com/btoc</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>url params: {</span></span>
<span class="line"><span>  id: BookId</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>query string: {</span></span>
<span class="line"><span>  view: chapters</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5881e82e3e3357fa266f6a3e&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;优质书源&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;link&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://vip.zhuishushenqi.com/toc/5881e82e3e3357fa266f6a3e&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;book&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5779b38d3b433dd647d95da2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;chapters&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;第一章 状元再世&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 章节名</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;link&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://vip.zhuishushenqi.com/chapter/5881e82e4e307ea47f89deeb?cv=1484908590347&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//章节地址</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5881e82e4e307ea47f89deeb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//章节id</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;currency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//价格</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;unreadble&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;isVip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否是vip章节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;updated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2017-03-31T14:44:51.413Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//更新于</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vip.zhuishushenqi.com&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 书源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="章节内容" tabindex="-1">章节内容 <a class="header-anchor" href="#章节内容" aria-label="Permalink to &quot;章节内容&quot;">​</a></h3><p>url: <code>http://chapter2.zhuishushenqi.com/chapter/:chapterLink</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>url params: {</span></span>
<span class="line"><span>  chapterLink: &#39;http://vip.zhuishushenqi.com/chapter/5881e82e4e307ea47f89df43&#39; // 章节地址</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;chapter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;第八十九章 杂阿神功（二）&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 章节名</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\r\\n\\r\\n\\r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请安装最新版追书 以便使用优质资源&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;isVip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;cpContent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;..&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//章节内容</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;currency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5881e82e4e307ea47f89df43&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="作者的书籍" tabindex="-1">作者的书籍 <a class="header-anchor" href="#作者的书籍" aria-label="Permalink to &quot;作者的书籍&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/book/accurate-search?author=忘语</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>url params: {</span></span>
<span class="line"><span>  author: 作者名</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;567d2cb9ee0e56bc713cb2c0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玄界之门&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;忘语&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;shortIntro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;cover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/cover/148369972991098&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;cat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;仙侠&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;site&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zhuishuvip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;majorCate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;仙侠&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;minorCate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;幻想修仙&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;banned&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;latelyFollower&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">35504</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;followerCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;retentionRatio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65.18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;lastChapter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;第919章 前线告急&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="排名" tabindex="-1">排名 <a class="header-anchor" href="#排名" aria-label="Permalink to &quot;排名&quot;">​</a></h2><h3 id="排名分类" tabindex="-1">排名分类 <a class="header-anchor" href="#排名分类" aria-label="Permalink to &quot;排名分类&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/ranking/gender</code></p><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;female&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;54d43437d47d13ff21cad58b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//周榜</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;追书最热榜 Top100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;cover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/ranking-cover/142319314350435&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;collapse&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;monthRank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;564d853484665f97662d0810&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//月榜</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;totalRank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;564d85b6dd2bd1ec660ea8e2&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 总榜</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h3 id="排名详情" tabindex="-1">排名详情 <a class="header-anchor" href="#排名详情" aria-label="Permalink to &quot;排名详情&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/ranking/:id</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>url params: {</span></span>
<span class="line"><span>  id: 排名id //周榜等</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;ranking&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;54d42d92321052167dfb75e3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;updated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2017-03-31T21:20:09.135Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;追书最热榜 Top100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;tag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zhuishuLatelyFollowerMale&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;cover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/ranking-cover/142319144267827&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/cover/148945782817557&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__v&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">790</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;monthRank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;564d820bc319238a644fb408&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;totalRank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;564d8494fe996c25652644d2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;created&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2017-04-01T03:20:20.988Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;isSub&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;collapse&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;new&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;gender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;male&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;priority&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;51d11e782de6405c45000068&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;天蚕土豆&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;cover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/agent/http://image.cmfu.com/books/2750457/2750457.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;shortIntro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。 无尽火域，炎帝执掌，万火焚苍穹。 武...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;大主宰&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;site&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zhuishuvip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;cat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;玄幻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;banned&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;latelyFollower&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">359456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;retentionRatio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;45.31&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ok: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h2 id="书评" tabindex="-1">书评 <a class="header-anchor" href="#书评" aria-label="Permalink to &quot;书评&quot;">​</a></h2><h3 id="讨论" tabindex="-1">讨论 <a class="header-anchor" href="#讨论" aria-label="Permalink to &quot;讨论&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/post/by-book?&amp;start=21&amp;limit=20</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>query strings: {</span></span>
<span class="line"><span>  book: {bookId},</span></span>
<span class="line"><span>  sort: (updated|created|comment-count) // 排序方式</span></span>
<span class="line"><span>  type: (normal,vote) // 未知</span></span>
<span class="line"><span>  start,</span></span>
<span class="line"><span>  limit</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;posts&quot;: [{</span></span>
<span class="line"><span>		&quot;_id&quot;: &quot;59b25a1ca17d25ad324e208d&quot;,</span></span>
<span class="line"><span>		&quot;author&quot;: {</span></span>
<span class="line"><span>			&quot;_id&quot;: &quot;54ef4d94704d6be45528af89&quot;,</span></span>
<span class="line"><span>			&quot;avatar&quot;: &quot;/avatar/34/bb/34bbc2992b34e6a042a83be1f6f3b735&quot;, //http://statics.zhuishushenqi.com</span></span>
<span class="line"><span>			&quot;nickname&quot;: &quot;追书家的小萝莉&quot;,</span></span>
<span class="line"><span>			&quot;activityAvatar&quot;: &quot;/activities/20170120/1.jpg&quot;,</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;official&quot;,</span></span>
<span class="line"><span>			&quot;lv&quot;: 9,</span></span>
<span class="line"><span>			&quot;gender&quot;: &quot;female&quot;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;type&quot;: &quot;vote&quot;,</span></span>
<span class="line"><span>		&quot;likeCount&quot;: 371,</span></span>
<span class="line"><span>		&quot;block&quot;: &quot;ramble&quot;,</span></span>
<span class="line"><span>		&quot;haveImage&quot;: true,</span></span>
<span class="line"><span>		&quot;state&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>		&quot;updated&quot;: &quot;2017-09-16T05:38:16.092Z&quot;,</span></span>
<span class="line"><span>		&quot;created&quot;: &quot;2017-09-08T08:51:40.345Z&quot;,</span></span>
<span class="line"><span>		&quot;commentCount&quot;: 5309,</span></span>
<span class="line"><span>		&quot;voteCount&quot;: 3980,</span></span>
<span class="line"><span>		&quot;title&quot;: &quot;【真够刺激】答题拿红包！邀请好友满30元就能提现！★攻略真的不先看下么！&quot;</span></span>
<span class="line"><span>	}],</span></span>
<span class="line"><span>	&quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="短评" tabindex="-1">短评 <a class="header-anchor" href="#短评" aria-label="Permalink to &quot;短评&quot;">​</a></h3><p>url: <code>http://api.zhuishushenqi.com/post/short-review/by-book</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>query strings: {</span></span>
<span class="line"><span>  book: {bookId},</span></span>
<span class="line"><span>  sortType: (lastUpdated|newest|mostlike) //排序方式</span></span>
<span class="line"><span>  start,</span></span>
<span class="line"><span>  limit</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;docs&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;_id&quot;: &quot;596affc7fe0ad34f1b8317e3&quot;,</span></span>
<span class="line"><span>      &quot;rating&quot;: 3,</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;short_review&quot;,</span></span>
<span class="line"><span>      &quot;author&quot;: {</span></span>
<span class="line"><span>        &quot;_id&quot;: &quot;596ac9b85d0fe1b460155952&quot;,</span></span>
<span class="line"><span>        &quot;avatar&quot;: &quot;/avatar/bd/bf/bdbf666388552ebb3166473e3f689dfd&quot;,</span></span>
<span class="line"><span>        &quot;nickname&quot;: &quot;素心&quot;,</span></span>
<span class="line"><span>        &quot;activityAvatar&quot;: &quot;&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>        &quot;lv&quot;: 4,</span></span>
<span class="line"><span>        &quot;gender&quot;: &quot;female&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;book&quot;: {</span></span>
<span class="line"><span>        &quot;_id&quot;: &quot;51060c88bb1c67cf28000035&quot;,</span></span>
<span class="line"><span>        &quot;cover&quot;: &quot;/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F23766%2F_23766_549079.jpg%2F&quot;,</span></span>
<span class="line"><span>        &quot;title&quot;: &quot;真灵九变&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;likeCount&quot;: 2,</span></span>
<span class="line"><span>      &quot;priority&quot;: 0.497,</span></span>
<span class="line"><span>      &quot;block&quot;: &quot;short_review&quot;,</span></span>
<span class="line"><span>      &quot;state&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>      &quot;updated&quot;: &quot;2017-08-06T09:58:26.733Z&quot;,</span></span>
<span class="line"><span>      &quot;created&quot;: &quot;2017-07-16T05:55:19.277Z&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;就是结尾有点烂尾了&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="书评-1" tabindex="-1">书评 <a class="header-anchor" href="#书评-1" aria-label="Permalink to &quot;书评&quot;">​</a></h2><p>url: <code>http://api.zhuishushenqi.com/post/review/by-book?book=51060c88bb1c67cf28000035&amp;sort=updated&amp;start=0&amp;limit=20</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>query strings: {</span></span>
<span class="line"><span>  book: {bookId},</span></span>
<span class="line"><span>  sort: (updated|created|comment-count),</span></span>
<span class="line"><span>  start,</span></span>
<span class="line"><span>  limit</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;total&quot;: 35,</span></span>
<span class="line"><span>	&quot;reviews&quot;: [{</span></span>
<span class="line"><span>		&quot;_id&quot;: &quot;584201194fe8537c0f7fdf32&quot;,</span></span>
<span class="line"><span>		&quot;rating&quot;: 1,</span></span>
<span class="line"><span>		&quot;author&quot;: {</span></span>
<span class="line"><span>			&quot;_id&quot;: &quot;580cc42178afb3190f41f5ae&quot;,</span></span>
<span class="line"><span>			&quot;avatar&quot;: &quot;/avatar/b3/70/b370b0054ae878829bfae3fe8ceacf3e&quot;,</span></span>
<span class="line"><span>			&quot;nickname&quot;: &quot;……&quot;,</span></span>
<span class="line"><span>			&quot;activityAvatar&quot;: &quot;/activities/20170120/4.jpg&quot;,</span></span>
<span class="line"><span>			&quot;type&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>			&quot;lv&quot;: 8,</span></span>
<span class="line"><span>			&quot;gender&quot;: &quot;male&quot;</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;helpful&quot;: {</span></span>
<span class="line"><span>			&quot;total&quot;: 35,</span></span>
<span class="line"><span>			&quot;yes&quot;: 117,</span></span>
<span class="line"><span>			&quot;no&quot;: 82</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		&quot;likeCount&quot;: 5,</span></span>
<span class="line"><span>		&quot;state&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>		&quot;updated&quot;: &quot;2017-09-13T15:08:48.577Z&quot;,</span></span>
<span class="line"><span>		&quot;created&quot;: &quot;2016-12-02T23:17:45.711Z&quot;,</span></span>
<span class="line"><span>		&quot;commentCount&quot;: 76,</span></span>
<span class="line"><span>		&quot;content&quot;: &quot;1）一边声明“猪脚资质一般”，一边又在没有“穿越神器”的情况下给猪脚开挂。修炼速度莫名其妙就比其他人快，这也是“资质一般”？能自圆其说不？\\n\\n2）明明是凡人流里那种勾心斗角杀人夺宝的世界，猪脚的朋友未免太多了吧？还各个都为猪脚着想，围着猪脚转？凡人流啊！那是神马鸡毛世界，那是人人都可能在你身后打闷棍的世界。想玩哥们弟兄义气江湖的，请出门左手见《飘渺之旅》下车。\\n\\n3）“俏皮、傲娇”的女主！我拉个擦，这个基本是所有YY书的鹤顶红了，本以为绝迹几千年，没想到还能见！\\n\\n4）师姐，不是1个，是10个！我进错门了吗？这是许仙传吗？真是许仙传就好了！这分明是睡裤外穿、浓妆艳抹的乡下小保姆嘛！\\n\\n5）美少妇师傅！你到底想写啥？玩后宫，人妻的请出门右转进晋江。\\n\\n6）N个陷害猪脚，差点让猪脚死球的同门，猪脚被坑了一次又一次，从来不报复，从来不想解决，于是被人从头坑到尾。请问，你是白求恩还是科利华？还是传说中的圣雄甘地？\\n\\n7）猪脚开挂升级也就罢了，猪脚的朋友们也是哥哥开挂。一开始书中声称“升溶血修士如何如何难，升锻蛋修士更是千中无一”，好，猪脚开挂，奇遇不断，十几年升到锻蛋！贫道以为这已经是牛逼透顶的了，结果再看，猪脚的朋友们也一个个都锻蛋了！这尼玛也是“如何如何难”？“千中无一”？？拜托你学凡人流，看过凡人没有？？？更恶心的是，就连猪脚随便找得几个土匪小弟，也一个个吃猪尿泡一样升锻蛋了。我。。。。叉。。。。&quot;,</span></span>
<span class="line"><span>		&quot;title&quot;: &quot;个人观点，看书前最好看看！&quot;</span></span>
<span class="line"><span>	}],</span></span>
<span class="line"><span>	&quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="书单" tabindex="-1">书单 <a class="header-anchor" href="#书单" aria-label="Permalink to &quot;书单&quot;">​</a></h2><p>url: <code>http://api.zhuishushenqi.com/book-list</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>query string: {</span></span>
<span class="line"><span>  sort: (collectorCount|created),</span></span>
<span class="line"><span>  duration: (last-seven-days|all),</span></span>
<span class="line"><span>  gender: (male|female),</span></span>
<span class="line"><span>  tag: (有点多),</span></span>
<span class="line"><span>  start</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>说明:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>本周最热的query是: sort=collectorCount&amp;duration=last-seven-days&amp;start=0</span></span>
<span class="line"><span>最新发布是: sort=created&amp;duration=all</span></span>
<span class="line"><span>最多收藏是: sort=collectorCount&amp;duration=all</span></span></code></pre></div><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;total&quot;: 241518,</span></span>
<span class="line"><span>  &quot;bookLists&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;_id&quot;: &quot;57331505025ffaa06cb28852&quot;,</span></span>
<span class="line"><span>      &quot;title&quot;: &quot;★星光书局 ★(04－20更&quot;,</span></span>
<span class="line"><span>      &quot;author&quot;: &quot;人闲&quot;,</span></span>
<span class="line"><span>      &quot;desc&quot;: &quot;☆准星（不好看），★一星，★★二星，★★★三星，★★★★，★★★★★五星 （持续更新中……）……………本期歌单:周慧敏《自作多情》、赵雷《已是两条路上的人》、张韶涵《寓言》、张惠妹《我最亲爱的》、张惠妹《哭砂》、张惠妹《剪爱》、张碧晨《渡红尘》、Amy Winehouse《You know I&#39;m no good》、邓紫棋《偶尔》、邓紫棋《喜欢你》、叶倩文《曾经心疼》、叶倩文《祝福》&quot;,</span></span>
<span class="line"><span>      &quot;gender&quot;: &quot;male&quot;,</span></span>
<span class="line"><span>      &quot;collectorCount&quot;: 96298,</span></span>
<span class="line"><span>      &quot;cover&quot;: &quot;/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41678%2F_41678_412098.jpg%2F&quot;,</span></span>
<span class="line"><span>      &quot;bookCount&quot;: 464</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="书单详情" tabindex="-1">书单详情 <a class="header-anchor" href="#书单详情" aria-label="Permalink to &quot;书单详情&quot;">​</a></h2><p>url: <code>http://api.zhuishushenqi.com/book-list/:bookId</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>url params: {</span></span>
<span class="line"><span>  bookId: {bookId}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;bookList&quot;: {</span></span>
<span class="line"><span>        &quot;_id&quot;: &quot;57331505025ffaa06cb28852&quot;,</span></span>
<span class="line"><span>        &quot;updated&quot;: &quot;2017-05-25T03:18:20.437Z&quot;,</span></span>
<span class="line"><span>        &quot;title&quot;: &quot;★星光书局 ★(04－20更&quot;,</span></span>
<span class="line"><span>        &quot;author&quot;: {</span></span>
<span class="line"><span>            &quot;_id&quot;: &quot;568dcb55f08722bf2bdeeb38&quot;,</span></span>
<span class="line"><span>            &quot;avatar&quot;: &quot;/avatar/41/32/41327b6d253592bb644fa4dd4c5c9b03&quot;,</span></span>
<span class="line"><span>            &quot;nickname&quot;: &quot;人闲&quot;,</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;normal&quot;,</span></span>
<span class="line"><span>            &quot;lv&quot;: 9</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;desc&quot;: &quot;☆准星（不好看），★一星，★★二星，★★★三星，★★★★，★★★★★五星 （持续更新中……）……………本期歌单:周慧敏《自作多情》、赵雷《已是两条路上的人》、张韶涵《寓言》、张惠妹《我最亲爱的》、张惠妹《哭砂》、张惠妹《剪爱》、张碧晨《渡红尘》、Amy Winehouse《You know I&#39;m no good》、邓紫棋《偶尔》、邓紫棋《喜欢你》、叶倩文《曾经心疼》、叶倩文《祝福》&quot;,</span></span>
<span class="line"><span>        &quot;gender&quot;: &quot;male&quot;,</span></span>
<span class="line"><span>        &quot;created&quot;: &quot;2016-05-11T11:18:29.278Z&quot;,</span></span>
<span class="line"><span>        &quot;tags&quot;: [</span></span>
<span class="line"><span>            &quot;热血&quot;,</span></span>
<span class="line"><span>            &quot;都市&quot;,</span></span>
<span class="line"><span>            &quot;现代&quot;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;stickStopTime&quot;: null,</span></span>
<span class="line"><span>        &quot;isDraft&quot;: false,</span></span>
<span class="line"><span>        &quot;isDistillate&quot;: false,</span></span>
<span class="line"><span>        &quot;collectorCount&quot;: 96299,</span></span>
<span class="line"><span>        &quot;books&quot;: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;book&quot;: {</span></span>
<span class="line"><span>                    &quot;cat&quot;: &quot;东方玄幻&quot;,</span></span>
<span class="line"><span>                    &quot;_id&quot;: &quot;579eaef492253c435235dbea&quot;,</span></span>
<span class="line"><span>                    &quot;title&quot;: &quot;斗战狂潮&quot;,</span></span>
<span class="line"><span>                    &quot;author&quot;: &quot;骷髅精灵&quot;,</span></span>
<span class="line"><span>                    &quot;longIntro&quot;: &quot;双月当空，无限可能的英魂世界孤寂黑暗，神秘古怪的嬉命小丑百城联邦，三大帝国，异族横行，魂兽霸幽这是一个英雄辈出的年代，人类卧薪尝胆重掌地球主权，孕育着进军高纬度的野望！重点是……二年级的废柴学长王同学，如何使用嬉命轮盘，撬动整个世界，学妹们，请注意，学长来了！！！斗战一群：21222419（两千人战力群）骷髅的微信公共号：kuloujingling00新浪微博：骷髅精灵&quot;,</span></span>
<span class="line"><span>                    &quot;cover&quot;: &quot;/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1286280%2F_1286280_696459.jpg%2F&quot;,</span></span>
<span class="line"><span>                    &quot;site&quot;: &quot;zhuishuvip&quot;,</span></span>
<span class="line"><span>                    &quot;majorCate&quot;: &quot;玄幻&quot;,</span></span>
<span class="line"><span>                    &quot;minorCate&quot;: &quot;东方玄幻&quot;,</span></span>
<span class="line"><span>                    &quot;banned&quot;: 0,</span></span>
<span class="line"><span>                    &quot;latelyFollower&quot;: 26038,</span></span>
<span class="line"><span>                    &quot;wordCount&quot;: 1962241,</span></span>
<span class="line"><span>                    &quot;retentionRatio&quot;: 60.36</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                &quot;comment&quot;: &quot;★★二星…………&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;shareLink&quot;: &quot;http://share.zhuishushenqi.com/booklist/57331505025ffaa06cb28852&quot;,</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;57331505025ffaa06cb28852&quot;,</span></span>
<span class="line"><span>        &quot;total&quot;: 464</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="搜索热词" tabindex="-1">搜索热词 <a class="header-anchor" href="#搜索热词" aria-label="Permalink to &quot;搜索热词&quot;">​</a></h2><p>url: <code>http://api.zhuishushenqi.com/book/search-hotwords</code></p><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;searchHotWords&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;word&quot;: &quot;系统&quot;,</span></span>
<span class="line"><span>            &quot;times&quot;: 1830,</span></span>
<span class="line"><span>            &quot;isNew&quot;: 0,</span></span>
<span class="line"><span>            &quot;soaring&quot;: 0</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        ....</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="热门搜索" tabindex="-1">热门搜索 <a class="header-anchor" href="#热门搜索" aria-label="Permalink to &quot;热门搜索&quot;">​</a></h2><p>url: <code>http://api.zhuishushenqi.com/book/hot-word</code></p><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;hotWords&quot;: [</span></span>
<span class="line"><span>        &quot;超级兵王&quot;,</span></span>
<span class="line"><span>        &quot;透视小乡民&quot;,</span></span>
<span class="line"><span>        &quot;逍遥兵王&quot;,</span></span>
<span class="line"><span>        &quot;医手遮天：极品丑妃傲天下&quot;,</span></span>
<span class="line"><span>        &quot;农门寡嫂：状元小叔炕上来&quot;,</span></span>
<span class="line"><span>        &quot;天行&quot;,</span></span>
<span class="line"><span>        &quot;寂寞寂寞就好&quot;,</span></span>
<span class="line"><span>        &quot;死神的哈士奇&quot;,</span></span>
<span class="line"><span>        &quot;全职法师&quot;,</span></span>
<span class="line"><span>        &quot;大理寺少卿的宠物生涯&quot;,</span></span>
<span class="line"><span>        &quot;婚久情已深&quot;,</span></span>
<span class="line"><span>        &quot;我的微信连三界&quot;,</span></span>
<span class="line"><span>        &quot;剃头匠&quot;,</span></span>
<span class="line"><span>        &quot;超级全能学生&quot;,</span></span>
<span class="line"><span>        &quot;宰执天下&quot;,</span></span>
<span class="line"><span>        &quot;大叔，不可以&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;newHotWords&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;word&quot;: &quot;超级兵王&quot;,</span></span>
<span class="line"><span>            &quot;book&quot;: &quot;508de73e55e53b9a1a000031&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="搜索补全" tabindex="-1">搜索补全 <a class="header-anchor" href="#搜索补全" aria-label="Permalink to &quot;搜索补全&quot;">​</a></h2><p>url: <code>http://api.zhuishushenqi.com/book/auto-complete?query={keyword}</code></p><p>request:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>querystring {</span></span>
<span class="line"><span>  query</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>response:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;keywords&quot;: [</span></span>
<span class="line"><span>        &quot;分花拂柳&quot;,</span></span>
<span class="line"><span>        &quot;分布文化&quot;,</span></span>
<span class="line"><span>        &quot;分金术&quot;,</span></span>
<span class="line"><span>        &quot;分身投胎万界&quot;,</span></span>
<span class="line"><span>        &quot;分手妻约&quot;,</span></span>
<span class="line"><span>        &quot;分手才说我爱你&quot;,</span></span>
<span class="line"><span>        &quot;分身二次元&quot;,</span></span>
<span class="line"><span>        &quot;分身八爪鱼&quot;,</span></span>
<span class="line"><span>        &quot;分身大爆炸&quot;,</span></span>
<span class="line"><span>        &quot;分裂人格&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;ok&quot;: true</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,99),l=[t];function h(e,k,o,E,u,r){return i(),a("div",null,l)}const q=s(p,[["render",h]]);export{c as __pageData,q as default};
