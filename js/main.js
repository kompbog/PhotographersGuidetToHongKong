(function ($) { 
  
  
  function scrinM(){ 
    var a = $('.station__btn').height();
    var aa = a/2
    var b = $(window).height();
    var bb = b/2
    var c = bb+aa
    var d = c * -1
    $(".scrin--bg").css("top", d +"px") 
  } 
  scrinM(); 
  $(window).resize(scrinM); 
  
  function stationM(){ 
    var a = $('.gallary').height();
    
    var b = $(window).height();
    var c = (b-a)/4
    $(".gallary").css("margin-top", c +"px") 
  } 
  stationM(); 
  $(window).resize(stationM); 
  
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

  function shadowH(){ 
    var multiplier;
    if($(window).width() < 384) {
      multiplier = 0.30692;
    } else {
      multiplier = 0.21176;
    }
    var mapShadowH = $("#main").height() * multiplier; 
    $(".shadowMap").css("height", mapShadowH +"px") 
  } 
  shadowH(); 
  $(window).resize(shadowH);

})(jQuery);