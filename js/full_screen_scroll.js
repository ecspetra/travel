$(document).ready(function () {
  new fullpage("#fullpage", {
    navigation: true,
    responsiveWidth: 700,
    licenseKey: "YOUR_KEY_HERE",
    anchors: ["home", "about-us", "contact"],
    parallax: true,
    continuousVertical: true,
    onLeave: function (origin, destination, direction) {
      console.log("Leaving section" + origin.index);
    },
  });
});
