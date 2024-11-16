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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                    slidesToScroll: 2,
                    dots:true,
                    arrows:false,
                    sweapble:true,
                    swipe: true, 
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    arrows:false,
                    sweapble:true,
                    swipe: true, 
                }
            }
        ]
    });
});