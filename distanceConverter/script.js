(function () {
    'use strict';

    const result = document.getElementById('answerspace');
    const chanHeading = document.getElementById('heading');
    const chanPara = document.getElementById('para');
    let pressedKey = 'm'; // default to miles

    document.addEventListener('keydown', function (event) {
        const activeElement = document.activeElement;
        const isInput = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';

        if (isInput) return;

        pressedKey = event.key;
        if (pressedKey === 'K' || pressedKey === 'k') {
            chanHeading.innerHTML = 'Kilometer to Miles Convertor';
            chanPara.innerHTML = 'Type the number of kilometers to convert and then press the button to convert it into miles';
        } else if (pressedKey === 'M' || pressedKey === 'm') {
            chanHeading.innerHTML = 'Miles to Kilometer Convertor';
            chanPara.innerHTML = 'Type the number of miles to convert and then press the button to convert it into kilometer';
        }
    });

    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('inp').value);

        if (distance < 0 || isNaN(distance)) {
            result.innerHTML = 'Distance must be a positive number!';
        } else {
            let answer;
            if (pressedKey === 'K' || pressedKey === 'k') {
                answer = (distance / 1.609344).toFixed(3);
                result.innerHTML = `${distance} kilometers is ${answer} miles.`;
            } else {
                answer = (distance * 1.609344).toFixed(3);
                result.innerHTML = `${distance} miles is ${answer} kilometers.`;
            }
        }
    });

    document.getElementById('convert').addEventListener('reset', function (event) {
        result.innerHTML = 'The answer goes over here.';
        document.getElementById('inp').value = '';
    });
})();
