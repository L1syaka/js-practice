"use strict";

let answers = [
    'answer 1',
    'answer 2',
    'answer 3'
];

let questions = [
    'question 1',
    'question 2',
    'question 3'
];

let test = document.querySelector('#test');
let result = document.querySelector('#resBtn');

function checkAnswer(input, index) {
    if (answers[index] === input.value) {
        input.classList.add('right');
        input.disabled = true;
    } else {
        input.classList.add('wrong');
        input.disabled = true;
    }
}

;(function createQuestions() {
    for (let question of questions) {
        let div = document.createElement('div');

        let p = document.createElement('p');
        p.textContent = question; 
        div.append(p);

        let input = document.createElement('input');
        div.append(input);

        test.append(div);
    }
})();

result.addEventListener('click', function() {
    let inputs = test.querySelectorAll('input');
    inputs.forEach((input, index) => checkAnswer(input, index))
});