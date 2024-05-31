import{_ as i,c as s,o as a,e as t}from"./app-CJp61cQq.js";const n={},l=t(`<blockquote><p>本文介绍使用 WKWebView 拦截 url 进行原生界面跳转</p></blockquote><figure><img src="https://storage1.cuntuku.com/2017/05/27/3.gif" alt="3.gif" tabindex="0" loading="lazy"><figcaption>3.gif</figcaption></figure><ul><li>使用代理方法 decidePolicyForNavigationAction</li></ul><div class="language-objc" data-highlighter="shiki" data-ext="objc" data-title="objc" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)webView:(WKWebView </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)webView decidePolicyForNavigationAction:(WKNavigationAction </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)navigationAction decisionHandler:(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)(WKNavigationActionPolicy))decisionHandler {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 获取完整url并进行UTF-8转码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">    NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">strRequest </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [navigationAction.request.URL.absoluteString </span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">stringByRemovingPercentEncoding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ([strRequest </span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">hasPrefix:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;app://&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 拦截点击链接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        [</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;"> handleCustomAction:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">strRequest];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 不允许跳转</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">      	decisionHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(WKNavigationActionPolicyCancel);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    	// 允许跳转</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        decisionHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(WKNavigationActionPolicyAllow);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><ul><li>自定义方法传过来 url 进行判断，需要 html 元素本身就有跳转链接，才可以拦截，如没有，拦截不到。下文 app://xxx 链接为自定义链接</li></ul><div class="language-objc line-numbers-mode" data-highlighter="shiki" data-ext="objc" data-title="objc" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)handleCustomAction:(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 判断跳转</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">    NSString</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">link_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> @&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ([URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">hasPrefix:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;app://video&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 视频</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        MMLog</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;点击了视频</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%@</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,link_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ([URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">hasPrefix:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;app://item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 单品</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        MMLog</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;点击了单品</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%@</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,link_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ([URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">hasPrefix:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;app://brand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 品牌</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        link_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [URL </span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;">substringFromIndex:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">NSString</span><span style="--shiki-light:#005CC5;--shiki-dark:#61AFEF;"> stringWithFormat:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;app://brand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].length];</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        MMLog</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">@&quot;点击了品牌</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%@</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,link_id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[l];function h(k,p){return a(),s("div",null,e)}const d=i(n,[["render",h],["__file","WKWebView-URL.html.vue"]]),g=JSON.parse('{"path":"/posts/iOS/system/WKWebView-URL.html","title":"WKWebView拦截URL","lang":"zh-CN","frontmatter":{"title":"WKWebView拦截URL","date":"2017-05-27T00:00:00.000Z","category":["iOS"],"tag":["iOS"],"description":"本文介绍使用 WKWebView 拦截 url 进行原生界面跳转 3.gif3.gif 使用代理方法 decidePolicyForNavigationAction 自定义方法传过来 url 进行判断，需要 html 元素本身就有跳转链接，才可以拦截，如没有，拦截不到。下文 app://xxx 链接为自定义链接","head":[["meta",{"property":"og:url","content":"https://viptv.work/posts/iOS/system/WKWebView-URL.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"WKWebView拦截URL"}],["meta",{"property":"og:description","content":"本文介绍使用 WKWebView 拦截 url 进行原生界面跳转 3.gif3.gif 使用代理方法 decidePolicyForNavigationAction 自定义方法传过来 url 进行判断，需要 html 元素本身就有跳转链接，才可以拦截，如没有，拦截不到。下文 app://xxx 链接为自定义链接"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://storage1.cuntuku.com/2017/05/27/3.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:19:32.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2017-05-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:19:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WKWebView拦截URL\\",\\"image\\":[\\"https://storage1.cuntuku.com/2017/05/27/3.gif\\"],\\"datePublished\\":\\"2017-05-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:19:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1716109814000,"updatedTime":1716729572000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"posts/iOS/system/WKWebView-URL.md","localizedDate":"2017年5月27日","excerpt":"","autoDesc":true}');export{d as comp,g as data};
