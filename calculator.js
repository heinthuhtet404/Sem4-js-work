// Get references to all the elements we need
const squareInput = document.getElementById('squareInput');
const squareBtn = document.getElementById('squareBtn');
const halfInput = document.getElementById('halfInput');
const halfBtn = document.getElementById('halfBtn');
const radiusInput = document.getElementById('radiusInput');
const areaBtn = document.getElementById('areaBtn');

// Add event listeners using DOM Level 2
squareBtn.addEventListener('click', calculateSquare);
halfBtn.addEventListener('click', calculateHalf);
areaBtn.addEventListener('click', calculateArea);

// Calculation functions
function calculateSquare() {
    const num = parseFloat(squareInput.value);
    if (isNaN(num)) {
        alert('Please enter a valid number');
        return;
    }
    const result = num * num;
    alert(`The result of squaring the number ${num} is ${result}`);
}

function calculateHalf() {
    const num = parseFloat(halfInput.value);
    if (isNaN(num)) {
        alert('Please enter a valid number');
        return;
    }
    const result = num / 2;
    alert(`Half of ${num} is ${result}`);
}

function calculateArea() {
    const radius = parseFloat(radiusInput.value);
    if (isNaN(radius)) {
        alert('Please enter a valid number');
        return;
    }
    const result = Math.PI * radius * radius;
    alert(`The area of a circle with radius ${radius} is ${result.toFixed(2)}`);
}