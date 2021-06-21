$(document).ready(function () {
  const prevArrow = `<div class="prev"></div>`;
  const nextArrow = `<div class="next"></div>`;
  $(".hero-slider").slick({
    prevArrow,
    nextArrow,
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    dots: false,
    arrows: true,
    focusOnSelect: true,
  });
});
