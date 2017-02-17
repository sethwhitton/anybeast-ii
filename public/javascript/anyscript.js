$(document).ready(function(){
  
// Frame Element

  var about = $('.home-about'),
      clouds = $('#clouds');

// Frame and Transition Waypoints

  about.waypoint({
    handler: function() {
      if (direction == 'down') {
        clouds.addClass('fixed');
      }
      else {
        clouds.removeClass('fixed');
      }
    },
    offset: '50'
  });


    // Menu overlay 
    // var toggle = $('.toggle-overlay'),
    //     aside = $('.overlay');
    //         
    // toggle.click(function() {
    //   $('.overlay').toggleClass('open');
    //   });
    
          
    // Flickity gallery
    // $('.main-gallery').flickity({
    //   cellAlign: 'left',
    //   contain: true
    //   });
    console.log(about)
    console.log(clouds)

});
