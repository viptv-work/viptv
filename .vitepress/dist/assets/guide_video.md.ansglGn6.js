import{_ as a,c as s,o as n,V as p}from"./chunks/framework.QFmjjZgg.js";const m=JSON.parse('{"title":"视频接口","description":"","frontmatter":{},"headers":[],"relativePath":"guide/video.md","filePath":"guide/video.md","lastUpdated":null}'),e={name:"guide/video.md"},l=p(`<h1 id="视频接口" tabindex="-1">视频接口 <a class="header-anchor" href="#视频接口" aria-label="Permalink to &quot;视频接口&quot;">​</a></h1><h2 id="凤凰视频" tabindex="-1">凤凰视频 <a class="header-anchor" href="#凤凰视频" aria-label="Permalink to &quot;凤凰视频&quot;">​</a></h2><h3 id="nav" tabindex="-1">NAV <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;NAV&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Nav: [{</span></span>
<span class="line"><span>    id: &#39;HDZYCHI&#39;,</span></span>
<span class="line"><span>    name: &#39;鸡汤&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;SYLB10&#39;,</span></span>
<span class="line"><span>    name: &#39;头条&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: &#39;CJ33&#39;,</span></span>
<span class="line"><span>    name: &#39;财经&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;FUNNY&#39;,</span></span>
<span class="line"><span>    name: &#39;搞笑&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;ANECD&#39;,</span></span>
<span class="line"><span>    name: &#39;奇闻&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;KJ123&#39;,</span></span>
<span class="line"><span>    name: &#39;科技&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;TY43&#39;,</span></span>
<span class="line"><span>    name: &#39;体育&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;LS153&#39;,</span></span>
<span class="line"><span>    name: &#39;历史&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;QC45&#39;,</span></span>
<span class="line"><span>    name: &#39;汽车&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;FC81&#39;,</span></span>
<span class="line"><span>    name: &#39;房产&#39;</span></span>
<span class="line"><span>  }, {</span></span>
<span class="line"><span>    id: &#39;JS83&#39;,</span></span>
<span class="line"><span>    name: &#39;军事&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>],</span></span></code></pre></div><h3 id="home" tabindex="-1">Home <a class="header-anchor" href="#home" aria-label="Permalink to &quot;Home&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Home: () =&gt; {</span></span>
<span class="line"><span>  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :</span></span>
<span class="line"><span>    &#39;/ifenga&#39;</span></span>
<span class="line"><span>  return req.get(&#39;/spring/homeStream/getHomeStream/50/0/0/&#39;)</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>List: (id, pg) =&gt; {</span></span>
<span class="line"><span>  req.defaults.baseURL = env ? proxy + &#39;http://api.iclient.ifeng.com&#39; :</span></span>
<span class="line"><span>    &#39;/ifengb&#39;</span></span>
<span class="line"><span>  return req.get(&#39;/ClientNews&#39;, {</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>      id,</span></span>
<span class="line"><span>      os: &#39;android&#39;,</span></span>
<span class="line"><span>      gv: &#39;5.5.5&#39;,</span></span>
<span class="line"><span>      uid: &#39;undefined&#39;,</span></span>
<span class="line"><span>      proid: &#39;undefined&#39;,</span></span>
<span class="line"><span>      action: &#39;default&#39;,</span></span>
<span class="line"><span>      pullNum: pg</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="ucms" tabindex="-1">Ucms <a class="header-anchor" href="#ucms" aria-label="Permalink to &quot;Ucms&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Ucms: (id) =&gt; {</span></span>
<span class="line"><span>  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :</span></span>
<span class="line"><span>    &#39;/ifenga&#39;</span></span>
<span class="line"><span>  return req.get(&#39;/c/api/videoShare/getRelateVideos/&#39; + id + &#39;/getvideorelatecb&#39;)</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="url" tabindex="-1">Url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;Url&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Url: (guid) =&gt; {</span></span>
<span class="line"><span>  req.defaults.baseURL = env ? proxy + &#39;http://nine.ifeng.com&#39; : &#39;/ifengc&#39;</span></span>
<span class="line"><span>  return req.get(&#39;/apiPhoenixtvDetails&#39;, {</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>      guid</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,12),i=[l];function t(c,o,d,r,h,u){return n(),s("div",null,i)}const v=a(e,[["render",t]]);export{m as __pageData,v as default};
