$(document).ready(function(){
		$(".icon").click(function () {
		    $(".mobilenav").fadeToggle(500);
		    $(".top-menu").toggleClass("top-animate");
		    $(".mid-menu").toggleClass("mid-animate");
		    $(".bottom-menu").toggleClass("bottom-animate");
		    
		}); /* menu */

		$('.parallax').parallax();

		$('#toggle').click(function() {
		   $(this).toggleClass('active');
		   $('#overlay').toggleClass('open');
		});
		
		$(".web-project").click(function() {
		  window.location = $(this).find("a").attr("href"); 
		});

		$(".animsition").animsition({
		    loading: true,
		    loadingParentElement: 'body',
		    loadingClass: 'animsition-loading'
		});


		$(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            $('.scrollup').fadeIn();
	        } else {
	            $('.scrollup').fadeOut();
	        }
	    });

	    $('.scrollup').click(function () {
	        $("html, body").animate({
	            scrollTop: 0
	        }, 600);
	        return false;
	    });

});
