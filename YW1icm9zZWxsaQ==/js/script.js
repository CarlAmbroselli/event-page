(function($) {
    "use strict";
     // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    // Site navigation setup

    var header = $('.header'),
    pos = header.offset();
 
     $(window).scroll(function() {
         if ($(this).scrollTop() > pos.top + 50 && header.hasClass('default')) {
             header.fadeOut('fast', function() {
                 $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                 $('.scroll-to-top').addClass('active');
             });
         } else if ($(this).scrollTop() <= pos.top + 50 && header.hasClass('switched-header')) {
             header.fadeOut('fast', function() {
                 $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                  $('.scroll-to-top').removeClass('active');
             });
         }
     });

    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -180
    });


  //Popup elements

    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

  // Countdown setup

    $('.countdown').countdown('2023/6/10 15:00:00').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="col mt-3"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 heading-font">%D</span> <span class="label ">Tag%!d:e;</span></div></div> '
    + '<div class="col mt-3"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 heading-font">%H</span> <span class="label">Stunde%!H:n;</span></div></div> '
    + '<div class="col mt-3"><div class="card card-body countdown-shadow mb-4 mb-lg-0 p-3"><span class="counter text-primary mb-1 heading-font">%M</span> <span class="label">Minute%!M:n;</span></div></div> '
    + '<div class="col mt-3"><div class="card card-body countdown-shadow p-3"><span class="counter text-primary mb-1 heading-font">%S</span> <span class="label">Sekunde%!S:n;</span></div></div>'));
});


})(jQuery);