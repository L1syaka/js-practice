"use strict";

let test = document.querySelector('#test');
let inputs = test.querySelectorAll('input');

function checkAnswer(input) {
    if (input.value === input.dataset.answer) {
        input.classList.add('right');
        input.disabled = true;
    } else {
        input.classList.add('wrong');
        input.disabled = true;
    }

    
}

inputs.forEach(input => {
    input.addEventListener('keypress', function(event) {
        if(event.key !== "Enter") return;

        checkAnswer(input);
    });
});