
$(document).ready(function(){

  var $elBegin = $('#about'),
      $elEnd = $('.disciplines'),
      $frameWrap = $('.frame-wrap'),
      scrollBegin = $elBegin.offset().top,
      scrollEnd = $elEnd.offset().top,
      scrollTop,
      winHeight,
      mobileHeight,
      tabletHeight,
      desktopHeight;

  (function($){
    calculateValues();
    $frameWrap.css('padding-top', framePadding + 'px');
  });

  function calculateValues() {
    scrollTop = $(window).scrollTop();
    winHeight = window.innerHeight;
    desktopHeight = $('.desktop').height();
    tabletHeight = $('.tablet').height();
    mobileHeight = $('.mobile').height();
  }

  function framePadding() {
    // $frameWrap.css('padding-top', (winHeight - mobileHeight) * .5 + 'px');
    // $frameWrap.css('padding-top', (winHeight - tabletHeight) / 2 + 'px');
    $frameWrap.css('padding-top', (winHeight - desktopHeight) * .5 + 'px');
  }

  function positionFrame() {
    if (scrollTop >= scrollBegin) {
      $frameWrap.addClass('active');
      // $frameWrap.css('padding-top', framePadding + 'px');
      }
    if (scrollTop < scrollBegin) {
      $frameWrap.removeClass('active');
      }
    if (scrollTop >= scrollEnd) {
      $frameWrap.removeClass('active');
      $frameWrap.addClass('end-active');
      }
    if (scrollTop < scrollEnd) {
      $frameWrap.removeClass('end-active');
      }
    }

  $(window).on("resize",function() {
    calculateValues();
  });

  $(window).on("scroll",function() {
    calculateValues();
    framePadding();
    positionFrame();


    console.log('Window height is ' + winHeight);
    // console.log('Frame height is ' + frameHeight);
    // console.log('Frame padding is ' + framePadding);
    console.log('----------------');
    console.log('Scroll begins at ' + scrollBegin);
    console.log('Scroll end at ' + scrollEnd);
    console.log('Scroll top is ' + scrollTop);
    console.log('----------------');
    console.log('Mobile =' + mobileHeight + ' Tablet =' + tabletHeight + ' Desktop =' + desktopHeight);


  });
});
