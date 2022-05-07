(function ($) {
    "use strict";
  
    // Preloader
    $(window).on('load', function () {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
        });
      }
    });
  
    // Phone icon
    var contentOffset = getOffset();
    function getOffset() {
      var allOffsets = $("#header").offset();
      return allOffsets.top;
    }
  
    $(window).resize(function () {
      contentOffset = getOffset();
    });
  
    $(window).scroll(function () {
      var windowTop = $(window).scrollTop();
  
      if (windowTop > contentOffset) {
        $(".phone").slideDown(500); //fadeIn
      } else {
        $(".phone").slideUp(500); //fadeOut
      }
    });  
  })(jQuery);
  
  