   $(function () {
       $('[data-toggle="tooltip"]').tooltip();
   });


   $(function () {
       $(document).on('click', 'a.page-scroll', function (event) {
           var $anchor = $(this);
           $('html, body').stop().animate({
               scrollTop: $($anchor.attr('href')).offset().top
           }, 1500, 'easeInOutExpo');
           event.preventDefault();
       });


       $(' #da-thumbs > li ').each(function () {
           $(this).hoverdir();
       });

   });

   (function ($) {
       $(function () {
           var scroll = $(document).scrollTop();
           var headerHeight = $('.page-header').outerHeight();

           $(window).scroll(function () {
               var scrolled = $(document).scrollTop();
               if (scrolled > headerHeight) {
                   $('.page-header').addClass('off-canvas');
               } else {
                   $('.page-header').removeClass('off-canvas');
               }

               if (scrolled > scroll) {
                   $('.page-header').removeClass('fixed');
               } else {
                   $('.page-header').addClass('fixed');
               }
               scroll = $(document).scrollTop();
           });
       });
   })(jQuery);

