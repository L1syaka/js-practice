"use strict";

let events = {
    '19.09.1991': [
        {
            name: 'First public release of Python code',
            description: 'Guido van Rossum released the source code for Python version 0.9.0. The new language combined a simple, highly readable syntax with powerful capabilities, eventually becoming the modern standard for artificial intelligence and data analysis'
        },
        {
            name: 'test',
            description: 'test'
        },
        {
            name: 'test',
            description: 'test'
        }
    ],
    '05.04.1994': [
        {
            name: 'First official announcement and release of Ruby',
            description: 'Japanese programmer Yukihiro Matsumoto introduced the Ruby programming language. He designed it to make the coding process genuinely enjoyable and intuitive for human developers, rather than just efficient for machines'
        }
    ],
    '04.10.2004': [
        {
            name: 'Official founding and development kickoff of GitHub.',
            description: 'Chris Wanstrath, PJ Hyett, and Tom Preston-Werner started building the platform for code hosting and version control. It fundamentally transformed open-source collaboration, allowing developers worldwide to share and build software together seamlessly'
        },
        {
            name: 'test',
            description: 'test'
        }
    ],
}

function createEventTable(inputTarget) {
    let table = document.querySelector('table');
    
    if(table) table.remove();
    
    table = document.createElement('table')
    table.setAttribute('id', 'table');

    for (let date in events) {
        if (date.endsWith(inputTarget.value)) {

            for (let event of events[date]) {
                let tr = document.createElement('tr');

                let td = document.createElement('td');
                td.textContent = date;
                tr.append(td);

                td = document.createElement('td');
                td.textContent = event.name;
                tr.append(td);

                td = document.createElement('td');
                td.textContent = event.description;
                tr.append(td);
    

                table.append(tr);
            }
        }
    }


    document.body.append(table);
}
let input = document.querySelector('#input');

input.addEventListener('keypress', function(event) {
    if(event.key !== "Enter") return;
    createEventTable(this);
})