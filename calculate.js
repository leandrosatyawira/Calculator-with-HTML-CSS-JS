let calculationDone = false;
const display = document.getElementById('display');

function appendPercentage() {
    let currentValue = display.value;
    if (currentValue && !currentValue.includes("%")) {
        display.value += "%";
    }
}

function calculateValue() {
    let expression = display.value.replace(/%/g, "*0.01");
    try {
        display.value = eval(expression);
        calculationDone = true;  
    } catch (error) {
        display.value = "Error";
    }
}

function appendNumber(number) {
    if (calculationDone) {
        display.value = ''; 
        calculationDone = false;
    }
    display.value += number; 
}

function appendOperator(operator) {
    if (calculationDone) {
        calculationDone = false;  
    }
    display.value += operator;
}
