(function ($) { 

  function scrinH(){ 
    var windowH = $(window).height(); 
    $(".scrin, #line").css("height", windowH +"px") 
  } 
  scrinH(); 
  $(window).resize(scrinH); 
  
  
  function conentH(){ 
    var multiplier;
    if($(window).width() < 384) {
      multiplier = 7.673;
    } else {
      multiplier = 5.294;
    }
    
    var mapH = $(window).width() * multiplier; 
    $(".main").css("height", mapH +"px");
  } 
  conentH(); 
  $(window).resize(conentH); 


})(jQuery);