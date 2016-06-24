(function ($) { 

  function scrinH(){ 
    var windowH = $(window).height(); 
    $(".scrin, #line").css("height", windowH +"px") 
  } 
  scrinH(); 
  $(window).resize(scrinH); 


})(jQuery);