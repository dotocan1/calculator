const display = document.getElementById('display-numbers');
let firstNumber;
let secondNumber;

let operator1;
let operator2;

let array = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
    }

    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
}
//populates the display
function populateDisplay(currentNumber) {
    let roundedNumber = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator1);
    return Math.round(roundedNumber * 100) / 100;
}
//makes the calculator buttons work
const calculatorButtons = document.querySelectorAll('.calculator-buttons');
calculatorButtons.forEach((button) =>
    button.addEventListener('click', () => {
        //get a result
        if (button.textContent == '=') {
            secondNumber = array.join('');
            display.textContent = populateDisplay(firstNumber, secondNumber, operator1);
            array = [];
            operator1 = null;
            operator2 = null;
            firstNumber = null;
            secondNumber = null;
        }
        //clear memory
        else if (button.textContent == 'C') {
            display.textContent = '';
            array = [];
            operator1 = null;
            operator2 = null;
            firstNumber = null;
            secondNumber = null;
        }
        //recognizes the input is an operator
        else if (isNaN(button.textContent) == true) {
            if (firstNumber == null) {
                firstNumber = array.join('');
                array = [];
                if (operator1 == null) {
                    operator1 = button.textContent;
                }
            }

            else {
                secondNumber = array.join('');
                operator2 = button.textContent;
                array = [];
                display.textContent = populateDisplay(firstNumber, secondNumber, operator1);
                operator1 = operator2;
                operator2 = null;
                firstNumber = display.textContent;
                secondNumber = null;
            }
        }
        //recognizes input is a number
        else {
            array.push(button.textContent);
            display.textContent = array.join('');
        }
    }));

