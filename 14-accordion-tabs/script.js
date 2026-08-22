"use strict";

let parent = document.getElementById('parent')
let tabs = parent.getElementsByClassName('tab')
let links = parent.getElementsByClassName('link')

let test = document.querySelector('a');

function showAccordionTab(target) {
    let tabTarget = target.parentElement;

    if(tabTarget.classList.contains('active')) {
        tabTarget.classList.remove('active');  
    } else {
        for(let tab of tabs) {
            tab.classList.remove('active');
        }
        tabTarget.classList.add('active');
    }

}

parent.addEventListener('click', function(event) {
    let target = event.target.closest('.link');

    if(!target) return;

    showAccordionTab(target);
});