
if ($(window).width() > 680)
{


    $(".prizes")
        .mouseover(function() {
            
            $(".baloon__image").addClass("animated");
            $(".baloon__image").removeClass("noanimated");
            
            
        })
        .mouseout(function(){
            $(".baloon__image").addClass("noanimated");
            $(".baloon__image").removeClass("animated");           
        });
}


