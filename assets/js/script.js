$(document).ready(function() 
{

    // var url = window.location.href; // Returns full URL (https://example.com/path/example.html)

    $('.owl-carousel').owlCarousel({
        // loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:
        {
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $("#click").on('click', function() 
    {
        var y = $(window).scrollTop();
        $('html, body').animate({ scrollTop: y + 260 })
    });
        
    


    
});



