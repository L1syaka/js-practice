"use strict";

let input = document.querySelector('#input');
let list = document.querySelector('#list');

function removeTask(li) {
    let remove = document.createElement('span');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    li.append(remove);
}

function markTask(li) {
    let mark = document.createElement('span');
    mark.classList.add('mark');
    mark.textContent = 'Done';
    li.append(mark);
}

function editTask(target) {
    let input = document.createElement('input');
    input.value = target.textContent;
    
    target.textContent = '';
    target.append(input);
    input.focus();

    
    input.addEventListener('keypress', function(event) {
        if (event.key !== 'Enter') return;

        target.textContent = input.value;
    });
    input.addEventListener('blur', function() {
        target.textContent = input.value;
    });
}
function createTask(input) {
    let li = document.createElement('li');
 
    let task = document.createElement('span');
    task.classList.add('task');
    task.textContent = input.value;
    li.append(task);
    
    removeTask(li);
    markTask(li);

    list.append(li);

    input.value = '';
}

input.addEventListener('keypress', function(event) {
    if (this.value === '') return;
    if (event.key !== 'Enter') return;

    createTask(this)
});

list.addEventListener('click', function(event) {
    let target = event.target.closest('span');

    if(!target) return;

    if(target.classList.contains('remove')) {
        target.parentElement.remove();
    } else if (target.classList.contains('mark')) {
        target.parentElement.querySelector('.task').classList.add('done')
    }

});
list.addEventListener('dblclick', function(event) {
    let target = event.target.closest('.task');

    if(!target) return;

    editTask(target);
})