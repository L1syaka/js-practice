"use strict";

function getSquare(num1, num2) {
    return num1 * num2;
}
function getPerimeter(num1, num2) {
    return 2 * (num1 + num2)
}

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let inputs = document.querySelectorAll('#input1, #input2')
let p = document.querySelector('p');
let select = document.querySelector('select');


select.addEventListener('change', () => {
    input1.value = '';
    input2.value = '';
});


inputs.forEach(inp => {
    inp.addEventListener('blur', function() {
        if (input1.value === '' || input2.value === '') return;
    
        if (select.value === 'square') {
            p.textContent = getSquare(+input1.value, +input2.value);
        } else {
            p.textContent = getPerimeter(+input1.value, +input2.value);
        }
    })
});

