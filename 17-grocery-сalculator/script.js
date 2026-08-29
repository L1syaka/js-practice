"use strict";

let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell(tr, value, name) {
    let td = document.createElement('td');

    td.textContent = value;
    td.classList.add(name);

    tr.append(td);
    return td;
}

function allowEdit(td) {
    
    td.addEventListener('dblclick', function() {
        let input = document.createElement('input');

        input.value = td.textContent;
        td.textContent = '';

        td.append(input)
        input.focus();

        function saveEdit() {
            td.textContent = input.value;

            if (td.classList.contains('price') || td.classList.contains('amount')) {
                let row = td.parentElement;
                let price = row.querySelector('.price');
                let amount = row.querySelector('.amount');
                let cost = row.querySelector('.cost');

                cost.textContent = price.textContent * amount.textContent;

                recountTotal();
            }
        }

        input.addEventListener('blur', function() {
            saveEdit();
        });

        input.addEventListener('keypress', function(event) {
            if(event.key !== 'Enter') return;
            saveEdit();
        });
    });
}

function recountTotal() {
    let costs = table.querySelectorAll('.cost');
    let sum = 0;
    
    if (costs) {
        for (let cost of costs) {
            sum += +cost.textContent;
        }
        total.textContent = sum;
    }

}

add.addEventListener('click', function() {
    let tr = document.createElement('tr');

    allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
    createCell(tr, price.value * amount.value, 'cost');
    let remove = createCell(tr, 'remove', 'remove');

    remove.addEventListener('click', function() {
        this.parentElement.remove();
        recountTotal();
    });

    table.append(tr);
    recountTotal();
});