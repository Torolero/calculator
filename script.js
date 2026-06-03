const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

let firstNumber;
let operator;
let secondNumber;

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

const operate = (a, op, b) => {
    return operations[op] ? operations[op](a, b) : "Invalid operator";
};



const buttons = document.querySelectorAll('button');
const updateFirstNumber = (num) => (operator === undefined) ? (firstNumber === undefined) ? firstNumber = num : firstNumber = String(firstNumber + num) : (secondNumber === undefined) ? secondNumber = num : secondNumber = String(secondNumber + num);

const updateOperator = (op) => operator = op;

//If this is the first number, replace undefine with the number 
const display = document.querySelector('.display-input');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if(button.classList.contains("digit")) {
        updateFirstNumber(button.textContent);
        (operator === undefined) ? display.textContent = firstNumber : display.textContent = secondNumber; 
        } else if(button.classList.contains("operator")) {
            updateOperator(button.textContent);
        }
    });
});



