// DOM - Document Object Model

console.log(document); // HTML tree
console.log(window);   

// alert('123');
// window.alert('123');
// const confirmed = window.confirm('Wanna hang out?');
// console.log(confirmed);


// Get heading's text
const heading = document.getElementById('heading');
console.log(typeof heading);  // object not string
console.log(heading);
console.dir(heading);
console.log(heading.parentNode);
console.log(heading.textContent);

console.log(document.getElementById('container').textContent);

setTimeout(() =>{
    addStylesTo(heading);
}, 2000);

function addStylesTo(node) {
    node.style.color = 'blue';
    node.style.padding = '4rem';
    node.style.fontSize = '60px';
    node.style.textAlign = 'center';
    node.textContent = 'Changed via JS';
    node.style.backgroundColor = 'yellow';
};

// These are slow and outdated methods to find elements without id
// const heading2 = document.getElementsByTagName('h2')[0]; 
// const heading2 = document.getElementsByClassName('heading')[1]

// Returns first occurence
const heading2 = document.querySelector('h2.heading');
console.log(heading2);


// Return all matching elements
const headings = document.querySelectorAll('.heading');
console.log(headings);

// Nested searching
const div = document.querySelector('div');
const p = div.querySelector('p');
console.log(div.nextElementSibling);
console.log(div.nextSibling);
console.log(p);
