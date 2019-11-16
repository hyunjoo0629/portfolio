$(function() {	
    //navi
	$("#gnb li ul").css("left","150px").css("opacity","0");  
	            
	$("#gnb>li").hover(function() {
		$("#gnb").width("250px");      
 		$("#gnb ul").css("opacity","0");
		$(this).find("ul").animate({left:"150px",opacity:1},200);
		
	},function(){
		$(this).find("ul").animate({left:"100px",opacity:"0"},200);
	});

	    $("#gnb").mouseleave(function(){
		$(this).width("142px");
		$("#gnb ul").css("opacity","0") .css("left","100px");
	});
	

  //main		    
    $("#contents .conbody").css("opacity","0");
    $("#contents .conbody").delay(600).animate({opacity:1},1200);
    
    $("#contents .conbody").children("dl").css("right","117px").css("opacity","0");
    $("#contents .conbody").children("dl").delay(1300).animate({right:"97px",opacity:1},500);
    
    $(function btnclick(t){
       $("#contents .conbody p").delay(500).fadeIn(800).fadeOut(400);
       setTimeout(function(){btnclick(t);},t);
    });
    

    $("#contents .conbody ul.anibutton").children("li").click(function(){
    var index = 0;
    index = $(this).index();
    $("#container #contents .conbody .img li img").attr("src", "mainImg/img"+(index+1)+".jpg").hide().fadeIn(400);
    $("#contents .conbody ul.anibutton li").removeClass("on");
    $("#contents .conbody ul.anibutton li").eq(index).addClass("on");
 
    });
		
	//sub공통
	$("#rightcon .topcon p").css("opacity","0");
    $("#rightcon .topcon p").delay(500).animate({opacity:1},500);
    
    $("#rightcon .topcon ul").css("right","80px").css("opacity","0");
    $("#rightcon .topcon ul").delay(700).animate({right:"40px",opacity:1},600);
    
	
	//sub2
	$("#container02 .conbody02 .graph dl dd.gr1").click(function() {
        $("#container02 .conbody02 .graph .pro ul.design").hide();
        $("#container02 .conbody02 .graph .pro ul.web").hide();
		$("#container02 .conbody02 .graph .pro ul.oa").hide().fadeIn(400);
	});
	$("#container02 .conbody02 .graph dl dd.gr2").click(function() {
        $("#container02 .conbody02 .graph .pro ul.oa").hide();
        $("#container02 .conbody02 .graph .pro ul.web").hide();
		$("#container02 .conbody02 .graph .pro ul.design").hide().fadeIn(400);
	});
	$("#container02 .conbody02 .graph dl dd.gr3").click(function() {
        $("#container02 .conbody02 .graph .pro ul.design").hide();
        $("#container02 .conbody02 .graph .pro ul.oa").hide();
		$("#container02 .conbody02 .graph .pro ul.web").hide().fadeIn(400);
	});

	
	
	// 모션페이지

	var win = null;
	function NewWindow(mypage, myname, w, h, scroll) {
		LeftPosition = (screen.width) ? (screen.width - w) / 2 : 0;
		TopPosition = (screen.height) ? (screen.height - h) / 2 : 0;
		settings = 'height=' + h + ',width=' + w + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',resizable'
		win = window.open(mypage, myname, settings);
	}


	$("#container03 .conbody03 li").eq(0).click(function() {
		NewWindow("f1.html", 'name', '720', '490', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(1).click(function() {
		NewWindow("f2.html", 'name', '720', '500', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(2).click(function() {
		NewWindow("f3.html", 'name', '550', '400', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(3).click(function() {
		NewWindow("f4.html", 'name', '550', '400', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(4).click(function() {
		NewWindow("f5.html", 'name', '783', '100', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(6).click(function() {
		NewWindow("f6.html", 'name', '600', '400', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(7).click(function() {
		NewWindow("f7.html", 'name', '600', '400', 'no');
		return false;
	});
	$("#container03 .conbody03 li").eq(8).click(function() {
		NewWindow("f8.html", 'name', '380', '490', 'no');
		return false;
	});
	
	
	//sub4
	
	$("#container04 .conbody04  .imgView ul").children("li").click(function(){
    var index = 0;
    index = $(this).index();
    
    $("#container04 .conbody04  .imgView .img img").attr("src", "sub4Img/img0"+(index+1)+".jpg").hide().fadeIn(400);
	});
	
});
