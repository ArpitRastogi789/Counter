let button = document.getElementById('box');
let count = document.getElementById('output');
let c=0;
button.addEventListener('click', () => {
    c++; 
    count.innerText = `You clicked the Button ${c} times`;
})