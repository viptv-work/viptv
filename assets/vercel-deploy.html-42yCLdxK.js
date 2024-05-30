import{_ as i,r as n,c as o,b as e,f as a,w as t,a as r,e as d,o as p,d as l}from"./app-DWXjdsEU.js";const c={},k={class:"table-of-contents"},h=e("p",null,"一招教你解决Vercel deploy时总是任意分支都可以触发，如果你的项目有多个分支，可以指定某一个或几个有提交时触发deploy",-1),y=d(`<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这不是刚把博客部署从GitHub Pages转移到了Vercel上，稍微加快了一点国内的访问速度，然后发现了一个新问题~</p><p>原先是推送到<code>main</code>分之，通过Github Action 工作流进行部署到<code>gh-page</code> 分支上</p><p>转移到Vercel之后，工作流我并没有删掉，所以流程还是一样，就导致<code>main</code>提交了---&gt;Action----&gt;<code>gh-page</code>提交</p><p>会触发两次Vercel的部署，当然<code>gh-page</code>是存放静态页面的分支，buid肯定是失败的。下边来解决这个问题吧</p></div><h2 id="_2-步骤" tabindex="-1"><a class="header-anchor" href="#_2-步骤"><span>2. 步骤</span></a></h2><p>如图所示，打开setting-Git-Ignored Build Step</p><p>启用“忽略构建步骤”字段。如果命令返回“0”，则将跳过构建。但是，如果返回代码“1”或更大，则将生成新的部署。</p><p>我是使用系统环境变量来做的，方式有很多，看自己方便吧，在Command处输入以下脚本表示只构建main分支</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;main&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> ]; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">then</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">fi</span></span></code></pre></div><p>系统环境变量默认是曝光的，如果不生效，在Environment Variables 中勾选</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Automatically expose System Environment Variables</label></li></ul><figure><img src="https://s3.bmp.ovh/imgs/2023/03/31/5ae4ba35bd181dcf.png" alt="setting-Git-Ignored Build Step" tabindex="0" loading="lazy"><figcaption>setting-Git-Ignored Build Step</figcaption></figure><h2 id="_3-使用脚本" tabindex="-1"><a class="header-anchor" href="#_3-使用脚本"><span>3. 使用脚本</span></a></h2><p>要在“忽略构建步骤”中运行 bash 脚本，您需要在该字段中设置以下内容：请注意该文件应该存在于您的存储库中。 bash 脚本示例： bash script.shbash 脚本的示例：<code>bash script.sh</code></p><p><strong>注意</strong> 您也可以使用 Node 脚本（例如 ）。<code>node ignore-step.js</code></p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;VERCEL_ENV: </span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_ENV</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [[ </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_ENV</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;production&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> ]] ; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # Proceed with the build</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;✅ - Build can proceed&quot;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # Don&#39;t build</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;🛑 - Build cancelled&quot;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个示例 Ignored Build Step 脚本，其中只允许部署对生产环境所做的提交。应将环境变量“VERCEL_ENV”添加到您的项目中。</p><p>通过使用此命令，Vercel 将仅在“VERCEL_ENV”的值为“production”时构建部署。该变量已添加到环境变量 UI，使其可用于项目。</p><h2 id="_4-使用环境变量" tabindex="-1"><a class="header-anchor" href="#_4-使用环境变量"><span>4. <a href="#_7-%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E4%B8%80%E8%A7%88%E8%A1%A8">使用环境变量</a></span></a></h2><p>您可以直接在 Ignored Build Step 字段中创建引用系统环境变量的命令：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [ </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_ENV</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;production&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> ]; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">then</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">fi</span></span></code></pre></div><p>一个示例 Ignored Build Step 命令，其中只允许部署对生产环境所做的提交。</p><p>下面是一个示例脚本，它将有条件地构建某些分支：</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;VERCEL_GIT_COMMIT_REF: </span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [[ </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;staging&quot;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="color:#24292E;--shiki-dark:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;main&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]] ; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # Proceed with the build</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;✅ - Build can proceed&quot;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # Don&#39;t build</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;🛑 - Build cancelled&quot;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">fi</span></span></code></pre></div><p>一个示例 Ignored Build Step 命令，其中只允许部署从分支“main”和“staging”进行的提交。</p><h2 id="_5-使用文件夹和工作区" tabindex="-1"><a class="header-anchor" href="#_5-使用文件夹和工作区"><span>5. 使用文件夹和工作区</span></a></h2><p>在继续之前，请记住 Ignored Build Step 在您选择的“根目录”的同一文件夹中运行。因此，您可能需要稍微调整一下以适应您的需要。要构建仅考虑特定文件夹的新部署，您可以使用以下命令</p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> diff</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD^</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --quiet</span><span style="color:#032F62;--shiki-dark:#98C379;"> ./packages/frontend/</span></span></code></pre></div><p>“忽略构建步骤”命令的示例。如果将更改提交给“./packages/frontend/”，该命令将产生一个非空响应，从而允许构建继续进行。 通过使用此命令，Vercel 将仅在目录内进行更改时构建部署。如果该文件夹是您选择的“根目录”，则可以使用：<code>packages/frontend/\`\`./packages/frontend/</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> diff</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD^</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --quiet</span><span style="color:#032F62;--shiki-dark:#98C379;"> .</span></span></code></pre></div><p>“忽略的生成步骤”命令的示例。如果将更改提交到 “.”，则该命令将生成非空响应，从而允许继续生成。</p><p>您还可以访问部署中的其他文件夹以检查更改。如果您在构建前端时选择了“根目录”，并且您的应用程序必须仅在进行更改时部署，您可以使用： <code>packages/web</code> <code>../../packages/docs</code></p><div class="language-bash" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> diff</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD^</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --quiet</span><span style="color:#032F62;--shiki-dark:#98C379;"> ../../packages/docs</span></span></code></pre></div><p>“忽略的生成步骤”命令的示例。如果将更改提交到“../../packages/docs“，该命令将产生一个非空响应，允许构建继续。</p><h2 id="_6-在本地调试命令" tabindex="-1"><a class="header-anchor" href="#_6-在本地调试命令"><span>6. 在本地调试命令</span></a></h2><p>要在本地调试忽略的构建步骤命令，首先使用可以复制 Vercel 上可用设置的文件夹非常重要。为此，您可以应用以下步骤：</p><ol><li>使用 将存储库克隆到另一个文件夹。<code>git clone --depth=10 (...)</code></li><li>在终端中运行命令或脚本。</li><li>您可以使用 检查最后一个命令返回的退出代码。<code>echo $?</code></li></ol><h2 id="_7-系统环境变量一览表" tabindex="-1"><a class="header-anchor" href="#_7-系统环境变量一览表"><span>7. 系统环境变量一览表</span></a></h2><table><thead><tr><th style="text-align:left;">名字</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>VERCEL</code></td><td style="text-align:left;">指示应用已在 Vercel 上部署和运行的指示器。 例：。<code>1</code></td></tr><tr><td style="text-align:left;"><code>CI</code></td><td style="text-align:left;">指示代码在<a href="https://en.wikipedia.org/wiki/Continuous_integration" target="_blank" rel="noopener noreferrer">持续集成</a>环境中运行的指示器。 例：。 <strong>注意：</strong> 此变量仅在<a href="https://vercel.com/docs/concepts/deployments/configure-a-build" target="_blank" rel="noopener noreferrer">构建步骤</a>期间公开。<code>1</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_ENV</code></td><td style="text-align:left;">部署和运行应用<a href="https://vercel.com/docs/concepts/projects/environment-variables#environments" target="_blank" rel="noopener noreferrer">的环境</a>。该值可以是 、 或 。<code>production\`\`preview\`\`development</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_URL</code></td><td style="text-align:left;"><a href="https://vercel.com/docs/concepts/deployments/generated-urls" target="_blank" rel="noopener noreferrer">生成的部署 URL</a> 的域名。例：。该值不包括协议方案。<code>*.vercel.app\`\`https://</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_REGION</code></td><td style="text-align:left;">运行应用的<a href="https://vercel.com/docs/concepts/edge-network/regions" target="_blank" rel="noopener noreferrer">区域的</a> ID。 例：。 <strong>注意：</strong> 此变量仅在<a href="https://vercel.com/docs/concepts/functions" target="_blank" rel="noopener noreferrer">无服务器函数</a>的运行时公开。<code>cdg1</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_PROVIDER</code></td><td style="text-align:left;">从中触发部署的 Git 提供程序。 例：。<code>github</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_REPO_SLUG</code></td><td style="text-align:left;">从中触发部署的源存储库。 例：。<code>my-site</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_REPO_OWNER</code></td><td style="text-align:left;">拥有从中触发部署的存储库的帐户。 例：。<code>acme</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_REPO_ID</code></td><td style="text-align:left;">从中触发部署的存储库的 ID。 例：。<code>117716146</code></td></tr><tr><td style="text-align:left;"><mark><code>VERCEL_GIT_COMMIT_REF</code></mark></td><td style="text-align:left;">触发部署的提交的 git 分支。 例：。<code>improve-about-page</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_COMMIT_SHA</code></td><td style="text-align:left;">触发部署的提交的 git <a href="https://help.github.com/articles/github-glossary/#commit" target="_blank" rel="noopener noreferrer">SHA</a>。 例：。<code>fa1eade47b73733d6312d5abfad33ce9e4068081</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_COMMIT_MESSAGE</code></td><td style="text-align:left;">附加到触发部署的提交的消息。 例：。<code>Update about page</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_COMMIT_AUTHOR_LOGIN</code></td><td style="text-align:left;">附加到部署项目的提交作者的用户名。 例：。<code>johndoe</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_COMMIT_AUTHOR_NAME</code></td><td style="text-align:left;">附加到部署项目的提交的作者的名称。 例：。<code>John Doe</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_PREVIOUS_SHA</code></td><td style="text-align:left;">项目和分支的上次成功部署的 git <a href="https://help.github.com/articles/github-glossary/#commit" target="_blank" rel="noopener noreferrer">SHA</a>。 例：。 <strong>注意：</strong> 仅当提供了<a href="https://vercel.com/docs/concepts/projects/overview#ignored-build-step" target="_blank" rel="noopener noreferrer">忽略的生成步骤</a>时，才会公开此变量。<code>fa1eade47b73733d6312d5abfad33ce9e4068080</code></td></tr><tr><td style="text-align:left;"><code>VERCEL_GIT_PULL_REQUEST_ID</code></td><td style="text-align:left;">触发部署的拉取请求 ID。如果在发出拉取请求之前在分支上创建了部署，则此值将为空字符串。 例：。<code>23</code></td></tr></tbody></table>`,37);function g(C,u){const s=n("router-link");return p(),o("div",null,[e("nav",k,[e("ul",null,[e("li",null,[a(s,{to:"#_1-前言"},{default:t(()=>[l("1. 前言")]),_:1})]),e("li",null,[a(s,{to:"#_2-步骤"},{default:t(()=>[l("2. 步骤")]),_:1})]),e("li",null,[a(s,{to:"#_3-使用脚本"},{default:t(()=>[l("3. 使用脚本")]),_:1})]),e("li",null,[a(s,{to:"#_4-使用环境变量"},{default:t(()=>[l("4. 使用环境变量")]),_:1})]),e("li",null,[a(s,{to:"#_5-使用文件夹和工作区"},{default:t(()=>[l("5. 使用文件夹和工作区")]),_:1})]),e("li",null,[a(s,{to:"#_6-在本地调试命令"},{default:t(()=>[l("6. 在本地调试命令")]),_:1})]),e("li",null,[a(s,{to:"#_7-系统环境变量一览表"},{default:t(()=>[l("7. 系统环境变量一览表")]),_:1})])])]),h,r(" more "),y])}const f=i(c,[["render",g],["__file","vercel-deploy.html.vue"]]),_=JSON.parse('{"path":"/tutorial/CI_CD/vercel-deploy.html","title":"Vercel deploy忽略指定分支","lang":"zh-CN","frontmatter":{"title":"Vercel deploy忽略指定分支","icon":"rocket","description":"Vercel Ignored Build Step使用","date":"2023-03-31T00:00:00.000Z","star":true,"isOriginal":true,"order":2,"category":["Vercel"],"tag":["Vercel"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/tutorial/CI_CD/vercel-deploy.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"Vercel deploy忽略指定分支"}],["meta",{"property":"og:description","content":"Vercel Ignored Build Step使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s3.bmp.ovh/imgs/2023/03/31/5ae4ba35bd181dcf.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:19:32.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"Vercel"}],["meta",{"property":"article:published_time","content":"2023-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:19:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vercel deploy忽略指定分支\\",\\"image\\":[\\"https://s3.bmp.ovh/imgs/2023/03/31/5ae4ba35bd181dcf.png\\"],\\"datePublished\\":\\"2023-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:19:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. 步骤","slug":"_2-步骤","link":"#_2-步骤","children":[]},{"level":2,"title":"3. 使用脚本","slug":"_3-使用脚本","link":"#_3-使用脚本","children":[]},{"level":2,"title":"4. 使用环境变量","slug":"_4-使用环境变量","link":"#_4-使用环境变量","children":[]},{"level":2,"title":"5. 使用文件夹和工作区","slug":"_5-使用文件夹和工作区","link":"#_5-使用文件夹和工作区","children":[]},{"level":2,"title":"6. 在本地调试命令","slug":"_6-在本地调试命令","link":"#_6-在本地调试命令","children":[]},{"level":2,"title":"7. 系统环境变量一览表","slug":"_7-系统环境变量一览表","link":"#_7-系统环境变量一览表","children":[]}],"git":{"createdTime":1716109814000,"updatedTime":1716729572000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":5.23,"words":1568},"filePathRelative":"tutorial/CI_CD/vercel-deploy.md","localizedDate":"2023年3月31日","excerpt":"\\n<p>一招教你解决Vercel deploy时总是任意分支都可以触发，如果你的项目有多个分支，可以指定某一个或几个有提交时触发deploy</p>\\n"}');export{f as comp,_ as data};
