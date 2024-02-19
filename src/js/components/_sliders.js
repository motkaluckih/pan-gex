// * ====================================================================================================
// * Owl Carousel 2
// * ====================================================================================================
/*
 * Документация: https://owlcarousel2.github.io/OwlCarousel2/
 * Установка: npm install --save owl.carousel
 */
// Подключение библиотеки
import owlCarousel from "owl.carousel";
// Подключение стилей
import "owl.carousel/dist/assets/owl.carousel.css";

$(document).ready(function () {
  $(".services-preview__slider .slider-wrapper").owlCarousel({
    items: 1,
    loop: false,
    dots: true,
    nav:true,
    responsive: {
      768: {
        margin: 35,
      },
      992: {
        margin: 50,
      },
      1024: {
        margin: 50,
      },
    },

    navContainer: ".services-preview__btn-dom",
    dotsContainer: ".services-preview__dots-inner",
    navText: [
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.00012207" width="48" height="30" rx="15" fill="#1A2141"/>
      <path d="M26.5 10.0001L21.5 15.0001L26.5 20.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="30.0001" width="48" height="30" rx="15" transform="rotate(180 48 30.0001)" fill="#1A2141"/>
      <path d="M21.5 20.0001L26.5 15.0001L21.5 10.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    ],
    
  });

  $(".site-pages__slider .slider-wrapper").owlCarousel({
    items: 1,
    autoWidth: true,
    loop: false,
    dots: false,
    margin: 10,
    nav: true,
    responsive: {
      // 768: { margin: 35 },
      // 992: { margin: 50 },
      // 1024: { margin: 50 },
    },
    navText: [
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.00012207" width="48" height="30" rx="15" fill="#1A2141"/>
      <path d="M26.5 10.0001L21.5 15.0001L26.5 20.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="30.0001" width="48" height="30" rx="15" transform="rotate(180 48 30.0001)" fill="#1A2141"/>
      <path d="M21.5 20.0001L26.5 15.0001L21.5 10.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    ],

  });

  $(".description-gbo__item .slider-wrapper").owlCarousel({
    // items: 2,
    loop: true,
    dots: true,
    nav:true,
    margin: 35,
    itemWidth: 'auto',

    pullDrag: true,
    responsive: {
      325: {
        items:1,
      },
      768: {
        items:1,
      },
      992: {
        items:1,
        autoWidth: true,
        itemWidth: 'auto',
      },
      1140: {
        items:2,
        margin: 100,
        autoWidth: true,
      },
    },

    navContainer: ".gbo-btn-dom",
    dotsContainer: ".gbo-dots-inner",
    navText: [
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.00012207" width="48" height="30" rx="15" fill="#1A2141"/>
      <path d="M26.5 10.0001L21.5 15.0001L26.5 20.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="30.0001" width="48" height="30" rx="15" transform="rotate(180 48 30.0001)" fill="#1A2141"/>
      <path d="M21.5 20.0001L26.5 15.0001L21.5 10.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    ],
    
  });


  $(".news__item .slider-wrapper").owlCarousel({
    loop: false,
    dots: true,
    nav:true,
    margin: 35,
    itemWidth: 'auto',
    
    pullDrag: true,
    responsive: {
      325: {
        items:1,
      },
      768: {
        items:1,
      },
      992: {
        items:1,

      },
      1140: {
        items:2,
        margin: 100,

      },
    },
    navContainer: ".news-btn-dom",
    dotsContainer: ".news-dots-inner",
    navText: [
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.00012207" width="48" height="30" rx="15" fill="#1A2141"/>
      <path d="M26.5 10.0001L21.5 15.0001L26.5 20.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="48" y="30.0001" width="48" height="30" rx="15" transform="rotate(180 48 30.0001)" fill="#1A2141"/>
      <path d="M21.5 20.0001L26.5 15.0001L21.5 10.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    ],
    
  });

  $(".services-preview-slider .slider-wrapper").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 5000,

    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],
    responsive: {
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".page-links__slider").owlCarousel({
    items: 1,
    autoWidth: true,
    loop: false,
    dots: false,
    margin: 25,
    nav: true,
    navText: [
      `<span><svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg></span>`,
      `<span><svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg></span>`,
    ],
    responsive: {
      768: {
        margin: 35,
      },
      992: {
        margin: 50,
      },
      1024: {
        margin: 50,
      },
    },
  });

  $(".advantages-slider .slider-wrapper").owlCarousel({
    items: 1,
    // autoWidth: true,
    loop: true,
    dots: true,
    margin: 50,
    nav: true,
    dotsContainer: ".advantages-slider .slider-dots__inner",
    navContainer: ".advantages-slider .slider-nav__inner",
    navText: [
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
      `<svg class="icon"><use xlink:href="img/sprite.svg#arrow"></use></svg>`,
    ],
  });

  // $(".offers-slider .slider-wrapper").owlCarousel({
  //   items: 1,
  //   loop: true,
  //   dots: false,
  //   nav: false,
  //   margin: 24,
  // });

  function offersCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $(".offers-slider .slider-wrapper");
    if (checkWidth >= 768) {
      owlPost.addClass("owl-carousel");
      owlPost.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        margin: 24,
      });
    } else if (checkWidth < 768) {
      if (typeof owlPost.data("owl.carousel") != "undefined") {
        owlPost.data("owl.carousel").destroy();
      }
      owlPost.removeClass("owl-carousel");
    }
  }

  offersCarousel();
  $(window).resize(offersCarousel);
});

// * ====================================================================================================
// * SwiperJS
// * ====================================================================================================
/*
 * Документация: https://swiperjs.com/swiper-api
 * Установка: npm install swiper
 * Сниппет (+swiper)
 */

// Подключение сразу всей библиотеки
// import Swiper from "swiper/bundle";
// Подключение по модулям
// import Swiper, { Navigation, Pagination } from "swiper";
// Подключение стилей
// import "swiper/css";

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// * ====================================================================================================
// * GlideJS
// * ====================================================================================================
/*
 * Документация: https://glidejs.com/docs/
 * Установка: npm install @glidejs/glide
 */

// Подключение сразу всей библиотеки
// import Glide from "@glidejs/glide";
// Подлкючение по модулям
// import Glide, { Controls, Breakpoints } from "@glidejs/glide/dist/glide.modular.esm";
// Подлкючение стилей
// import "@glidejs/glide/dist/css/glide.core.min.css";

// new Glide(".glide").mount();
