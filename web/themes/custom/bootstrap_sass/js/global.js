/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';
  $(document).ready(function() {
    // burger effect
    if( window.innerWidth <= 991 ) {

      $('.burger-mobile').click(function() {
        $('.slide-in').toggleClass('show');
        $('body').toggleClass('not_scolling');
        $(this).find('#nav-icon2').toggleClass('open');
      });

      var height_info = $('.info_wrapper').height(); 
      $('.menu_k9 section').css("top", height_info);
      // if( window.innerWidth <= 991 ) {
        $('.slide-in-content').css({ height: '100vh', position: 'fixed' } );

    }else {
      $('body').addClass('scrolled scrollup');
    }
 
    // if( window.innerWidth >= 769 ) {
    //   $(document).on("scroll", function() {
    //     if($(document).scrollTop()>100) {
    //       $(".info_wrapper").removeClass("large").addClass("small");
    //     } else {
    //       $(".info_wrapper").removeClass("small").addClass("large");
    //     }
    //   });
    // }

    // $( window ).resize(function() {
  });

  Drupal.behaviors.faqs = {
    attach: function(context, settings) {
      $('body').once('#accordion_faqs').each(function() {
        $('#accordion_faqs button').on('click', function(){
          $(this).find(".circle-plus").toggleClass('opened');
        })
      
      });
    }
  };


  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function(context, settings) {
      var position = $(window).scrollTop();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass("scrolled");
        }
        else {
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        position = scroll;
      });
      
    }
  };

  

 
})(jQuery, Drupal);