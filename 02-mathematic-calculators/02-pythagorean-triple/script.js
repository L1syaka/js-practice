"use strict";

function getPythagoreanTriple(a, b, c) {
    let arr = [a, b, c];
    arr.sort((a, b) => a - b)

    if (arr[2] ** 2 === (arr[0] ** 2) + (arr[1] ** 2) ) {
        return 'Numbers are Pythagorean Triple';
    } else {
        return 'Numbers are not Pythagorean Triple'
    }
}


let inputs = document.querySelectorAll('#inp1, #inp2, #inp3');
let p = document.querySelector('p');
let [input1, input2, input3] = inputs;

inputs.forEach(inp => {
    inp.addEventListener('blur', function() {
        let inp1 = input1.value;
        let inp2 = input2.value;
        let inp3 = input3.value;
        
        if (inp1 === '' ||
            inp2 === '' ||
            inp3 === '') return;

        if (+inp1 <= 0 ||
            +inp2 <= 0 ||
            +inp3 <= 0) return;
        
        p.textContent = getPythagoreanTriple(inp1, inp2, inp3);
    });
});

