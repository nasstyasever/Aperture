$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        // autoplay:true,
        // autoplayTimeout:2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:2
            },
            1100:{
                items:5
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});