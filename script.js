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
    if (parseFloat(secondNumber) == 0 && operator1 == '/') {
        //display.textContent = 'Um..no?';
        alert(`Can't divide by zero, try again.`);
        return firstNumber;
    }
    else {
        let roundedNumber = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator1);
        return Math.round(roundedNumber * 100) / 100;
    }

}
//makes the calculator buttons work
const calculatorButtons = document.querySelectorAll('.calculator-buttons');
calculatorButtons.forEach((button) =>
    button.addEventListener('click', () => {
        //checks if all the numbers have been input
        if (button.textContent == '=') {
            if (firstNumber == null && operator1 == null) {
                //user can keep typing numbers
            }
            else if (array.length == 0) {
                //user can keep typing numbers
            }
            //get a result
            else {
                secondNumber = array.join('');
                display.textContent = populateDisplay(firstNumber, secondNumber, operator1);
                array = [];
                operator1 = null;
                operator2 = null;
                firstNumber = display.textContent;
                secondNumber = null;
            }
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
        else if (isNaN(button.textContent) == true && button.textContent != '.') {
            if (firstNumber == null) {
                firstNumber = array.join('');
                array = [];
                if (operator1 == null) {
                    operator1 = button.textContent;
                }

            }
            else if (operator1 == null && button.textContent != '.') {
                operator1 = button.textContent;
            }
            //izracunava rijesenje
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
            if (array.length == 10) {
                alert(`Memory is full! Can't input anymore numbers!`);
            }
            else {
                array.push(button.textContent);
                display.textContent = array.join('');
            }
        }
    }));
//I know this is bad practice in coding but I kinda wanna keep on going with the tutorial,
//so close your eyes and pretend you don't see the next lines of code
document.onkeypress = function (e) {
    keyPressed = String.fromCharCode(e.which);
    console.log(keyPressed.charCodeAt());
    if (keyPressed.charCodeAt() == 13) {
        if (firstNumber == null && operator1 == null) {
            //user can keep typing numbers
        }
        else if (array.length == 0) {
            //user can keep typing numbers
        }
        //get a result
        else {
            secondNumber = array.join('');
            display.textContent = populateDisplay(firstNumber, secondNumber, operator1);
            array = [];
            operator1 = null;
            operator2 = null;
            firstNumber = display.textContent;
            secondNumber = null;
        }
    }
    //clear memory
    else if (keyPressed == 'c') {
        display.textContent = '';
        array = [];
        operator1 = null;
        operator2 = null;
        firstNumber = null;
        secondNumber = null;
    }
    else if (isNaN(keyPressed) == true) {

    }
    //recognizes input is a number
    else {
        if (array.length == 10) {
            alert(`Memory is full! Can't input anymore numbers!`);
        }
        else {
            array.push(keyPressed);
            display.textContent = array.join('');
        }
    }
};