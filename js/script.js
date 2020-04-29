$(document).ready(function(){

    // show the navbar list when click on item icon
    $('i.icon').click(function (){
        $('.nav-list').slideToggle();
    });

    // when scroll down (sticky navbar)
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 100)
        {
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }

    // count to library
    if(sc > 2100.734375)
    {
        $('.timer').countTo();
        $(window).off('scroll');
    }

    if(sc > 700)
    {
        $('.scrollTop').fadeIn();
    }
    else
    {
        $('.scrollTop').fadeOut();
    }
    });


    //portofolio buttons change images
   $('.buttons button').click(function(){
    $(this).addClass('active-btn').siblings().removeClass('active-btn');

    var cssfilter = $(this).attr('id');
    
    if(cssfilter === 'all')
    {
        $('.images > div ').fadeIn();
    }
    else{
        $('.images > div ').fadeOut();
        $('.images').contents().filter('.' + cssfilter).fadeIn();
    }

   });


   //owl carousel
   $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    //choose panel
    $('.c_panel li').click(function(){

        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        var p = $(this).data('role');
        $('.content > div').hide();
        $('.content').contents().filter('#' + p).fadeIn();
    });

    //choose magnificent popup
    $('.pop').magnificPopup({
    type: 'iframe'
    // other options
    });

    //slick on plesure section
    $('.slick').slick({
        nextArrow : false,
        prevArrow : false,
        autoplay  :true,
        autoplaySpeed : 2000,
    });

    //scrolltop button
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0,
        },500);
    });
    //smooth scroll
    $('.list a').click(function(){
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 70,    
        });
    });

  });
   
});