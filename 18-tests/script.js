"use strict";

let answers = [
    'answer 1',
    'answer 2',
    'answer 3'
];


let test = document.querySelector('#test');
let inputs = test.querySelectorAll('input');
let result = document.querySelector('#resBtn');

function checkAnswer(input, index) {
    if (answers[index] === input.value) {
        input.classList.add('right');
        input.disabled = true;
    } else {
        input.classList.add('wrong');
        input.disabled = true;
    }
}

result.addEventListener('click', function() {
    inputs.forEach((input, index) => checkAnswer(input, index))
});