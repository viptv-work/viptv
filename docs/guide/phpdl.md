# PHP 代理教程 发布内容搜集于互联网或网友分享，仅供学习与交流

## 央视频 PHP（20230903）

```php
<?php
//https://www.yangshipin.cn/#/tv/home
$id = isset($_GET['id'])?$_GET['id']:'bqkj';
$n = [
    //央视
    'cctv4k' => 2000266303,//cccv-4k
    'cctv8k' => 2020603401,//cccv-8k
    'cctv1' => 2000210103,//cccv1
    'cctv2' => 2000203603,//cccv2
    'cctv3' => 2000203803,//cccv3(vip)
    'cctv4' => 2000204803,//cccv4
    'cctv5' => 2000205103,//cccv5
    'cctv5p' => 2000204503,//cccv5+
    'cctv6' => 2000203303,//cccv6(vip)
    'cctv7' => 2000510003,//cccv7
    'cctv8' => 2000203903,//cccv8(vip)
    'cctv9' => 2000499403,//cccv9
    'cctv10' => 2000203503,//CCTV10
    'cctv11' => 2000204103,//CCTV11
    'cctv12' => 2000202603,//CCTV12
    'cctv13' => 2000204603,//CCTV13
    'cctv14' => 2000204403,//CCTV14
    'cctv15' => 2000205003,//CCTV15
    'cctv16' => 2012375003,//CCTV16
    'cctv16-4k' => 2012375003,//CCTV16-4k(vip)
    'cctv17' => 2000204203,//CCTV17
    //央视数字
    'bqkj' => 2012513403,//CCTV兵器科技(vip)
    'dyjc' => 2012514403,//CCTV第一剧场(vip)
    'hjjc' => 2012511203,//CCTV怀旧剧场(vip)
    'fyjc' => 2012513603,//CCTV风云剧场(vip)
    'fyyy' => 2012514103,//CCTV风云音乐(vip)
    'fyzq' => 2012514203,//CCTV风云足球(vip)
    'dszn' => 2012514003,//CCTV电视指南(vip)
    'nxss' => 2012513903,//CCTV女性时尚(vip)
    'whjp' => 2012513803,//CCTV央视文化精品(vip)
    'sjdl' => 2012513303,//CCTV世界地理(vip)
    'gefwq' => 2012512503,//CCTV高尔夫网球(vip)
    'ystq' => 2012513703,//CCTV央视台球(vip)
    'wsjk' => 2012513503,//CCTV卫生健康(vip)
    //央视国际
    'cgtn' => 2001656803,//CGTN
    'cgtnjl' => 2010155403,//CGTN纪录
    'cgtne' => 2010152503,//CGTN西语
    'cgtnf' => 2010153503,//CGTN法语
    'cgtna' => 2010155203,//CGTN阿语
    'cgtnr' => 2010152603,//CGTN俄语
    //卫视
    'bjws' => 2000272103,//北京卫视
    'dfws' => 2000292403,//东方卫视
    'tjws' => 2019927003, //天津卫视
    'cqws' => 2000297803,//重庆卫视
    'hljws' => 2000293903,//黑龙江卫视
    'lnws' => 2000281303,//辽宁卫视
    'hbws' => 2000293403,//河北卫视
    'sdws' => 2000294803,//山东卫视
    'ahws' => 2000298003,//安徽卫视
    'hnws' => 2000296103,//河南卫视
    'hubws' => 2000294503,//湖北卫视
    'hunws' => 2000296203,//湖南卫视
    'jxws' => 2000294103,//江西卫视
    'jsws' => 2000295603,//江苏卫视
    'zjws' => 2000295503,//浙江卫视
    'dnws' => 2000292503,//东南卫视
    'gdws' => 2000292703,//广东卫视
    'szws' => 2000292203,//深圳卫视
    'gxws' => 2000294203,//广西卫视
    'gzws' => 2000293303,//贵州卫视
    'scws' => 2000295003,//四川卫视
    'xjws' => 2019927403, //新疆卫视
    'hinws' => 2000291503,//海南卫视
    ];
$cnlid = $n[$id];
$guid = "0";//随意字符或字符串
$salt = '0f$IVHi9Qno?G';
$platform = "5910204";
$key = hex2bin("48e5918a74ae21c972b90cce8af6c8be");
$iv = hex2bin("9a7e7d23610266b1d9fbf98581384d92");
$ts = time();
$el = "|{$cnlid}|{$ts}|mg3c3b04ba|V1.0.0|{$guid}|{$platform}|https://www.yangshipin.c|mozilla/5.0 (windows nt ||Mozilla|Netscape|Win32|";

$len = strlen($el);
$xl = 0;
for($i=0;$i<$len;$i++){
    $xl = ($xl << 5) - $xl + ord($el[$i]);
    $xl &= $xl & 0xFFFFFFFF;
    }

$xl = ($xl > 2147483648) ? $xl - 4294967296 : $xl;

$el = '|'.$xl.$el;
$ckey = "--01".strtoupper(bin2hex(openssl_encrypt($el,"AES-128-CBC",$key,1,$iv)));

$params = [
        "adjust"=>1,
        "appVer"=>"V1.0.0",
        "app_version"=>"V1.0.0",
        "cKey"=>$ckey,
        "channel"=>"ysp_tx",
        "cmd"=>"2",
        "cnlid"=>"{$cnlid}",
        "defn"=>"fhd",
        "devid"=>"devid",
        "dtype"=>"1",
        "encryptVer"=>"8.1",
        "guid"=>$guid,
        "otype"=>"ojson",
        "platform"=>$platform,
        "rand_str"=>"{$ts}",
        "sphttps"=>"1",
        "stream"=>"2"
        ];

$sign = md5(http_build_query($params).$salt);
$params["signature"] = $sign;

$bstrURL = "https://player-api.yangshipin.cn/v1/player/get_live_info";
$headers = [
        "Content-Type: application/json",
        "Referer: https://www.yangshipin.cn/",
        "Cookie: guid={$guid};vplatform=109",
        "Yspappid: 519748109",
        ];
$ch = curl_init($bstrURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($params));
$data = curl_exec($ch);
curl_close($ch);

$json = json_decode($data);
$live = $json->data->playurl;
$burl = explode("{$n[$id]}.m3u8",$live)[0];
$d = file_get_contents($live);
$str = preg_replace("/(.*?.ts)/", $burl."$1",$d);
header("Content-Type: application/vnd.apple.mpegurl");
header("Content-Disposition: inline; filename=index.m3u8");
echo $str;
?>
```

## 谷豆代理 PHP 源码

```php
<?php
error_reporting(0);
header('Content-Type:text/html;charset=UTF-8');

$id=$_GET['id'];
$playseek=$_GET['playseek'];
//$user='17199741419';
//$ptoken='w14L5ppGYYzipwiIRQpgdA==';
//$pserialnumber='865372026096088';
$user='freeuser';
$ptoken='A5ZjU2OThiNjAxMzExMTBkN==';
$pserialnumber='b60131110d72d53';
$t=time();
$nonce=rand(100000,999999);
$str='sumasalt-app-portalpVW4U*FlS'.$t.$nonce.$user;
$hmac=substr(sha1($str),0,10);
$onlineip=$_SERVER['REMOTE_ADDR'];
$info='ptype=1&plocation=001&puser='.$user.'&ptoken='.$ptoken.'&pversion=030104&pserverAddress=portal.gcable.cn&pserialNumber='.$pserialnumber.'&pkv=1&ptn=Y29tLnN1bWF2aXNpb24uc2FucGluZy5ndWRvdQ&pappName=GoodTV&DRMtoken='.$ptoken.'&epgID=&authType=0&secondAuthid=&t='.$ptoken.'&pid=&cid=&u='.$user.'&p=8&l=001&d='.$pserialnumber.'&n='.$id.'&v=2&hmac='.$hmac.'&timestamp='.$t.'&nonce='.$nonce;
$url='http://portal.gcable.cn:8080/PortalServer-App/new/aaa_aut_aut002';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, $info);
curl_setopt($ch, CURLOPT_USERAGENT, "Apache-HttpClient/UNAVAILABLE (java 1.4)");
//curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded', 'Host: portal.gcable.cn:8080', 'Connection: Keep-Alive','Accept-Encoding: gzip','Content-Length: 440')); 页头信息备用
curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-FORWARDED-FOR:'.$onlineip, 'CLIENT-IP:'.$onlineip));
$res = curl_exec($ch);
curl_close($ch);
//preg_match('|aaa?(.*?)&ip|',$res, $tk);
//$live="http://gslb.gcable.cn:8070/live/".$id.".m3u8?".$tk[1];
$uas=parse_url($res);
parse_str($uas["query"]);
$token="?t=".$t."&u=".$u."&p=".$p."&pid=&cid=".$cid."&d=".$d."&sid=".$sid."&r=".$r."&e=".$e."&nc=".$nc."&a=".$a."&v=".$v;
$playurl = "http://gslb.gcable.cn:8070/live/".$id.".m3u8".$token;
if($playseek !== null){
         $t = explode('-',$playseek);
	     $st=strtotime($t[0]);
         $et=strtotime($t[1]);
         $playurl=$playurl."&starttime=".$st."&endtime=".$et."";
         }
//print_r ($playurl);
header('Location: '.$playurl);
?>
```

## bestv 切片 php 回看源码(23/10/18 更新内置域名)

```php
<?php
/*
*作者：清樱
*鸣谢：(以下排名不分先后)
*      代码框架参考 @友善的肥羊 => https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8291436
*      id部分参考 @guoma => https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8303446
*      兼容灵感来源 @silverchs => https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8303741
*      diyp回看参考 @可酷可乐 => https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=4120300
*      原版回看参考 @zeroshuo => https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8271557&page=1&authorid=752586
*      部分内置域名参考 @友善的肥羊/@fanmingming/@wjxgzz
*
*本源码仅作研究与学习交流使用,请勿用于非法用途,否则后果自负！
*转载请注明出处,同时保留源码的完整性。
*/
date_default_timezone_set("PRC");//设置时区
//定义内置$ip_arr数组
$ip_arr = [
	'ts-gitv-hb-yh.189smarthome.com',
	'live-gitv-xj-yh.189smarthome.com',
	'live-gitv-nm-yh.189smarthome.com',
	'122d6f6388173cbc5240f6d0036bc5b7.v.smtcdns.net/sitv.mobilev51.live.bestvcdn.com.cn/1',
	'36.131.222.91:8088/liveplay-kk.rtxapp.com',
];//其中live也可换成ts
//$ip参数引入
$ip = empty($_GET['ip']) ? "0" : $_GET['ip'];//为空时置零
//$ip参数合法性判断
if (isset($ip_arr[$ip])) {
	$ip = $ip_arr[$ip];//$ip_arr数组中已定义,取数组中对应的值
} else if (preg_match('/^[\d.:]+$/', $ip)) {
	$ip = "$ip/liveplay-kk.rtxapp.com";//$ip_arr数组中未定义,但只含有[数字.:]三种字符,加上域名
}
//定义内置$id_arr数组
$id_arr = [
	'cctv1' => 'cctv1hd8m/8000000',//CCTV1
	'cctv2' => 'cctv2hd8m/8000000',//CCTV2
	'cctv3' => 'cctv38m/8000000',//CCTV3
	'cctv4' => 'cctv4hd8m/8000000',//CCTV4
	'cctv5' => 'cctv58m/8000000',//CCTV5
	'cctv6' => 'cctv6hd8m/8000000',//CCTV6
	'cctv7' => 'cctv7hd8m/8000000',//CCTV7
	'cctv8' => 'cctv8hd8m/8000000',//CCTV8
	'cctv9' => 'cctv9hd8m/8000000',//CCTV9
	'cctv10' => 'cctv10hd8m/8000000',//CCTV10
	'cctv11' => 'cctv11hd8m/8000000',//CCTV11
	'cctv12' => 'cctv12hd8m/8000000',//CCTV12
	'cctv13' => 'cctv13xwhd8m/8000000',//CCTV13
	'cctv14' => 'cctvsehd8m/8000000',//CCTV14
	'cctv15' => 'cctv15hd8m/8000000',//CCTV15
	'cctv16' => 'cctv16hd8m/8000000',//CCTV16
	'cctv164k' => 'cctv16hd4k/15000000',//CCTV16
	'cctv17' => 'cctv17hd8m/8000000',//CCTV17
	'cctv5p' => 'cctv5phd8m/8000000',//CCTV5+
	'cctv5p2' => 'cctv5hd8m/8000000',//CCTV5+
	'cctv4k' => 'cctv4k/15000000',//CCTV4K
	'cgtn' => 'ottcctvnews/1300000',//CGTN
	'zgjy1' => 'zgjy1t8m/8000000',//中国教育1台
	'zgjy2' => 'cetv2/2500000',//中国教育2台
	'zgjy4' => 'zgjy4hd8m/8000000',//中国教育4台
	'gxws' => 'gxwshd8m/8000000',//广西卫视
	'gdws' => 'gdwshd8m/8000000',//广东卫视
	'szws' => 'szwshd8m/8000000',//深圳卫视
	'hainan' => 'hainanwshd8m/8000000',//海南卫视
	'ssws' => 'sswshd8m/8000000',//三沙卫视
	'ynws' => 'ynwshd8m/8000000',//云南卫视
	'gzws' => 'gzwshd8m/8000000',//贵州卫视
	'dnws' => 'dnwshd8m/8000000',//东南卫视
	'xmws' => 'xmws/1300000',//厦门卫视
	'jxws' => 'jxws8m/8000000',//江西卫视
	'ahws' => 'ahwshd8m/8000000',//安徽卫视
	'hunan' => 'hunanwshd8m/8000000',//湖南卫视
	'hubei' => 'hubeiws8m/8000000',//湖北卫视
	'hnws' => 'hnwshd8m/8000000',//河南卫视
	'hbws' => 'hbwshd8m/8000000',//河北卫视
	'cqws' => 'cqws8m/8000000',//重庆卫视
	'scws' => 'scwshd/8000000',//四川卫视
	'zjws' => 'zjwshd8m/8000000',//浙江卫视
	'jsws' => 'jswshd8m/8000000',//江苏卫视
	'dfws' => 'dfwshd8m/8000000',//东方卫视
	'zqpd' => 'zqpd8m/8000000',//东方卫视
	'sdws' => 'sdws8m/8000000',//山东卫视
	'bjws' => 'bjwshd8m/8000000',//北京卫视
	'tjws' => 'tjwshd8m/8000000',//天津卫视
	'lnws' => 'lnwshd8m/8000000',//辽宁卫视
	'jlws' => 'jlwshd8m/8000000',//吉林卫视
	'hljws' => 'hljwshd8m/8000000',//黑龙江卫视
	'sxws' => 'sxws/1300000',//陕西卫视
	'shanxi' => 'shanxiws/1300000',//山西卫视
	'gsws' => 'gswshd8m/8000000',//甘肃卫视
	'nxws' => 'nxws/1300000',//宁夏卫视
	'qhws' => 'qhws/1300000',//青海卫视
	'xzws' => 'xzws/2500000',//西藏卫视
	'xjws' => 'xjws/1300000',//新疆卫视
	'btws' => 'btws/1300000',//兵团卫视
	'nmgws' => 'nmgws/1300000',//内蒙古卫视
	'kbws' => 'kbws/2500000',//康巴卫视
	'kkse' => 'kkse8m/8000000',//卡酷少儿
	'jykt' => 'jykt/1300000',//金鹰卡通
	'hhxd' => 'hhxd8m/8000000',//哈哈炫动
	'jjkt' => 'jjkt/1300000',//嘉佳卡通
	'zgtq' => 'zgqx/1300000',//中国天气
	'cftx' => 'cftx/2500000',//财富天下
	'cpd' => 'cpdhdavs8m/8000000',//茶频道
	'klcd' => 'klcd8m/8000000',//快乐垂钓
	'hxjc' => 'hxjc8m/8000000',//欢笑剧场4K
	'hxjc4k' => 'hxjc4k/15000000',//欢笑剧场4K
	'dsjc' => 'dsjc8m/8000000',//都市剧场
	'dmxc' => 'dmxc8m/8000000',//动漫秀场
	'leyou' => 'qjshd8m/8000000',//乐游
	'yxfy' => 'yxfy8m/8000000',//游戏风云
	'jbty' => 'jbtyhd8m/8000000',//劲爆体育
	'mlzq' => 'mlyyhd8m/8000000',//魅力足球
	'xsj' => 'xsjhd8m/8000000',//新视觉
	'fztd' => 'fztd8m/8000000',//法治天地
	'jsxt' => 'jingsepd8m/8000000',//金色学堂
	'qcxj' => 'qcxjhd8m/8000000',//七彩戏剧
	'shss' => 'shss8m/8000000',//生活时尚
	'dfcj' => 'dfcjhd8m/8000000',//东方财经
	'xgyy' => 'xgyy8m/8000000',//星光影院
	'dzjc' => 'dzjc8m/8000000',//谍战剧场
	'hyyy' => 'hyyy8m/8000000',//华语影院
	'qqdp' => 'qqdp8m/8000000',//全球大片
	'rmjc' => 'rmjc8m/8000000',//热门剧场
	'qcdm' => 'qcdm8m/8000000',//青春动漫
	'bbdh' => 'bbdh8m/8000000',//宝宝动画
	'djtt' => 'djtt8m/8000000',//电竞天堂
	'rmzy' => 'rmzy8m/8000000',//热门综艺
	'jkys' => 'jkys8m/8000000',//健康养生
	'xqjx' => 'xqjx8m/8000000',//戏曲精选
	'bbkt' => 'bbkt8m/8000000',//百变课堂
	'ktxjx' => 'ktxjx8m/8000000',//看天下精选
	'dfys' => 'dfyshd8m/8000000',//东方影视
	'jsrw' => 'jspdhd/4000000',//纪实人文
	'jyjs' => 'jyjs8m/8000000',//金鹰纪实
	'bjjskj' => 'dajs8m/8000000',//北京纪实科教
	'wxty' => 'wxtyhd8m/8000000',//五星体育
	'dycj' => 'dycjhd8m/8000000',//第一财经
	'hxws' => 'hxwshd4m/4000000',//海峡卫视
	'dfgw' => 'dfgwsxhd8m/8000000',//东方购物
	'fjdsj' => 'fjdsjhd4m/4000000',//福建电视剧
	'fjjy' => 'fjjypdhd4m/4000000',//福建教育
	'fjjj' => 'fjjjshhd4m/4000000',//福建经济
	'fjly' => 'fjlyhd4m/4000000',//福建旅游
	'fjse' => 'fjsehd4m/4000000',//福建少儿
	'fjwt' => 'fjtyhd4m/4000000',//福建文体
	'fjgg' => 'fjgghd4m/4000000',//福建乡村振兴公共
	'fjxw' => 'fjxwhd8m/8000000',//福建新闻
	'fjzh' => 'fjzhhd4m/4000000',//福建综合
	'pudong' => 'hhse/2500000',//浦东电视台
	'shics' => 'icshd8m/8000000',//上海ICS
	'shds' => 'dshd8m/8000000',//上海都市
	'shjy' => 'setvhd/8000000',//上海教育
	'shxwzh' => 'xwzhhd8m/8000000',//上海新闻综合
	'xzzy' => 'xzwszy/2500000',//西藏藏语
	'kzkt1' => 'kkyinj/1300000',//空中课堂一年级
	'kzkt2' => 'kkernj/1300000',//空中课堂二年级
	'kzkt3' => 'kksannj/1300000',//空中课堂三年级
	'kzkt4' => 'kksinj/1300000',//空中课堂四年级
	'kzkt5' => 'kkwunj/1300000',//空中课堂五年级
	'kzkt6' => 'kkliunj/1300000',//空中课堂六年级
	'kzkt7' => 'kkqinj/1300000',//空中课堂七年级
	'kzkt8' => 'kkbanj/1300000',//空中课堂八年级
	'kzkt9' => 'kkjiunj/1300000',//空中课堂九年级
	'kzktg1' => 'kkgaoyinj/1300000',//空中课堂高一
	'kzktg2' => 'kkgaoernj/1300000',//空中课堂高二
	'kzktg3' => 'kkgaosannj/1300000',//空中课堂高三
];
//$id参数引入
$id = empty($_GET['id']) ? "cctv1" : $_GET['id'];//为空时置为cctv1
//$id参数预处理(只是为了原生兼容自定义源标签)
if (preg_match('/\?.*|\$.*/', $id)) {//处理id=.*\?.*或id=.*\$.*的情况
	$id = preg_replace('/\?.*|\$.*/', '', $id);
}
//$id参数合法性判断
if (isset($id_arr[$id])) {
	$id = $id_arr[$id];//$id_arr数组中已定义,取数组中对应的值
}
//拼接地址前半部分
$url = "http://{$ip}/live/program/live/{$id}/";
//回看参数引入
$playseek = $_GET['playseek']??'';
$starttime = $_GET['starttime']??'';
$endtime = $_GET['endtime']??'';
//时间戳获取
$time = time();
//模式判断
if (empty($playseek) && empty($starttime)) {//直播
	$s_t = substr($time,0,9)-7;//时间戳取到十秒位,并回退70秒
	//生成m3u8列表前4行
	$m3u8 = "#EXTM3U".PHP_EOL."#EXT-X-VERSION:3".PHP_EOL."#EXT-X-TARGETDURATION:10".PHP_EOL."#EXT-X-MEDIA-SEQUENCE:{$s_t}".PHP_EOL;
	//生成m3u8列表后6行
	for ($i = 0; $i < 3; $i++, $s_t++) {
		$time = $s_t.'0';//将$s_t补到秒位,存到$time参数中
		$date = date('YmdH', $time);//$time转换成年月日时的格式,如2023091920,存到$date参数中
		$m3u8 .= "#EXTINF:10," .PHP_EOL .$url .$date ."/" .$s_t .".ts" .PHP_EOL;//生成m3u8列表后2行
	}
} else {//回看
	if ($playseek) {//$playseek模式
		//$playseek切割,并转成$starttime和$endtime
		$t_arr=explode('-',$playseek);
		$starttime = strtotime($t_arr[0]);
		$endtime = strtotime($t_arr[1]);
	}
	$s_t = substr($starttime,0,9);//取$starttime前9位
	$e_t = substr($endtime,0,9);//取$endtime前9位
	//生成m3u8列表前4行
	$m3u8 = "#EXTM3U".PHP_EOL."#EXT-X-VERSION:3".PHP_EOL."#EXT-X-TARGETDURATION:10".PHP_EOL."#EXT-X-MEDIA-SEQUENCE:{$s_t}".PHP_EOL;
	for (; $s_t < $e_t; $s_t++) {//循环内同直播
		$time = $s_t.'0';
		$date = date('YmdH', $time);
		$m3u8 .= "#EXTINF:10," .PHP_EOL .$url .$date ."/" .$s_t .".ts" .PHP_EOL;
	}
	$m3u8 .= "#EXT-X-ENDLIST";//加上结束标志
}
header("Content-Type: application/vnd.apple.mpegURL");//HLS流媒体格式
header("Content-Disposition: inline; filename=index.m3u8");//在浏览器中打开
echo $m3u8;//输出拼接好后的m3u8列表
?>
```

## Bestv PHP 电信（20231021）

```php
<?php
date_default_timezone_set("Asia/Shanghai");
$channel = empty($_GET['id']) ? "cctv1hd8m/8000000" : trim($_GET['id']);
$array = explode("/", $channel);
$stream = "http://ts-gitv-hb-yh.189smarthome.com/live/program/live/{$array[0]}/{$array[1]}/";
$timestamp = substr(time(), 0, 9) - 7;
$current = "#EXTM3U" . "\r\n";
$current .= "#EXT-X-VERSION:3" . "\r\n";
$current .= "#EXT-X-TARGETDURATION:3" . "\r\n";
$current .= "#EXT-X-MEDIA-SEQUENCE:{$timestamp}" . "\r\n";
for ($i = 0; $i < 3; $i++) {
    $timematch = $timestamp . '0';
    $timefirst = date('YmdH', $timematch);
    $current .= "#EXTINF:3," . "\r\n";
    $current .= $stream . $timefirst . "/" . $timestamp . ".ts" . "\r\n";
    $timestamp = $timestamp + 1;
}
header("Content-Disposition: attachment; filename=mnf.m3u8");
echo $current;
?>
```

## 北斗融媒(辽宁云)PHP

```php
<?php
 $id=$_GET[id];
 $ids = array(
    "cctv1" => "cctv1",//CCTV1
    "cctv4" => "cctv4",//CCTV4
    "cctv13" => "cctv13",//CCTV13
    "lnws" => "lntv",//辽宁卫视
    "lnty" => "typd",//辽宁体育
    "lnds" => "dspd",//辽宁都市
    "lnys" => "yspd",//辽宁影视剧
    "lnsh" => "shpd",//辽宁生活
    "lnbf" => "bfpd",//辽北方
    "lnjyqs" => "qspd",//辽宁教育青少
    "yjgw" => "yjgw",//宜家购物
    "yxjj" => "yxjj",//GTV游戏竞技
    "xdm" => "xdm",//新动漫
    );
 $time = time();
 $m3u8 = "http://bdrmtvzb.lnyun.com.cn/bdrm/".$ids[$id].".m3u8?auth_key=".$time."-0-0-".md5("/bdrm/".$ids[$id].".m3u8-".$time."-0-0-dPBxXGs7yIaSZG5m");
 header('Location:'.$m3u8);
 ?>
```

## 奥点（广电）云代理 php 源码

```php
$id=$_GET["id"];
$url="http://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id=".$id."";

$result = file_get_contents($url);
$json = json_decode($result);
$playurl = $json->data->hlsUrl;

header("location: ".$playurl);
```

## 韩国 KBS 直播代理 php 源码

```php
<?php
$id=$_GET['id'];
$ids = array(
"1"=>"11",
"2"=>"12",
"3"=>"14",
"4"=>"81",
"5"=>"N91",
"6"=>"N92",
"7"=>"N93",
"8"=>"N94",
"9"=>"N96",
"10"=>"21",
"11"=>"22",
"12"=>"23",
"13"=>"24",
"14"=>"25",
"15"=>"26",
"16"=>"I92",
);
$url = "https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/".$ids[$id];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$re = curl_exec($ch);
curl_close($ch);
preg_match('|service_url":"(.*?)"|i',$re,$play);
header('Location:'.$play[1]);
?>
```

## txt 文本源，批量替换链接，php 代码

有时在网上找的代理 ID，需要替换代理链接时，不停的使用鼠标粘贴复制。费时费力，在网上找了下资料。特写了 php 代码批量替换 txt 文本里的链接。

```php
<?php
//pl.php?url=111.com&url2=222.com&txt=333
//使用方法把111.com换成你123.txt里面的链接，222.com换成需要替换新的链接，333是替换完成后在你服务器生成新的txt名称
$url=$_GET['url'];
$url2=$_GET['url2'];
$txt=$_GET['txt'];
$info=file_get_contents('./123.txt');
$a = str_replace($url,$url2,$info);
echo $a;
	$c= "$a";
	$fp=fopen($txt.'.txt',"a");
	fwrite($fp,$c);
	fclose($fp);
?>
```

## 掌上南昌 PHP 代理源码

获取所有频道信息：http://zsnc.nctv.net.cn/api/contents/list?category_id=469&page_size=20&page=1
算法有点复杂。

```php
<?php
error_reporting(0);
$_id = $_GET['id']; // 1 2 3 4
//http://zsnc.nctv.net.cn/api/contents/list?category_id=469&page_size=20&page=1  获取所有频道信息
//http://zsnc.nctv.net.cn/api/contents/info?id=126786
$channel_id = array('jw22cAZ','LfqghkO','an6J0sz','22zqwYf'); // 126784  126785 126786 126787
$_id = $channel_id [intval($_id)-1];
$md52 = md5($_id.'Tidenctvzsncapp');
$str3 = time();
$sb = '';
$sb = $sb.substr($md52,0,2);
$sb = $sb.substr($md52,4,4);
$sb = $sb.substr($md52,14,1);
$sb = $sb.substr($md52,13,1);
$sb = $sb.substr($md52,12,1);
$sb = $sb.substr($md52,25,4);
$sb = $sb.substr($md52,30,1);
$sb = $sb.substr($md52,29,1);
$sb = $sb.substr($md52,28,1);
$sb = $sb.substr($md52,27,1);
$sb = $sb.substr($md52,26,1);
$md53 = md5('tide'.$str3.$sb);
$replace = 't='.$str3.'&c='.$_id.'&a=nctvzsncapp'.'&v='.substr($md53,4,1).substr($md53,16,1).substr($md53,31,1).substr($md53,17,1).substr($md53,8,1);
$replace = base64_encode($replace);
$replace = str_replace('=','|',$replace);
preg_match_all('/[1-9]/',$replace,$trim);

$trim = array_unique($trim[0]);
 $str4 = $replace;

for($i=0;$i<count($trim);$i++)
{
    $intval = intval($trim[$i]);
    if($intval % 2 == 0)
    {

        $string2 = substr($replace,$intval-1,1);
        if(stripos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string2)>=0)
        {
            $indexOf = (strpos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string2) + ($intval * $intval)) % 52;


            $str4 = replaceSomeWhere($str4, substr('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$indexOf,1),$intval);
        }

    }
    else
    {
        $string3 = substr($replace,$intval-1,1);
        if(stripos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string3)>=0)
        {
            $indexOf2 = (strpos('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$string3) + $intval ) % 52;
            $str4 = replaceSomeWhere($str4 , substr('abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',$indexOf2,1),$intval);
        }

    }
}

$bstrURL = 'http://mediaapi.nctv.net.cn/apiv3.2.3/m3u8.php?token='.$str4;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $bstrURL);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, "User-Agent: Dalvik/2.1.0 (Linux; U; Android 6.0; 1505-A01 Build/MRA58K)");
$data = curl_exec($ch);
curl_close($ch);
$data = substr($data,3,strlen($data)-2); // 妈的。这个地方恶心到我了。无敌！！！
$obj = json_decode($data);
if($obj->status == 1)
{
    header('location:'.$obj->address);
}
else
{
    header("Refresh:0");    // 因为有个特别恶心的点，可能会出现token过期，所以让它刷新再获取。
}

function replaceSomeWhere($str,$str2,$i) // What the fuck!
{
    $str3 = '';
    $str4 = '';
    if ($i !=1)
    {
        $str4 = substr($str,0,$i-1);
        $str3 = substr($str,$i);
    }
    else
    {
        $str4 = '';
        $str3 = substr($str,$i);
    }
    return $str4.$str2.$str3 ;
}

?>
```

## 广电云长沙电视台节目源 PHP 代理

访问地址格式：http://自己的服务器地址/hncs.php?id=XXX
id 频道
346 长沙新闻频道
348 长沙政法频道
349 长沙女性频道
350 长沙影视频道
354 长沙磁浮电视
355 长沙地铁电视
356 长沙嘉丽购物
357 长沙移动电视

```php
<?php
$id=$_GET[id];
$url = 'https://1812501212048408.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/node-api.online/node-api/tv/channelInfo?id='.$id;
$data = file_get_contents($url);
preg_match('/playUrl":"(.*?)"/',$data,$m);
header('location:'.urldecode($m[1]));
?>
```

## 2021 最新湖北电视台节目源 PHP 代理源码

强调下这需要要 PHP 服务器来运行代码，奈何世人只爱鱼，不爱渔。自己动手对大部分人还是一个坎。

id 频道
439 湖北美嘉购物
438 湖北垄上
437 湖北教育
436 湖北生活
435 湖北影视
434 湖北公共新闻
433 湖北综合
432 湖北经视
431 湖北卫视

代理格式举例：http://你的服务器地址/hbtv.php?id=XXX

```php
<?php
//id=439湖北美嘉购物 438湖北垄上 437湖北教育 436湖北生活 435湖北影视 434湖北公共新闻 433湖北综合 432湖北经视 431湖北卫视
$id=$_GET[id];
$url = 'http://app.cjyun.org/video/player/streamlist?site_id=10008&live_type=1';
$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
$data=curl_exec($ch);
curl_close($ch);
for($a=0;$a<100;$a++){
    if(json_decode($data)->data[$a]->id==$id){
        $json=json_decode($data)->data[$a]->play_url;
        break;
    }
}
header('location:'.$json);
?>
```

## 自建企业微信消息推送通知通道接口 PHP 版

```
<?php

$corpid = $_REQUEST['corpid']; //企业id
$corpsecret = $_REQUEST['corpsecret']; //应用secret
$agentid = $_REQUEST['agentid']; //应用id
//如果就自己用，可以把参数写到这里。
//$corpid = '';
//$corpsecret = '';
//$agentid = ;

$title = $_REQUEST['title']; //消息title
$description = $_REQUEST['description']; //消息内容
$description = str_replace(PHP_EOL, '<br>', $description);
$url = $_REQUEST['url']; //消息跳转url

if(!$corpid or !$corpsecret or !$agentid){
    exit("canshu buquan");
}

//获取access_token
$response = CurlGet("https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$corpid&corpsecret=$corpsecret","","");

$access_token = json_decode($response)->access_token;
if(!$access_token){
    exit("canshu cuowu");
}else{

    $json = '{"touser":"@all","msgtype":"textcard","agentid":"","textcard":{"title":"","description":"","url":"","btntxt":"更多"},"safe":1,"enable_id_trans":0,"enable_duplicate_check":0}';
    $json = json_decode($json);

    $json->agentid = $agentid;
    $json->textcard->title = $title ? $title : '无标题';
    $json->textcard->description = $description ? $description : '无内容';

    $json->textcard->url = $url ? $url : 'URL';

    echo CurlPost("https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$access_token","", json_encode($json));
}

function CurlGet($url,$cookies = "",$UserAgent = "")
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
    curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_REFERER, '');
        curl_setopt($curl, CURLOPT_COOKIE, $cookies);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    if ($UserAgent != "") {
        curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);
    }
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

function CurlPost($url, $cookies="", $post_data="", $headers=array(), $refer="", $UserAgent = '')
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);
        curl_setopt($curl, CURLOPT_COOKIE, $cookies);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    if ($refer != '') {
        curl_setopt($curl, CURLOPT_REFERER, $refer);
    }
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}
```

## tvsou 节目指南 xmltv 格式的 php 源码

```
<?php
if(date_default_timezone_get() != "Asia/Shanghai") date_default_timezone_set("Asia/Shanghai");
$fp="epg_tvs.xml";//压缩版本的扩展名后加.gz
$id0=100000;//起始节目编号

$cid=array(
    array('42688016','湖南都市'),
    array('34d6b6de','湖南经视'),
    );

function compress_html($string) {
    $string = str_replace("\r", '', $string); //清除换行符
    $string = str_replace("\n", '', $string); //清除换行符
    $string = str_replace("\t", '', $string); //清除制表符
    return $string;
}

$dt1=date('Ymd');
$dt2=date('Ymd',time()+24*3600);
$w1=date("w");
if ($w1<'1') {$w1=7;}
$w2=$w1+1;
$url0="https://www.tvsou.com/epg/";
$chn="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE tv SYSTEM \"http://api.torrent-tv.ru/xmltv.dtd\">\n<tv generator-info-name=\"tvsou\" generator-info-url=\"www.tvsou.com/epg\">\n";

$nid=sizeof($cid);

for ($id = 1; $id <= $nid; $id++){
    $t0=array();
    $t1=array();
    $nm=array();

    $url=$url0.$cid[$id-1][0].'/w'.$w1;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    $re = curl_exec($ch);
    curl_close($ch);
    $re=compress_html($re);
    preg_match('|<table class="layui-table c_table"(.*?)layui-tab-item|i',$re,$u);
    preg_match_all('|<tr>([\s\S]+?)<\/tr>|', trim($u[1]), $u);
    $u=$u[1];
    $num=sizeof($u);
    for ($i = 0; $i < $num; $i++) {
        preg_match_all('|_blank\'>(.*?)<\/a>|',$u[$i],$tr);
        $t0[]=$dt1.str_replace(':','',$tr[1][0]).'00 +0800';
        $nm[]=$tr[1][1];
    }
    $url=$url0.$cid[$id-1][0].'/w'.$w2;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    $re = curl_exec($ch);
    curl_close($ch);
    $re=compress_html($re);
    preg_match('|<table class="layui-table c_table"(.*?)layui-tab-item|i',$re,$u);
    preg_match_all('|<tr>([\s\S]+?)<\/tr>|', trim($u[1]), $u);
    $u=$u[1];
    $num=sizeof($u);
    for ($i = 0; $i < $num; $i++) {
        preg_match_all('|_blank\'>(.*?)<\/a>|',$u[$i],$tr);
        $t0[]=$dt2.str_replace(':','',$tr[1][0]).'00 +0800';
        $nm[]=$tr[1][1];
    }

    $num=sizeof($t0);
    for ($i = 1; $i < $num; $i++) {$t1[]=$t0[$i];}
    $t1[]=$dt2.'235959 +0800';
    $idd=$id0+$id;
    $chn.="<channel id=\"".$idd."\"><display-name lang=\"zh\">".$cid[$id-1][1]."</display-name></channel>\n";
    for ($i = 0; $i < $num; $i++) {
        $chn.="<programme start=\"".$t0[$i]."\" stop=\"".$t1[$i]."\" channel=\"".$idd."\">\n<title lang=\"zh\">".$nm[$i]."</title>\n<desc lang=\"zh\"> </desc>\n</programme>\n";
    }
}
$chn.="</tv>\n";

//写入文件。这里一次性写入，可以自己分次写入操作
file_put_contents($fp, $chn);

//创建压缩版本
$fn = gzopen ($fp.'.gz', 'w9');
gzwrite($fn, file_get_contents($fp));
gzclose($fn);

?>
```
