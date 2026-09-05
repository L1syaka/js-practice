"use strict";

let colors = ['red', 'green', 'blue'];
let rows = 3;
let cols = 3;



function createTable() {
    let table = document.querySelector('#field');


    function isVictory(colors, cells, col) {
        let currentColor = col.classList[0];

        let res = cells.every(function(cell) {
            return cell.classList.contains(currentColor);
        });

        if (res) {
            alert('win');
        }
    }

    function getRandomElem(array) {
        let random = Math.floor(Math.random() * (array.length));
        return random;
    }

    function getNextElem(array, col) {
        let elementIndex = colors.findIndex((elem) => elem === col.classList[0]);
        let currentColor = col.classList[0];

        col.classList.remove(currentColor);

        if (elementIndex >= colors.length - 1) {
            return colors[0];
        }
        return colors[elementIndex + 1];
    }

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let col = document.createElement('td');
            let color = colors[getRandomElem(colors)];

            col.classList.add(color);

            col.addEventListener('click', function() {
                col.classList.add(getNextElem(colors, col));
                isVictory(colors, cells, col);
            });

            row.append(col);
        }

        table.append(row);
    }
    
    let cells = [...table.querySelectorAll('td')];
}

createTable()