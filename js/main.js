(function ($) {

//BTN
  $('.dot__btn--shamShuiPo').on('click', function(){
    $('.main').toggleClass('clicked');
});
$('.gallery__btn--map').on('click', function(){
  $('.gallery__content').toggleClass('clickedMap');
});
//ЦЕНТРИРОВАНИЕ ПО ВЫСОТЕ
  function gMapH(){
    var aH = $('.gallery').height();
    var bH = $(window).height();
    var cH = (bH-aH)/2;
    $(".popUp").css("padding-top", cH +"px");
    $(".popUp").css("padding-bottom", cH +"px");
  }
  gMapH();
  $(window).resize(gMapH);

//ЦЕНТРИРОВАНИЕ ПО ШИРИНЕ
//  function gMapW(){
//    var aW = $('.gallery').width();
//    var bW = $(window).width();
//    var cW = (bW-aW)/2;
//    $(".gallery").css("left", cW +"px");
//    $(".gallery").css("right", cW +"px");
//  }
//  gMapW();
//  $(window).resize(gMapW);


//ВЫСОТА ДЛЯ СКРИНА
  function scrinH(){
    var windowH = $(window).height();
    $(".hello, .info, .line, .radGrad").css("height", windowH);
  }
  scrinH();
  $(window).resize(scrinH);

//ВЫСОТА ДЛЯ КАРТЫ СВГ
  function conentH(){
    var multiplier;
    if($(window).width() < 385) {
      multiplier = 7.673;
    } else {
      multiplier = 5.294;
    }

    var mapH = $(window).width() * multiplier;
    $(".main").css("height", mapH +"px");
  }
  conentH();
  $(window).resize(conentH);

//ВЫСОТА ТЕНИ В НАЧАЛЕ КАРТЫ
  function shadowH(){
    var multiplier;
    if($(window).width() < 384) {
      multiplier = 0.071176;
    } else {
      multiplier = 0.080692;
    }
    var mapShadowH = $(".main").height() * multiplier;
    $(".shadowMap").css("height", mapShadowH +"px");
  }
  shadowH();
  $(window).resize(shadowH);

})(jQuery);
