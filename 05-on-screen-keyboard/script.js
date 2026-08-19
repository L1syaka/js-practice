"use strict";


let keyboard = (function createKeyboard() {
    let keyboardArr = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    let keyboardContainer = document.createElement('div');
    let table = document.createElement('table');
    let capslockButton = document.createElement('td');

    capslockButton.dataset.key = 'capslock';
    capslockButton.colSpan = 3;
    table.classList.add('on-screen-keyboard');
    keyboardContainer.classList.add('keyboard-container', 'hidden');

    capslockButton.textContent = 'CapsLock'

    for (let keysRow of keyboardArr) {
        let tr = document.createElement('tr');
        
        for (let key of keysRow) {
            let td = document.createElement('td');
            td.textContent = key;

            tr.append(td);
        }
        table.append(tr);
    }

    let lastRow = table.lastElementChild;
    lastRow.append(capslockButton);
  
    document.body.append(keyboardContainer);
    keyboardContainer.append(table);

    return keyboardContainer;
})();


function showKeyboard(targetInput) {
    let capsFlag = false;
    
    keyboard.classList.toggle('hidden')

    document.addEventListener('click', function keyboardClick(event) {
        if(event.target === targetInput) return;

        let targetKeyboard = event.target.closest('.on-screen-keyboard');

        if(!targetKeyboard) {
            keyboard.classList.toggle('hidden');
            document.removeEventListener('click', keyboardClick);
            return;
        };
        
        if(event.target.dataset.key === 'capslock') {
            event.target.classList.toggle('active');
            capsFlag = !capsFlag;
            return;
        }
        
        let targetKey = event.target.closest('td');

        if(!targetKey) return;

        targetInput.focus();


        if(capsFlag) {
            targetInput.value += targetKey.textContent.toUpperCase();
        } else {
            targetInput.value += targetKey.textContent;
        }
    });
}


let input = document.querySelector('#main-input');

input.addEventListener('focus', function() {
    if(!keyboard.classList.contains('hidden')) return;

    showKeyboard(this);
});

