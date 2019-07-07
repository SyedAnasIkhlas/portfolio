$(document).ready(function() 
{
	$(window).scroll(function(event) 
	{
		if ($(this).scrollTop()>55) 
		{
			$('.desktop').addClass('sticky');
		}
		else
		{
			$('.desktop').removeClass('sticky');
		}

		if ($(this).scrollTop()>55) 
		{
			$('.mobile').addClass('mobile-sticky');
		}
		else
		{
			$('.mobile').removeClass('mobile-sticky');
		}

	});

	$("#icon").on('click',  function() 
		{
			$(".mobile-menu.menu").css({
				display: 'none'
			});

		});

});








// backup code still works

// $(document).ready(function() 
// {
// 	$(document).on('scroll', function(event) 
// 	{
// 		if ($(this).scrollTop()>5) 
// 		{
// 			alert("Scroll");
// 		}
	
// 	});
		
// });