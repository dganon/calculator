function operate(num1, operator, num2){
    // cases using the operator
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