$(document).ready(function(){
  
// Frame Element

  var about = $('#home-objects'),
      clouds = $('#clouds');

// Frame and Transition Waypoints

  about.waypoint({
    handler: function(direction) {
      if (direction == 'down') {
        clouds.removeClass('fixed')
        clouds.addClass('centered');
        
      }
      else {
        clouds.removeClass('centered');
        clouds.addClass('fixed');
        
      }
    },
    offset: '50%'
  });

});
