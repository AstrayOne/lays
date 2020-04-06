let isMenuOpen = false;
let menuItems = document.querySelectorAll('.js-header-menu-mobile__item');

if (window.innerWidth < 680)
{
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    elementClose = document.querySelector('.js-mobile-menu__close');
    elementClose.addEventListener('click', handleClickClose);
}

function openMobileMenu() {
    document.querySelector('.js-header-menu-mobile').classList.add('mobile-menu__visible');

    for(let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].classList.add('mobile-menu__animate');
    }
    
    document.querySelector('.js-mobile-menu__line_1').classList.add('line-animate1');
    document.querySelector('.js-mobile-menu__line_2').classList.add('line-animate2');
    document.querySelector('.js-mobile-menu__line_3').classList.add('line-animate3');
    isMenuOpen = true;
}

function closeMobileMenu() {
    document.querySelector('.js-header-menu-mobile').classList.remove('mobile-menu__visible');

    for(let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].classList.remove('mobile-menu__animate');
    }

    document.querySelector('.js-mobile-menu__line_1').classList.remove('line-animate1');
    document.querySelector('.js-mobile-menu__line_2').classList.remove('line-animate2');
    document.querySelector('.js-mobile-menu__line_3').classList.remove('line-animate3');
    isMenuOpen = false;
}

function handleClick(e) {
    let linkElement = event.target.closest('.js-header-logo__link');

    if (linkElement)
    {
        if(!isMenuOpen && !(event.target.classList.contains('js-header-logo__image')))
        {
            openMobileMenu();
        }
        else
        {
            closeMobileMenu();
        }
    }
}

function handleScroll() {
    let scrollTop = window.pageYOffset;

    if(isMenuOpen)
    {
        if (scrollTop > scrollPos){
            closeMobileMenu();
        }
    }
    scrollPos = scrollTop;
}

function handleClickClose() {
    closeMobileMenu();
}