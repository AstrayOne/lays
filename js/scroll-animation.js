
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
    let element1 = $('html');
    let fontSize = element1.css('font-size');

    let rem = parseInt(fontSize);

    let windowTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let elementTop = $(element).offset().top;
    let elementHeight = $(element).outerHeight();
    let documentHeight = $(document).height();   

    if (windowTop + windowHeight >= elementTop + 2 * rem || windowHeight + windowTop == documentHeight || elementHeight + elementTop  < windowHeight)
    {
        element.addClass('scroll-animated');
    }
    
}