"use strict";

function getCircumference(radius) {
    return (2 * Math.PI * radius).toFixed(2);
}
function getArea(radius) {
    return (Math.PI * radius ** 2).toFixed(2);
}

let input = document.querySelector('#inp');
let p = document.querySelector('p');
let select = document.querySelector('select');
let button = document.querySelector('button');

select.addEventListener('change', () => {
    input.value = '';
    p.textContent = ''
});


button.addEventListener('click', () => {
    let radius = input.value;

    if (radius === '') return;

    if (select.value === 'Circumference') {
        p.textContent = getCircumference(+radius);
    } else {
        p.textContent = getArea(+radius);
    }
});
