$(document).ready(function() 
{
	$(window).scroll(function(event) 
	{
		if ($(this).scrollTop()>55) 
		{
			$('.desktop').addClass('sticky');
			$('.space-filler').css({display: 'block'});
		}
		else
		{
			$('.desktop').removeClass('sticky');
			$('.space-filler').css({display: 'none'});
		}

		if ($(this).scrollTop()>55) 
		{
			$('.mobile').addClass('mobile-sticky');
			$('.space-filler').css({height: '10px'});

		}
		else
		{
			$('.mobile').removeClass('mobile-sticky');
		}

	});

	$("#icon").on('click',  function() 
		{
			$(".mobile-menu .menu").toggleClass('menu-display');

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