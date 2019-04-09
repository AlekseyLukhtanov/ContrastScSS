$(function () {
/*$('.nav a').css("color","red");*/
$('.breadcrumps li').click(function(){
	var thisClass = this.className.slice(0,2);
	$('div.t1').hide();
	$('div.t2').hide();
	$('div.t3').hide();
	$('div.' + thisClass).fadeIn(500);
	$('.breadcrumps li').removeClass('active');
	$(this).addClass('active');
	return false;
});
$('li.t1').click();




	$(document).ready(function(){
		$('.bxSlider').bxSlider({
			pager: false
		});
		$('.bxSliderComandos').bxSlider({
			minSlides: 1,
			maxSlides:3
		});
	});



	$(window).scroll(function () {
	    var sc = $(window).scrollTop()
	    if (sc > 90) {
	        $("header").addClass("is-fixed")
	    } else {
	        $("header").removeClass("is-fixed")
	    }
	});
});
