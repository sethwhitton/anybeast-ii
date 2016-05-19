
$(document).ready(function(){

  var $elBegin = $('#about'),
      $elEnd = $('.disciplines'),
      $frameWrap = $('.frame-wrap'),
      scrollBegin = $elBegin.offset().top,
      scrollEnd = $elEnd.offset().top,
      scrollTop,
      docHeight,
      frameHeight,
      framePadding;

  function calculateValues() {
    scrollTop = $(window).scrollTop();
    docHeight = window.innerHeight;
    frameHeight = $('.frame').height();
    framePadding = (docHeight - frameHeight) * .5;
  }

  function positionFrame() {
    if (scrollTop >= scrollBegin) {
      $frameWrap.addClass('active');
      $frameWrap.css('padding-top', framePadding + 'px');
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
    positionFrame();

    console.log('Window height is ' + docHeight);
    console.log('Frame height is ' + frameHeight);
    console.log('Frame padding is ' + framePadding);
    console.log('----------------');
    console.log('Scroll begins at ' + scrollBegin);
    console.log('Scroll end at ' + scrollEnd);
    console.log('Scroll top is ' + scrollTop);
    console.log('----------------');

  });
});



// $(document).ready(function(){

//   var $elBegin = $('#about')
//   var $elEnd = $('.disciplines')
//   var scrollBegin = $elBegin.offset().top;
//   var scrollEnd = $elEnd.offset().top
//
//   $(window).on("resize scroll",function() {
//
//     var scrollTop = $(window).scrollTop();
//     var docHeight = window.innerHeight;
//     var frameHeight = $('.frame').height();
//     var framePadding = docHeight - frameHeight / 2;
//
//     if (scrollTop >= scrollBegin) {
//       $('.frame-wrap').addClass('active');
//       $('.frame-wrap').css('padding-top', (docHeight - frameHeight) * .5 + 'px');
//     }
//     if (scrollTop < scrollBegin) {
//       $('.frame-wrap').removeClass('active');
//     }
//     if (scrollTop >= scrollEnd) {
//       $('.frame-wrap').removeClass('active');
//       $('.frame-wrap').addClass('end-active');
//     }
//     if (scrollTop < scrollEnd) {
//       $('.frame-wrap').removeClass('end-active');
//
//     }
//
//     console.log('Window height is ' + docHeight);
//     console.log('Frame height is ' + frameHeight);
//     console.log('Frame padding is ' + framePadding);
//     console.log('----------------');
//     console.log('Scroll begins at ' + scrollBegin);
//     console.log('Scroll end at ' + scrollEnd);
//     console.log('Scroll top is ' + scrollTop);
//     console.log('----------------');
//
//
//   });
// });
