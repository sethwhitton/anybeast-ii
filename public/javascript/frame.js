
$(document).ready(function(){

      // Frame Element
  var begin = $('.frame-start'),
      frame = $('.frame-wrap'),
      border = $('.border'),
      end = $('.clients'),

      // Overlays
      modal1 = $('#broadside > .border'),
      modal2 = $('#disciplines > .box'),
      modal3 = $('#fresh-eye > .box'),

      // Transitions
      introduction = $('.introduction'),
      introduction_contents = $('.introduction > div'),
      how_we_work_contents = $('.how-we-work > div'),
      our_disciplines_contents = $('.our-disciplines > div'),
      clients_contents = $('.clients > div'),
      contact = $('#contact');


// Frame and Transition Waypoints

  begin.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        frame.addClass('sticky');
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
    offset: '0%'
  });

  introduction.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        introduction_contents.addClass('blur-out');
      }
      else {
        introduction_contents.removeClass('blur-out');
      }
    },
    offset: '50%'
  });

  how_we_work_contents.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        introduction_contents.removeClass('blur-out');
        how_we_work_contents.addClass('blur-out');
        // introduction_contents.removeClass('blur-out');
      }
      else {
        how_we_work_contents.removeClass('blur-out');
        introduction_contents.addClass('blur-out');
      }
    },
    offset: '95%'
  });

  our_disciplines_contents.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        how_we_work_contents.removeClass('blur-out');
        our_disciplines_contents.addClass('blur-out');
        // introduction_contents.removeClass('blur-out');
      }
      else {
        our_disciplines_contents.removeClass('blur-out');
        how_we_work_contents.addClass('blur-out');
      }
    },
    offset: '75%'
  });

  clients_contents.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        our_disciplines_contents.removeClass('blur-out');
        clients_contents.addClass('blur-out');
        // introduction_contents.removeClass('blur-out');
      }
      else {
        clients_contents.removeClass('blur-out');
        our_disciplines_contents.addClass('blur-out');
      }
    },
    offset: '75%'
  });

  contact.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        clients_contents.removeClass('blur-out');
      }
      else {
        clients_contents.addClass('blur-out');
      }
    },
    offset: '75%'
  });


// Modal Overlays

  modal1.click(function() {
    $('.box1').toggleClass('active','modal');
  });

  modal2.click(function() {
    $('.box2').toggleClass('active');
  });

  modal3.click(function() {
    $('.box3').toggleClass('active');
  });

});
