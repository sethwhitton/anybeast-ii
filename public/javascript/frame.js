
$(document).ready(function(){

  var $elBegin = $('#about'),
      $elEnd = $('.our-disciplines'),
      $frameWrap = $('.frame-wrap'),
      scrollBegin = $elBegin.offset().top,
      scrollEnd = $elEnd.offset().top,
      scrollTop,
      winHeight,
      mobileHeight,
      tabletHeight,
      desktopHeight;


  function calculateValues() {
    scrollTop = $(window).scrollTop();
    winHeight = window.innerHeight;
    desktopHeight = $('.desktop').outerHeight(true);
  }

  function framePadding() {
    // if ($(window).width() > 768){
      $frameWrap.removeAttr('style')
      $frameWrap.css('padding-top', (winHeight - desktopHeight) / 2 + 'px');
    // }
  }

  function positionFrame() {
    if (scrollTop >= scrollBegin) {
      $frameWrap.addClass('active');
      }
    if (scrollTop < scrollBegin) {
      $frameWrap.removeClass('active');
      }
    if (scrollTop >= scrollEnd) {
      $frameWrap.removeClass('active');
      $frameWrap.addClass('end-active');
      // $frameWrap.css('padding-top', '');
      }
    if (scrollTop < scrollEnd) {
      $frameWrap.removeClass('end-active');
      }
    }

    $('.desktop').load(function(){
      calculateValues();
      framePadding();
    });

    $(window).on("resize",function() {
      calculateValues();
      framePadding();
      positionFrame();
    });

    $(window).on("scroll",function() {
      calculateValues();
      // framePadding();
      positionFrame();
    });

    $('#broadside > .border').click(function() {
      $('.box1').toggleClass('active','modal');
    });

    $('#disciplines > .box').click(function() {
      $('.box2').toggleClass('active');
    });

    $('#fresh-eye > .box').click(function() {
      $('.box3').toggleClass('active');
    });

});
