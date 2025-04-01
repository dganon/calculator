let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
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
        clickEquals();
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

    if (firstOperand === null && firstOperator === null){
        // first value
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
        // first digit of second operand 
        secondOperand = operand;
        displayValue = operand;
        updateDisplay();
        console.log("second operand: ", secondOperand);
    }
    else if(secondOperand !== null && firstOperator !== null){
        // second and above digit of second operand 
        secondOperand += operand;
        displayValue += operand;
        updateDisplay();
        
        console.log("second operand: ", secondOperand);
    }
}

function setOperator(operator){
    if(firstOperator === null){
        // first calculation
        firstOperator = operator;
        displayValue = operator;
        updateDisplay();
        console.log("1st operator: ", firstOperator);
    }
    else if(firstOperator !== null && secondOperator === null){
        if (secondOperand === null){
            console.log("error");
        }
        else{
            secondOperator = operator;
            console.log("2nd operator: ", secondOperator);
            // calculate the first pair of numbers then use the result to calculate using this operator
            result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
            displayValue = result;
            updateDisplay();
    
            firstOperand = result;
            secondOperand = null;
            result = null;
        }
    }
    else if(firstOperator !== null && secondOperator !== null){
        // handles another calculation
        secondOperator = operator;
        result = operate(Number(firstOperand), secondOperator, Number(secondOperand));
        displayValue = result;
        updateDisplay();

        firstOperand = result;
        secondOperand = null;
        result = null;

        console.log("third and up calculation");
    }
}

function clickEquals(){
    if (firstOperator ===  null){
        displayValue = displayValue;
    }
    else if(secondOperator !== null){
        // second operator
        result = operate(Number(firstOperand), secondOperator, Number(secondOperand));
        displayValue = result;
        updateDisplay();
        console.log(result);
    }
    else{
        result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
        displayValue = result;
        updateDisplay();

        console.log(result);
    }

    console.log(firstOperand, secondOperand, firstOperator, secondOperator);

    // clears variables to allow new calculation without clicking the clear button
    firstOperand = null;
    firstOperator = null;
    secondOperand = null;
    secondOperator = null;

    console.log(firstOperand, secondOperand, firstOperator, secondOperator);
}

function clearCalc(){
    firstOperand = null;
    firstOperator = null;
    secondOperand = null;
    secondOperator = null;
    displayValue = 0;
    updateDisplay();

    console.log("calc cleared");
    console.log(firstOperand, firstOperator, secondOperand, secondOperator);
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
