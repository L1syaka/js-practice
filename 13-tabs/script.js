"use strict";

let buttons = document.querySelectorAll('#parent .menu a');
let tabs = document.querySelectorAll('#parent .tabs .tab');
let menu = document.querySelector('#parent .menu');

function switchTabs(linkTarget) {

    buttons.forEach((link, index) => {
        if (link.classList.contains('active')) {

            if(linkTarget === link) return;

            link.classList.remove('active');
            tabs[index].classList.remove('active');
        }
    });

    let tabIndex = [...buttons].findIndex((link) => linkTarget === link);

    linkTarget.classList.add('active');
    tabs[tabIndex].classList.add('active');
}

menu.addEventListener('click', function(event) {
    event.preventDefault();
    let a = event.target.closest('a');
    
    if(!a) return;

    switchTabs(a)
});