let baloonElement = document.querySelector('.js-baloon__image');
let prizesElement = document.querySelector('.js-prizes');

if (window.innerWidth > 680)
{
    prizesElement.addEventListener('mouseover', handleMouseOver);
    prizesElement.addEventListener('mouseout', handleMouseOut);
}

function handleMouseOver() {
    baloonElement.classList.add('animated');
    baloonElement.classList.remove('noanimated');
}

function handleMouseOut() {
    baloonElement.classList.add('noanimated');
    baloonElement.classList.remove('animated'); 
}
