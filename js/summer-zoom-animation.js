
if ($(window).width() > 680)
{
    $(".summer")
        .mouseover(function() {
            
            $(".summer-promo__image").addClass("animated");
            $(".summer-promo__image").removeClass("noanimated");
                
        })
        .mouseout(function(){      
            $(".summer-promo__image").removeClass("animated");  
            $(".summer-promo__image").addClass("noanimated");
            
        });
}
