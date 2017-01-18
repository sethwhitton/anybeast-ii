$(document).ready(function(){
  
    var toggle = $('.toggle-overlay'),
        aside = $('aside');
            
    toggle.click(function() {
      $('aside').toggleClass('open');
      });
});
