let swiper1 = new Swiper(".swiper-slider-1", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  direction: 'ltr',
  keyboard: {
    enabled: true
  },

  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },

  breakpoints: {
    640: {
      slidesPerView: 1.25,

    },
    1024: {
      slidesPerView: 2,

    }
  }
});

let swiper2 = new Swiper(".swiper-slider-2", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  direction: 'rtl',
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },

  breakpoints: {
    640: {
      slidesPerView: 1.25,
    },
    1024: {
      slidesPerView: 2,
    }
  }
});
