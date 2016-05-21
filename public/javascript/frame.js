
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

  $('#broadside > .border').click(function() {
      $('.box1').toggleClass('active');
  });

  $('#disciplines > .box').click(function() {
      $('.box2').toggleClass('active');
  });

  $('#fresh-eye > .box').click(function() {
      $('.box3').toggleClass('active');
  });

  $(window).on("resize",function() {
    calculateValues();
  });


  $(window).on("scroll",function() {
    calculateValues();
    framePadding();
    positionFrame();


    console.log('Window height is ' + winHeight);
    console.log('----------------');
    console.log('Scroll top is ' + scrollTop);
    console.log('Scroll begins at ' + scrollBegin);
    console.log('Scroll end at ' + scrollEnd);
    console.log('----------------');
    console.log('Frame height: Desktop = ' + desktopHeight);
    console.log('Frame padding = ' + (winHeight - desktopHeight) * .5 + 'px')

    });
});
