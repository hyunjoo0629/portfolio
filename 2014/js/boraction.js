$(function() {
    //visual 
    $("#visual ul li").eq(0).mouseover(function() {
		$("#visual .img img").attr("src", "renewal/bormainImg/visualimg1.jpg").fadeIn(1000);
	});
    $("#visual ul li").eq(1).mouseover(function() {
		$("#visual .img img").attr("src", "renewal/bormainImg/visualimg2.jpg").fadeIn(1000);
	});
    $("#visual ul li").eq(2).mouseover(function() {
		$("#visual .img img").attr("src", "renewal/bormainImg/visualimg3.jpg").fadeIn(1000);
	});
    $("#visual ul li").eq(3).mouseover(function() {
		$("#visual .img img").attr("src", "renewal/bormainImg/visualimg4.jpg").fadeIn(1000);
	});
	$("#visual ul li").mouseleave(function() {
		$("#visual .img img").attr("src", "renewal/bormainImg/visualimg2.jpg").fadeIn(1000);
	});
	
    //메뉴
   
    $("#navi ul li ul").hide();
	$("#navi ul li ul").css("top","35px");
	$("#navi>ul>li").mouseover(function() {
		$("#navi").height("75px");

		$("#navi ul li ul").hide();
		$(this).find("ul").show();
		
	});

	$("#navi").mouseleave(function() {
		$(this).height("40px");
		$("#navi ul li ul").hide()
		            .css("top","35px");
	});
	
	    var iconCount = 0;
		var width = 140;
		var showNumber = 4;
		var lastIcon = $("#bannerBox").children("ul").children("li").length-1;
		
		$("#banner").children("p.right").click(function(){
	
			if(iconCount<lastIcon-showNumber){
				iconCount = $("#bannerBox").find(".iconNow").removeClass("iconNow")
				.next().addClass("iconNow").index();
			}
			
			$("#bannerBox").children("ul").animate({"left":-width*iconCount},700);
		});
		
		$("#banner").children("p.left").click(function(){

			if(iconCount>0){
				iconCount = $("#bannerBox").find(".iconNow").removeClass("iconNow")
				.prev().addClass("iconNow").index();
			}
			
			$("#bannerBox").children("ul").animate({"left":-width*iconCount},700);
		});


   //pop
        var nums = 0; 
		var popCounts = $("#popup").children("ul.conts").children("li").length-1;
		$("#next").click(function(){
			
			$("#popup").children("ul.conts").children("li").css("z-index",1);
			
			nums++;
			if(nums>popCounts){
				nums=0;
			}
			
			$("#popup").children("ul.conts").children("li").eq(nums).css("z-index",10);
			
		});
		
		$("#prev").click(function(){
			
			
			$("#popup").children("ul.conts").children("li").css("z-index",1);
			
			nums--;
			if(nums<0){
				nums=popCounts;
			}
			//alert(nums);
			
			$("#popup").children("ul.conts").children("li").eq(nums).css("z-index",10);
			
		});

	//tab
	   $("#tabmenu dl dt").eq(0).mouseover(function() {
	            $("#tabmenu dl dt").eq(0).css("background-color","#c0a994");
	            $("#tabmenu dl dt a").eq(0).css("color","#fff");
	            $("#tabmenu dl dt").eq(1).css("background-color","#fff");
	            $("#tabmenu dl dt a").eq(1).css("color","#333");
				$("#tabmenu dd.tab1").show();
				$("#tabmenu dd.tab2").hide();
	});
	
	   $("#tabmenu dl dt").eq(1).mouseover(function() {
	            $("#tabmenu dl dt").eq(0).css("background-color","#fff");
	            $("#tabmenu dl dt a").eq(0).css("color","#333");
	            $("#tabmenu dl dt").eq(1).css("background-color","#c0a994");
	            $("#tabmenu dl dt a").eq(1).css("color","#fff");
				$("#tabmenu dd.tab1").hide();
				$("#tabmenu dd.tab2").show();
	});
	/*
	//pop
	   $("#contents .popup dt").eq(0).mouseover(function() {
	            $("#contents .popup dt").eq(0).css("background-color","#ff9900");
	            $("#contents .popup dt").eq(0).css("color","#fff");
	            $("#contents .popup dt").eq(1).css("background-color","#fff");
	            $("#contents .popup dt").eq(1).css("color","#333");
				$("#contents .popup dd.popimg1").show();
				$("#contents .popup dd.popimg2").hide();
	});
	   $("#contents .popup dt").eq(1).mouseover(function() {
	            $("#contents .popup dt").eq(0).css("background-color","#fff");
	            $("#contents .popup dt").eq(0).css("color","#333");
	            $("#contents .popup dt").eq(1).css("background-color","#ff9900");
	            $("#contents .popup dt").eq(1).css("color","#fff");
				$("#contents .popup dd.popimg2").show();
				$("#contents .popup dd.popimg1").hide();
	});*/
	  
	
});
