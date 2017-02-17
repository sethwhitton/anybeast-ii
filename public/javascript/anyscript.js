$(document).ready(function(){
  
    var toggle = $('.toggle-overlay'),
        aside = $('.overlay');
            
    toggle.click(function() {
      $('.overlay').toggleClass('open');
      });

    // $('.main-gallery').flickity({
    //   cellAlign: 'left',
    //   contain: true
    //   });
});
