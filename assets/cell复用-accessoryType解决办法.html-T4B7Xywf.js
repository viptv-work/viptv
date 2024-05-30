import{_ as s,c as a,o as l,e as i}from"./app-DWXjdsEU.js";const n={},e=i(`<blockquote><p>今天项目里出现一个问题，就是做一个列表选择，然后点击导航栏的确定按钮返回上级界面，并把选择的 cell 数据传递到上级界面。再使用 accessoryType 属性标记单元格之后会出现重用问题。</p></blockquote><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h2><ul><li><p>把 tableView 的 allowsMultipleSelection 属性设为了 YES；</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">_tableView.allowsMultipleSelection </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> YES</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div></li><li><p>在 didSelectRowAtIndexPath 和 didDeselectRowAtIndexPath 方法里面使用了如下方法实现了点击单元格然后用 check mark 标记的方式。</p></li></ul><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#C678DD;">void</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)tableView:(UITableView </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)tableView didSelectRowAtIndexPath:(</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">NSIndexPath</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)indexPath {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">      UITableViewCell </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">cell </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">cellForRowAtIndexPath:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">	  cell</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">accessoryType</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> UITableViewCellAccessoryCheckmark;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#C678DD;">void</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)tableView:(UITableView </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)tableView didDeselectRowAtIndexPath:(</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">NSIndexPath</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> *</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)indexPath {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	[tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">cellForRowAtIndexPath:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath].</span><span style="color:#24292E;--shiki-dark:#E06C75;">accessoryType</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> UITableViewCellAccessoryNone;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="重点来了-两种思路" tabindex="-1"><a class="header-anchor" href="#重点来了-两种思路"><span>重点来了 两种思路</span></a></h3><ul><li>记录选择的 indexpath</li></ul><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"> 	// 1.设一个NSMutableArray属性，元素个数跟你的_dataArray一样，初始化里面存的都是0。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">	 NSMutableArray</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> selectionArray </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">NSMutableArray</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> array</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">	 for</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#005CC5;--shiki-dark:#ABB2BF;">NSInteger</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">; i </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> _dataArray.count; i</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    	[selectionArray </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">addObject:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">@(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)]; </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// 0 表示未选中，1 表示选中了</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	 }</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">	 self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.selectionArray </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> selectionArray;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">   // 2.在 didSelectRowAtIndexPath:里</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	 [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.selectionArray </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">replaceObjectAtIndex:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath.row </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">withObject:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">@(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	 [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">reloadData</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">   // 3.在 didDeselectRowAtIndexPath里：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	 [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.selectionArray </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">replaceObjectAtIndex:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">indexPath.row </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">withObject:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">@(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	 [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">reloadData</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">   // 4.在 cellForRow里：</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	UITableViewCell </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">cell </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">dequeueReusableCellWithIdentifier:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">identifier];</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	cell.textLabel.text </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#E36209;--shiki-dark:#E06C75;"> _dataArray</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#24292E;--shiki-dark:#E5C07B;">indexPath</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">row</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#ABB2BF;">	NSInteger</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> selected </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#E36209;--shiki-dark:#E06C75;">selectionArray</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#24292E;--shiki-dark:#E5C07B;">indexPath</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">row</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">IntegerValue</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (selected </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    cell</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">accessoryType</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> UITableViewCellAccessoryNone;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	} </span><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    	cell</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">accessoryType</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> UITableViewCellAccessoryCheckmark;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">	return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> cell;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>利用 cell 的 selected 属性</p><ul><li>继承 UITableViewCell，在 setSeleted:animated:方法里面，根据选择状态，修改 accessoryType</li></ul></li></ul><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#ABB2BF;">	 -</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D73A49;--shiki-dark:#C678DD;">void</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)setSelected:(</span><span style="color:#D73A49;--shiki-dark:#C678DD;">BOOL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)selected animated:(</span><span style="color:#D73A49;--shiki-dark:#C678DD;">BOOL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)animated {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    	 [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">super</span><span style="color:#005CC5;--shiki-dark:#61AFEF;"> setSelected:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">selected </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">animated:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">animated];</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">		 self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">accessoryType</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> selected</span><span style="color:#D73A49;--shiki-dark:#C678DD;">?</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">UITableViewCellAccessoryCheckmark</span><span style="color:#D73A49;--shiki-dark:#C678DD;">:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">UITableViewCellAccessoryNone;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">		 // Configure the view for the selected state</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">	// 在 cellForRow里：</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">	cell.accessoryType </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> cell.selected</span><span style="color:#D73A49;--shiki-dark:#C678DD;">?</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">UITableViewCellAccessoryCheckmark</span><span style="color:#D73A49;--shiki-dark:#C678DD;">:</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">UITableViewCellAccessoryNone;</span></span></code></pre></div><h3 id="至此已完美解决因为复用所导致的问题" tabindex="-1"><a class="header-anchor" href="#至此已完美解决因为复用所导致的问题"><span>至此已完美解决因为复用所导致的问题</span></a></h3><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">	// 设置tableView可不可以选中</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">    self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView.allowsSelection </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> NO</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // 允许tableview多选</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">    self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView.allowsMultipleSelection </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> YES</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // 编辑模式下是否可以选中</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">    self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView.allowsSelectionDuringEditing </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> NO</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // 编辑模式下是否可以多选</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E5C07B;">    self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView.allowsMultipleSelectionDuringEditing </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> YES</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // 获取被选中的所有行</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">     [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">indexPathsForSelectedRows</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // 获取当前可见的行</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">     [</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#005CC5;--shiki-dark:#61AFEF;">indexPathsForVisibleRows</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">];</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[e];function o(p,t){return l(),a("div",null,r)}const k=s(n,[["render",o],["__file","cell复用-accessoryType解决办法.html.vue"]]),d=JSON.parse('{"path":"/posts/iOS/ui/cell%E5%A4%8D%E7%94%A8-accessoryType%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"Cell的accessoryType属性标记单元格之后，出现的重用问题","lang":"zh-CN","frontmatter":{"title":"Cell的accessoryType属性标记单元格之后，出现的重用问题","date":"2017-02-13T00:00:00.000Z","category":["iOS"],"tag":["iOS","Bug录"],"description":"今天项目里出现一个问题，就是做一个列表选择，然后点击导航栏的确定按钮返回上级界面，并把选择的 cell 数据传递到上级界面。再使用 accessoryType 属性标记单元格之后会出现重用问题。 解决办法 把 tableView 的 allowsMultipleSelection 属性设为了 YES； 在 didSelectRowAtIndexPath...","head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/posts/iOS/ui/cell%E5%A4%8D%E7%94%A8-accessoryType%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"Cell的accessoryType属性标记单元格之后，出现的重用问题"}],["meta",{"property":"og:description","content":"今天项目里出现一个问题，就是做一个列表选择，然后点击导航栏的确定按钮返回上级界面，并把选择的 cell 数据传递到上级界面。再使用 accessoryType 属性标记单元格之后会出现重用问题。 解决办法 把 tableView 的 allowsMultipleSelection 属性设为了 YES； 在 didSelectRowAtIndexPath..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:19:32.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:tag","content":"Bug录"}],["meta",{"property":"article:published_time","content":"2017-02-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:19:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cell的accessoryType属性标记单元格之后，出现的重用问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-02-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:19:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[{"level":3,"title":"重点来了 两种思路","slug":"重点来了-两种思路","link":"#重点来了-两种思路","children":[]},{"level":3,"title":"至此已完美解决因为复用所导致的问题","slug":"至此已完美解决因为复用所导致的问题","link":"#至此已完美解决因为复用所导致的问题","children":[]}]}],"git":{"createdTime":1716109814000,"updatedTime":1716729572000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"posts/iOS/ui/cell复用-accessoryType解决办法.md","localizedDate":"2017年2月13日","excerpt":"","autoDesc":true}');export{k as comp,d as data};
