
jQuery(document).ready(function($) 
{  

    $(window).scroll(function()
    {
        scrollAnimate($('.prizes-about'));
        scrollAnimate($('.prizes-baloon'));
        scrollAnimate($('.summer-promo'));
        scrollAnimate($('.summer-map'));

    });

    scrollAnimate($('.prizes-about'));
    scrollAnimate($('.prizes-baloon'));
    scrollAnimate($('.summer-promo'));
    scrollAnimate($('.summer-map'));
    
});   



function scrollAnimate(element)
{
    let windowTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let elementTop = $(element).offset().top;
    let elementHeight = $(element).outerHeight();
    let documentHeight = $(document).height();   
    if (windowTop + windowHeight >= elementTop || windowHeight + windowTop == documentHeight || elementHeight + elementTop  < windowHeight){
        element.addClass('scroll-animated');
    }
}