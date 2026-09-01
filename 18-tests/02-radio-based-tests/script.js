"use strict";

let questions = [
	{
		text: ' Question 1?',
		right: 0,
		variants: [
			'Variant 1',
			'Variant 2',
			'Variant 3'
		]
	},
	{
		text: ' Question 2?',
		right: 1,
		variants: [
			'Variant 1',
			'Variant 2',
			'Variant 3'
		]
	},
	{
		text: ' Question 3?',
		right: 2,
		variants: [
			'Variant 1',
			'Variant 2',
			'Variant 3'
		]
	},
];

let test = document.querySelector('#test');
let button = document.querySelector('#checkRes');

function createQuestions() {
    let radioGroup = 1;
    
    for (let question of questions) {
        let div = document.createElement('div');
        test.append(div);

        let p = document.createElement('p');
        p.textContent = question.text;
        div.append(p);
        
        for (let variant of question.variants) {
            let label = document.createElement('label');
            div.append(label);

            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = radioGroup;
            label.append(radio);
            label.append(variant);
        }
        radioGroup++;
    }
}
createQuestions();

function checkAnswer(radio, questionIndex, radioIndex) {
        if (questions[questionIndex].right === radioIndex) {
            radio.classList.add('right')
        } else {
            radio.classList.add('wrong')
        }
}


button.addEventListener('click', function() {
    let divs = test.querySelectorAll('div');
    
    divs.forEach((div, questionIndex) => {
        let radios = div.querySelectorAll('input');

        radios.forEach((radio, radioIndex) => {
            if(radio.checked) {
                checkAnswer(radio, questionIndex, radioIndex);
            }
        });
    })
});