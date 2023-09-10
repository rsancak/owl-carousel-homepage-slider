$(document).ready(function () {
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    dots: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: false
      },
      768: {
        autoWidth: true
      }
    }
  });
  checkClasses();
  owl.on('translated.owl.carousel', function () {
    checkClasses();
  });
  function checkClasses() {
    $('.owl-stage .owl-item').removeClass('first');
    $('.owl-stage .owl-item.active').each(function (index) {
      if (index === 0) {
        $(this).addClass('first');
      }
    });
  }
  $(".owl-carousel .owl-item").click(function () {
    $(".owl-carousel .owl-item").not($(this)).removeClass("first");
    $(this).toggleClass("first");
  });
  $(".next-nav").click(function () {
    owl.trigger('next.owl.carousel');
  });
  $(".prev-nav").click(function () {
    owl.trigger('prev.owl.carousel');
  });
});