$(window).scroll(function(event) 
    {
        if ($(this).scrollTop()>145) 
        {
            $(function() {
              $('.chart').easyPieChart({
                size: 160,
                barColor: "#17d3e6",
                scaleLength: 0,
                lineWidth: 15,
                trackColor: "transparent",//trackColor: "#373737",
                lineCap: "circle",
                animate: 2000,
              });
            });
        }

    });




