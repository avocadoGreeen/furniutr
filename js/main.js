$(function(){

    $('.products__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		responsive: [
				{
			 	breakpoint: 1134,
			  	settings: {
					slidesToShow: 3
			  		}
				},
				{
			  	breakpoint: 833,
			  	settings: {
					slidesToShow: 2
			  		}
				},
				{
			  	breakpoint: 584,
			  	settings: {
					slidesToShow: 1
			  		}
				}
		  ]
    });


    $('.header__burger').click(function(event){
		$('.header__burger, .header__menu-list').toggleClass('active-menu');
		$('body').toggleClass('lock');
	});

	$('.header__menu-list a').click(function(event){
		$('.header__burger, .header__menu-list').toggleClass('active-menu');
		$('body').toggleClass('lock');
	});


});