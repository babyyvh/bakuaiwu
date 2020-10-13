/*!
 * Stui v1.1.0 Copyright 2016-2018
 *
 */
var stui_default = {	
	share: function(){
		$(".share").html('<span class="bds_shere"></span><a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a class="bds_bdhome" data-cmd="bdhome" title="分享到百度新首页"></a><a class="bds_tqf" data-cmd="tqf" title="分享到腾讯朋友"></a><a class="bds_youdao" data-cmd="youdao" title="分享到有道云笔记"></a><a class="bds_more" data-cmd="more" title="更多"></a>');
		window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24","bdCustomStyle": "https://"+Siteurl+"/"+SitePath+"/statics/css/stui_share.css"},"share":{}};with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement('script')).src='https://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	}
};
$(document).ready(function() {
	stui_default.share();
});