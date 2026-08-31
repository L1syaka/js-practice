"use strict";

let questions = {
	'question 1?': 'answer 1',
	'question 2?': 'answer 2',
	'question 3?': 'answer 3',
}

let test = document.querySelector('#test');
let result = document.querySelector('#resBtn');

function checkAnswer(input) {
    let question = input.parentElement.querySelector('p').textContent;

        if (input.value === questions[question]) {
            input.classList.add('right');
            input.disabled = true;
        } else {
            input.classList.add('wrong');
            input.disabled = true;
        }
}

;(function createQuestions() {
    for (let question in questions) {
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

    for (let input of inputs) {
        checkAnswer(input)
    }
});