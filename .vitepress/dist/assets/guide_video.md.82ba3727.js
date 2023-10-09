import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.18efe07a.js";const u=JSON.parse('{"title":"视频接口","description":"","frontmatter":{},"headers":[],"relativePath":"guide/video.md","filePath":"guide/video.md","lastUpdated":1694305646000}'),l={name:"guide/video.md"},p=e(`<h1 id="视频接口" tabindex="-1">视频接口 <a class="header-anchor" href="#视频接口" aria-label="Permalink to &quot;视频接口&quot;">​</a></h1><h2 id="凤凰视频" tabindex="-1">凤凰视频 <a class="header-anchor" href="#凤凰视频" aria-label="Permalink to &quot;凤凰视频&quot;">​</a></h2><h3 id="nav" tabindex="-1">NAV <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;NAV&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Nav: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;HDZYCHI&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;鸡汤&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;SYLB10&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;头条&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;CJ33&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;财经&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;FUNNY&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;搞笑&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;ANECD&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;奇闻&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;KJ123&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;科技&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;TY43&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;体育&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;LS153&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;历史&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;QC45&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;汽车&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;FC81&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;房产&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id: &#39;JS83&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;军事&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Nav: [{</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;HDZYCHI&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;鸡汤&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;SYLB10&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;头条&#39;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;CJ33&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;财经&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;FUNNY&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;搞笑&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;ANECD&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;奇闻&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;KJ123&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;科技&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;TY43&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;体育&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;LS153&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;历史&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;QC45&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;汽车&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;FC81&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;房产&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }, {</span></span>
<span class="line"><span style="color:#24292e;">    id: &#39;JS83&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &#39;军事&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">],</span></span></code></pre></div><h3 id="home" tabindex="-1">Home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;Home&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Home: () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;/ifenga&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(&#39;/spring/homeStream/getHomeStream/50/0/0/&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Home: () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :</span></span>
<span class="line"><span style="color:#24292e;">    &#39;/ifenga&#39;</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(&#39;/spring/homeStream/getHomeStream/50/0/0/&#39;)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">List: (id, pg) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  req.defaults.baseURL = env ? proxy + &#39;http://api.iclient.ifeng.com&#39; :</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;/ifengb&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(&#39;/ClientNews&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    params: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      id,</span></span>
<span class="line"><span style="color:#e1e4e8;">      os: &#39;android&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      gv: &#39;5.5.5&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      uid: &#39;undefined&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      proid: &#39;undefined&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      action: &#39;default&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      pullNum: pg</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">List: (id, pg) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  req.defaults.baseURL = env ? proxy + &#39;http://api.iclient.ifeng.com&#39; :</span></span>
<span class="line"><span style="color:#24292e;">    &#39;/ifengb&#39;</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(&#39;/ClientNews&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    params: {</span></span>
<span class="line"><span style="color:#24292e;">      id,</span></span>
<span class="line"><span style="color:#24292e;">      os: &#39;android&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      gv: &#39;5.5.5&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      uid: &#39;undefined&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      proid: &#39;undefined&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      action: &#39;default&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      pullNum: pg</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h3 id="ucms" tabindex="-1">Ucms <a class="header-anchor" href="#ucms" aria-label="Permalink to &quot;Ucms&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Ucms: (id) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;/ifenga&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(&#39;/c/api/videoShare/getRelateVideos/&#39; + id + &#39;/getvideorelatecb&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Ucms: (id) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :</span></span>
<span class="line"><span style="color:#24292e;">    &#39;/ifenga&#39;</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(&#39;/c/api/videoShare/getRelateVideos/&#39; + id + &#39;/getvideorelatecb&#39;)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h3 id="url" tabindex="-1">Url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;Url&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Url: (guid) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  req.defaults.baseURL = env ? proxy + &#39;http://nine.ifeng.com&#39; : &#39;/ifengc&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return req.get(&#39;/apiPhoenixtvDetails&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    params: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      guid</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Url: (guid) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  req.defaults.baseURL = env ? proxy + &#39;http://nine.ifeng.com&#39; : &#39;/ifengc&#39;</span></span>
<span class="line"><span style="color:#24292e;">  return req.get(&#39;/apiPhoenixtvDetails&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">    params: {</span></span>
<span class="line"><span style="color:#24292e;">      guid</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div>`,12),o=[p];function c(i,t,r,d,y,h){return n(),a("div",null,o)}const m=s(l,[["render",c]]);export{u as __pageData,m as default};
