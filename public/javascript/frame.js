
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


  function calculateValues() {
    scrollTop = $(window).scrollTop();
    winHeight = window.innerHeight;
    desktopHeight = $('.desktop').height();
  }

  function framePadding() {
    if ($(window).width() > 768){
      $frameWrap.css('padding-top', (winHeight - desktopHeight) / 2 + 'px');
    }
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
      $frameWrap.css('padding-top', '');
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
    console.log('----------------');
    console.log('Scroll begins at ' + scrollBegin);
    console.log('Scroll end at ' + scrollEnd);
    console.log('Scroll top is ' + scrollTop);
    console.log('----------------');
    console.log('Frame heights: *Mobile =' + mobileHeight + ' *Tablet =' + tabletHeight + ' *Desktop =' + desktopHeight);
    console.log('Tablet padding = ' + (winHeight - tabletHeight) * .5 + 'px')

    });
});
