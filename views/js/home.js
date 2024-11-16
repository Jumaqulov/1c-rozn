let menu_btn = document.getElementById('menu_btn')
let menu = document.getElementById('menu')

menu_btn.addEventListener('click', function () {
    menu.classList.toggle('open')
    if (menu_btn.innerHTML.includes('ri-menu-line')) {
        menu_btn.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        menu_btn.innerHTML = '<i class="ri-menu-line"></i>';
    }
})

/* CAROUSEL */

$(document).ready(function () {
    $('.carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-prev"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow: '<button class="slick-next"><i class="ri-arrow-right-s-line"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});