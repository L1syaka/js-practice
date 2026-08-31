"use strict";

let test = document.querySelector('#test');
let radios = test.querySelectorAll('input');

function checkAnswer(radio) {
    console.log(radio.g);
    if (radio.hasAttribute('data-right')) {
        radio.classList.add('right')
    } else {
        radio.classList.add('wrong')
    }
}

for (let radio of radios) {
    radio.addEventListener('click', function() {
        checkAnswer(radio);
    });
}