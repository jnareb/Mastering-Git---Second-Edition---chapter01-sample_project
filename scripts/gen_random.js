function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandom() {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let res = document.getElementById('result');
    res.textContent = 'Result: ' + getRandomIntInclusive(min, max);
}

let button = document.querySelector('button');
button.addEventListener('click', generateRandom);
button.disabled = false;
