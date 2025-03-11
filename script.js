let firstNum, operator, secNum;

function operate(num1, operator, num2){
    // cases using the operator
    switch(operator){
        case "+": console.log(add(num1, num2));
        break;
        case "-": console.log(subtract(num1, num2));
        break;
        case "*": console.log(multiply(num1, num2));
        break;
        case "/": console.log(divide(num1, num2));
        break;
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 !== 0){
        return num1 / num2;
    }
    else {
        return "you can't divide by 0, silly!";
    }
}

operate(1, "/", 0);