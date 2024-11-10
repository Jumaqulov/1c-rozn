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