"use strict";

let predictions = {
    1: {name: 'bad prediction 1', type: 'bad'},
    2: {name: 'bad prediction 2', type: 'bad'},
    3: {name: 'bad prediction 3', type: 'bad'},
    4: {name: 'good prediction 4', type: 'good'},
    5: {name: 'good prediction 5', type: 'good'},
    6: {name: 'bad prediction 6', type: 'bad'},
    7: {name: 'bad prediction 7', type: 'bad'},
    8: {name: 'good prediction 8', type: 'good'},
    9: {name: 'bad prediction 9', type: 'bad'},
    10: {name: 'good prediction 10', type: 'good'},
};

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
        let random = getRandomNum(1, Object.keys(predictions).length);
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

    let key = timer.textContent;

    if (timer.textContent === key) {
        if (predictions[key].type === 'good') {
            text.classList.add('good');
        } else {
            text.classList.add('bad');
        }
        text.textContent = predictions[key].name;
    }
});
