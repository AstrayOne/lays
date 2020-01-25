


$(document).ready(function() {
    if ($(window).width() > 680)
    {
    // #1 вариант (события не всплывают)
    $(".prizes")
        .mouseover(function() {
            $(".baloon__image").addClass("animated");
            $(".baloon__image").removeClass("noanimated");
                 // навели курсор на объект     
        })
        .mouseout(function(){
            $(".baloon__image").addClass("noanimated");
            $(".baloon__image").removeClass("animated");           
                // отвели курсор с объекта
        });
    }
});