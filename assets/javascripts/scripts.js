$(document).ready(function() {

	/*============================================
	Page Preloader
	==============================================*/

	$(window).load(function(){
		$('#page-loader').fadeOut(500,function(){
		});
	})

	/*============================================
	Waypoints Animations
	==============================================*/
	$('#skills').waypoint(function(){
		$('.skills-item').each(function(){
			$(this).css({'height':$(this).data('height')+'%'});
		})

		$('.skills-bars').css({'opacity':1});
	},{offset:'40%'});

	$('.scrollimation').waypoint(function(){
		$(this).addClass('in');
	},{offset:'90%'});

	/*============================================
	Resize Functions
	==============================================*/
	var thumbSize = $('.project-item').width();

	$(window).resize(function(){
		$('#home').height($(window).height()+50);

		if($('.project-item').width() != thumbSize){

			$('#projects-container').masonry('reload');
			thumbSize = $('.project-item').width();
		}

		scrollSpyRefresh();
		waypointsRefresh();
	});

	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}

	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}

	/***** Contact form ZmNsLWs*****/

  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $('#contact-form input[type="text"], #contact-form form textarea').removeClass('contact-error');
    $('.btn-contact').attr('disabled', 'disabled');
    var postdata = $('#contact-form').serialize();
    $.ajax({
      type: 'POST',
      url: 'https://actmob-api.herokuapp.com/api/send/ZmNsLWs',
      data: postdata,
      dataType: 'json',
      crossDomain:true,
      success: function(json) {
        $('.btn-contact').attr('disabled', null);

        if(json.emailMessage !== '') {
          $('#contact-form .contact-email').addClass('contact-error');
        }
        if(json.phoneMessage !== '') {
          $('#contact-form .contact-subject').addClass('contact-error');
        }
        if(json.messageMessage !== '') {
          $('#contact-form textarea').addClass('contact-error');
        }
        if(json.success) {
          $('#contact-form').fadeOut('fast', function() {
            $('#contact .row').append('<div class="col-sm-6 col-md-offset-1 font-lang"><h3>預約已經發送，謝謝您！</h3></div>');
          });
        }
      }
    });
  });
});
