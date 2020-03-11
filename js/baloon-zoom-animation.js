

let baloonElement = document.querySelector(".js-baloon__image");
let prizesElement = document.querySelector(".js-prizes");

if (window.innerWidth > 680)
{
    prizesElement.addEventListener('mouseover', function()
    {
        baloonElement.classList.add("animated");
        baloonElement.classList.remove("noanimated");
    });
        
    prizesElement.addEventListener('mouseout', function()
    {
        baloonElement.classList.add("noanimated");
        baloonElement.classList.remove("animated"); 
    });
}
