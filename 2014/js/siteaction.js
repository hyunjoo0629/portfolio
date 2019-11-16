$(function() {	

    $("#header p.site").css("bottom","-17px").css("opacity","0");
    $("#header p.site").delay(400).animate({bottom:"3px",opacity:1},300);
    
    $("#header p.txt").css("bottom","-24px").css("opacity","0");
    $("#header p.txt").delay(400).animate({bottom:"-4px",opacity:1},300);

    $("#sitecon .sitetop p").css("opacity","0");
    $("#sitecon .sitetop p").delay(800).animate({opacity:1},500);
        
    $("#sitecon .sitetop span").css("right","90px").css("opacity","0");
    $("#sitecon .sitetop span").delay(1000).animate({right:"55px",opacity:1},500);

});
