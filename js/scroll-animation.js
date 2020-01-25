if ($(window).width() > 680 && $(window).width() <= 800 )
    {
        
        $('.prizes-about').addClass('scroll-animated');
        $('.prizes-baloon').addClass('scroll-animated');

    }
    
jQuery(document).ready(function($) {  
    $(window).scroll(function(){

        element = $('html');
            let qwe = element.css('font-size');
 
            let asd = parseInt(qwe);

        if ($(window).width() >= 1400)
        {

            if  ($(window).scrollTop() > (asd * 15))
                $('.prizes-about').addClass('scroll-animated');
            
            if  ($(window).scrollTop() > (asd * 15))
                $('.prizes-baloon').addClass('scroll-animated');

            if  ($(window).scrollTop() > (asd * 30))
                $('.summer-promo').addClass('scroll-animated');
    
            if  ($(window).scrollTop() > (asd * 30))
                $('.summer-map').addClass('scroll-animated'); 
        }

        if ($(window).width() >= 1000 && $(window).width() < 1400 )
        {

            if  ($(window).scrollTop() > (asd * 10))
                $('.prizes-about').addClass('scroll-animated');
            
            if  ($(window).scrollTop() > (asd * 10))
                $('.prizes-baloon').addClass('scroll-animated');

            if  ($(window).scrollTop() > (asd * 20))
                $('.summer-promo').addClass('scroll-animated');
    
            if  ($(window).scrollTop() > (asd * 20))
                $('.summer-map').addClass('scroll-animated'); 
        }

        if ($(window).width() > 800 && $(window).width() < 1000 )
        {

            if  ($(window).scrollTop() > (asd * 5))
                $('.prizes-about').addClass('scroll-animated');
            
            if  ($(window).scrollTop() > (asd * 5))
                $('.prizes-baloon').addClass('scroll-animated');

            if  ($(window).scrollTop() > (asd * 10))
                $('.summer-promo').addClass('scroll-animated');
    
            if  ($(window).scrollTop() > (asd * 10))
                $('.summer-map').addClass('scroll-animated'); 
        }

        if ($(window).width() > 680 && $(window).width() <= 800 )
        {

            
            $('.prizes-about').addClass('scroll-animated');
        
        
            $('.prizes-baloon').addClass('scroll-animated');

            if  ($(window).scrollTop() > (asd * 10))
                $('.summer-promo').addClass('scroll-animated');
    
            if  ($(window).scrollTop() > (asd * 10))
                $('.summer-map').addClass('scroll-animated'); 
        }
        
        });
    
    });   
   