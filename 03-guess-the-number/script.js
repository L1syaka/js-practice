"use strict";

function getRandom() {
    let randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(randomNum);
    return randomNum;
}

let randomNum = getRandom();

let input = document.querySelector('input');
let p = document.querySelector('p');

input.addEventListener('blur', function() {
    let inp = +this.value;

    if (this.value === '') return;

    if(inp === randomNum) {
        p.textContent = 'Correct!';
    } else if (inp < randomNum) {
        p.textContent = 'Enter a larger number'
    } else {
        p.textContent = 'Enter a smaller number'
    }
});