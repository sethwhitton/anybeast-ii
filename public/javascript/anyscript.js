$(document).ready(function(){
  
    var toggle = $('.toggle-overlay'),
        aside = $('.overlay');
            
    toggle.click(function() {
      $('.overlay').toggleClass('open');
      });
    // Mousover Images for Menu Overlay
    // $('#neo-mouse-over').hover(function() { 
    //   $('.overlay').removeClass('normal-state').addClass('neo-mouse-over-effect');
    // })
    // .mouseleave(function(){
    //   $('.overlay').removeClass('neo-mouse-over-effect').addClass('normal-state');
    // });
});
