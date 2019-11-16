$(function(){
	intro();
	quickmenu();
	gnb();
	graphclick();


function intro(){

     $(window).scroll(function(){
     	var pos  = $(window).scrollTop()

     })

	}

function quickmenu(){
         $("#q_menu li a").mouseenter(function(){
         	$(this).prev().show()
         })
         $("#q_menu li a").mouseleave(function(){
         	$(this).prev().hide()
         })
         $("#q_menu li a").click(function(){
         	var aa= $(this).attr("href")
         	var top = $(aa).position().top

         	$("html,body").animate({
         		scrollTop:top
         	},600)

         	return false
         })
	}

	function gnb(){

         $("#content0 .gnb ul li a").click(function(){
         	var aa= $(this).attr("href")
         	var top = $(aa).position().top

         	$("html,body").animate({
         		scrollTop:top
         	},600)

         	return false
         })
	}





  function graphclick(){
		var num= 0;
         $(".skill ul li").mouseleave(function(){
            num = $(this).index();
            $(".skill ul li:eq("+num+") p").fadeOut()
         })
         $(".skill ul li").mouseover(function(){
            num = $(this).index();
            $(".skill ul li:eq("+num+") p").fadeTo("fast",1)
         })


}


})
