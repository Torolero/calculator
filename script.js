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
const updateFirstNumber = (num) => {(firstNumber == undefined) ? firstNumber = num : firstNumber = String(firstNumber + num)

};

//If this is the first number, replace undefine with the number 
const display = document.querySelector('.display-input');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        updateFirstNumber(button.textContent);
        display.textContent = firstNumber;
    });
});

// buttons.addEventListener("click", (event) => {updateFirstNumber(buttons.textContent)});

