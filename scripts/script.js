function addNumbers(num1, num2) {
    return num1 + num2
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function operate(operand1, operand2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = addNumbers(operand1, operand2);
            break;
        case "-":
            result = subtractNumbers(operand1, operand2);
            break;
        case "*":
            result = multiplyNumbers(operand1, operand2);
            break;
        case "/":
            result = divideNumbers(operand1, operand2);
            break;
    }
    return result;
}

function updateDisplay(argInput) {
    // needs conditional for operators
    // set operands and operator to null or any other falsy value
    if (operator) {
        // first number and operator have been inputted
        // assign values to operand 2
    } else if (arrayOperators.includes(argInput) && operand1) {
        // logic for assigning operator value here
        operator = argInput;
    } else {
        // receive values as string first, concat() from inputs, and then parse into float
        if (!(argInput === "0" && !operand1)) {
            calcScreen.textContent = calcScreen.textContent.concat(argInput);
            operand1 = parseFloat(calcScreen.textContent);
        }
    }
}

let operand1, operand2, operator;
const arrayOperators = ["+", "-", "*", "/"];
const calcBody = document.querySelector("#calc-body");
const calcScreen = document.querySelector("#calc-screen");
calcBody.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "0-button":
            updateDisplay("0");
            break;
        case "1-button":
            updateDisplay("1");
            break;
        case "2-button":
            updateDisplay("2");
            break;
        case "3-button":
            updateDisplay("3");
            break;
        case "4-button":
            updateDisplay("4");
            break;
        case "5-button":
            updateDisplay("5");
            break;
        case "6-button":
            updateDisplay("6");
            break;
        case "7-button":
            updateDisplay("7");
            break;
        case "8-button":
            updateDisplay("8");
            break;
        case "9-button":
            updateDisplay("9");
            break;
        case "divide-button":
            updateDisplay("/");
            break;
        case "multiply-button":
            updateDisplay("*");
            break;
        case "subtract-button":
            updateDisplay("-");
            break;
        case "add-button":
            updateDisplay("+");
            break;
    }
});