"use strict";

function getRandomCells() {
    let randomCells = [];
    while (randomCells.length < 10) {
        let randomNum = String(Math.floor(Math.random() * 100) + 1);

        if (!randomCells.includes(randomNum)) {
            randomCells.push(randomNum);
        }   
    }
    return randomCells;
}

function timer() {
    if(timerId) return;

    timerId = setInterval(function() {
        time--; 
        gameTimer.textContent = `Time left: ${time}`;

        if(time <= 0) {
            gameTimer.textContent = 'You loose';
            gameTimer.classList.remove('timer');
            gameTimer.classList.add('red');
            gameFlag = true;
            clearInterval(timerId);
            clicks.textContent = `Total Clicks: ${totalClicks}`
        } else if (randomCells.length === 0) {
            gameTimer.textContent = 'You win!'
            gameTimer.classList.remove('timer');
            gameTimer.classList.add('green');
            gameFlag = true;
            clearInterval(timerId);
            clicks.textContent = `Total Clicks: ${totalClicks}`
        }
    }, 1000);
}

let gameTimer = document.querySelector('#game-timer')
let cellInfo = document.querySelector('#cell-count');
let clicks = document.querySelector('#total-clicks')
let cellsLeft = cellInfo.querySelector('#left');
let cellsTotal = cellInfo.querySelector('#total');
let table = document.createElement('table');
let container = document.querySelector('#container');
container.append(table);


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

let randomCells = getRandomCells();
let time = 40;
let totalClicks = 0;
let timerId = null;
let gameFlag = null;


gameTimer.textContent = `Time left: ${time}`;
cellsLeft.textContent = `${randomCells.length} /`;
cellsTotal.textContent = randomCells.length;
gameTimer.classList.add('timer');
cellsLeft.classList.add('green');
cellsTotal.classList.add('red');
clicks.classList.add('blue');

table.addEventListener('click', function (event) {
    let td = event.target.closest('td');
    
    if(gameFlag) return;
    if(!td) return;
    
    let cell = td.dataset.cell;
    
    if(td.classList.contains('correct') ||
    td.classList.contains('wrong')) return;
    
    clicks.textContent = `Clicks: ${++totalClicks}`;
    timer();
    
    if(randomCells.includes(cell)) {
        let index = randomCells.indexOf(cell);
        randomCells.splice(index, 1)

        cellsLeft.textContent = `${randomCells.length} /`;

        td.classList.add('correct');
    } else {
        td.classList.add('wrong')
    }
});