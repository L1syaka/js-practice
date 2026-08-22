"use strict";

let showSpoiler = document.querySelector('.toggle');

function revealSpoiler(thisTarget) {
    let target = thisTarget.parentElement.nextElementSibling;

    if (!target.classList.contains('spoiler')) return;

    if (!target.classList.contains('active')) {
        target.classList.add('active');
        thisTarget.textContent = 'Hide spoiler';
    } else {
        target.classList.remove('active');
        thisTarget.textContent = 'Show spoiler'
    }
}

showSpoiler.addEventListener('click', function(event) {
    event.preventDefault();

    revealSpoiler(this)
});