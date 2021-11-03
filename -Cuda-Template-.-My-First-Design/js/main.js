$(document).ready(function(){

    // STICKY MENU

    $('.js--services-section').waypoint(function(direction){
        if (direction == "down"){
            $(".add").addClass("sticky");
        } else{
            $(".add").removeClass("sticky");
        }
    });
    // MIXITUP (PORTFOLIO)
    var mixer = mixitup('.mixme');
});

