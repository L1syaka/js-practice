"use strict";

function getNumberDivisors(num) {
    let divisorsArr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisorsArr.push(i);
        }
    }
    return divisorsArr;
}

let button = document.querySelector('button');
let input = document.querySelector('input');
let p = document.querySelector('p');

button.addEventListener('click', () => {
    p.textContent = 'Divisors: ' + getNumberDivisors(+input.value).join(', ');
});