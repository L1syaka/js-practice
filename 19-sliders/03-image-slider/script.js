"use strict";

let slider = document.querySelector('#slider');
let left = document.querySelector('#left');
let right = document.querySelector('#right');

let images = ['1.jpg', '2.jpg', '3.jpg'];
let index = 0;

function changeImage() {
    slider.src = `images/${images[index]}`
}
changeImage();

setInterval(() => {
    index++;

    if (index >= images.length) {
        index = 0
    };

    changeImage()
}, 1000);

left.addEventListener('click', function(event) {
    event.preventDefault();

    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    changeImage();
});

right.addEventListener('click', function(event) {
    event.preventDefault();
    
    index++;

    if (index >= images.length) {
        index = 0;
    }

    changeImage();
});