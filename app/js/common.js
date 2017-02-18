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
    
     $('.ah-block').owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        dots: true,
        navText:['<span class="arrow-left"></span>','<span class="arrow-right"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
        
    });

    /* Toggle button for menu*/
    
        $(".toggle-mnu").click(function() {
            $(this).toggleClass("on");
            if($(this).hasClass("on")){
                $(".ah-header-topline-list").animate({left: '0px'}, 600);
            }else{
                $(".ah-header-topline-list").animate({left: '-60%'}, 600);
            }
            return false;
        });

    /* Toggle button for menu*/

    /* Select */
    $('#select-beast').selectize({
        create: true,
        sortField: 'text'
    });

    $('#ah-banerbox-select').selectize({
        create: true,
        sortField: 'text'
    });

    $('#ah-banerbox-select1').selectize({
        create: true,
        sortField: 'text'
    });
    /* Select */


    //************ Up-button *****************************
    if(window.matchMedia('(min-width: 992px)').matches){

        $(document).scroll(function(){
            var my_scroll = $("body").scrollTop();
            if(my_scroll >200){
                $('.ah-up').fadeIn(0);
            }else{
                $('.ah-up').fadeOut(0);
            }
            
        });

    }

    $('.ah-up').click(function(){
        var body = $("html, body");

        body.stop().animate({scrollTop:0}, '500', 'swing');
        return false;
    });

    //************ Up-button *****************************


    $(".phone").mask("+ 7 (999) 999 - 99 - 99?");




});
