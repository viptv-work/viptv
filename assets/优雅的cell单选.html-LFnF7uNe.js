import{_ as e,c as a,o as s,e as l}from"./app-DWXjdsEU.js";const t={},i=l(`<blockquote><p>最近有些忙，好久没有写博客了。 分享一个 cell 做单选的思路</p></blockquote><h2 id="可行的思路" tabindex="-1"><a class="header-anchor" href="#可行的思路"><span>可行的思路</span></a></h2><ol><li>在 tableview 的控制器中设立一个变量记录选择的 indexPath，点击 cell 之后刷新表格来和现有 indexPath 对比</li><li>和第一种大同小异，做一个和 dataArr 同样的数组，记录 indexPath，循环确定当前 cell 是否为选中 cell</li><li>利用 cell 的<code>- (void)setSelected:(BOOL)selected animated:(BOOL)animated</code>方法</li></ol><h2 id="利弊分析" tabindex="-1"><a class="header-anchor" href="#利弊分析"><span>利弊分析</span></a></h2><ol><li>前两种，都需要在<code>didSelectRowAtIndexPath</code>方法中来刷新表格，可能会造成不必要的滑动，而且需要单独的外在属性来记录这个选择</li><li>第三种方法是我要介绍的，不用任何外在属性，不用变量，不用数组。实现 cell、或 cell 中 Button 的单选。并且不会因为复用而造成位置错乱，如果要实现 cell 的多选可以参考我之前的文章<a href="http://oragekk.me/02-13-2017/cell%E5%A4%8D%E7%94%A8-accessoryType%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html" target="_blank" rel="noopener noreferrer">Cell 的 accessoryType 属性标记单元格之后，出现的重用问题</a></li></ol><h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式"><span>实现方式</span></a></h2><ol><li><p>如果要有默认选择在初始化 tableView 完成后写</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">NSIndexPath</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">NSIndexPath</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> indexPathForRow:</span><span style="color:#005CC5;--shiki-dark:#D19A66;">0</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> inSection:</span><span style="color:#005CC5;--shiki-dark:#D19A66;">0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">selectRowAtIndexPath:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">animated:</span><span style="color:#005CC5;--shiki-dark:#D19A66;">YES</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> scrollPosition:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">UITableViewScrollPositionNone];</span></span></code></pre></div></li><li><p>然后在 cell 中实现<code>- (void)setSelected:(BOOL)selected animated:(BOOL)animated</code>方法</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D73A49;--shiki-dark:#C678DD;">void</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)setSelected:(</span><span style="color:#D73A49;--shiki-dark:#C678DD;">BOOL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)selected animated:(</span><span style="color:#D73A49;--shiki-dark:#C678DD;">BOOL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)animated {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">super</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> setSelected:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">selected </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">animated:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">animated];</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (selected) {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">    	self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E5C07B;">selBtn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">selected</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> YES</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	}</span><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">    	self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E5C07B;">selBtn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">selected</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> NO</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div></li><li><p>在<code>didSelectRowAtIndexPath</code>方法中给点击的 cell 手动选中，并不需要刷新表格</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">selectRowAtIndexPath:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">animated:</span><span style="color:#005CC5;--shiki-dark:#D19A66;">YES</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> scrollPosition:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">UITableViewScrollPositionNone];</span></span></code></pre></div></li></ol><blockquote><p>至此结束，可以看一下效果 <img src="https://storage4.cuntuku.com/2018/01/13/dvITJ.gif" alt="效果图.md.gif" loading="lazy"></p></blockquote>`,8),o=[i];function n(r,c){return s(),a("div",null,o)}const d=e(t,[["render",n],["__file","优雅的cell单选.html.vue"]]),k=JSON.parse('{"path":"/posts/iOS/ui/%E4%BC%98%E9%9B%85%E7%9A%84cell%E5%8D%95%E9%80%89.html","title":"优雅的实现TableViewCell单选","lang":"zh-CN","frontmatter":{"title":"优雅的实现TableViewCell单选","date":"2018-01-12T00:00:00.000Z","category":["iOS"],"tag":["iOS"],"description":"最近有些忙，好久没有写博客了。 分享一个 cell 做单选的思路 可行的思路 在 tableview 的控制器中设立一个变量记录选择的 indexPath，点击 cell 之后刷新表格来和现有 indexPath 对比 和第一种大同小异，做一个和 dataArr 同样的数组，记录 indexPath，循环确定当前 cell 是否为选中 cell 利用 ...","head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/posts/iOS/ui/%E4%BC%98%E9%9B%85%E7%9A%84cell%E5%8D%95%E9%80%89.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"优雅的实现TableViewCell单选"}],["meta",{"property":"og:description","content":"最近有些忙，好久没有写博客了。 分享一个 cell 做单选的思路 可行的思路 在 tableview 的控制器中设立一个变量记录选择的 indexPath，点击 cell 之后刷新表格来和现有 indexPath 对比 和第一种大同小异，做一个和 dataArr 同样的数组，记录 indexPath，循环确定当前 cell 是否为选中 cell 利用 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://storage4.cuntuku.com/2018/01/13/dvITJ.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:19:32.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2018-01-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:19:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优雅的实现TableViewCell单选\\",\\"image\\":[\\"https://storage4.cuntuku.com/2018/01/13/dvITJ.gif\\"],\\"datePublished\\":\\"2018-01-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:19:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"可行的思路","slug":"可行的思路","link":"#可行的思路","children":[]},{"level":2,"title":"利弊分析","slug":"利弊分析","link":"#利弊分析","children":[]},{"level":2,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[]}],"git":{"createdTime":1716109814000,"updatedTime":1716729572000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"posts/iOS/ui/优雅的cell单选.md","localizedDate":"2018年1月12日","excerpt":"","autoDesc":true}');export{d as comp,k as data};
