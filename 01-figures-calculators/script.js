"use strict";

function getTriangleArea(side1, side2, side3) {
    let p = (side1 + side2 + side3) / 2;
    return (Math.sqrt(p * (p - side1) * (p - side2) * (p - side3))).toFixed(3);
}


let inputs = document.querySelectorAll('.inp');
let p = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let [inp1, inp2, inp3] = inputs;

    if (inp1.value === '' ||
        inp2.value === '' ||
        inp3.value === '') return;

    p.textContent = getTriangleArea(+inp1.value, +inp2.value, +inp3.value);
});