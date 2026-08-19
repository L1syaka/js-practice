"use strict";

function showOnScreenKeyboard(targetInput) {
    let keyboardArr = ['1234567890', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    let keyboardContainer = document.createElement('div');
    let closeButton = document.createElement('button');
    let table = document.createElement('table');
    
    table.classList.add('on-screen-keyboard');
    keyboardContainer.classList.add('keyboard-container');
    closeButton.textContent = '✖';

    for (let keysRow of keyboardArr) {
        let tr = document.createElement('tr');
        
        for (let key of keysRow) {
            let td = document.createElement('td');
            td.textContent = key;

            tr.append(td);
        }
        table.append(tr);
    }


    document.body.append(keyboardContainer);
    keyboardContainer.append(closeButton);
    keyboardContainer.append(table);


    document.addEventListener('click', function keyboardClick(event) {

        if(event.target === targetInput) return;

        let targetKeyboard = event.target.closest('.on-screen-keyboard');
        
        if(!targetKeyboard) {
            document.removeEventListener('click', keyboardClick);
            keyboardContainer.remove();
            return;
        };
        
        let targetKey = event.target.closest('td');

        if(!targetKey) return;

        targetInput.focus();
        targetInput.value += targetKey.textContent;
    });

    closeButton.addEventListener('click', function() {
        keyboardContainer.remove();
    });
}

let input = document.querySelector('#main-input');

input.addEventListener('focus', function() {
    if(document.body.querySelector('.on-screen-keyboard')) return;

    showOnScreenKeyboard(this)
});
