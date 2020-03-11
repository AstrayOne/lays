
let windowWidth = window.innerWidth;


if (windowWidth > 680)
{

    window.addEventListener('scroll', function() {
        scrollAnimate(document.querySelector('.js-prizes-about'));
        scrollAnimate(document.querySelector('.js-prizes-baloon'));
        scrollAnimate(document.querySelector('.js-summer-promo'));
        scrollAnimate(document.querySelector('.js-summer-map'));
    });

    scrollAnimate(document.querySelector(".js-prizes-about"));
    scrollAnimate(document.querySelector(".js-prizes-baloon"));
    scrollAnimate(document.querySelector(".js-summer-promo"));
    scrollAnimate(document.querySelector(".js-summer-map"));
    promoSlide();
}




function scrollAnimate(element)
{
    let element1 = document.querySelector('html');
    let fSize = window.getComputedStyle(element1).fontSize;
    let rem = parseInt(fSize);
    let windowT = pageYOffset;
    let windowH = window.innerHeight;
    let elementT = element.getBoundingClientRect().top + pageYOffset;
    let elementH = element.offsetHeight;
    let documentH = document.body.offsetHeight;
    
    if (windowT + windowH >= elementT + 2 * rem || windowH + windowT == documentH || elementH + elementT  < windowH)
    {
        element.classList.add("scroll-animated");
    }
}


function promoSlide()
{
    document.querySelector(".js-promo").classList.add("scroll-animated");
    document.querySelector(".js-gallery").classList.add("scroll-animated");
}