(function ($) { 
  
//ВЫРАВНИВАНИЕ СКРИНА ПОСРЕДИНЕ
  function scrinM(){ 
    var a = $('.station__btn').height();
    var aa = a/2;
    var b = $(window).height();
    var bb = b/2;
    var c = bb+aa;
    var d = c*-1;
    $(".scrin--bg").css("top", d) 
  }
  scrinM(); 
    $(window).resize(scrinM);
  
// КВАДРАТНЫЕ ОКОН СТАНЦИЙ
  function gMap(){ 
    var a = $(window).width();
    var b = $(window).height();
    var aa = a * 0.0833333333333;
    var aaa = a-(aa*2);
    var bb = b * 0.15;
    var bbb = b-(bb*2);
    
    if(a < b) {
      $(".map").css("height", aaa +"px")
      $(".map").css("width", aaa +"px")
      
    } else {
      $(".map").css("width", bbb +"px")
      $(".map").css("height", bbb +"px") 
    }
    
    
  } 
  gMap(); 
  $(window).resize(gMap);
  
//ЦЕНТРИРОВАНИЕ ПО ВЫСОТЕ
  function gMapH(){ 
    var aH = $('.gallary').height();
    var bH = $(window).height();
    var cH = (bH-aH)/2;
    $(".gallary").css("top", cH +"px") 
    $(".gallary").css("bottom", cH +"px")
  } 
  gMapH(); 
  $(window).resize(gMapH);

//ЦЕНТРИРОВАНИЕ ПО ШИРИНЕ  
    function gMapW(){ 
    var aW = $('.gallary').width();
    var bW = $(window).width();
    var cW = (bW-aW)/2;
    $(".gallary").css("left", cW +"px") 
    $(".gallary").css("right", cW +"px")
  } 
  gMapW(); 
  $(window).resize(gMapW);
  
  stationM11(); 
  $(window).resize(stationM11); 
    function stationM11(){ 
      var a = $('#g11').height();
      var b = $(window).height();
      var c = (b-a)/2
      $("#g11").css("margin-top", c +"px") 
      $("#g11").css("margin-bottom", c +"px")
    } 
  stationM11(); 
  $(window).resize(stationM11); 
  
  
  

//ВЫСОТА ДЛЯ СКРИНА  
  function scrinH(){
    var windowH = $(window).height(); 
    $(".scrin, #line").css("height", windowH +"px") 
  } 
  scrinH(); 
  $(window).resize(scrinH); 
  
//ВЫСОТА ДЛЯ КАРТЫ СВГ  
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