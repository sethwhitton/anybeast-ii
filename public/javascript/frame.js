
$(document).ready(function(){

  var begin = $('.frame-start'),
      frame = $('.frame-wrap'),
      border = $('.border'),
      end = $('.shapes'),

      modal1 = $('#broadside > .border')
      modal2 = $('#disciplines > .box')
      modal3 = $('#fresh-eye > .box')


  begin.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        frame.addClass('sticky');
        // border.css({ 'height':frame.outerHeight() });
      }
      else {
        frame.removeClass('sticky');
      }
    },
    offset: '54%'
  });

  end.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        frame.removeClass('sticky');
        frame.addClass('end-sticky');
      }
      else {
        frame.removeClass('end-sticky');
        frame.addClass('sticky');
      }
    },
    offset: '50%'
  });


    modal1.click(function() {
      $('.box1').toggleClass('active','modal');
    });

    $('#disciplines > .box').click(function() {
      $('.box2').toggleClass('active');
    });

    $('#fresh-eye > .box').click(function() {
      $('.box3').toggleClass('active');
    });

});
