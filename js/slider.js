$(document).ready(function () {
  const prevArrow = `<div class="prev"></div>`;
  const nextArrow = `<div class="next"></div>`;
  $(".hero-slider").slick({
    prevArrow,
    nextArrow,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    infinite: true,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    centerMode: false,
    dotsClass: "hero-dots",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 860,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: false,
          dots: true,
        },
      },
      {
        breakpoint: 490,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: false,
          dots: true,
        },
      },
    ],
  });
});
