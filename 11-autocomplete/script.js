"use strict";

const countries = [
  "Australia",
  "Argentina",
  "Brazil",
  "Canada",
  "China",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Saudi Arabia",
  "South Africa",
  "South Korea",
  "Spain",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States"
];

let input = document.querySelector('#elem');
let list = document.querySelector('#list');


function findSuggestion(inputTarget) {
    let inputUpperCase = inputTarget.value;
    
    list.textContent = '';
    if (inputUpperCase === '') return;

    let suggestionArr = countries.filter(function(elem) {
        return elem.startsWith(inputUpperCase[0].toUpperCase() + inputUpperCase.slice(1));
    });
    
    function showSuggestions(inputTarget, suggestionArr) {

        for (let countrie of suggestionArr) {
            let li = document.createElement('li');
            li.textContent = countrie;
            list.append(li);
        }

        list.addEventListener('click', function(event) {
            let li = event.target.closest('li');

            if(!li) return;

            inputTarget.value = li.textContent;
            list.textContent = '';
        });
    }
    
    showSuggestions(inputTarget, suggestionArr)
}

input.addEventListener('input', function(event) {
    findSuggestion(this);
});