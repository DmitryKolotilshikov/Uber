window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.list_item');
    const burger = document.querySelector('.burger');
    const body = document.body;
    let toggleOverflow = true;
     
    burger.addEventListener('click', () => {        
        if (toggleOverflow) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }              
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        toggleOverflow = !toggleOverflow;
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            body.style.overflow = 'visible';
            burger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
        })
    })
})