$(document).ready(function () {
  var scroll = $(window).scrollTop();
  $(window).load(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 1000) {
      $(".header-section").addClass("mobile-header");
    } else {
      $(".header-section").removeClass("mobile-header");
    }
  });
  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 1000) {
      $(".header-section").addClass("mobile-header");
    } else {
      $(".header-section").removeClass("mobile-header");
    }
  });
});
