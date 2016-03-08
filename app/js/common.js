$(document).ready(function() {

	// ajax photo
	$('#btn-more-photo').click(function () {
		$(this).hide(600);
		$('.ajax-added').load('ajax-photos.html', function () {
			$(this).hide().slideDown(1000);
		});
		return false;
	});

	//parallax
	if ( $(window).width() > 768 ) {
		var $bgobj1 = $('.main-header');
		var $bgobj = $('.section_form');
		$(window).scroll(function() {
		  var yPos = -($(window).scrollTop() / 2) + 200; // 5 - скорость движения бэкграунда
		  var coords = 'center '+ yPos + 'px';
		  $bgobj.css({ backgroundPosition: coords });

		  var yPos1 = -($(window).scrollTop() / 2); // 5 - скорость движения бэкграунда
		  var coords1 = 'center '+ yPos1 + 'px';
		  $bgobj1.css({ backgroundPosition: coords1 });
		});
	}

	//Плавная прокрутка до якоря
	$("a[href^='#']").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});

	//fancybox
	$(".fancybox").fancybox();

	//slider_testimonials
	var options = { 
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$ChanceToShow: 2,
			$SlideWidth: 460,
			$Cols: 2
		}
	};
	var slider_testimonials = new $JssorSlider$('slider_testimonials', options);
	var options = {
		$AutoPlay: true,
		$Idle: 0,
		$AutoPlaySteps: 4,
		$SlideDuration: 1600,
		$SlideEasing: $Jease$.$Linear,
		$PauseOnHover: 4,
		$SlideWidth: 140,
		$Cols: 7
	};
	var slider_partners = new $JssorSlider$("slider_partners", options);
	function ScaleSlider() {
		var parentWidth = $('#slider_testimonials').parent().width();
		var parentWidth2 = $('#slider_partners').parent().width();
		if (parentWidth) {
			slider_testimonials.$ScaleWidth(parentWidth);
			slider_partners.$ScaleWidth(parentWidth2);
		}
		else
			window.setTimeout(ScaleSlider, 30);

		if ( $(document).width() > 768 ) {

		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
    //responsive code end

	// //Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
