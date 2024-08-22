const counterElement = document.getElementById('counter');
let counter = 0;

function updateCounter(value) {
    counter += value;
    counterElement.innerText = counter;
    
    if (counter > 0) {
        counterElement.style.color = 'green';
    } else if (counter < 0){
        counterElement.style.color = 'red';
    } else {
        counterElement.style.color = 'black';
    }
}

function increment() {
    updateCounter(1);
}

function decrement() {
    updateCounter(-1);
}