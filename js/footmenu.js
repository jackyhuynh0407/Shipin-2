$(document).ready(function(){
	function updateResizeFmenu(){
		if(window.innerWidth < 1000){
				$(".foot-menu").show();
				$("body").css("padding-bottom","50px");
		}else{
			$(".foot-menu").hide();		
			$("body").removeAttr("style");
		}
	};
	$(window).resize(function(){
		updateResizeFmenu();
	});
	updateResizeFmenu();
})
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];