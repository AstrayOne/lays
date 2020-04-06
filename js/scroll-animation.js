let windowWidth = window.innerWidth;

if (windowWidth > 680)
{
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    promoSlide();
}

function scrollAnimate(element) {
    let htmlElement = document.querySelector('html');
    let fontSize = window.getComputedStyle(htmlElement).fontSize;
    let rem = parseInt(fontSize);
    let windowTop = pageYOffset;
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top + pageYOffset;
    let elementHeight = element.offsetHeight;
    let documentHeight = document.body.offsetHeight;
    
    if (windowTop + windowHeight >= elementTop + 2 * rem || windowHeight + windowTop == documentHeight || elementHeight + elementTop < windowHeight)
    {
        element.classList.add('scroll-animated');
    }
}

function promoSlide() {
    document.querySelector('.js-promo').classList.add('scroll-animated');
    document.querySelector('.js-gallery').classList.add('scroll-animated');
}

function handleScroll() {
    scrollAnimate(document.querySelector('.js-prizes-about'));
    scrollAnimate(document.querySelector('.js-prizes-baloon'));
    scrollAnimate(document.querySelector('.js-summer-promo'));
    scrollAnimate(document.querySelector('.js-summer-map'));
}