$(function(){

	tab()
	box2()
	visualimg()
	sitemap()
})


	function tab(){

	  	$("#conright .box1 dl dt a").click(function(){
		$(this).parent().addClass("on")
		$(this).parent().siblings("dt").removeClass("on");
		$(this).parent().next().fadeIn(300)
			.siblings("dd").fadeOut(300);
	});


	}


function box2(){
         var num= 0;
         $("#conright .box2 ul li").mouseleave(function(){
            num = $(this).index();
            $("#conright .box2 ul li:eq("+num+") p").fadeOut();
         })
         $("#conright .box2 ul li").hover(function(){
            num = $(this).index();
            $("#conright .box2 ul li:eq("+num+") p").fadeTo("fast",0.8);
         })

      }



	function visualimg(){
		$("#visual .visualimg ul").width("2604px");

		var n = 3, num = 0, imgURL = "", timerID = 0;
		var delay = 4000;

		var arrX = [0, -868, -1736];
		timerID = setInterval(make, delay);

		function make(){
			num++;
			if (num  > 2 ){ num = 0; $(".visualimg ul").css("left","0px"); }
			$("#visual .visualimg ul").stop().animate({
				left:arrX[num]
			},500);

			$(".visualimg_btn ul li").removeClass("on");
			$(".visualimg_btn ul li").eq(num).addClass("on");
			if(num == 3){$(".visualimg_btn ul li").removeClass("on");$(".visualimg_btn ul li").eq(0).addClass("on");}



		};

		$(".visualimg_btn ul li").click(function(){
		num = $(this).index();
		$("#visual .visualimg ul").stop().animate({
			left:arrX[num]
		},400);

		$(".visualimg_btn ul li").removeClass("on");
		$(".visualimg_btn ul li").eq(num).addClass("on");

		clearInterval( timerID  );
		timerID  = setInterval( make  , delay)		;
	});


} //visualbanner;

function sitemap(){
		var isPlay =false;
		$("#sitemap dl").css("height","0");
		$("#sitemap h2").addClass("on");
		$("#sitemap h2").click(function(){
			if(isPlay){
				$("#sitemap h2").removeClass("off");
				$("#sitemap dl").animate({"height":"0"},500);
				$("#sitemap h2").addClass("on");
			}else{
				$("#sitemap h2").removeClass("on");
				$("#sitemap dl").animate({"height":"360px"},500).css('background-color','white');
				$("#sitemap h2").addClass("off");
			}
			isPlay = !isPlay
		});
	}
