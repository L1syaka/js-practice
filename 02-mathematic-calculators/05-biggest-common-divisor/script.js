"use strict";

function getBiggestCommonDivisor(num1, num2) {
    let commonDivisorsArr = [];

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            commonDivisorsArr.push(i);
        }
    }
    
    return Math.max(...commonDivisorsArr);
}

let button = document.querySelector('button');
let input1 = document.querySelector('#inp1');
let input2 = document.querySelector('#inp2');
let p = document.querySelector('p');

button.addEventListener('click', () => {
    p.textContent = 'Biggest common divisor: ' + getNumberDivisors(+input1.value, +input2.value);
});