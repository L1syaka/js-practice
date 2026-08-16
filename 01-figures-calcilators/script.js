"use strict";

function getSquare(num1, num2) {
    return num1 * num2;
}
function getPerimeter(num1, num2) {
    return 2 * (num1 + num2)
}

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let p = document.querySelector('p');
let select = document.querySelector('select');
let button = document.querySelector('button');

select.addEventListener('change', () => {
    input1.value = '';
    input2.value = '';
    p.textContent = ''
});


button.addEventListener('click', () => {
    let a = input1.value;
    let b = input2.value;

    if (a === '' || b === '') return;

    if (select.value === 'square') {
        p.textContent = getSquare(+a, +b);
    } else {
        p.textContent = getPerimeter(+a, +b);
    }
});