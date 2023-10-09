# api 分享收集
## 功能:

* ✨在线上传/下载 支持浏览器直链下载!
* 💾支持视频音频在线播放
* 📚 文档 、图书内容 、Office 在线预览
* 💻 覆盖全部存储策略的 WebDAV 协议支持
* 🌗光明、黑暗模式,
* 📡剩下的再说吧....
* 🌈 ... ...

## 网易云音乐
API简介：获取网易云ID的音乐直链，欢迎对接
```js
接口地址：https://api.aa1.cn/api/wymusic/ 

返回格式：MP3

请求方式：GET

请求参数：http://v.api.aa1.cn/api/wymusic/index.php?id=277382
```
## 每日一言
API简介：每日一言，欢迎对接
```js
https://v1.hitokoto.cn/?encode=json
https://v1.hitokoto.cn/ （从7种分类中随机抽取）
https://v1.hitokoto.cn/?c=b （请求获得一个分类是漫画的句子）
https://v1.hitokoto.cn/?c=f&encode=text （请求获得一个来自网络的句子，并以纯文本格式输出）
```
## 高质量小姐姐秒播线路
API简介：【秒播线路】高质量现爬抖音各种小姐姐视频，可以说是精品中的精品
汇聚：陈佩奇，程女士，万小七，爆胎草莓酱，井川里予，巨型萝莉，蔡萝莉， 一栗小莎子，菜菜...等知名女网红（无忧集团旗下艺人...太多不展示了）
大量抖音现产变装

```js
接口地址：https://v.api.aa1.cn/api/api-girl-11-02/index.php 

返回格式：JSON

请求方式：GET

请求参数：https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=json
 ```
 ## 获取网页所有图片
 API简介：爬取目标站当前页面所有图片源
```js
接口地址：https://v.api.aa1.cn/api/api-web-img/index.php 

返回格式：JSON

请求方式：GET

请求参数：https://v.api.aa1.cn/api/api-web-img/index.php?url=api.aa1.cn&type=list
```
## 全国行政规划数据库
API简介：全国省市区镇村【五级版】，数据来源于国家统计局
```json
接口地址：https://zj.v.api.aa1.cn/api/xz/ 

返回格式：JSON

请求方式：GET

请求参数：https://zj.v.api.aa1.cn/api/xz/?code=654028207203
```

|接口名称	|接口类型	|接口说明								|
|:-:			|:-:			|:-:										|
|code			|string		|状态码									|
|ID				|string		|查询的区划代码					|
|msg			|string		|查询结果返回						|
|Name			|string		|查询的区划代码结果			|
|Province	|string		|查询的省份							|
|City			|string		|查询的城市							|
|District	|string		|查询的区/县						|
|Tow			|string		|查询的街道/乡					|
|Villag		|string		|查询的村/社区					|
|LevelType|string		|查询的区划等级：1～5级	|
## 小姐姐短视频
API简介：「随机」遍历目录下文件，视频数据来源于自媒体平台
```json
接口地址：https://tucdn.wpon.cn/api-girl/index.php 

返回格式：MP4

请求方式：GET

请求参数：https://tucdn.wpon.cn/api-girl/index.php?wpon=json
```
## QQ获取邮箱
API简介：获取你的QQ邮箱
```json
接口地址：https://v.api.aa1.cn/api/qqemail/ 

返回格式：HTML

请求方式：GET

请求参数：https://v.api.aa1.cn/api/qqemail/index.php?qq=15001904
```
## QQ获取JSON
API简介：获取你的QQ数据并返回JSON
```ts
接口地址：https://v.api.aa1.cn/api/qqjson/ 

返回格式：JSON

请求方式：GET

请求参数：https://v.api.aa1.cn/api/qqjson/index.php?qq=15001904
```
## PC端风景视频
API简介：「随机」内嵌至你的网站背景，绝绝子！
```js
接口地址：https://v.api.aa1.cn/api/api-fj/index.php?aa1=suf7y58th48u935 

返回格式：MP4

请求方式：GET

请求参数：https://v.api.aa1.cn/api/api-fj/index.php?aa1=json
```
## 朋友圈一言
API简介：朋友圈每日经典一句
```js
接口地址：https://v.api.aa1.cn/api/pyq/ 

返回格式：JSON

请求方式：GET

请求参数：https://v.api.aa1.cn/api/pyq/index.php?aa1=json
```
## 知乎每日新闻
API简介：知乎每日最新新闻，欢迎对接
```js
接口地址：https://v.api.aa1.cn/api/zhihu-news/ 

返回格式：JSON

请求方式：GET

请求参数：https://v.api.aa1.cn/api/zhihu-news/index.php?aa1=xiarou
```
## 名人名言
API简介：毒鸡汤不够？上名人说的名话！
```JS 
接口地址：https://v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php 

返回格式：JSON

请求方式：GET

请求参数：https://v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php?aa1=json
```
## MD5在线加解密
API简介：加解密MD5，仅简单的md5解密
```js
接口地址：https://v.api.aa1.cn/api/api-md5/ 

返回格式：TXT

请求方式：GET

请求参数：https://v.api.aa1.cn/api/api-md5/go.php?act=加密&md5=夏柔123456
```
## AI智能写作
API简介：夸克官方智能续写
```js
接口地址：https://api.pearktrue.cn/api/ai/write/ 

返回格式：JSON

请求方式：GET POST

请求参数：https://api.pearktrue.cn/api/ai/write/?text=体育课&page=1
```
