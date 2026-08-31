"use strict";

let questions = [
	{
		text:  'Question 1?',
		right: 'Answer 1',
	},
	{
		text:  'Question 2?',
		right: 'Answer 2',
	},
	{
		text:  'Question 3?',
		right: 'Answer 3',
	},
];

let test = document.querySelector('#test');
let result = document.querySelector('#resBtn');

function checkAnswer(input, index) {
    let question = questions[index];

        if (input.value === question.right) {
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
        p.textContent = question.text; 
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