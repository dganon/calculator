let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = "0";

const display = document.querySelector("#display");

const buttons = document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', clickBtn);
});

function clickBtn(event) {
    const btn = event.target;
    //displayValue = btn.innerText;
    updateDisplay();

    if (btn.id === "clear"){
        clearCalc();
    }
    else if (btn.id === "equals"){
        console.log("calculate");
        //operation handler
    }   
    else{
        if (btn.className === "operand"){
            setOperand(btn.innerText);
        }
        else if (btn.className === "operator"){
            setOperator(btn.innerText);
        }
    }
}

function setOperand(operand){
    if (firstOperand === null){
        firstOperand = operand;
        displayValue = operand;
        updateDisplay();
        console.log("first operand: ", firstOperand);
    }
    else if(firstOperand !== null && firstOperator === null){
        firstOperand += operand;
        displayValue += operand;
        updateDisplay();
        
        console.log("first operand: ", firstOperand);
    }
    else if(secondOperand === null && firstOperator !== null){
        secondOperand = operand;
        displayValue = operand;
        updateDisplay();
        console.log("second operand: ", secondOperand);
    }
    else if(secondOperand !== null && firstOperator !== null){
        secondOperand += operand;
        displayValue += operand;
        updateDisplay();
        
        console.log("second operand: ", secondOperand);
    }
}

function setOperator(operator){
    if(firstOperator === null){
        firstOperator = operator;
        displayValue = operator;
        updateDisplay();
    }
    else if(firstOperator !== null & secondOperator === null){
        secondOperator = operator;
        // calculate the first pair of numbers then use the result to calculate using this operator
    }

    console.log("first operator: ", firstOperator);
}

function clearCalc(){
    firstOperand = null;
    firstOperator = null;
    secondOperand = null;
    displayValue = 0;
    updateDisplay();

    console.log("calc cleared");
    console.log(firstOperand, firstOperator, secondOperand);
}

function updateDisplay(){
    display.textContent = displayValue; 
}

function operate(num1, operator, num2){
    switch(operator){
        case "+": 
            return num1 + num2;
        break;
        case "-": 
            return num1 - num2;
        break;
        case "*": 
            return num1 * num2;
        break;
        case "/": 
            if (num2 !== 0){
                return num1 / num2;
            }
            else {
                return "you can't divide by 0, silly!";
            } 
        break;
        default: "calculator"
    }
}
