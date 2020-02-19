
let flag = false;



if ($(window).width() <= 680)
{

    document.onclick = function(e)
    {
        let link = event.target.closest('.header-logo__link');
        
        if (link)
        {
        
            if(flag == false && ( event.target.className != 'header-logo__image'))
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
    $(window).scroll(function()
    {
        
        let st = $(this).scrollTop();
        if(flag == true)
        {
            if (st > scrollPos){
                
                closeMobileMenu();
            }
        }
        scrollPos = st;

    });
    
    $('.mobile-menu__close').on('click', function() {
        closeMobileMenu();
    });
}



function openMobileMenu() 
{

    $('.header-menu-mobile').addClass('mobile-menu__visible');
    $('.header-menu-mobile__item').addClass('mobile-menu__animate');
    $('.mobile-menu__line_1').addClass('line-animate1');
    $('.mobile-menu__line_2').addClass('line-animate2');
    $('.mobile-menu__line_3').addClass('line-animate3');

    flag = true;
  }

function closeMobileMenu() 
{

    $('.header-menu-mobile').removeClass('mobile-menu__visible');
    $('.header-menu-mobile__item').removeClass('mobile-menu__animate');
    $('.mobile-menu__line_1').removeClass('line-animate1');
    $('.mobile-menu__line_2').removeClass('line-animate2');
    $('.mobile-menu__line_3').removeClass('line-animate3');
    flag = false;
}


