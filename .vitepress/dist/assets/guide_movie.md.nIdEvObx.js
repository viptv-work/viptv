import{_ as s,c as a,o as n,V as p}from"./chunks/framework.QFmjjZgg.js";const g=JSON.parse('{"title":"影视","description":"","frontmatter":{},"headers":[],"relativePath":"guide/movie.md","filePath":"guide/movie.md","lastUpdated":null}'),e={name:"guide/movie.md"},l=p(`<h1 id="影视" tabindex="-1">影视 <a class="header-anchor" href="#影视" aria-label="Permalink to &quot;影视&quot;">​</a></h1><h2 id="cctv影视库" tabindex="-1">CCTV影视库 <a class="header-anchor" href="#cctv影视库" aria-label="Permalink to &quot;CCTV影视库&quot;">​</a></h2><p><strong>const baseURL = proxy + &#39;<a href="http://api.cntv.cn" target="_blank" rel="noreferrer">http://api.cntv.cn</a>&#39;</strong></p><h3 id="nav" tabindex="-1">NAV <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;NAV&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;CHAL1460955853485115&#39;,</span></span>
<span class="line"><span>    name: &#39;电视剧&#39;,</span></span>
<span class="line"><span>    page: 40</span></span>
<span class="line"><span>  },    </span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;CHAL1460955924871139&#39;,</span></span>
<span class="line"><span>    name: &#39;纪录片&#39;,</span></span>
<span class="line"><span>    page: 67</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;CHAL1460955953877151&#39;,</span></span>
<span class="line"><span>    name: &#39;特别节目&#39;,</span></span>
<span class="line"><span>    page: 67</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="list-4k" tabindex="-1">list 4k <a class="header-anchor" href="#list-4k" aria-label="Permalink to &quot;list 4k&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>return req.get(baseURL + &#39;/video/getVideoList4k&#39;, {</span></span>
<span class="line"><span>  params: {</span></span>
<span class="line"><span>    serviceId: &#39;cctv4&#39;,</span></span>
<span class="line"><span>    p,</span></span>
<span class="line"><span>    n: 50,</span></span>
<span class="line"><span>    t: &#39;json&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;list&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>List: (channelid, p) =&gt; {</span></span>
<span class="line"><span>  return req.get(baseURL + &#39;/list/getVideoAlbumList&#39;, {</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>      channelid,</span></span>
<span class="line"><span>      p,</span></span>
<span class="line"><span>      n: 30,</span></span>
<span class="line"><span>      serviceId: &#39;tvcctv&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="video" tabindex="-1">video <a class="header-anchor" href="#video" aria-label="Permalink to &quot;video&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Video: (vsid) =&gt; {</span></span>
<span class="line"><span>  return req.get(baseURL + &#39;/video/videolistById&#39;, {</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>      serviceId: &#39;cbox&#39;,</span></span>
<span class="line"><span>      vsid,</span></span>
<span class="line"><span>      em: &#39;01&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Url: (pid) =&gt; {</span></span>
<span class="line"><span>  req.defaults.baseURL = env ? proxy + &#39;http://vdn.apps.cntv.cn&#39; :</span></span>
<span class="line"><span>    &#39;/cctv_url&#39;</span></span>
<span class="line"><span>  return req.get(&#39;/api/getHttpVideoInfo.do&#39;, {</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>      pid,</span></span>
<span class="line"><span>      client: &#39;flash&#39;,</span></span>
<span class="line"><span>      im: 0,</span></span>
<span class="line"><span>      tsp: 1611947100,</span></span>
<span class="line"><span>      vn: 2049,</span></span>
<span class="line"><span>      vc: &#39;BA5059A996D4D22917AA3B0B893F85EC&#39;,</span></span>
<span class="line"><span>      uid: &#39;05D59DB54824CD84155682143CA148C6&#39;,</span></span>
<span class="line"><span>      wlan: &#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13),i=[l];function t(c,o,d,r,h,u){return n(),a("div",null,i)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};
