"use strict";

let field = document.querySelector('#field');
let message = document.querySelector('#message');
let mode = document.querySelector('#mode-select input:checked');

let cities = [];
let allCities = [
  "Kyiv",
  "Kharkiv",
  "Odesa",
  "Dnipro",
  "Donetsk",
  "Zaporizhzhia",
  "Lviv",
  "Kryvyi Rih",
  "Mykolaiv",
  "Sevastopol",
  "Mariupol",
  "Luhansk",
  "Vinnytsia",
  "Makiivka",
  "Simferopol",
  "Kherson",
  "Poltava",
  "Chernihiv",
  "Cherkasy",
  "Zhytomyr",
];

function citiesCheck(target) {
    if (cities.length > 0) {
        let last = cities[cities.length - 1];
        let lastLetter = last[last.length - 1];

        if (cities.includes(target)) {
            message.textContent = 'This city already used!'
            return false;
        }

        if (target[0].toLowerCase() === lastLetter.toLowerCase()) {
            message.textContent = `Last word: ${target}`
            cities.push(target)
            return true;

        } else {
            message.textContent = `Incorrect city`;
            return false;
        }
    } else {
        message.textContent = `First word: ${target}`;
        cities.push(target);
        return true;
    }
}

function playerTurn(inputTarget) {
    let input = inputTarget.value[0].toUpperCase() + inputTarget.value.slice(1);
    
    if (mode.value === 'computer') {
        if (!allCities.includes(input)) {
            message.textContent = 'Computer doesnt have this city';
            return;
        }
        
        if (citiesCheck(input)) {
            computerTurn();
            console.log(cities)
        } else {
            return;
        }
    } else {
        citiesCheck(input)
    }

    inputTarget.value = '';
}

function computerTurn() {
    let last = cities[cities.length - 1];
    let lastLetter = last[last.length - 1];

    for (let city of allCities) {
        if (city[0].toLowerCase() === lastLetter && !cities.includes(city)) {
            citiesCheck(city);
            return;
        }
    }

    message.textContent = 'No more available cities'
}

field.addEventListener('keypress', function(event) {
    if(event.key !== 'Enter') return;
    if(field.value === '') return;
    playerTurn(this)
});