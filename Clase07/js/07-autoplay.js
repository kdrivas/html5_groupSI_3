$("document").ready(function(){

	$(".banners").slick(
			{
				dots: true,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				variableWidth: true,
				centerMode: true,
				speed: 1500,
				autoplay: true,
				autoplaySpeed:300
			}
	);

})