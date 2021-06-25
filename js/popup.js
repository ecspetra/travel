$(document).ready(function () {
  PopUpHide();
});
function PopUpShow() {
  $("#order-popup").show();
}
function PopUpHide() {
  $("#order-popup").hide();
}
$(document).mouseup(function (e) {
  var container = $("#order-popup");
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});
