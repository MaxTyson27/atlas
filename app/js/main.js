$(function () {
  $('.burger').on('click', function () {
    $(this).toggleClass('burger--active')
    $('.menu').toggleClass('menu--active');
    $('.header__phone').toggleClass('header__phone--active');
    $('.header__phone-icon').toggleClass('icon--active');
    $('.logo-icon').toggleClass('logo--active');
  })

  // $('.product-tabs__top-item').on('click', function (e) {
  //   e.preventDefault();
  //   $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
  //   $(this).addClass('product-tabs__top-item--active');

  //   $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  //   $($(this).attr('href')).addClass('product-tabs__content-item--active');

  // });


  $('.territory__tab-link').on('click', function (e) {
    e.preventDefault();
    $('.territory__tab-link').removeClass('territory__tab-link--active');
    $(this).addClass('territory__tab-link--active');

    $('.territory__tab-item').removeClass('territory__tab-item--active');
    $($(this).attr('href')).addClass('territory__tab-item--active')
  })


  $('.map__item').on('click', function (e) {
    e.preventDefault()
  })

  $('.map__item').mouseover(function () {
    $('.map__desc').css("opacity", "0").css("visibility", "hidden").css("z-index", "-5");
    $($(this).attr('href')).css("opacity", "1").css("visibility", "visible").css("z-index", "5");

  }).mouseout(function () {
    $('.map__desc').css("opacity", "0").css("visibility", "hidden").css("z-index", "-5");

  })
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 35,
    setWrapperSize: true,

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left",
    },
  });

});