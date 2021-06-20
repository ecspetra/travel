$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    responsiveWidth: 700,
    licenseKey: null,
    anchors: ["home", "about-us", "contact"],
    parallax: true,
    continuousVertical: true,
    onLeave: function (origin, destination, direction) {
      if (destination.index == 0) {
        $("#fp-nav").css("background-color", "rgba(white, 0.3)");
        $(".side-contacts__logo").css("opacity", "0");
        $(".side-contacts__icons__item a").css("color", "white");
      }
      if (destination.index == 1) {
        $("#fp-nav").css("background-color", "#171c1d");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__icons__item a").css("color", "#16c7a9");
      }
      if (destination.index == 2) {
        $("#fp-nav").css("background-color", "#16c7a9");
        $(".side-contacts__logo").css("opacity", "1");
        $(".side-contacts__icons__item a").css("color", "white");
      }
    },
  });
});
