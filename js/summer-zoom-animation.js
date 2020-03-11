let summerPromoElement = document.querySelector(".js-summer-promo__image");
let summerElement = document.querySelector(".js-summer");

if (window.innerWidth > 680)
{
    summerElement.addEventListener('mouseover', function()
    {
        summerPromoElement.classList.add("animated");
        summerPromoElement.classList.remove("noanimated");
    });
        
    summerElement.addEventListener('mouseout', function()
    {
        summerPromoElement.classList.remove("animated"); 
        summerPromoElement.classList.add("noanimated");
        
    });
}
