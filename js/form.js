$(document).ready(function () {
	
	var passStrength = 0;
	
	$('#username').on('change', function (ev) {
		
		var username = $(this).val();
		
		if (username.length >= 3) {
			var ajax = $.post('check-username.php', {
				'username' : username
			});
			
			ajax.done(function (data) {
				$('.status').removeClass('available unavailable');
				
				if (data == 'available') {
					$('.status').html('✔').addClass(data);
				} else {
					$('.status').html('✖').addClass(data);
				}
			});
		} else {
			$('.status').html('✖').removeClass('available').addClass('unavailable');
		}
		
	});
	
	$('#email').on('change', function (ev) {
		
		var email = $(this).val();
		
		if (email.length >0) {
			var ajax = $.post('check-email.php', {
				'email' : email
			});
			
			ajax.done(function (data) {
				$('.email-status').removeClass('available unavailable');
				
				if (data == 'available') {
					$('.email-status').html('✔').addClass(data);
				} else {
					$('.email-status').html('✖').addClass(data);
				}
			});
		} else {
			$('.email-status').html('✖').removeClass('available').addClass('unavailable');
		}
		
	});
	
	$('#password').on('keyup', function (ev) {
		var pass = $(this).val();
		console.log(pass);
		
		passStrength = 0;
		
		if (pass.length > 5) {
			passStrength++;
			$('.req-length').addClass('met');
		} else {
			$('.req-length').removeClass('met');
		}
		
		if (pass.match(/[a-z]/)) {
			passStrength++;
			$('.req-low').addClass('met');
		} else {
			$('.req-low').removeClass('met');
		}
		
		if (pass.match(/[A-Z]/)) {
			passStrength++;
			$('.req-up').addClass('met');
		} else {
			$('.req-up').removeClass('met');
		}
		
		if (pass.match(/[0-9]/)) {
			passStrength++;
			$('.req-num').addClass('met');
		} else {
			$('.req-num').removeClass('met');
		}
		
		if (pass.match(/[^a-zA-Z0-9]/)) {
			passStrength++;
			$('.req-spec').addClass('met');
		} else {
			$('.req-spec').removeClass('met');
		}
	});

		$('#city').on('change', function (ev) {
			var city = $(this).val();
		
			$('.city-status').removeClass('met not');
	
		if (city.length > 0 && city.match( /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/)) {
			$('.city-status').addClass('met');
		} else {
			$('.city-status').addClass('not');
		}
	});

	  $("#canada").on('click', function (ev) {
        	$(".prov-state").hide();
        	$(".prov-state").load("canada.html", function(){
            	$(this).fadeIn(1000);
       	 });
   	 });

	  $("#us").on('click', function (ev) {
        	$(".prov-state").hide();
        	$(".prov-state").load("us.html", function(){
            	$(this).fadeIn(1000);
       	 });
   	 });

	$('form').on('submit', function (ev) {
		
		if (passStrength < 5 || $('.status').hasClass('unavailable')) {
			ev.preventDefault();
		}
		
	});

});























