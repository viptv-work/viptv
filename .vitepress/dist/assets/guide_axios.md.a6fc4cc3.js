import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.18efe07a.js";const u=JSON.parse('{"title":"axios 封装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/axios.md","filePath":"guide/axios.md","lastUpdated":1694305646000}'),l={name:"guide/axios.md"},o=p(`<h1 id="axios-封装" tabindex="-1">axios 封装 <a class="header-anchor" href="#axios-封装" aria-label="Permalink to &quot;axios 封装&quot;">​</a></h1><h2 id="本人精简封装的-axios-js" tabindex="-1">本人精简封装的 axios.js <a class="header-anchor" href="#本人精简封装的-axios-js" aria-label="Permalink to &quot;本人精简封装的 axios.js&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;use strict&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> cheerio </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cheerio&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">Axios.defaults.headers.post[</span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;text/plain; charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isEnv</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p<wbr>rocess.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isMob</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> navigator.userAgent.</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">(iPhone</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">iPod</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">Android</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ios</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">iPad)</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">i</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">req</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">15000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;text/plain;application/x-www-form-urlencoded;charset=UTF-8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  withCredentials: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  credientials: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  emulateJSON: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">req.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">req.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(response.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://bird.ioliu.cn/v1/?url=&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">_storage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.localStorage</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">storage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (_storage) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> _storage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(key) </span><span style="color:#F97583;">?</span></span>
<span class="line"><span style="color:#E1E4E8;">        Array.</span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(data) </span><span style="color:#F97583;">?</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(_storage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(key)) </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        _storage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(key) </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        data</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (_storage) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      _storage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(key, val)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (_storage) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      _storage.</span><span style="color:#B392F0;">removeItem</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  proxy,</span></span>
<span class="line"><span style="color:#E1E4E8;">  isMob,</span></span>
<span class="line"><span style="color:#E1E4E8;">  isEnv,</span></span>
<span class="line"><span style="color:#E1E4E8;">  req,</span></span>
<span class="line"><span style="color:#E1E4E8;">  storage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  cheerio</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;use strict&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> cheerio </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cheerio&#39;</span></span>
<span class="line"><span style="color:#24292E;">Axios.defaults.headers.post[</span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;text/plain; charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isEnv</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p<wbr>rocess.env.</span><span style="color:#005CC5;">NODE_ENV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;production&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isMob</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> navigator.userAgent.</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(iPhone</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">iPod</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">Android</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ios</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">iPad)/</span><span style="color:#D73A49;">i</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">req</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  timeout: </span><span style="color:#005CC5;">15000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  headers: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;text/plain;application/x-www-form-urlencoded;charset=UTF-8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  withCredentials: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  credientials: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  emulateJSON: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">req.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">req.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(response.data)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">proxy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://bird.ioliu.cn/v1/?url=&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">_storage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.localStorage</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">storage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (_storage) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> _storage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(key) </span><span style="color:#D73A49;">?</span></span>
<span class="line"><span style="color:#24292E;">        Array.</span><span style="color:#6F42C1;">isArray</span><span style="color:#24292E;">(data) </span><span style="color:#D73A49;">?</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(_storage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(key)) </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">        _storage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(key) </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">        data</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (_storage) {</span></span>
<span class="line"><span style="color:#24292E;">      _storage.</span><span style="color:#6F42C1;">setItem</span><span style="color:#24292E;">(key, val)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (_storage) {</span></span>
<span class="line"><span style="color:#24292E;">      _storage.</span><span style="color:#6F42C1;">removeItem</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  proxy,</span></span>
<span class="line"><span style="color:#24292E;">  isMob,</span></span>
<span class="line"><span style="color:#24292E;">  isEnv,</span></span>
<span class="line"><span style="color:#24292E;">  req,</span></span>
<span class="line"><span style="color:#24292E;">  storage,</span></span>
<span class="line"><span style="color:#24292E;">  cheerio</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="大神封装-axiostool-js-留存参考" tabindex="-1">大神封装 axiosTool.js,留存参考 <a class="header-anchor" href="#大神封装-axiostool-js-留存参考" aria-label="Permalink to &quot;大神封装 axiosTool.js,留存参考&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//取消请求</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> CancelToken </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.CancelToken</span></span>
<span class="line"><span style="color:#6A737D;">//设置默认请求头，如果不需要可以取消这一步</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.headers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;X-Requested-With&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;XMLHttpRequest&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 请求超时的时间限制</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.defaults.timeout </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20000</span></span>
<span class="line"><span style="color:#6A737D;">// 开始设置请求 发起的拦截处理</span></span>
<span class="line"><span style="color:#6A737D;">// config 代表发起请求的参数的实体</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 得到参数中的 requestName 字段，用于决定下次发起请求，取消对应的 相同字段的请求</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有 requestName 就默认添加一个 不同的时间戳</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> requestName</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(config.method </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(config.data </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> config.data.requestName){</span></span>
<span class="line"><span style="color:#E1E4E8;">            requestName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> config.data.requestName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            requestName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(config.params </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> config.params.requestName){</span></span>
<span class="line"><span style="color:#E1E4E8;">            requestName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> config.params.requestName</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            requestName </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (requestName) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (axios[requestName] </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> axios[requestName].cancel) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            axios[requestName].</span><span style="color:#B392F0;">cancel</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        config.cancelToken </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CancelToken</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            axios[requestName] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">            axios[requestName].cancel </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> c</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求到结果的拦截处理</span></span>
<span class="line"><span style="color:#E1E4E8;">axios.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 返回请求正确的结果</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (error </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> error.response) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (error.response.status) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;错误请求&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">401</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;未授权，请重新登录&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">403</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;拒绝访问&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请求错误,未找到该资源&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">405</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请求方法未允许&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">408</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;请求超时&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;服务器端出错&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">501</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;网络未实现&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;网络错误&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;服务不可用&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;网络超时&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">505</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;http版本不支持该请求&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">break</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`连接错误\${</span><span style="color:#E1E4E8;">error</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">response</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">status</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        error.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;连接到服务器失败&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error.message)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 将axios 的 post 方法，绑定到 vue 实例上面的 $post</span></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$post</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        axios.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(url, params)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 将axios 的 get 方法，绑定到 vue 实例上面的 $get</span></span>
<span class="line"><span style="color:#79B8FF;">Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$get</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        axios.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            params: params</span></span>
<span class="line"><span style="color:#E1E4E8;">        }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res) </span><span style="color:#6A737D;">// 返回请求成功的数据 data</span></span>
<span class="line"><span style="color:#E1E4E8;">        }).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 请求示例</span></span>
<span class="line"><span style="color:#6A737D;">// requestName 为多余的参数 作为请求的标识，下次发起相同的请求，就会自动取消上一次还没有结束的请求</span></span>
<span class="line"><span style="color:#6A737D;">// 比如正常的请求参数只有一个 name: &#39;123&#39;，但是这里我们需要额外再加上一个 requestName</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">    this.$post(url, { name: &#39;123&#39;, requestName: &#39;post_1&#39; })</span></span>
<span class="line"><span style="color:#6A737D;">        .then(res =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">            console.log(\`请求成功：\${res}\`)</span></span>
<span class="line"><span style="color:#6A737D;">        })</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> axios</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//取消请求</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> CancelToken </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.CancelToken</span></span>
<span class="line"><span style="color:#6A737D;">//设置默认请求头，如果不需要可以取消这一步</span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.headers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;X-Requested-With&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;XMLHttpRequest&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 请求超时的时间限制</span></span>
<span class="line"><span style="color:#24292E;">axios.defaults.timeout </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20000</span></span>
<span class="line"><span style="color:#6A737D;">// 开始设置请求 发起的拦截处理</span></span>
<span class="line"><span style="color:#6A737D;">// config 代表发起请求的参数的实体</span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 得到参数中的 requestName 字段，用于决定下次发起请求，取消对应的 相同字段的请求</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有 requestName 就默认添加一个 不同的时间戳</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> requestName</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(config.method </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(config.data </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> config.data.requestName){</span></span>
<span class="line"><span style="color:#24292E;">            requestName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> config.data.requestName</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            requestName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(config.params </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> config.params.requestName){</span></span>
<span class="line"><span style="color:#24292E;">            requestName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> config.params.requestName</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            requestName </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (requestName) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (axios[requestName] </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> axios[requestName].cancel) {</span></span>
<span class="line"><span style="color:#24292E;">            axios[requestName].</span><span style="color:#6F42C1;">cancel</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        config.cancelToken </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CancelToken</span><span style="color:#24292E;">(</span><span style="color:#E36209;">c</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            axios[requestName] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">            axios[requestName].cancel </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> c</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求到结果的拦截处理</span></span>
<span class="line"><span style="color:#24292E;">axios.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 返回请求正确的结果</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (error </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> error.response) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (error.response.status) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;错误请求&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">401</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;未授权，请重新登录&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">403</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;拒绝访问&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请求错误,未找到该资源&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">405</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请求方法未允许&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">408</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;请求超时&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;服务器端出错&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">501</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;网络未实现&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;网络错误&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;服务不可用&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;网络超时&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">505</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;http版本不支持该请求&#39;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">break</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`连接错误\${</span><span style="color:#24292E;">error</span><span style="color:#032F62;">.</span><span style="color:#24292E;">response</span><span style="color:#032F62;">.</span><span style="color:#24292E;">status</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        error.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;连接到服务器失败&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error.message)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 将axios 的 post 方法，绑定到 vue 实例上面的 $post</span></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$post</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        axios.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(url, params)</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">            }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 将axios 的 get 方法，绑定到 vue 实例上面的 $get</span></span>
<span class="line"><span style="color:#005CC5;">Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$get</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        axios.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(url, {</span></span>
<span class="line"><span style="color:#24292E;">            params: params</span></span>
<span class="line"><span style="color:#24292E;">        }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res) </span><span style="color:#6A737D;">// 返回请求成功的数据 data</span></span>
<span class="line"><span style="color:#24292E;">        }).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 请求示例</span></span>
<span class="line"><span style="color:#6A737D;">// requestName 为多余的参数 作为请求的标识，下次发起相同的请求，就会自动取消上一次还没有结束的请求</span></span>
<span class="line"><span style="color:#6A737D;">// 比如正常的请求参数只有一个 name: &#39;123&#39;，但是这里我们需要额外再加上一个 requestName</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">    this.$post(url, { name: &#39;123&#39;, requestName: &#39;post_1&#39; })</span></span>
<span class="line"><span style="color:#6A737D;">        .then(res =&gt; {</span></span>
<span class="line"><span style="color:#6A737D;">            console.log(\`请求成功：\${res}\`)</span></span>
<span class="line"><span style="color:#6A737D;">        })</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> axios</span></span></code></pre></div><h3 id="main-js-中引入该文件" tabindex="-1">main.js 中引入该文件 <a class="header-anchor" href="#main-js-中引入该文件" aria-label="Permalink to &quot;main.js 中引入该文件&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { axios } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./static/js/axiosTool&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { axios } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./static/js/axiosTool&#39;</span></span></code></pre></div><h3 id="组件中直接使用即可" tabindex="-1">组件中直接使用即可 <a class="header-anchor" href="#组件中直接使用即可" aria-label="Permalink to &quot;组件中直接使用即可&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$post</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.url2, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;王&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    docType: </span><span style="color:#9ECBFF;">&quot;pson&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    requestName: </span><span style="color:#9ECBFF;">&#39;name02&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.url, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;李&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    requestName: </span><span style="color:#9ECBFF;">&#39;name01&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$post</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.url2, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;王&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    docType: </span><span style="color:#032F62;">&quot;pson&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    requestName: </span><span style="color:#032F62;">&#39;name02&#39;</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$get</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.url, {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;李&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    requestName: </span><span style="color:#032F62;">&#39;name01&#39;</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,9),e=[o];function c(r,t,E,y,i,F){return n(),a("div",null,e)}const D=s(l,[["render",c]]);export{u as __pageData,D as default};
