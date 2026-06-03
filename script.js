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
            if(firstNumber !== undefined && operator !== undefined && secondNumber !== undefined){
                firstNumber = Number(firstNumber);
                secondNumber = Number(secondNumber);
                let result = operate(firstNumber, operator, secondNumber);
                if(typeof result === 'string') {
                    display.textContent = result;
                } else {
                    display.textContent = result.toFixed(2);
                }
                firstNumber = result;
                secondNumber = undefined;
                Number(result);
            }
            updateOperator(button.textContent);
        } 
        if(button.classList.contains("equals") && firstNumber !== undefined && secondNumber !== undefined && operator !== undefined) {
            firstNumber = Number(firstNumber);
            secondNumber = Number(secondNumber);
            let result = operate(firstNumber, operator, secondNumber);
            if(typeof result === 'string') {
                display.textContent = result;
            } else {
                display.textContent = result.toFixed(2);
            }
            Number(result);
        }

        if(button.classList.contains("clear")) {
            firstNumber = undefined;
            operator = undefined;
            secondNumber = undefined;
            display.textContent = 0;
        };
    });
});


