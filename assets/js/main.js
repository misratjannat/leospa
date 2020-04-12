//owl carousel for service section
$('.service-section .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
//owl carousel for review section
$('.review-section .owl-carousel').owlCarousel({
	items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000
})

$(document).ready(function(){
	$(".mobile-menu").click(function(){
	    $(".main-nav").slideToggle();
	});
});