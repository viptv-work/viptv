import{p as k,H as b,a as x}from"./artConst-CzWnV0EE.js";import{v}from"./vod-DsdsJOok.js";import{h as z,u as A,i as N,r as c,o as r,c as p,f as y,k as d,w as l,d as _,F as f,l as g,m as h}from"./app-BT5VxetQ.js";import{_ as Z}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const H=z({__name:"swdj.html",setup(L){const e=A("vod-swdj",{src:"",vodsn:[],vodyl:[],PlayList:[]});N(async()=>{const o=await v.find({name:"snzy-54"}),t=await v.find({name:"ylzy-54"});e.value.vodsn=o.data,e.value.vodyl=t.data,u(0)});const u=o=>{const{vodsn:t}=e.value;e.value.PlayList=t[o].play_list,e.value.src=t[o].play_list[0].url},w=o=>{const{vodyl:t}=e.value;e.value.PlayList=t,e.value.src=t[o].url},T={poster:k,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:b},plugins:[x({autoNext:!0,playlist:e.value.PlayList})]};return(o,t)=>{const P=c("ArtPlayer"),m=c("SiteInfo"),j=c("Tabs");return r(),p("div",null,[y(P,{src:d(e).src,config:T},null,8,["src"]),y(j,{id:"2",data:[{id:"索尼资源"},{id:"鱼乐资源"}],active:0},{title0:l(({value:n,isActive:s})=>[_("索尼资源")]),title1:l(({value:n,isActive:s})=>[_("鱼乐资源")]),tab0:l(({value:n,isActive:s})=>[(r(!0),p(f,null,g(d(e).vodsn,(a,i)=>(r(),h(m,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:C=>u(i)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:n,isActive:s})=>[(r(!0),p(f,null,g(d(e).vodyl,(a,i)=>(r(),h(m,{name:a.title,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:C=>w(i)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),$=Z(H,[["__file","swdj.html.vue"]]),D=JSON.parse('{"path":"/vod/duanju/swdj.html","title":"爽文短剧","lang":"zh-CN","frontmatter":{"title":"爽文短剧","icon":"file-video","date":"2020-01-01T00:00:00.000Z","order":1,"category":["影视点播"],"tag":["短剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/duanju/swdj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"爽文短剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:04:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"短剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:04:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"爽文短剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:04:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715810670000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":2}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"vod/duanju/swdj.md","localizedDate":"2020年1月1日","excerpt":""}');export{$ as comp,D as data};
