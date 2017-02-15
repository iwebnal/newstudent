$(function() {

    
	
    //************* MagnificPopup ***********

	$('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    //***************************************
    
     $('.ah-block2').owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        dots: true,
        navText:['<span class="arrow-left2"></span>','<span class="arrow-right2"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
        
    });

    
    //***************************************

    
});
