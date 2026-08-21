"use strict";

let predictions = [
    'prediction 1',
    'prediction 2',
    'prediction 3',
    'prediction 4',
    'prediction 5',
    'prediction 6',
    'prediction 7',
    'prediction 8',
    'prediction 9',
    'prediction 10'
]

let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');

let timerId;

function getRandomNum(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

function makeTimer() {
    timerId = setInterval(() => {
        let random = getRandomNum(1, predictions.length);
        timer.textContent = random;
    }, 100);
}

startBtn.addEventListener('click', function() {
    if(timerId) return;

    this.classList.remove('active');
    stopBtn.classList.add('active');

    makeTimer();
});

stopBtn.addEventListener('click', function() {
    this.classList.remove('active');
    clearInterval(timerId);

    text.textContent = predictions[timer.textContent - 1];
});
