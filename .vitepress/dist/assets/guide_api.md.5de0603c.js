import{_ as s,c as a,o as n,Q as p}from"./chunks/framework.06fa6207.js";const g=JSON.parse('{"title":"api 分享收集","description":"","frontmatter":{},"headers":[],"relativePath":"guide/api.md","filePath":"guide/api.md","lastUpdated":1696843868000}'),l={name:"guide/api.md"},e=p(`<h1 id="api-分享收集" tabindex="-1">api 分享收集 <a class="header-anchor" href="#api-分享收集" aria-label="Permalink to &quot;api 分享收集&quot;">​</a></h1><h2 id="功能" tabindex="-1">功能: <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能:&quot;">​</a></h2><ul><li>✨在线上传/下载 支持浏览器直链下载!</li><li>💾支持视频音频在线播放</li><li>📚 文档 、图书内容 、Office 在线预览</li><li>💻 覆盖全部存储策略的 WebDAV 协议支持</li><li>🌗光明、黑暗模式,</li><li>📡剩下的再说吧....</li><li>🌈 ... ...</li></ul><h2 id="网易云音乐" tabindex="-1">网易云音乐 <a class="header-anchor" href="#网易云音乐" aria-label="Permalink to &quot;网易云音乐&quot;">​</a></h2><p>API简介：获取网易云ID的音乐直链，欢迎对接</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//api.aa1.cn/api/wymusic/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">MP3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/wymusic/index.php?id=277382</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//api.aa1.cn/api/wymusic/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">MP3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/wymusic/index.php?id=277382</span></span></code></pre></div><h2 id="每日一言" tabindex="-1">每日一言 <a class="header-anchor" href="#每日一言" aria-label="Permalink to &quot;每日一言&quot;">​</a></h2><p>API简介：每日一言，欢迎对接</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/?encode=json</span></span>
<span class="line"><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/ （从7种分类中随机抽取）</span></span>
<span class="line"><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/?c=b （请求获得一个分类是漫画的句子）</span></span>
<span class="line"><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/?c=f&amp;encode=text （请求获得一个来自网络的句子，并以纯文本格式输出）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/?encode=json</span></span>
<span class="line"><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/ （从7种分类中随机抽取）</span></span>
<span class="line"><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/?c=b （请求获得一个分类是漫画的句子）</span></span>
<span class="line"><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v1.hitokoto.cn/?c=f&amp;encode=text （请求获得一个来自网络的句子，并以纯文本格式输出）</span></span></code></pre></div><h2 id="高质量小姐姐秒播线路" tabindex="-1">高质量小姐姐秒播线路 <a class="header-anchor" href="#高质量小姐姐秒播线路" aria-label="Permalink to &quot;高质量小姐姐秒播线路&quot;">​</a></h2><p>API简介：【秒播线路】高质量现爬抖音各种小姐姐视频，可以说是精品中的精品 汇聚：陈佩奇，程女士，万小七，爆胎草莓酱，井川里予，巨型萝莉，蔡萝莉， 一栗小莎子，菜菜...等知名女网红（无忧集团旗下艺人...太多不展示了） 大量抖音现产变装</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-girl-11-02/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-girl-11-02/index.php?type=json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-girl-11-02/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-girl-11-02/index.php?type=json</span></span></code></pre></div><h2 id="获取网页所有图片" tabindex="-1">获取网页所有图片 <a class="header-anchor" href="#获取网页所有图片" aria-label="Permalink to &quot;获取网页所有图片&quot;">​</a></h2><p>API简介：爬取目标站当前页面所有图片源</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-web-img/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-web-img/index.php?url=api.aa1.cn&amp;type=list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-web-img/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-web-img/index.php?url=api.aa1.cn&amp;type=list</span></span></code></pre></div><h2 id="全国行政规划数据库" tabindex="-1">全国行政规划数据库 <a class="header-anchor" href="#全国行政规划数据库" aria-label="Permalink to &quot;全国行政规划数据库&quot;">​</a></h2><p>API简介：全国省市区镇村【五级版】，数据来源于国家统计局</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：https:</span><span style="color:#6A737D;">//zj.v.api.aa1.cn/api/xz/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：https:</span><span style="color:#6A737D;">//zj.v.api.aa1.cn/api/xz/?code=654028207203</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：https:</span><span style="color:#6A737D;">//zj.v.api.aa1.cn/api/xz/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：https:</span><span style="color:#6A737D;">//zj.v.api.aa1.cn/api/xz/?code=654028207203</span></span></code></pre></div><table><thead><tr><th style="text-align:center;">接口名称</th><th style="text-align:center;">接口类型</th><th style="text-align:center;">接口说明</th></tr></thead><tbody><tr><td style="text-align:center;">code</td><td style="text-align:center;">string</td><td style="text-align:center;">状态码</td></tr><tr><td style="text-align:center;">ID</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的区划代码</td></tr><tr><td style="text-align:center;">msg</td><td style="text-align:center;">string</td><td style="text-align:center;">查询结果返回</td></tr><tr><td style="text-align:center;">Name</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的区划代码结果</td></tr><tr><td style="text-align:center;">Province</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的省份</td></tr><tr><td style="text-align:center;">City</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的城市</td></tr><tr><td style="text-align:center;">District</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的区/县</td></tr><tr><td style="text-align:center;">Tow</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的街道/乡</td></tr><tr><td style="text-align:center;">Villag</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的村/社区</td></tr><tr><td style="text-align:center;">LevelType</td><td style="text-align:center;">string</td><td style="text-align:center;">查询的区划等级：1～5级</td></tr></tbody></table><h2 id="小姐姐短视频" tabindex="-1">小姐姐短视频 <a class="header-anchor" href="#小姐姐短视频" aria-label="Permalink to &quot;小姐姐短视频&quot;">​</a></h2><p>API简介：「随机」遍历目录下文件，视频数据来源于自媒体平台</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：https:</span><span style="color:#6A737D;">//tucdn.wpon.cn/api-girl/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：MP</span><span style="color:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：https:</span><span style="color:#6A737D;">//tucdn.wpon.cn/api-girl/index.php?wpon=json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：https:</span><span style="color:#6A737D;">//tucdn.wpon.cn/api-girl/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：MP</span><span style="color:#005CC5;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：https:</span><span style="color:#6A737D;">//tucdn.wpon.cn/api-girl/index.php?wpon=json</span></span></code></pre></div><h2 id="qq获取邮箱" tabindex="-1">QQ获取邮箱 <a class="header-anchor" href="#qq获取邮箱" aria-label="Permalink to &quot;QQ获取邮箱&quot;">​</a></h2><p>API简介：获取你的QQ邮箱</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：https:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqemail/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：HTML</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：https:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqemail/index.php?qq=15001904</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：https:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqemail/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：HTML</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：https:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqemail/index.php?qq=15001904</span></span></code></pre></div><h2 id="qq获取json" tabindex="-1">QQ获取JSON <a class="header-anchor" href="#qq获取json" aria-label="Permalink to &quot;QQ获取JSON&quot;">​</a></h2><p>API简介：获取你的QQ数据并返回JSON</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqjson/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqjson/index.php?qq=15001904</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqjson/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/qqjson/index.php?qq=15001904</span></span></code></pre></div><h2 id="pc端风景视频" tabindex="-1">PC端风景视频 <a class="header-anchor" href="#pc端风景视频" aria-label="Permalink to &quot;PC端风景视频&quot;">​</a></h2><p>API简介：「随机」内嵌至你的网站背景，绝绝子！</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-fj/index.php?aa1=suf7y58th48u935 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">MP4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-fj/index.php?aa1=json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-fj/index.php?aa1=suf7y58th48u935 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">MP4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-fj/index.php?aa1=json</span></span></code></pre></div><h2 id="朋友圈一言" tabindex="-1">朋友圈一言 <a class="header-anchor" href="#朋友圈一言" aria-label="Permalink to &quot;朋友圈一言&quot;">​</a></h2><p>API简介：朋友圈每日经典一句</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/pyq/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/pyq/index.php?aa1=json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/pyq/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/pyq/index.php?aa1=json</span></span></code></pre></div><h2 id="知乎每日新闻" tabindex="-1">知乎每日新闻 <a class="header-anchor" href="#知乎每日新闻" aria-label="Permalink to &quot;知乎每日新闻&quot;">​</a></h2><p>API简介：知乎每日最新新闻，欢迎对接</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/zhihu-news/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/zhihu-news/index.php?aa1=xiarou</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/zhihu-news/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/zhihu-news/index.php?aa1=xiarou</span></span></code></pre></div><h2 id="名人名言" tabindex="-1">名人名言 <a class="header-anchor" href="#名人名言" aria-label="Permalink to &quot;名人名言&quot;">​</a></h2><p>API简介：毒鸡汤不够？上名人说的名话！</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php?aa1=json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php?aa1=json</span></span></code></pre></div><h2 id="md5在线加解密" tabindex="-1">MD5在线加解密 <a class="header-anchor" href="#md5在线加解密" aria-label="Permalink to &quot;MD5在线加解密&quot;">​</a></h2><p>API简介：加解密MD5，仅简单的md5解密</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-md5/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">TXT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-md5/go.php?act=加密&amp;md5=夏柔123456</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-md5/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">TXT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//v.api.aa1.cn/api/api-md5/go.php?act=加密&amp;md5=夏柔123456</span></span></code></pre></div><h2 id="ai智能写作" tabindex="-1">AI智能写作 <a class="header-anchor" href="#ai智能写作" aria-label="Permalink to &quot;AI智能写作&quot;">​</a></h2><p>API简介：夸克官方智能续写</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">接口地址：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//api.pearktrue.cn/api/ai/write/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">返回格式：</span><span style="color:#79B8FF;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求方式：</span><span style="color:#79B8FF;">GET</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">POST</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">请求参数：</span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//api.pearktrue.cn/api/ai/write/?text=体育课&amp;page=1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">接口地址：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//api.pearktrue.cn/api/ai/write/ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">返回格式：</span><span style="color:#005CC5;">JSON</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求方式：</span><span style="color:#005CC5;">GET</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">POST</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">请求参数：</span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//api.pearktrue.cn/api/ai/write/?text=体育课&amp;page=1</span></span></code></pre></div>`,46),t=[e];function o(c,i,r,y,d,E){return n(),a("div",null,t)}const v=s(l,[["render",o]]);export{g as __pageData,v as default};
