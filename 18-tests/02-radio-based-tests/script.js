"use strict";

let answers = [0, 1, 2];

let test = document.querySelector('#test');
let questions = test.querySelectorAll('div')
let button = document.querySelector('#checkRes');

function checkAnswer(radio, questionIndex, radioIndex) {
        if (answers[questionIndex] === radioIndex) {
            radio.classList.add('right')
        } else {
            radio.classList.add('wrong')
        }
}


button.addEventListener('click', function() {
    questions.forEach((question, questionIndex) => {

       let radios = question.querySelectorAll('input');

        radios.forEach((radio, radioIndex) => {
            
            if(radio.checked) {
                checkAnswer(radio, questionIndex, radioIndex)
            }
        });
    });
});