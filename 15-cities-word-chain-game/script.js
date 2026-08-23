"use strict";

let field = document.querySelector('#field');
let message = document.querySelector('#message');

let cities = [];

function gameTurns(inputTarget) {
    let input = inputTarget.value;

    if (cities.length > 0) {
        let last = cities[cities.length - 1];
        let lastLetter = last[last.length - 1];

        if (cities.includes(input)) {
            message.textContent = 'This city already used!'
            return;
        }

        if (input[0].toLowerCase() === lastLetter.toLowerCase()) {
            message.textContent = `Last word: ${input}`
            cities.push(input)

        } else {
            message.textContent = `Incorrect city`;
        }
    } else {
        message.textContent = `First word: ${input}`
        cities.push(input)
        console.log(cities)
    }

    inputTarget.value = ''

}

field.addEventListener('keypress', function(event) {
    if(event.key !== 'Enter') return;

    gameTurns(this)
});