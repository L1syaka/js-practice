"use strict";

function getSmallestCommonMultiple(num1, num2) {
    for (let i = 1; ; i++) {
        if ((num1 * i) % num2 === 0) {
            return (num1 * i);
        }
    }
}

let button = document.querySelector('button');
let input1 = document.querySelector('#inp1');
let input2 = document.querySelector('#inp2');
let p = document.querySelector('p');

button.addEventListener('click', () => {
    if (input1.value === '' || input2.value === '') return;
    if (+input1.value <= 0 || +input2.value <= 0) return;

    p.textContent = 'Smallest common multiple: ' + getSmallestCommonMultiple(+input1.value, +input2.value);
});