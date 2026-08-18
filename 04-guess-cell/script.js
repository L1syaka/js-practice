"use strict";

function getRandomCells() {

    let randomCells = [];

    while (randomCells.length < 10) {
        let randomNum = String(Math.floor(Math.random() * (100 + 1 - 1) + 1));

        if (!randomCells.includes(randomNum)) {
            randomCells.push(randomNum);
        }   
    }
    return randomCells;
}

let randomCells = getRandomCells();

let table = document.createElement('table');
document.body.append(table);

let cellCount = 1;
for (let i = 1; i <= 10; i++) {
    let tr = document.createElement('tr')

    for (let k = 1; k <= 10; k++) {
        let td = document.createElement('td');
        td.textContent = cellCount;
        td.dataset.cell = cellCount++;

        tr.append(td);
    }

    table.append(tr);
}

table.addEventListener('click', function(event) {
    let td = event.target.closest('td');
    
    if(!td) return;

    let cell = td.dataset.cell;

    if(td.classList.contains('correct') ||
       td.classList.contains('wrong')) return;
    
    if(randomCells.includes(cell)) {
        let index = randomCells.indexOf(cell);
        randomCells.splice(index, 1)
        td.classList.add('correct');
        console.log('yeah');
    } else {
        td.classList.add('wrong')
    }
});