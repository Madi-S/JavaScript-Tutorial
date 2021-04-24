const heading = document.querySelector('h1');
heading.onclick = () => {
    if (heading.style.color === 'red'){
        heading.style.color = 'black';
        heading.style.backgroundColor = 'red';
    } else {
        heading.style.color = 'red';
        heading.style.backgroundColor = 'black';
    }
    // console.log('Stop clicking me!');
};
heading.ondrag = () => {
    console.log('Get away from me!');
};

const heading2 = document.querySelector('h2');
console.log(heading2);
heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue'){
        heading2.style.color = 'yellow';
        heading2.style.backgroundColor = 'blue';
    } else {
        heading2.style.color = 'blue';
        heading2.style.backgroundColor = 'yellow';
    }
    // console.log('Double click');
});

// To change inner `a` tag's style
lastHeading = heading2.nextElementSibling;
const link = lastHeading.children[0];
link.style.color = 'red';

link.addEventListener('click', (event) => {
    console.log('clicked');
    // if (!confirm('Do you want to follow the link?')) {
    //     event.preventDefault();
    // }
    const url = event.target.getAttribute('href');
    window.location = url;
})