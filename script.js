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


console.log(operate(2, '*', 3));