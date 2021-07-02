PopUpHide();
var viewportWidth = $(window).width();
function PopUpShow() {
  $("#order-popup").show();

  if (viewportWidth >= 1001) {
    $("body").addClass("disabled-onepage-scroll");
  }
}
function PopUpHide() {
  $("#order-popup").hide();

  if (viewportWidth >= 1001) {
    $("body").removeClass("disabled-onepage-scroll");
  }
}
$(document).mouseup(function (e) {
  var container = $("#order-popup");
  if (container.has(e.target).length === 0) {
    container.hide();
    if (viewportWidth >= 1001) {
      $("body").removeClass("disabled-onepage-scroll");
    }
  }
});
