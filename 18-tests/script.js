"use strict";

let test = document.querySelector('#test');
let inputs = test.querySelectorAll('input');
let result = document.querySelector('#resBtn');

function checkAnswer(input) {
    if (input.value === input.dataset.answer) {
        input.classList.add('right');
        input.disabled = true;
    } else {
        input.classList.add('wrong');
        input.disabled = true;
    }
}

result.addEventListener('click', function() {
    for (let input of inputs) {
        checkAnswer(input);
    }
});