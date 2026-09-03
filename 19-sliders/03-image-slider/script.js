"use strict";

let slider = document.querySelector('#slider');

let images = ['1.jpg', '2.jpg', '3.jpg'];

function imgSliderTimer() {
    let index = 0;
    slider.src = `images/${images[index++]}`;

    setInterval(() => {
        slider.src = `images/${images[index++]}`;
        if (index >= images.length) index = 0;
    }, 1000);
}
imgSliderTimer();