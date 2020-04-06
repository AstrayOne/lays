let summerPromoElement = document.querySelector('.js-summer-promo__image');
let summerElement = document.querySelector('.js-summer');

if (window.innerWidth > 680)
{
    summerElement.addEventListener('mouseover', handleMouseOver);
    summerElement.addEventListener('mouseout', handleMouseOut);
}

function handleMouseOver() {
    summerPromoElement.classList.add('animated');
    summerPromoElement.classList.remove('noanimated');
}

function handleMouseOut() {
    summerPromoElement.classList.remove('animated'); 
    summerPromoElement.classList.add('noanimated');
}