var swiper = new Swiper(".sec6Swiper", {
    slidesPerView: 2.3,
    spaceBetween: 50,
    freeMode: true,
    autoplay: false,
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    breakpoints: {

      320: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },

        480: {
            slidesPerView: 1.3
          },

        640: {
            slidesPerView: 1.7,
          },

        1024: {
          slidesPerView: 2.7,
        },
      },

});
