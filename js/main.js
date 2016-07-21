(function ($) {
//NAV
$('.menuBtn').on('click', function(){
  $('html').toggleClass('js-click-menuBtn');
});
$('.nav__link').on('click', function(){
  $('html').removeClass('js-click-menuBtn');
});

//BTN PHOTO

$('.dot__btn--p11, .dot__btn--p12 .dot__btn--p13,  .dot__btn--p14').on('click', function(){
  $('html').toggleClass('js-click-dot__btn--photo');
});

$('.dot__btn--p11').on('click', function(){
  $(".photo__image_photo").attr("src", "./img/1ShamShuiPo/1.jpg");
  $('.photo').css('left', '-27%');
});

$('.dot__btn--p12').on('click', function(){
  $(".photo__image_photo").attr("src", "./img/1ShamShuiPo/2.jpg");
});








//BTN STATION
  $('.dot__btn--shamShuiPo, .dot__btn--mongKok, .dot__btn--tsimShaTsui, .dot__btn--central').on('click', function(){
    $('html').toggleClass('js-click-dot__btn--station');
});

  $('.btn--map').on('click', function(){
    $('html').toggleClass('js-click-btn--map');
});


//$('.popUp').on('click', function(){
//  $('html').removeClass('js-click-dot__btn');
//  $('html').removeClass('js-click-btn--map');
//});

$('.btn--back').on('click', function(){
  if ($('html').hasClass('js-click-btn--map')) {
    $('html').removeClass('js-click-btn--map');
  } else {
    $('html').removeClass('js-click-dot__btn--station');
    $('html').removeClass('js-click-dot__btn--photo');

  }
});

$('.dot__btn--shamShuiPo').on('click', function(){
  $(".gallery__image_photo").attr("src", "./img/1ShamShuiPo/main.jpg");
  $(".gallery__map").attr("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.212577074294!2d114.16203600000001!3d22.330725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x754236ed67265786!2sSham+Shui+Po+Station!5e0!3m2!1sru!2sus!4v1468716809754");
  $(".gallery__image_name").text('Sham Shui Po');
  $(".gallery__description").text('Если вы приехали только за стрит-фото, то это первое место, в котором вы должны побывать Отличный фон из рыночной суеты и происшествия на обочине, которые разыгрываются для вас.');
});

$('.dot__btn--mongKok').on('click', function(){
  $(".gallery__image_photo").attr("src", "./img/2MongKok/main.jpg");
  $(".gallery__map").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.909637916827!2d114.16823878884321!3d22.31925695390339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c7c24ee693%3A0x9546f62aa20a2278!2sMong+Kok+Station!5e0!3m2!1sru!2s!4v1469003773391");
  $(".gallery__image_name").text('Mong Kok');
  $(".gallery__description").text('Самое густонаселённое место в мире Стоит пройти за торговый центр и вы увидите несколько отличных улиц для Стрита Улицы заполнены рыночными лотками и множество других эпизодов из жизни ');
});

$('.dot__btn--tsimShaTsui').on('click', function(){
  $(".gallery__image_photo").attr("src", "./img/3TsimShaTsui/main.jpg");
  $(".gallery__map").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4656063932525!2d114.17304530739784!3d22.298224179163217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400edf4d4d36b%3A0x35c1ce833432319d!2sTsim+Sha+Tsui+Station!5e0!3m2!1sru!2s!4v1469004007284");
  $(".gallery__image_name").text('Tsim Sha Tsui');
  $(".gallery__description").text('Так же известно как TST Каждый надёт там что то для себя Шопинг, Красивые места для стрита, странные строения и роскошные отели Центр туризма Можно пройти в направление Востока, что бы увидеть потрясающие места для стрита');
});

$('.dot__btn--central').on('click', function(){
  $(".gallery__image_photo").attr("src", "./img/4Central/main.jpg");
  $(".gallery__map").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9145172265803!2d114.1573625175801!3d22.28122774084368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404006490dfd0d3%3A0xb391468c812fc8a8!2sCentral+Station!5e0!3m2!1sru!2s!4v1469004121916");
  $(".gallery__image_name").text('Central');
  $(".gallery__description").text('Сперва мы начнём с того места которое считается Центном всего интересного в Гонконге, потому то оно называется Central');
});


//ЦЕНТРИРОВАНИЕ ПО ВЫСОТЕ
$('.dot__btn--shamShuiPo, .dot__btn--mongKok, .dot__btn--tsimShaTsui, .dot__btn--central').on('click', function(){
  function gMapH(){
    var aH = $('.gallery').height();
    var bH = $(window).height();
    var cH = (bH-aH)/2;
    $(".popUp").css("padding-top", cH +"px");
    $(".popUp").css("padding-bottom", cH +"px");
  }
  gMapH();
  $(window).resize(gMapH);
});

$('.dot__btn--p11, .dot__btn--p12 .dot__btn--p13,  .dot__btn--p14').on('click', function(){
  function pMapH(){
    var aH = $('.photo').height();
    var bH = $(window).height();
    var cH = (bH-aH)/2;
    $(".popUp").css("padding-top", cH +"px");
    $(".popUp").css("padding-bottom", cH +"px");
  }
  pMapH();
  $(window).resize(pMapH);
});


//ВЫСОТА ДЛЯ СКРИНА
  function scrinH(){
    var windowH = $(window).height();
    $(".hello, .info, .line, .radGrad, .dot__btn_target").css("height", windowH);
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


function stationTarget(){
  var a = $(window).height();
  var b = a/2;
  var c = $(".dot__btn").height()/2;
  var d = (b+c)*-1;
  $(".dot__btn_target").css("top", d +"px");
}
stationTarget();
$(window).resize(stationTarget);





$('a[href^="#"]').click(function () {
    a = $(this).attr("href");
    b = $(a).offset().top;

    $('html').animate( { scrollTop: b }, 100 );
});

})(jQuery);
