"use strict";

let test = document.querySelector('#test');
let radios = test.querySelectorAll('input');
let button = document.querySelector('#checkRes');

function checkAnswer(radio) {
    if (radio.hasAttribute('data-right')) {
        radio.classList.add('right')
    } else {
        radio.classList.add('wrong')
    }
}


button.addEventListener('click', function() {
    for (let radio of radios) {
            checkAnswer(radio);
    }
});