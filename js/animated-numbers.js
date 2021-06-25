$(document).ready(function () {
  $("#number-1").animateNumber(
    {
      number: 1000,
      color: "green",
      easing: "easeInQuad",
      numberStep: function (now, tween) {
        var floored_number = Math.floor(now),
          target = $(tween.elem);
        target.text(floored_number + "+");
      },
    },
    1800
  );
  $("#number-2").animateNumber(
    {
      number: 100,
      color: "green",
      easing: "easeInQuad",
      numberStep: function (now, tween) {
        var floored_number = Math.floor(now),
          target = $(tween.elem);
        target.text(floored_number + "+");
      },
    },
    1800
  );
  $("#number-3").animateNumber(
    {
      number: 30,
      color: "green",
      easing: "easeInQuad",
      numberStep: function (now, tween) {
        var floored_number = Math.floor(now),
          target = $(tween.elem);
        target.text(floored_number + "+");
      },
    },
    1800
  );
  $("#number-4").animateNumber(
    {
      number: 20,
      color: "green",
      easing: "easeInQuad",
      numberStep: function (now, tween) {
        var floored_number = Math.floor(now),
          target = $(tween.elem);
        target.text(floored_number + "+");
      },
    },
    1800
  );
});
