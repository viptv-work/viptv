import{v as u}from"./vod-BPJKCHVC.js";import{h as j}from"./artConst-Cd59JGgx.js";import{_ as w,u as P,h as C,r as p,c as d,f as g,j as n,w as l,o as r,d as _,F as h,l as f,m as y}from"./app-DWXjdsEU.js";import"./commonjsHelpers-Cpj98o6Y.js";const k={__name:"hgj.html",setup(A){const e=P("vod-hgj",{src:"",vodlz:[],vodbf:[],PlayList:[]});C(async()=>{const o=await u.find({name:"lzzy-15"}),a=await u.find({name:"bfzy-34"});e.value.vodlz=o.data,e.value.vodbf=a.data,m(0)});const m=o=>{const{vodlz:a}=e.value;e.value.PlayList=a[o].play_list,e.value.src=a[o].play_list[0].url};return(o,a)=>{const b=p("ArtPlayer"),v=p("SiteInfo"),T=p("Tabs");return r(),d("div",null,[g(b,{src:n(e).src,config:n(j)(n(e).PlayList)},null,8,["src","config"]),g(T,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:i,isActive:c})=>[_("量子资源")]),title1:l(({value:i,isActive:c})=>[_("暴风资源")]),tab0:l(({value:i,isActive:c})=>[(r(!0),d(h,null,f(n(e).vodlz,(t,s)=>(r(),y(v,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>m(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:c})=>[(r(!0),d(h,null,f(n(e).vodbf,(t,s)=>(r(),y(v,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>o.vodbf(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},B=w(k,[["__file","hgj.html.vue"]]),L=JSON.parse('{"path":"/vod/tvb/hgj.html","title":"韩国剧","lang":"zh-CN","frontmatter":{"title":"韩国剧","icon":"clone","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["韩国剧"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/tvb/hgj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"韩国剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:24:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"韩国剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"韩国剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:24:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1716729880000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":7}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"vod/tvb/hgj.md","localizedDate":"2020年1月1日","excerpt":""}');export{B as comp,L as data};
