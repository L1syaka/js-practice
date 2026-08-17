"use strict";

function getRootsOfaQuadraticEquation(a, b, c) {
    if (a === 0) return;

    let d = (b ** 2) - (4 * a * c);

    if (d < 0) {
        return 'No roots';
    } else if (d === 0) {
        let x = (-b / (2 * a)).toFixed(3);
        return x;
    } else {
        let x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(3);
        let x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(3);
        return [`x1 = ${x1}`, ` x2 = ${x2}`];
    }
}

let inputs = document.querySelectorAll('#inp1, #inp2, #inp3');
let p = document.querySelector('p');
let [input1, input2, input3] = inputs;

inputs.forEach(inp => {
    inp.addEventListener('blur', function() {
        if (input1.value === '' ||
            input2.value === '' ||
            input3.value === '') return;
            
            let inp1 = input1.value;
            let inp2 = input2.value;
            let inp3 = input3.value;

        if (isNaN(inp1) ||
            isNaN(inp2) ||
            isNaN(inp3)) return;

        p.textContent = getRootsOfaQuadraticEquation(inp1, inp2, inp3);
    });
});

