"use strict";

// Navbar
const buttonNavbar = document.querySelectorAll('[data-btn-nav]'),
      navbar       = document.querySelector('[data-navbar]'),
      overlay      = document.querySelector('[data-overlay]');

for (const btn of buttonNavbar) {
    btn.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    })
}

//  sub-menu

const linkDrop = document.querySelector('[data-link-drop]'),
      subMenu  = document.querySelector('[data-sub-menu]');

linkDrop.addEventListener('click', (e) => {
    e.preventDefault( );
    subMenu.classList.toggle('active');
})


// ----  www.swiperjs.com JS   Testimonial


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});