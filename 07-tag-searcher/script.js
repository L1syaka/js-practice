"use strict";

let tags = [
    {name: 'p', description: 'The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.'},
    {name: 'div', description: 'The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).'},
    {name: 'b', description: 'The <b> HTML element is used to draw the readers attention to the elements contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the <strong> element.'},
    {name: 'select', description: 'The <select> HTML element represents a control that provides a menu of options.'},
    {name: 'h', description: 'The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.'},
]

let container = document.createElement('div');
let input = document.createElement('input');
document.body.append(container);
container.append(input)

input.addEventListener('keypress', function(event) {
    if(event.key !== 'Enter') return;

    let p = container.querySelector('p')

    if(p) p.remove();

    
    for (let tag of tags) {
        if (this.value === tag.name) {
            p = document.createElement('p')
            container.append(p);
            p.textContent = tag.description;
        }
    }
});