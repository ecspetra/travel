$(document).ready(function () {
  PopUpHide();
});
function PopUpShow() {
  $("#order-popup").show();
  $("body").addClass("disabled-onepage-scroll");
}
function PopUpHide() {
  $("#order-popup").hide();
  $("body").removeClass("disabled-onepage-scroll");
}
$(document).mouseup(function (e) {
  var container = $("#order-popup");
  if (container.has(e.target).length === 0) {
    container.hide();
    $("body").removeClass("disabled-onepage-scroll");
  }
});
