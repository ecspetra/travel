$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    responsiveWidth: 700,
    licenseKey: null,
    anchors: ["home", "gallery", "about", "contacts"],
    parallax: true,
    continuousVertical: false,
    paddingTop: "0",
    paddingBottom: "0",
    onLeave: function (origin, destination, direction) {
      if (destination.index == 0) {
        $("#fp-nav").css("background-color", "rgba(white, 0.3)");
        $("#fp-nav").css("border-color", "white");
        $(".side-contacts__logo").css("opacity", "0");
        $(".side-contacts__logo").css(
          "background-image",
          'url("../img/logo-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "white");
        $("#fp-nav span").attr("style", "background: white !important");
      }
      if (destination.index == 1) {
        $("#fp-nav").css("background-color", "#171c1d");
        $("#fp-nav").css("border-color", "#171c1d");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__logo").css(
          "background-image",
          'url("../img/logo-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "#16c7a9");
        $("#fp-nav span").attr("style", "background: white !important");
      }
      if (destination.index == 2) {
        $("#fp-nav").css("background-color", "rgba(white, 0.3)");
        $("#fp-nav").css("border-color", "#16c7a9");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__logo").css(
          "background-image",
          'url("../img/logo-dark-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "#16c7a9");
        $("#fp-nav span").attr("style", "background: #16c7a9 !important");
      }
      if (destination.index == 3) {
        $("#fp-nav").css("background-color", "#16c7a9");
        $("#fp-nav").css("border-color", "white");
        $(".side-contacts__logo").css("opacity", "0");
        $(".side-contacts__logo").css(
          "background-image",
          'url("../img/logo-dark-trvl.svg")'
        );
        $(".side-contacts__icons__item a").css("color", "white");
        $("#fp-nav span").attr("style", "background: white !important");
      }
    },
  });
});
