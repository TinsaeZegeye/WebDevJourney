// Plain JS

// (function () {
//     'use strict';
//     const subLinks = document.querySelectorAll('ul li ul');

//     function hideSubmenus() {
//         for (let i = 0; i < subLinks.length; i++){
//             subLinks[i].className = 'hide-menu';
//         }   
//     }
//     hideSubmenus();

//     const mainLinks = document.querySelectorAll('.menuLink');

// for (let i = 0; i < mainLinks.length; i++){
//     mainLinks[i].addEventListener('click', function (event) { 

//     event.preventDefault();
//     const thisMenu = this.parentNode.querySelector('ul');

//         if (thisMenu.classList.contains('hide-menu')) {
//             hideSubmenus();
//             thisMenu.className = 'show-menu';
//         } else {
//             thisMenu.className = 'hide-menu';
//         }
//     });
// }    
// })()

// jQuery

$('ul li ul').hide();
$('.menuLink').click(function () {
    const thisMenu = $(this).next('ul');
    $('ul li ul').not(thisMenu).hide();
    thisMenu.toggle();
})