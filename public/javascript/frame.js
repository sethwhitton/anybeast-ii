
$(document).ready(function(){
  var $elBegin = $('#about')
  var $elEnd = $('#about')

  var scrollBegin = $elBegin.offset().top;
  var scrollEnd = $elEnd.position().top + $elEnd.outerHeight(true);
  $(window).on("resize scroll",function() {

    var scrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var frameHeight = $('.frame').height();
    var framePadding = winHeight - frameHeight / 2;

    // $('.frame-wrap').css('padding-top', (winHeight - frameHeight) * .5 + 'px')

    if (scrollTop >= scrollBegin) {
      $('.frame-wrap').addClass('active');
    }
    if (scrollTop < scrollBegin) {
      $('.frame-wrap').removeClass('active');
    }
    if (scrollTop >= scrollEnd) {
      $('.frame-wrap').removeClass('active');
    }

    console.log('Window height is ' + winHeight);
    console.log('Frame height is ' + frameHeight);
    console.log('Frame padding is ' + framePadding);
    console.log('----------------');
    console.log('Scroll begins at ' + scrollBegin);
    console.log('Scroll end at ' + scrollEnd);
    console.log('Scroll top is ' + scrollTop);
    console.log('----------------');


  });
});





















// $(document).ready(function() {
// 	var s = $(".frame");
// 	var pos = s.position();
// 	var stickermax = $(document).outerHeight() - $("#about").outerHeight() - s.outerHeight() // - 40; //40 value is the total of the top and bottom margin
//
//   $(window).scroll(function() {
// 		var windowpos = $(window).scrollTop();
//     var frameCenter = $(".frame").outerHeight / 2;
//     var viewCenter = $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2
//
//
// 		if (windowpos >= pos.top && windowpos < stickermax) {
// 			s.attr("style", ""); //kill absolute positioning
// 			s.addClass("stick"); //stick it
// 		} else if (windowpos >= stickermax) {
// 			s.removeClass(); //un-stick
// 			s.css({position: "absolute", top: stickermax + "px"}); //set sticker right above the footer
//
// 		} else {
// 			s.removeClass(); //top of page
// 		}
// 	});
	//alert(stickermax); //u




// 1. Wait till the DOM is loaded
// 2. Get the offsetTop value of the element you want to trigger the positioning change of the frame (distance from the top of the page)
// 3. Listen for user scroll event
// 4. When the scroll position (window.scrollTop I think) is greater than or equal to the element's position, add the class to absolutely position the frame
// 5. When scroll position is less than element position, remove that class
//
// $(document).ready(function(){
//
//   $(window).on("resize scroll",function() {
//     var scrollTop = $(window).scrollTop();
//
//     var horizontalCenter = Math.floor(window.innerWidth/2);
//     var verticalCener = Math.floor(window.innerHeight/2);
//
//     var frameOffset = $('.frame-content').offset().top - ($('.frame').height() / 2);
//     var endOffset = $('p.end').offset().top;
//
//     var frameHeight = Math.round( $('.frame').outerHeight() );
//     var frameWidth = Math.round( $('.rigging').outerWidth() );
//
//
//     if (scrollTop >= frameOffset) {
//       $('.active').css('width', frameWidth);
//       $('.frame').addClass('active');
//     }
//     if (scrollTop < frameOffset || scrollTop >= endOffset) {
//         $('.frame').removeClass('active');
//       }
//
//   });
// });
