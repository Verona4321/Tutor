let swiper1 = new Swiper(".swiper-slider", {
  centeredSlides: true,
  slidesPerView: 2,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  breakpoints: {
    640: {
      slidesPerView: 1.25
    },
    1024: {
      slidesPerView: 2
    }
  }
});
