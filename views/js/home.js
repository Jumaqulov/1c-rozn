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
                    dots: true,
                    arrows: false,
                    sweapble: true,
                    swipe: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    sweapble: true,
                    swipe: true,
                }
            }
        ]
    });
});

// Toogle answer for question

function toggleAnswer(questionId, answerId) {
    const question = document.getElementById(questionId);
    const answer = document.getElementById(answerId);

    question.addEventListener('click', () => {
        const icon = question.querySelector('i');
        icon.classList.toggle('ri-arrow-down-s-line');
        icon.classList.toggle('ri-arrow-up-s-line');
        answer.classList.toggle('d-block');
    });
}

toggleAnswer('questions1', 'answer1');
toggleAnswer('questions2', 'answer2');
toggleAnswer('questions3', 'answer3');
toggleAnswer('questions4', 'answer4');
toggleAnswer('questions5', 'answer5');
toggleAnswer('questions6', 'answer6');