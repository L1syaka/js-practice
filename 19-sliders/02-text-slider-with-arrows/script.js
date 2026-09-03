"use strict";

let texts = ['text1', 'text2', 'text3'];

let left = document.querySelector('#left');
let right = document.querySelector('#right');
let slider = document.querySelector('#slider');

let i = 0;

function changeTextOnSlider() {
    console.log(i);
    slider.textContent = texts[i];    
}
changeTextOnSlider();



left.addEventListener('click', function(event) {
    event.preventDefault();

    if(i > 0) {
        i--;
        changeTextOnSlider();
    }
});

right.addEventListener('click', function(event) {
    event.preventDefault();
    
    if(i < texts.length - 1) {
        i++;
        changeTextOnSlider();
    }
});
