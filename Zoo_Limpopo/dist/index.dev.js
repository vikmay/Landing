"use strict";

var BURGERMENU = document.querySelector(".burger__menu");
var OVERLAYMENU = document.querySelector(".overlay_menu");
BURGERMENU.addEventListener("click", function () {
  BURGERMENU.classList.toggle("active");

  if (BURGERMENU.classList.contains('active')) {
    OVERLAYMENU.classList.remove('d-none');
  } else OVERLAYMENU.classList.add('d-none');
});
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    loop: true,
    speed: 2000,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        this.slides[1].classList.add("slide-scale");
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        this.slides[1].classList.remove("slide-scale");
      }
    },
    breakpoints: {
      1400: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2,
        centeredSlides: false
      },
      430: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: false
      }
    }
  }); // patron Swiper

  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});