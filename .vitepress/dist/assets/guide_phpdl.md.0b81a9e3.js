import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.18efe07a.js";const $=JSON.parse('{"title":"PHP 代理教程","description":"","frontmatter":{},"headers":[],"relativePath":"guide/phpdl.md","filePath":"guide/phpdl.md","lastUpdated":1694305646000}'),p={name:"guide/phpdl.md"},o=l(`<h1 id="php-代理教程" tabindex="-1">PHP 代理教程 <a class="header-anchor" href="#php-代理教程" aria-label="Permalink to &quot;PHP 代理教程&quot;">​</a></h1><p>##北斗融媒(辽宁云)PHP</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#E1E4E8;"> $id</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;"> $ids </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">array</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;cctv1&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;cctv1&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//CCTV1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;cctv4&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;cctv4&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//CCTV4</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;cctv13&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;cctv13&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//CCTV13</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnws&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lntv&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽宁卫视</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnty&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;typd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽宁体育</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnds&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;dspd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽宁都市</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnys&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;yspd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽宁影视剧</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnsh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;shpd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽宁生活</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnbf&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bfpd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽北方</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lnjyqs&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;qspd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//辽宁教育青少</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;yjgw&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;yjgw&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//宜家购物</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;yxjj&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;yxjj&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//GTV游戏竞技</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;xdm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;xdm&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//新动漫</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;"> $time </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">time</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;"> $m3u8 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;http://bdrmtvzb.lnyun.com.cn/bdrm/&quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$ids[$id]</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&quot;.m3u8?auth_key=&quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$time</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&quot;-0-0-&quot;</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">md5</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/</span><span style="color:#DBEDFF;">bdrm</span><span style="color:#9ECBFF;">/&quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$ids[$id]</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&quot;.m3u8-&quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$time</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&quot;-0-0-dPBxXGs7yIaSZG5m&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Location:&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$m3u8);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#24292E;"> $id</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#005CC5;">id</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;"> $ids </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">array</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;cctv1&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;cctv1&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//CCTV1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;cctv4&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;cctv4&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//CCTV4</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;cctv13&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;cctv13&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//CCTV13</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnws&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lntv&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽宁卫视</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnty&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;typd&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽宁体育</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnds&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;dspd&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽宁都市</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnys&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;yspd&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽宁影视剧</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnsh&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;shpd&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽宁生活</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnbf&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bfpd&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽北方</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lnjyqs&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;qspd&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//辽宁教育青少</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;yjgw&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;yjgw&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//宜家购物</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;yxjj&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;yxjj&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//GTV游戏竞技</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;xdm&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;xdm&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//新动漫</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;"> $time </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">time</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> $m3u8 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;http://bdrmtvzb.lnyun.com.cn/bdrm/&quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$ids[$id]</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&quot;.m3u8?auth_key=&quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$time</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&quot;-0-0-&quot;</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">md5</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/bdrm/&quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$ids[$id]</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&quot;.m3u8-&quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$time</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&quot;-0-0-dPBxXGs7yIaSZG5m&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Location:&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$m3u8);</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">?&gt;</span></span></code></pre></div><h2 id="奥点-广电-云代理php源码" tabindex="-1">奥点（广电）云代理php源码 <a class="header-anchor" href="#奥点-广电-云代理php源码" aria-label="Permalink to &quot;奥点（广电）云代理php源码&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$id</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$url</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;http://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id=&quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$id</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">file_get_contents</span><span style="color:#E1E4E8;">($url);</span></span>
<span class="line"><span style="color:#E1E4E8;">$json </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">json_decode</span><span style="color:#E1E4E8;">($result);</span></span>
<span class="line"><span style="color:#E1E4E8;">$playurl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $json</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">data</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">hlsUrl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;location: &quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$playurl);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$id</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$url</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;http://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id=&quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$id</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">file_get_contents</span><span style="color:#24292E;">($url);</span></span>
<span class="line"><span style="color:#24292E;">$json </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">json_decode</span><span style="color:#24292E;">($result);</span></span>
<span class="line"><span style="color:#24292E;">$playurl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $json</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">data</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">hlsUrl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;location: &quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$playurl);</span></span></code></pre></div><h2 id="韩国kbs直播代理php源码" tabindex="-1">韩国KBS直播代理php源码 <a class="header-anchor" href="#韩国kbs直播代理php源码" aria-label="Permalink to &quot;韩国KBS直播代理php源码&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#E1E4E8;">$id</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$ids </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">array</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;11&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;12&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;3&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;14&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;81&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;N91&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;6&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;N92&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;7&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;N93&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;8&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;N94&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;9&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;N96&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;21&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;11&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;22&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;12&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;23&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;13&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;24&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;14&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;25&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;15&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;26&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;16&quot;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&quot;I92&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/&quot;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$ids[$id];</span></span>
<span class="line"><span style="color:#E1E4E8;">$ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">curl_init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_URL</span><span style="color:#E1E4E8;">, $url);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_SSL_VERIFYPEER</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_SSL_VERIFYHOST</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_RETURNTRANSFER</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#E1E4E8;">$re </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">curl_exec</span><span style="color:#E1E4E8;">($ch);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_close</span><span style="color:#E1E4E8;">($ch);</span></span>
<span class="line"><span style="color:#79B8FF;">preg_match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;|service_url&quot;:&quot;(.*?)&quot;|i&#39;</span><span style="color:#E1E4E8;">,$re,$play);</span></span>
<span class="line"><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Location:&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$play[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#F97583;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#24292E;">$id</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$ids </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">array</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;11&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;12&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;3&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;14&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;81&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;N91&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;6&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;N92&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;7&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;N93&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;8&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;N94&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;9&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;N96&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;21&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;11&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;22&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;12&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;23&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;13&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;24&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;14&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;15&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;26&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;16&quot;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&quot;I92&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/&quot;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$ids[$id];</span></span>
<span class="line"><span style="color:#24292E;">$ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">curl_init</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_URL</span><span style="color:#24292E;">, $url);</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_SSL_VERIFYPEER</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_SSL_VERIFYHOST</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_RETURNTRANSFER</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#24292E;">$re </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">curl_exec</span><span style="color:#24292E;">($ch);</span></span>
<span class="line"><span style="color:#005CC5;">curl_close</span><span style="color:#24292E;">($ch);</span></span>
<span class="line"><span style="color:#005CC5;">preg_match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;|service_url&quot;:&quot;(.*?)&quot;|i&#39;</span><span style="color:#24292E;">,$re,$play);</span></span>
<span class="line"><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Location:&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$play[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#D73A49;">?&gt;</span></span></code></pre></div><h2 id="txt文本源-批量替换链接-php代码" tabindex="-1">txt文本源，批量替换链接，php代码 <a class="header-anchor" href="#txt文本源-批量替换链接-php代码" aria-label="Permalink to &quot;txt文本源，批量替换链接，php代码&quot;">​</a></h2><p>有时在网上找的代理ID，需要替换代理链接时，不停的使用鼠标粘贴复制。费时费力，在网上找了下资料。特写了php代码批量替换txt文本里的链接。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#6A737D;">//pl.php?url=111.com&amp;url2=222.com&amp;txt=333</span></span>
<span class="line"><span style="color:#6A737D;">//使用方法把111.com换成你123.txt里面的链接，222.com换成需要替换新的链接，333是替换完成后在你服务器生成新的txt名称</span></span>
<span class="line"><span style="color:#E1E4E8;">$url</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$url2</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#9ECBFF;">&#39;url2&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$txt</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#9ECBFF;">&#39;txt&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$info</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">file_get_contents</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./123.txt&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">($url,$url2,$info);</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> $a;</span></span>
<span class="line"><span style="color:#E1E4E8;">	$c</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$a</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	$fp</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">fopen</span><span style="color:#E1E4E8;">($txt</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;.txt&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">fwrite</span><span style="color:#E1E4E8;">($fp,$c);</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">fclose</span><span style="color:#E1E4E8;">($fp);</span></span>
<span class="line"><span style="color:#F97583;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#6A737D;">//pl.php?url=111.com&amp;url2=222.com&amp;txt=333</span></span>
<span class="line"><span style="color:#6A737D;">//使用方法把111.com换成你123.txt里面的链接，222.com换成需要替换新的链接，333是替换完成后在你服务器生成新的txt名称</span></span>
<span class="line"><span style="color:#24292E;">$url</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$url2</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#032F62;">&#39;url2&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$txt</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#032F62;">&#39;txt&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$info</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">file_get_contents</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./123.txt&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">($url,$url2,$info);</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> $a;</span></span>
<span class="line"><span style="color:#24292E;">	$c</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$a</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	$fp</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">fopen</span><span style="color:#24292E;">($txt</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;.txt&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">fwrite</span><span style="color:#24292E;">($fp,$c);</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">fclose</span><span style="color:#24292E;">($fp);</span></span>
<span class="line"><span style="color:#D73A49;">?&gt;</span></span></code></pre></div><h2 id="掌上南昌php代理源码" tabindex="-1">掌上南昌PHP代理源码 <a class="header-anchor" href="#掌上南昌php代理源码" aria-label="Permalink to &quot;掌上南昌PHP代理源码&quot;">​</a></h2><p>获取所有频道信息：<a href="http://zsnc.nctv.net.cn/api/contents/list?category_id=469&amp;page_size=20&amp;page=1" target="_blank" rel="noreferrer">http://zsnc.nctv.net.cn/api/contents/list?category_id=469&amp;page_size=20&amp;page=1</a> 算法有点复杂。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#79B8FF;">error_reporting</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#E1E4E8;">$_id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $_GET[</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">// 1 2 3 4 </span></span>
<span class="line"><span style="color:#6A737D;">//http://zsnc.nctv.net.cn/api/contents/list?category_id=469&amp;page_size=20&amp;page=1  获取所有频道信息</span></span>
<span class="line"><span style="color:#6A737D;">//http://zsnc.nctv.net.cn/api/contents/info?id=126786  </span></span>
<span class="line"><span style="color:#E1E4E8;">$channel_id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">array</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;jw22cAZ&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;LfqghkO&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;an6J0sz&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;22zqwYf&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 126784  126785 126786 126787 </span></span>
<span class="line"><span style="color:#E1E4E8;">$_id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $channel_id [</span><span style="color:#79B8FF;">intval</span><span style="color:#E1E4E8;">($_id)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$md52 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">md5</span><span style="color:#E1E4E8;">($_id</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;Tidenctvzsncapp&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$str3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">time</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">29</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">27</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$sb </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $sb</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md52,</span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$md53 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">md5</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tide&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$str3</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$sb);</span></span>
<span class="line"><span style="color:#E1E4E8;">$replace </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t=&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$str3</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;&amp;c=&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$_id</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;&amp;a=nctvzsncapp&#39;</span><span style="color:#F97583;">.</span><span style="color:#9ECBFF;">&#39;&amp;v=&#39;</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md53,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md53,</span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md53,</span><span style="color:#79B8FF;">31</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md53,</span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($md53,</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$replace </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">base64_encode</span><span style="color:#E1E4E8;">($replace);</span></span>
<span class="line"><span style="color:#E1E4E8;">$replace </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;=&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;|&#39;</span><span style="color:#E1E4E8;">,$replace);</span></span>
<span class="line"><span style="color:#79B8FF;">preg_match_all</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/</span><span style="color:#DBEDFF;">[1-9]</span><span style="color:#9ECBFF;">/&#39;</span><span style="color:#E1E4E8;">,$replace,$trim);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">$trim </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">array_unique</span><span style="color:#E1E4E8;">($trim[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]); </span></span>
<span class="line"><span style="color:#E1E4E8;"> $str4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $replace;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">($i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;$i</span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">($trim);$i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    $intval </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">intval</span><span style="color:#E1E4E8;">($trim[$i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">($intval </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span></span>
<span class="line"><span style="color:#E1E4E8;">        $string2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($replace,$intval</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">stripos</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#E1E4E8;">,$string2)</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            $indexOf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">strpos</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#E1E4E8;">,$string2) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ($intval </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> $intval)) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">52</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">             </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">            $str4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceSomeWhere</span><span style="color:#E1E4E8;">($str4, </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#E1E4E8;">,$indexOf,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),$intval);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $string3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($replace,$intval</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">stripos</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#E1E4E8;">,$string3)</span><span style="color:#F97583;">&gt;=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            $indexOf2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">strpos</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#E1E4E8;">,$string3) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> $intval ) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">52</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            $str4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceSomeWhere</span><span style="color:#E1E4E8;">($str4 , </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#E1E4E8;">,$indexOf2,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">),$intval);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">$bstrURL </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://mediaapi.nctv.net.cn/apiv3.2.3/m3u8.php?token=&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$str4;</span></span>
<span class="line"><span style="color:#E1E4E8;">$ch </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">curl_init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_URL</span><span style="color:#E1E4E8;">, $bstrURL);          </span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_SSL_VERIFYPEER</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_SSL_VERIFYHOST</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">FALSE</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_RETURNTRANSFER</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch, </span><span style="color:#79B8FF;">CURLOPT_USERAGENT</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;User-Agent: Dalvik/2.1.0 (Linux; U; Android 6.0; 1505-A01 Build/MRA58K)&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">curl_exec</span><span style="color:#E1E4E8;">($ch);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_close</span><span style="color:#E1E4E8;">($ch);</span></span>
<span class="line"><span style="color:#E1E4E8;">$data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($data,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">strlen</span><span style="color:#E1E4E8;">($data)</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 妈的。这个地方恶心到我了。无敌！！！</span></span>
<span class="line"><span style="color:#E1E4E8;">$obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">json_decode</span><span style="color:#E1E4E8;">($data);</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">($obj</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">status </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;location:&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$obj</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">address);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Refresh:0&quot;</span><span style="color:#E1E4E8;">);    </span><span style="color:#6A737D;">// 因为有个特别恶心的点，可能会出现token过期，所以让它刷新再获取。</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceSomeWhere</span><span style="color:#E1E4E8;">($str,$str2,$i) </span><span style="color:#6A737D;">// What the fuck!</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    $str3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    $str4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($i </span><span style="color:#F97583;">!=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $str4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($str,</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,$i</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        $str3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($str,$i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $str4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        $str3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">substr</span><span style="color:#E1E4E8;">($str,$i);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $str4</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$str2</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$str3 ;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#005CC5;">error_reporting</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#24292E;">$_id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $_GET[</span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">]; </span><span style="color:#6A737D;">// 1 2 3 4 </span></span>
<span class="line"><span style="color:#6A737D;">//http://zsnc.nctv.net.cn/api/contents/list?category_id=469&amp;page_size=20&amp;page=1  获取所有频道信息</span></span>
<span class="line"><span style="color:#6A737D;">//http://zsnc.nctv.net.cn/api/contents/info?id=126786  </span></span>
<span class="line"><span style="color:#24292E;">$channel_id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">array</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;jw22cAZ&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;LfqghkO&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;an6J0sz&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;22zqwYf&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 126784  126785 126786 126787 </span></span>
<span class="line"><span style="color:#24292E;">$_id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $channel_id [</span><span style="color:#005CC5;">intval</span><span style="color:#24292E;">($_id)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$md52 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">md5</span><span style="color:#24292E;">($_id</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;Tidenctvzsncapp&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$str3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">time</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">14</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">13</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">29</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">28</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">27</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$sb </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $sb</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md52,</span><span style="color:#005CC5;">26</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$md53 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">md5</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;tide&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$str3</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$sb);</span></span>
<span class="line"><span style="color:#24292E;">$replace </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t=&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$str3</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;&amp;c=&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$_id</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;&amp;a=nctvzsncapp&#39;</span><span style="color:#D73A49;">.</span><span style="color:#032F62;">&#39;&amp;v=&#39;</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md53,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md53,</span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md53,</span><span style="color:#005CC5;">31</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md53,</span><span style="color:#005CC5;">17</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($md53,</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$replace </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">base64_encode</span><span style="color:#24292E;">($replace);</span></span>
<span class="line"><span style="color:#24292E;">$replace </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;=&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;|&#39;</span><span style="color:#24292E;">,$replace);</span></span>
<span class="line"><span style="color:#005CC5;">preg_match_all</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/[1-9]/&#39;</span><span style="color:#24292E;">,$replace,$trim);</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">$trim </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">array_unique</span><span style="color:#24292E;">($trim[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]); </span></span>
<span class="line"><span style="color:#24292E;"> $str4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $replace;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">($i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;$i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">count</span><span style="color:#24292E;">($trim);$i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    $intval </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">intval</span><span style="color:#24292E;">($trim[$i]);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">($intval </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">         </span></span>
<span class="line"><span style="color:#24292E;">        $string2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($replace,$intval</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">stripos</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#24292E;">,$string2)</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            $indexOf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">strpos</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#24292E;">,$string2) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ($intval </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> $intval)) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">52</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">             </span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">            $str4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">replaceSomeWhere</span><span style="color:#24292E;">($str4, </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#24292E;">,$indexOf,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">),$intval);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        $string3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($replace,$intval</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">stripos</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#24292E;">,$string3)</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            $indexOf2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">strpos</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#24292E;">,$string3) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> $intval ) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">52</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            $str4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">replaceSomeWhere</span><span style="color:#24292E;">($str4 , </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ&#39;</span><span style="color:#24292E;">,$indexOf2,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">),$intval);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">     </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">$bstrURL </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://mediaapi.nctv.net.cn/apiv3.2.3/m3u8.php?token=&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$str4;</span></span>
<span class="line"><span style="color:#24292E;">$ch </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">curl_init</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_URL</span><span style="color:#24292E;">, $bstrURL);          </span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_SSL_VERIFYPEER</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_SSL_VERIFYHOST</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">FALSE</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_RETURNTRANSFER</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch, </span><span style="color:#005CC5;">CURLOPT_USERAGENT</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;User-Agent: Dalvik/2.1.0 (Linux; U; Android 6.0; 1505-A01 Build/MRA58K)&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">curl_exec</span><span style="color:#24292E;">($ch);</span></span>
<span class="line"><span style="color:#005CC5;">curl_close</span><span style="color:#24292E;">($ch);</span></span>
<span class="line"><span style="color:#24292E;">$data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($data,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">strlen</span><span style="color:#24292E;">($data)</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 妈的。这个地方恶心到我了。无敌！！！</span></span>
<span class="line"><span style="color:#24292E;">$obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">json_decode</span><span style="color:#24292E;">($data);</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">($obj</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">status </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;location:&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$obj</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">address);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">else</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Refresh:0&quot;</span><span style="color:#24292E;">);    </span><span style="color:#6A737D;">// 因为有个特别恶心的点，可能会出现token过期，所以让它刷新再获取。</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">replaceSomeWhere</span><span style="color:#24292E;">($str,$str2,$i) </span><span style="color:#6A737D;">// What the fuck!</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    $str3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    $str4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($i </span><span style="color:#D73A49;">!=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        $str4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($str,</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,$i</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        $str3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($str,$i);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        $str4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        $str3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">substr</span><span style="color:#24292E;">($str,$i);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $str4</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$str2</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$str3 ;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">?&gt;</span></span></code></pre></div><h2 id="广电云长沙电视台节目源php代理" tabindex="-1">广电云长沙电视台节目源PHP代理 <a class="header-anchor" href="#广电云长沙电视台节目源php代理" aria-label="Permalink to &quot;广电云长沙电视台节目源PHP代理&quot;">​</a></h2><p>访问地址格式：<a href="http://xn--zfru1gfr6b388b19n1l0a6gu/hncs.php?id=XXX" target="_blank" rel="noreferrer">http://自己的服务器地址/hncs.php?id=XXX</a> id 频道 346 长沙新闻频道 348 长沙政法频道 349 长沙女性频道 350 长沙影视频道 354 长沙磁浮电视 355 长沙地铁电视 356 长沙嘉丽购物 357 长沙移动电视</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#E1E4E8;">$id</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id=&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$id;</span></span>
<span class="line"><span style="color:#E1E4E8;">$data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">file_get_contents</span><span style="color:#E1E4E8;">($url);</span></span>
<span class="line"><span style="color:#79B8FF;">preg_match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/</span><span style="color:#DBEDFF;">playUrl&quot;:&quot;(.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">?)&quot;</span><span style="color:#9ECBFF;">/&#39;</span><span style="color:#E1E4E8;">,$data,$m);</span></span>
<span class="line"><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;location:&#39;</span><span style="color:#F97583;">.</span><span style="color:#79B8FF;">urldecode</span><span style="color:#E1E4E8;">($m[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]));</span></span>
<span class="line"><span style="color:#F97583;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#24292E;">$id</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#005CC5;">id</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id=&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$id;</span></span>
<span class="line"><span style="color:#24292E;">$data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">file_get_contents</span><span style="color:#24292E;">($url);</span></span>
<span class="line"><span style="color:#005CC5;">preg_match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/playUrl&quot;:&quot;(.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">?)&quot;/&#39;</span><span style="color:#24292E;">,$data,$m);</span></span>
<span class="line"><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;location:&#39;</span><span style="color:#D73A49;">.</span><span style="color:#005CC5;">urldecode</span><span style="color:#24292E;">($m[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]));</span></span>
<span class="line"><span style="color:#D73A49;">?&gt;</span></span></code></pre></div><h2 id="_2021最新湖北电视台节目源php代理源码" tabindex="-1">2021最新湖北电视台节目源PHP代理源码 <a class="header-anchor" href="#_2021最新湖北电视台节目源php代理源码" aria-label="Permalink to &quot;2021最新湖北电视台节目源PHP代理源码&quot;">​</a></h2><p>强调下这需要要 PHP 服务器来运行代码，奈何世人只爱鱼，不爱渔。自己动手对大部分人还是一个坎。</p><p>id 频道 439 湖北美嘉购物 438 湖北垄上 437 湖北教育 436 湖北生活 435 湖北影视 434 湖北公共新闻 433 湖北综合 432 湖北经视 431 湖北卫视</p><p>代理格式举例：<a href="http://xn--6qq22f55d4wakc062j1xy/hbtv.php?id=XXX" target="_blank" rel="noreferrer">http://你的服务器地址/hbtv.php?id=XXX</a></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;?</span><span style="color:#79B8FF;">php</span></span>
<span class="line"><span style="color:#6A737D;">//id=439湖北美嘉购物 438湖北垄上 437湖北教育 436湖北生活 435湖北影视 434湖北公共新闻 433湖北综合 432湖北经视 431湖北卫视</span></span>
<span class="line"><span style="color:#E1E4E8;">$id</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$_GET[</span><span style="color:#79B8FF;">id</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">$url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http://app.cjyun.org/video/player/streamlist?site_id=10008&amp;live_type=1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">$ch</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">curl_init</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch,</span><span style="color:#79B8FF;">CURLOPT_URL</span><span style="color:#E1E4E8;">,$url);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_setopt</span><span style="color:#E1E4E8;">($ch,</span><span style="color:#79B8FF;">CURLOPT_RETURNTRANSFER</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$data</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">curl_exec</span><span style="color:#E1E4E8;">($ch);</span></span>
<span class="line"><span style="color:#79B8FF;">curl_close</span><span style="color:#E1E4E8;">($ch);</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">($a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;$a</span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;$a</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">json_decode</span><span style="color:#E1E4E8;">($data)</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">data[$a]</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">id</span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;">$id){</span></span>
<span class="line"><span style="color:#E1E4E8;">        $json</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">json_decode</span><span style="color:#E1E4E8;">($data)</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">data[$a]</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">play_url;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">header</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;location:&#39;</span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;">$json);</span></span>
<span class="line"><span style="color:#F97583;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;?</span><span style="color:#005CC5;">php</span></span>
<span class="line"><span style="color:#6A737D;">//id=439湖北美嘉购物 438湖北垄上 437湖北教育 436湖北生活 435湖北影视 434湖北公共新闻 433湖北综合 432湖北经视 431湖北卫视</span></span>
<span class="line"><span style="color:#24292E;">$id</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$_GET[</span><span style="color:#005CC5;">id</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">$url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http://app.cjyun.org/video/player/streamlist?site_id=10008&amp;live_type=1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">$ch</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">curl_init</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch,</span><span style="color:#005CC5;">CURLOPT_URL</span><span style="color:#24292E;">,$url);</span></span>
<span class="line"><span style="color:#005CC5;">curl_setopt</span><span style="color:#24292E;">($ch,</span><span style="color:#005CC5;">CURLOPT_RETURNTRANSFER</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$data</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">curl_exec</span><span style="color:#24292E;">($ch);</span></span>
<span class="line"><span style="color:#005CC5;">curl_close</span><span style="color:#24292E;">($ch);</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">($a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;$a</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;$a</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">json_decode</span><span style="color:#24292E;">($data)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">data[$a]</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">id</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">$id){</span></span>
<span class="line"><span style="color:#24292E;">        $json</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">json_decode</span><span style="color:#24292E;">($data)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">data[$a]</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">play_url;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#005CC5;">header</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;location:&#39;</span><span style="color:#D73A49;">.</span><span style="color:#24292E;">$json);</span></span>
<span class="line"><span style="color:#D73A49;">?&gt;</span></span></code></pre></div><h2 id="自建企业微信消息推送通知通道接口php版" tabindex="-1">自建企业微信消息推送通知通道接口PHP版 <a class="header-anchor" href="#自建企业微信消息推送通知通道接口php版" aria-label="Permalink to &quot;自建企业微信消息推送通知通道接口PHP版&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;?php</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">$corpid = $_REQUEST[&#39;corpid&#39;]; //企业id</span></span>
<span class="line"><span style="color:#e1e4e8;">$corpsecret = $_REQUEST[&#39;corpsecret&#39;]; //应用secret</span></span>
<span class="line"><span style="color:#e1e4e8;">$agentid = $_REQUEST[&#39;agentid&#39;]; //应用id </span></span>
<span class="line"><span style="color:#e1e4e8;">//如果就自己用，可以把参数写到这里。</span></span>
<span class="line"><span style="color:#e1e4e8;">//$corpid = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">//$corpsecret = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">//$agentid = ;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">$title = $_REQUEST[&#39;title&#39;]; //消息title</span></span>
<span class="line"><span style="color:#e1e4e8;">$description = $_REQUEST[&#39;description&#39;]; //消息内容</span></span>
<span class="line"><span style="color:#e1e4e8;">$description = str_replace(PHP_EOL, &#39;&lt;br&gt;&#39;, $description);</span></span>
<span class="line"><span style="color:#e1e4e8;">$url = $_REQUEST[&#39;url&#39;]; //消息跳转url</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">if(!$corpid or !$corpsecret or !$agentid){</span></span>
<span class="line"><span style="color:#e1e4e8;">    exit(&quot;canshu buquan&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">//获取access_token</span></span>
<span class="line"><span style="color:#e1e4e8;">$response = CurlGet(&quot;https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$corpid&amp;corpsecret=$corpsecret&quot;,&quot;&quot;,&quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">$access_token = json_decode($response)-&gt;access_token;</span></span>
<span class="line"><span style="color:#e1e4e8;">if(!$access_token){</span></span>
<span class="line"><span style="color:#e1e4e8;">    exit(&quot;canshu cuowu&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}else{</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    $json = &#39;{&quot;touser&quot;:&quot;@all&quot;,&quot;msgtype&quot;:&quot;textcard&quot;,&quot;agentid&quot;:&quot;&quot;,&quot;textcard&quot;:{&quot;title&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;url&quot;:&quot;&quot;,&quot;btntxt&quot;:&quot;更多&quot;},&quot;safe&quot;:1,&quot;enable_id_trans&quot;:0,&quot;enable_duplicate_check&quot;:0}&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $json = json_decode($json);</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    $json-&gt;agentid = $agentid;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $json-&gt;textcard-&gt;title = $title ? $title : &#39;无标题&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $json-&gt;textcard-&gt;description = $description ? $description : &#39;无内容&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    $json-&gt;textcard-&gt;url = $url ? $url : &#39;URL&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    echo CurlPost(&quot;https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$access_token&quot;,&quot;&quot;, json_encode($json));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">function CurlGet($url,$cookies = &quot;&quot;,$UserAgent = &quot;&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    $curl = curl_init();</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_URL, $url);     </span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_REFERER, &#39;&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_COOKIE, $cookies);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if ($UserAgent != &quot;&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $response = curl_exec($curl);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_close($curl);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return $response;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">function CurlPost($url, $cookies=&quot;&quot;, $post_data=&quot;&quot;, $headers=array(), $refer=&quot;&quot;, $UserAgent = &#39;&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    $curl = curl_init();</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_URL, $url);     </span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_COOKIE, $cookies);</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if ($refer != &#39;&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        curl_setopt($curl, CURLOPT_REFERER, $refer);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_POST, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $response = curl_exec($curl);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_close($curl);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return $response;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?php</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">$corpid = $_REQUEST[&#39;corpid&#39;]; //企业id</span></span>
<span class="line"><span style="color:#24292e;">$corpsecret = $_REQUEST[&#39;corpsecret&#39;]; //应用secret</span></span>
<span class="line"><span style="color:#24292e;">$agentid = $_REQUEST[&#39;agentid&#39;]; //应用id </span></span>
<span class="line"><span style="color:#24292e;">//如果就自己用，可以把参数写到这里。</span></span>
<span class="line"><span style="color:#24292e;">//$corpid = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">//$corpsecret = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">//$agentid = ;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">$title = $_REQUEST[&#39;title&#39;]; //消息title</span></span>
<span class="line"><span style="color:#24292e;">$description = $_REQUEST[&#39;description&#39;]; //消息内容</span></span>
<span class="line"><span style="color:#24292e;">$description = str_replace(PHP_EOL, &#39;&lt;br&gt;&#39;, $description);</span></span>
<span class="line"><span style="color:#24292e;">$url = $_REQUEST[&#39;url&#39;]; //消息跳转url</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">if(!$corpid or !$corpsecret or !$agentid){</span></span>
<span class="line"><span style="color:#24292e;">    exit(&quot;canshu buquan&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">//获取access_token</span></span>
<span class="line"><span style="color:#24292e;">$response = CurlGet(&quot;https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$corpid&amp;corpsecret=$corpsecret&quot;,&quot;&quot;,&quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">$access_token = json_decode($response)-&gt;access_token;</span></span>
<span class="line"><span style="color:#24292e;">if(!$access_token){</span></span>
<span class="line"><span style="color:#24292e;">    exit(&quot;canshu cuowu&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}else{</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    $json = &#39;{&quot;touser&quot;:&quot;@all&quot;,&quot;msgtype&quot;:&quot;textcard&quot;,&quot;agentid&quot;:&quot;&quot;,&quot;textcard&quot;:{&quot;title&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;url&quot;:&quot;&quot;,&quot;btntxt&quot;:&quot;更多&quot;},&quot;safe&quot;:1,&quot;enable_id_trans&quot;:0,&quot;enable_duplicate_check&quot;:0}&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    $json = json_decode($json);</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    $json-&gt;agentid = $agentid;</span></span>
<span class="line"><span style="color:#24292e;">    $json-&gt;textcard-&gt;title = $title ? $title : &#39;无标题&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    $json-&gt;textcard-&gt;description = $description ? $description : &#39;无内容&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    $json-&gt;textcard-&gt;url = $url ? $url : &#39;URL&#39;;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    echo CurlPost(&quot;https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$access_token&quot;,&quot;&quot;, json_encode($json));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">function CurlGet($url,$cookies = &quot;&quot;,$UserAgent = &quot;&quot;)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    $curl = curl_init();</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_URL, $url);     </span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_REFERER, &#39;&#39;);</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_COOKIE, $cookies);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);</span></span>
<span class="line"><span style="color:#24292e;">    if ($UserAgent != &quot;&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#24292e;">    $response = curl_exec($curl);</span></span>
<span class="line"><span style="color:#24292e;">    curl_close($curl);</span></span>
<span class="line"><span style="color:#24292e;">    return $response;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">function CurlPost($url, $cookies=&quot;&quot;, $post_data=&quot;&quot;, $headers=array(), $refer=&quot;&quot;, $UserAgent = &#39;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    $curl = curl_init();</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_URL, $url);     </span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_COOKIE, $cookies);</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);</span></span>
<span class="line"><span style="color:#24292e;">    if ($refer != &#39;&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">        curl_setopt($curl, CURLOPT_REFERER, $refer);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_POST, 1);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);</span></span>
<span class="line"><span style="color:#24292e;">    $response = curl_exec($curl);</span></span>
<span class="line"><span style="color:#24292e;">    curl_close($curl);</span></span>
<span class="line"><span style="color:#24292e;">    return $response;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="tvsou-节目指南-xmltv-格式的-php-源码" tabindex="-1">tvsou 节目指南 xmltv 格式的 php 源码 <a class="header-anchor" href="#tvsou-节目指南-xmltv-格式的-php-源码" aria-label="Permalink to &quot;tvsou 节目指南 xmltv 格式的 php 源码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;?php</span></span>
<span class="line"><span style="color:#e1e4e8;">if(date_default_timezone_get() != &quot;Asia/Shanghai&quot;) date_default_timezone_set(&quot;Asia/Shanghai&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">$fp=&quot;epg_tvs.xml&quot;;//压缩版本的扩展名后加.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">$id0=100000;//起始节目编号</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">$cid=array(</span></span>
<span class="line"><span style="color:#e1e4e8;">    array(&#39;42688016&#39;,&#39;湖南都市&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    array(&#39;34d6b6de&#39;,&#39;湖南经视&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    );</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">function compress_html($string) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $string = str_replace(&quot;\\r&quot;, &#39;&#39;, $string); //清除换行符</span></span>
<span class="line"><span style="color:#e1e4e8;">    $string = str_replace(&quot;\\n&quot;, &#39;&#39;, $string); //清除换行符</span></span>
<span class="line"><span style="color:#e1e4e8;">    $string = str_replace(&quot;\\t&quot;, &#39;&#39;, $string); //清除制表符</span></span>
<span class="line"><span style="color:#e1e4e8;">    return $string;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">$dt1=date(&#39;Ymd&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">$dt2=date(&#39;Ymd&#39;,time()+24*3600);</span></span>
<span class="line"><span style="color:#e1e4e8;">$w1=date(&quot;w&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">if ($w1&lt;&#39;1&#39;) {$w1=7;}</span></span>
<span class="line"><span style="color:#e1e4e8;">$w2=$w1+1;</span></span>
<span class="line"><span style="color:#e1e4e8;">$url0=&quot;https://www.tvsou.com/epg/&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">$chn=&quot;&lt;?xml version=\\&quot;1.0\\&quot; encoding=\\&quot;UTF-8\\&quot;?&gt;\\n&lt;!DOCTYPE tv SYSTEM \\&quot;http://api.torrent-tv.ru/xmltv.dtd\\&quot;&gt;\\n&lt;tv generator-info-name=\\&quot;tvsou\\&quot; generator-info-url=\\&quot;www.tvsou.com/epg\\&quot;&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">$nid=sizeof($cid);</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">for ($id = 1; $id &lt;= $nid; $id++){</span></span>
<span class="line"><span style="color:#e1e4e8;">    $t0=array();</span></span>
<span class="line"><span style="color:#e1e4e8;">    $t1=array();</span></span>
<span class="line"><span style="color:#e1e4e8;">    $nm=array();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    $url=$url0.$cid[$id-1][0].&#39;/w&#39;.$w1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $ch = curl_init();</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_URL, $url);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $re = curl_exec($ch);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_close($ch);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $re=compress_html($re);</span></span>
<span class="line"><span style="color:#e1e4e8;">    preg_match(&#39;|&lt;table class=&quot;layui-table c_table&quot;(.*?)layui-tab-item|i&#39;,$re,$u);</span></span>
<span class="line"><span style="color:#e1e4e8;">    preg_match_all(&#39;|&lt;tr&gt;([\\s\\S]+?)&lt;\\/tr&gt;|&#39;, trim($u[1]), $u);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $u=$u[1];</span></span>
<span class="line"><span style="color:#e1e4e8;">    $num=sizeof($u);</span></span>
<span class="line"><span style="color:#e1e4e8;">    for ($i = 0; $i &lt; $num; $i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        preg_match_all(&#39;|_blank\\&#39;&gt;(.*?)&lt;\\/a&gt;|&#39;,$u[$i],$tr);</span></span>
<span class="line"><span style="color:#e1e4e8;">        $t0[]=$dt1.str_replace(&#39;:&#39;,&#39;&#39;,$tr[1][0]).&#39;00 +0800&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        $nm[]=$tr[1][1];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    $url=$url0.$cid[$id-1][0].&#39;/w&#39;.$w2;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $ch = curl_init();</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_URL, $url);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $re = curl_exec($ch);</span></span>
<span class="line"><span style="color:#e1e4e8;">    curl_close($ch);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $re=compress_html($re);</span></span>
<span class="line"><span style="color:#e1e4e8;">    preg_match(&#39;|&lt;table class=&quot;layui-table c_table&quot;(.*?)layui-tab-item|i&#39;,$re,$u);</span></span>
<span class="line"><span style="color:#e1e4e8;">    preg_match_all(&#39;|&lt;tr&gt;([\\s\\S]+?)&lt;\\/tr&gt;|&#39;, trim($u[1]), $u);</span></span>
<span class="line"><span style="color:#e1e4e8;">    $u=$u[1];</span></span>
<span class="line"><span style="color:#e1e4e8;">    $num=sizeof($u);</span></span>
<span class="line"><span style="color:#e1e4e8;">    for ($i = 0; $i &lt; $num; $i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        preg_match_all(&#39;|_blank\\&#39;&gt;(.*?)&lt;\\/a&gt;|&#39;,$u[$i],$tr);</span></span>
<span class="line"><span style="color:#e1e4e8;">        $t0[]=$dt2.str_replace(&#39;:&#39;,&#39;&#39;,$tr[1][0]).&#39;00 +0800&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        $nm[]=$tr[1][1];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }               </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    $num=sizeof($t0);</span></span>
<span class="line"><span style="color:#e1e4e8;">    for ($i = 1; $i &lt; $num; $i++) {$t1[]=$t0[$i];}</span></span>
<span class="line"><span style="color:#e1e4e8;">    $t1[]=$dt2.&#39;235959 +0800&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $idd=$id0+$id;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $chn.=&quot;&lt;channel id=\\&quot;&quot;.$idd.&quot;\\&quot;&gt;&lt;display-name lang=\\&quot;zh\\&quot;&gt;&quot;.$cid[$id-1][1].&quot;&lt;/display-name&gt;&lt;/channel&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for ($i = 0; $i &lt; $num; $i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        $chn.=&quot;&lt;programme start=\\&quot;&quot;.$t0[$i].&quot;\\&quot; stop=\\&quot;&quot;.$t1[$i].&quot;\\&quot; channel=\\&quot;&quot;.$idd.&quot;\\&quot;&gt;\\n&lt;title lang=\\&quot;zh\\&quot;&gt;&quot;.$nm[$i].&quot;&lt;/title&gt;\\n&lt;desc lang=\\&quot;zh\\&quot;&gt; &lt;/desc&gt;\\n&lt;/programme&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">$chn.=&quot;&lt;/tv&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">//写入文件。这里一次性写入，可以自己分次写入操作</span></span>
<span class="line"><span style="color:#e1e4e8;">file_put_contents($fp, $chn);</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">//创建压缩版本</span></span>
<span class="line"><span style="color:#e1e4e8;">$fn = gzopen ($fp.&#39;.gz&#39;, &#39;w9&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">gzwrite($fn, file_get_contents($fp));</span></span>
<span class="line"><span style="color:#e1e4e8;">gzclose($fn);</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">?&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?php</span></span>
<span class="line"><span style="color:#24292e;">if(date_default_timezone_get() != &quot;Asia/Shanghai&quot;) date_default_timezone_set(&quot;Asia/Shanghai&quot;);</span></span>
<span class="line"><span style="color:#24292e;">$fp=&quot;epg_tvs.xml&quot;;//压缩版本的扩展名后加.gz</span></span>
<span class="line"><span style="color:#24292e;">$id0=100000;//起始节目编号</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">$cid=array(</span></span>
<span class="line"><span style="color:#24292e;">    array(&#39;42688016&#39;,&#39;湖南都市&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    array(&#39;34d6b6de&#39;,&#39;湖南经视&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    );</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">function compress_html($string) {</span></span>
<span class="line"><span style="color:#24292e;">    $string = str_replace(&quot;\\r&quot;, &#39;&#39;, $string); //清除换行符</span></span>
<span class="line"><span style="color:#24292e;">    $string = str_replace(&quot;\\n&quot;, &#39;&#39;, $string); //清除换行符</span></span>
<span class="line"><span style="color:#24292e;">    $string = str_replace(&quot;\\t&quot;, &#39;&#39;, $string); //清除制表符</span></span>
<span class="line"><span style="color:#24292e;">    return $string;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">$dt1=date(&#39;Ymd&#39;);</span></span>
<span class="line"><span style="color:#24292e;">$dt2=date(&#39;Ymd&#39;,time()+24*3600);</span></span>
<span class="line"><span style="color:#24292e;">$w1=date(&quot;w&quot;);</span></span>
<span class="line"><span style="color:#24292e;">if ($w1&lt;&#39;1&#39;) {$w1=7;}</span></span>
<span class="line"><span style="color:#24292e;">$w2=$w1+1;</span></span>
<span class="line"><span style="color:#24292e;">$url0=&quot;https://www.tvsou.com/epg/&quot;;</span></span>
<span class="line"><span style="color:#24292e;">$chn=&quot;&lt;?xml version=\\&quot;1.0\\&quot; encoding=\\&quot;UTF-8\\&quot;?&gt;\\n&lt;!DOCTYPE tv SYSTEM \\&quot;http://api.torrent-tv.ru/xmltv.dtd\\&quot;&gt;\\n&lt;tv generator-info-name=\\&quot;tvsou\\&quot; generator-info-url=\\&quot;www.tvsou.com/epg\\&quot;&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">$nid=sizeof($cid);</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">for ($id = 1; $id &lt;= $nid; $id++){</span></span>
<span class="line"><span style="color:#24292e;">    $t0=array();</span></span>
<span class="line"><span style="color:#24292e;">    $t1=array();</span></span>
<span class="line"><span style="color:#24292e;">    $nm=array();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    $url=$url0.$cid[$id-1][0].&#39;/w&#39;.$w1;</span></span>
<span class="line"><span style="color:#24292e;">    $ch = curl_init();</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_URL, $url);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);</span></span>
<span class="line"><span style="color:#24292e;">    $re = curl_exec($ch);</span></span>
<span class="line"><span style="color:#24292e;">    curl_close($ch);</span></span>
<span class="line"><span style="color:#24292e;">    $re=compress_html($re);</span></span>
<span class="line"><span style="color:#24292e;">    preg_match(&#39;|&lt;table class=&quot;layui-table c_table&quot;(.*?)layui-tab-item|i&#39;,$re,$u);</span></span>
<span class="line"><span style="color:#24292e;">    preg_match_all(&#39;|&lt;tr&gt;([\\s\\S]+?)&lt;\\/tr&gt;|&#39;, trim($u[1]), $u);</span></span>
<span class="line"><span style="color:#24292e;">    $u=$u[1];</span></span>
<span class="line"><span style="color:#24292e;">    $num=sizeof($u);</span></span>
<span class="line"><span style="color:#24292e;">    for ($i = 0; $i &lt; $num; $i++) {</span></span>
<span class="line"><span style="color:#24292e;">        preg_match_all(&#39;|_blank\\&#39;&gt;(.*?)&lt;\\/a&gt;|&#39;,$u[$i],$tr);</span></span>
<span class="line"><span style="color:#24292e;">        $t0[]=$dt1.str_replace(&#39;:&#39;,&#39;&#39;,$tr[1][0]).&#39;00 +0800&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        $nm[]=$tr[1][1];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    $url=$url0.$cid[$id-1][0].&#39;/w&#39;.$w2;</span></span>
<span class="line"><span style="color:#24292e;">    $ch = curl_init();</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_URL, $url);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);</span></span>
<span class="line"><span style="color:#24292e;">    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);</span></span>
<span class="line"><span style="color:#24292e;">    $re = curl_exec($ch);</span></span>
<span class="line"><span style="color:#24292e;">    curl_close($ch);</span></span>
<span class="line"><span style="color:#24292e;">    $re=compress_html($re);</span></span>
<span class="line"><span style="color:#24292e;">    preg_match(&#39;|&lt;table class=&quot;layui-table c_table&quot;(.*?)layui-tab-item|i&#39;,$re,$u);</span></span>
<span class="line"><span style="color:#24292e;">    preg_match_all(&#39;|&lt;tr&gt;([\\s\\S]+?)&lt;\\/tr&gt;|&#39;, trim($u[1]), $u);</span></span>
<span class="line"><span style="color:#24292e;">    $u=$u[1];</span></span>
<span class="line"><span style="color:#24292e;">    $num=sizeof($u);</span></span>
<span class="line"><span style="color:#24292e;">    for ($i = 0; $i &lt; $num; $i++) {</span></span>
<span class="line"><span style="color:#24292e;">        preg_match_all(&#39;|_blank\\&#39;&gt;(.*?)&lt;\\/a&gt;|&#39;,$u[$i],$tr);</span></span>
<span class="line"><span style="color:#24292e;">        $t0[]=$dt2.str_replace(&#39;:&#39;,&#39;&#39;,$tr[1][0]).&#39;00 +0800&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        $nm[]=$tr[1][1];</span></span>
<span class="line"><span style="color:#24292e;">    }               </span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    $num=sizeof($t0);</span></span>
<span class="line"><span style="color:#24292e;">    for ($i = 1; $i &lt; $num; $i++) {$t1[]=$t0[$i];}</span></span>
<span class="line"><span style="color:#24292e;">    $t1[]=$dt2.&#39;235959 +0800&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    $idd=$id0+$id;</span></span>
<span class="line"><span style="color:#24292e;">    $chn.=&quot;&lt;channel id=\\&quot;&quot;.$idd.&quot;\\&quot;&gt;&lt;display-name lang=\\&quot;zh\\&quot;&gt;&quot;.$cid[$id-1][1].&quot;&lt;/display-name&gt;&lt;/channel&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    for ($i = 0; $i &lt; $num; $i++) {</span></span>
<span class="line"><span style="color:#24292e;">        $chn.=&quot;&lt;programme start=\\&quot;&quot;.$t0[$i].&quot;\\&quot; stop=\\&quot;&quot;.$t1[$i].&quot;\\&quot; channel=\\&quot;&quot;.$idd.&quot;\\&quot;&gt;\\n&lt;title lang=\\&quot;zh\\&quot;&gt;&quot;.$nm[$i].&quot;&lt;/title&gt;\\n&lt;desc lang=\\&quot;zh\\&quot;&gt; &lt;/desc&gt;\\n&lt;/programme&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">$chn.=&quot;&lt;/tv&gt;\\n&quot;;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">//写入文件。这里一次性写入，可以自己分次写入操作</span></span>
<span class="line"><span style="color:#24292e;">file_put_contents($fp, $chn);</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">//创建压缩版本</span></span>
<span class="line"><span style="color:#24292e;">$fn = gzopen ($fp.&#39;.gz&#39;, &#39;w9&#39;);</span></span>
<span class="line"><span style="color:#24292e;">gzwrite($fn, file_get_contents($fp));</span></span>
<span class="line"><span style="color:#24292e;">gzclose($fn);</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">?&gt;</span></span></code></pre></div>`,25),e=[o];function t(c,r,y,E,i,u){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{$ as __pageData,C as default};
