// Using jQuery

/* (function () {
    'use strict';
    
    $('#tabs > ul > li > a').click(function () {
        $('#tabs > ul > li > a').css({ backgroundColor: '#a2a2a2', color: '#cecece' });
        $(this).css({ backgroundColor: '#eaeaea', color: '#333' });

        const thisTab = $(this).attr('href'); 
        $('#tabs > div:visible').fadeOut(200, function () {
            $(thisTab).fadeIn(200);
        });
    });
})()

 */

// Using plain JavaScript
const tabs = document.querySelectorAll('#tabs > ul > li > a');

// for (let i = 0; i < tabs.length; i++){
//     tabs[i].addEventListener('click', selectTab);
// }

    tabs.forEach(tab => { 
        tab.addEventListener('click', selectTab);
    });

function selectTab(event) {
    event.preventDefault();

    // for (let i = 0; i < tabs.length; i++){
    //     tabs[i].removeAttribute('class');
    // }

    tabs.forEach(tab => { 
        tab.removeAttribute('class');
    });
    
    event.target.className = 'active';

    const thisTab = event.target.getAttribute('href');
    const thisContent = document.querySelector(thisTab);

    const oldContent = document.querySelector('.visible');
    oldContent.className = 'visuallyHidden';

    oldContent.addEventListener('transitionend', function () {
        oldContent.className = 'hidden';
        thisContent.className = 'visible visuallyHidden';

        setTimeout(function(){
            thisContent.classList.remove('visuallyHidden');
        }, 20);
     }, {capture: false, once: true, passive: false});

}