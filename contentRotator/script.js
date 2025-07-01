/* const myPara = document.getElementsByTagName('p');
let counter = 0;

for (let i = 0; i < myPara.length; i++) {
    myPara[i].style.display = 'none';
}

myPara[counter].style.display = 'block';

let timer = setInterval(changeContent, 5000);

function changeContent() {

    myPara[counter].style.display = 'none';

    counter++;
    if (counter == myPara.length) {
        counter = 0;
    }

    myPara[counter].style.display = 'block';
}

const theDiv = document.getElementById('quotes');
    theDiv.addEventListener('mouseover', function () { 
        clearInterval(timer);
    });
    theDiv.addEventListener('mouseout', function () { 
        timer = setInterval(changeContent, 5000);
    });


 */

// Using jQuery

(function() {
    'use strict';

    let counter = 1;

    function changeContent() {
        $(`#quotes p:nth-child(${counter})`).fadeIn(1500, function () {
            if ($(this).is('#quotes p:last-child')) {
                setTimeout(function () {
                    $(`#quotes p:nth-child(${counter})`).fadeOut(1500, function () {
                        counter = 1;
                        changeContent();
                    });
                }, 7000);
                
            }else {
                setTimeout(function () {
                    $(`#quotes p:nth-child(${counter})`).fadeOut(1500, function () {
                        counter++;
                        changeContent();
                    });
                }, 7000);
            }
        });
    }

    changeContent();
}())