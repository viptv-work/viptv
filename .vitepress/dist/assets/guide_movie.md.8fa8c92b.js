import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.18efe07a.js";const g=JSON.parse('{"title":"影视","description":"","frontmatter":{},"headers":[],"relativePath":"guide/movie.md","filePath":"guide/movie.md","lastUpdated":1694305646000}'),l={name:"guide/movie.md"},p=e(`<h1 id="影视" tabindex="-1">影视 <a class="header-anchor" href="#影视" aria-label="Permalink to &quot;影视&quot;">​</a></h1><h2 id="cctv影视库" tabindex="-1">CCTV影视库 <a class="header-anchor" href="#cctv影视库" aria-label="Permalink to &quot;CCTV影视库&quot;">​</a></h2><p><strong>const baseURL = proxy + &#39;<a href="http://api.cntv.cn" target="_blank" rel="noreferrer">http://api.cntv.cn</a>&#39;</strong></p><h3 id="nav" tabindex="-1">NAV <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;NAV&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;CHAL1460955853485115&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;电视剧&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    page: 40</span></span>
<span class="line"><span style="color:#e1e4e8;">  },    </span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;CHAL1460955924871139&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;纪录片&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    page: 67</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;CHAL1460955953877151&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;特别节目&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    page: 67</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;CHAL1460955853485115&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;电视剧&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    page: 40</span></span>
<span class="line"><span style="color:#24292e;">  },    </span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;CHAL1460955924871139&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;纪录片&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    page: 67</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;CHAL1460955953877151&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;特别节目&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    page: 67</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><h3 id="list-4k" tabindex="-1">list 4k <a class="header-anchor" href="#list-4k" aria-label="Permalink to &quot;list 4k&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">return req.get(baseURL + &#39;/video/getVideoList4k&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">  params: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceId: &#39;cctv4&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    p,</span></span>
<span class="line"><span style="color:#e1e4e8;">    n: 50,</span></span>
<span class="line"><span style="color:#e1e4e8;">    t: &#39;json&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">return req.get(baseURL + &#39;/video/getVideoList4k&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">  params: {</span></span>
<span class="line"><span style="color:#24292e;">    serviceId: &#39;cctv4&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    p,</span></span>
<span class="line"><span style="color:#24292e;">    n: 50,</span></span>
<span class="line"><span style="color:#24292e;">    t: &#39;json&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;list&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">List: (channelid, p) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(baseURL + &#39;/list/getVideoAlbumList&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    params: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      channelid,</span></span>
<span class="line"><span style="color:#e1e4e8;">      p,</span></span>
<span class="line"><span style="color:#e1e4e8;">      n: 30,</span></span>
<span class="line"><span style="color:#e1e4e8;">      serviceId: &#39;tvcctv&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">List: (channelid, p) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(baseURL + &#39;/list/getVideoAlbumList&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    params: {</span></span>
<span class="line"><span style="color:#24292e;">      channelid,</span></span>
<span class="line"><span style="color:#24292e;">      p,</span></span>
<span class="line"><span style="color:#24292e;">      n: 30,</span></span>
<span class="line"><span style="color:#24292e;">      serviceId: &#39;tvcctv&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h3 id="video" tabindex="-1">video <a class="header-anchor" href="#video" aria-label="Permalink to &quot;video&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Video: (vsid) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(baseURL + &#39;/video/videolistById&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    params: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      serviceId: &#39;cbox&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      vsid,</span></span>
<span class="line"><span style="color:#e1e4e8;">      em: &#39;01&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Video: (vsid) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(baseURL + &#39;/video/videolistById&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    params: {</span></span>
<span class="line"><span style="color:#24292e;">      serviceId: &#39;cbox&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      vsid,</span></span>
<span class="line"><span style="color:#24292e;">      em: &#39;01&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h3 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Url: (pid) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  req.defaults.baseURL = env ? proxy + &#39;http://vdn.apps.cntv.cn&#39; :</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;/cctv_url&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(&#39;/api/getHttpVideoInfo.do&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    params: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      pid,</span></span>
<span class="line"><span style="color:#e1e4e8;">      client: &#39;flash&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      im: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">      tsp: 1611947100,</span></span>
<span class="line"><span style="color:#e1e4e8;">      vn: 2049,</span></span>
<span class="line"><span style="color:#e1e4e8;">      vc: &#39;BA5059A996D4D22917AA3B0B893F85EC&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      uid: &#39;05D59DB54824CD84155682143CA148C6&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      wlan: &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Url: (pid) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  req.defaults.baseURL = env ? proxy + &#39;http://vdn.apps.cntv.cn&#39; :</span></span>
<span class="line"><span style="color:#24292e;">    &#39;/cctv_url&#39;</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(&#39;/api/getHttpVideoInfo.do&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    params: {</span></span>
<span class="line"><span style="color:#24292e;">      pid,</span></span>
<span class="line"><span style="color:#24292e;">      client: &#39;flash&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      im: 0,</span></span>
<span class="line"><span style="color:#24292e;">      tsp: 1611947100,</span></span>
<span class="line"><span style="color:#24292e;">      vn: 2049,</span></span>
<span class="line"><span style="color:#24292e;">      vc: &#39;BA5059A996D4D22917AA3B0B893F85EC&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      uid: &#39;05D59DB54824CD84155682143CA148C6&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      wlan: &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,13),o=[p];function c(t,i,r,d,y,h){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{g as __pageData,u as default};
