const BURGERMENU = document.querySelector(".burger__menu");
const OVERLAYMENU = document.querySelector(".overlay_menu")

BURGERMENU.addEventListener("click", () => {
    BURGERMENU.classList.toggle("active");
    if (BURGERMENU.classList.contains('active')) {
        OVERLAYMENU.classList.remove('d-none')
    }
    else OVERLAYMENU.classList.add('d-none');
});
document.addEventListener('DOMContentLoaded',  () => {
    let swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        loop: true,
        speed: 2000,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                this.slides[1].classList.add("slide-scale");
            },
            slideChangeTransitionEnd: function () {
                this.slides[1].classList.remove("slide-scale");
            },
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,

            },
            992: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            430: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: false,
            },
        },
    });
    // patron Swiper
    let swiper2 = new Swiper('.swiper2', {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
