$(document).ready(function () {
  $(".wrapper").onepage_scroll({
    sectionContainer: ".section",
    easing: "ease",
    animationTime: 500,
    pagination: true,
    updateURL: false,
    beforeMove: function (index) {},
    afterMove: function (index) {
      if (index == 1) {
        $(".onepage-pagination").css("background-color", "rgba(white, 0.3)");
        $(".onepage-pagination").css("border-color", "white");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__logo").css(
          "background-image",
          'url("img/logo-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "white");
        $(".onepage-pagination a").attr(
          "style",
          "background: white !important"
        );
      }
      if (index == 2) {
        $(".onepage-pagination").css("background-color", "#171c1d");
        $(".onepage-pagination").css("border-color", "#171c1d");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__logo").css(
          "background-image",
          'url("img/logo-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "#16c7a9");
        $(".onepage-pagination a").attr(
          "style",
          "background: white !important"
        );
      }
      if (index == 3) {
        $(".onepage-pagination").css("background-color", "rgba(white, 0.3)");
        $(".onepage-pagination").css("border-color", "#16c7a9");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__logo").css(
          "background-image",
          'url("img/logo-dark-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "#16c7a9");
        $(".onepage-pagination a").attr(
          "style",
          "background: #16c7a9 !important"
        );
      }
      if (index == 4) {
        $(".onepage-pagination").css("background-color", "#16c7a9");
        $(".onepage-pagination").css("border-color", "white");
        $(".side-contacts__logo").css("opacity", "0");
        $(".side-contacts__logo").css(
          "background-image",
          'url("img/logo-dark-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "white");
        $(".onepage-pagination a").attr(
          "style",
          "background: white !important"
        );
      }
    },
    loop: false,
    keyboard: true,
    responsiveFallback: 1001,
    direction: "vertical",
  });
});
