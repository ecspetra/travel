$(document).ready(function () {
  new fullpage("#fullpage", {
    navigation: true,
    responsiveWidth: 700,
    licenseKey: "YOUR_KEY_HERE",
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

      // if (destination.index == 0 || destination.index == 2) {
      //   $("#fp-nav").css("background-color", "rgba(white, 0.3)");
      //   $(".side-contacts__logo").css("visibility", "hidden");
      // } else {
      //   $("#fp-nav").css("background-color", "black");
      //   $(".side-contacts__logo").css("visibility", "visible");
      // }
    },
  });
});
//using index
// if (index == 1) {
//   $("#fp-nav").css("background-color", "black");
// }
// if (index == 2) {
//   $("#fp-nav").css("background-color", "blue");
// }
// if (index == 3) {
//   $("#fp-nav").css("background-color", "red");
// }
