
var flag = false;

$('.header-logo__link').on('click', function() {

    if ($(window).width() <= 680)
    {
        if(flag == false)
        {
            $('.header-menu-mobile').addClass('mobile-menu__visible');
            $('.header-menu-mobile__item').addClass('mobile-menu__animate');
            $('.mobile-menu__line_1').addClass('line-animate1');
            $('.mobile-menu__line_2').addClass('line-animate2');
            $('.mobile-menu__line_3').addClass('line-animate3');


            flag = true;
        }
        else
        {
            $('.header-menu-mobile').removeClass('mobile-menu__visible');
            $('.header-menu-mobile__item').removeClass('mobile-menu__animate');
            $('.mobile-menu__line_1').removeClass('line-animate1');
            $('.mobile-menu__line_2').removeClass('line-animate2');
            $('.mobile-menu__line_3').removeClass('line-animate3');
            flag = false;
        }
    }
});

$('.mobile-menu__close').on('click', function() {
    
    $('.header-menu-mobile').removeClass('mobile-menu__visible');
    $('.header-menu-mobile__item').removeClass('mobile-menu__animate');
    $('.mobile-menu__line_1').removeClass('line-animate1');
    $('.mobile-menu__line_2').removeClass('line-animate2');
    $('.mobile-menu__line_3').removeClass('line-animate3');
    flag = false;
    
});
