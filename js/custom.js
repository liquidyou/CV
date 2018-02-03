$(document).ready(function(){

	//header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})


	// initialize wow.js
	if(screen.width > 768){
		new WOW().init();
	}
     

     //initialize fancybox
     $("[data-fancybox]").fancybox({
		loop : true,
	});
     //initialize stellar
     if(screen.width > 768){
     	 $(window).stellar();
     }
    

})