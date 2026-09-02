"use strict";

let texts = ['text1', 'text2', 'text3'];

function textSlider() {
    let slider = document.querySelector('#slider');
    let index = 0;

    
    let timer = setInterval(() => {
        slider.textContent = texts[index];
        index++;
        
        if(index >= texts.length) index = 0;
    }, (1000));
}
textSlider()