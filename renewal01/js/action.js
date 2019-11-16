$(function(){
	    gnb();
	    visualimg();

})
	
//header gnb
	function gnb(){
		$("#gnb>li>ul").hide()
		$("#gnb>li>a").hover(function(){
		$("#gnb>li>ul").show();
		$("#headerwrap").stop().animate({
			height:"420px"
			},300);
		});
	$("#headerwrap").mouseleave(function(){
		$("#gnb>li>ul").hide()
		$("#headerwrap").stop().animate({
			height:"110px"
			},300);
		})


}








//visualimg
	function visualimg(){
	    $("#visualimg").css('overflow','hidden')
		$("#visualimg ul").width(5600)
		   
		  var cnt=0 , delay=5000, timerid=0
		  var arrX = [0, -1400, -2800, -4200]
		   clearInterval (timerid);
		   timerid = setInterval (make, delay)
		   
		 // $(".imgview").hover(function(){
		//  clearInterval (timerid);
		  // },function(){
		 //  timerid = setInterval (make , delay)
		 //  })
		   
		  function make(){
		   cnt++;
		   	if(cnt > 3){
		   	$("#visualimg ul").css("left", "0")
		   	cnt = 0}
		   	$("#visualimg ul").animate({
		    left : arrX [ cnt ]
		    },1200)
	 }

};




      	
      	
      
