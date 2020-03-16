
let flag = false;
let menuItems = [];

if (window.innerWidth < 680)
{

    document.onclick = function(e)
    {
        let link = event.target.closest('.js-header-logo__link');

        if (link)
        {
            if(flag == false && (event.target.classList.contains('js-header-logo__image') == false))
            {
                openMobileMenu();
            }
            else
            {
                closeMobileMenu();
            }
        }
    };

    let scrollPos = 0;
    window.addEventListener('scroll', function() {

        let st = window.pageYOffset;
        if(flag == true)
        {
            if (st > scrollPos){
                
                closeMobileMenu();
            }
        }
        scrollPos = st;
    });

    element1 = document.querySelector('.js-mobile-menu__close');

    element1.addEventListener('click', function(){
        closeMobileMenu();
    });
    
}




function openMobileMenu() {
    document.querySelector('.js-header-menu-mobile').classList.add('mobile-menu__visible');
    menuItems = document.querySelectorAll('.js-header-menu-mobile__item');
    for(let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].classList.add('mobile-menu__animate');
    }
    document.querySelector('.js-mobile-menu__line_1').classList.add('line-animate1');
    document.querySelector('.js-mobile-menu__line_2').classList.add('line-animate2');
    document.querySelector('.js-mobile-menu__line_3').classList.add('line-animate3');
    flag = true;
}

function closeMobileMenu() {
    document.querySelector('.js-header-menu-mobile').classList.remove('mobile-menu__visible');
    for(let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].classList.remove('mobile-menu__animate');
    }
    menuItems = [];
    document.querySelector('.js-mobile-menu__line_1').classList.remove('line-animate1');
    document.querySelector('.js-mobile-menu__line_2').classList.remove('line-animate2');
    document.querySelector('.js-mobile-menu__line_3').classList.remove('line-animate3');
    flag = false;
}



