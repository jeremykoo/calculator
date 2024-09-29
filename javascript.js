let displayValue = "0";
let num1 = null;
let num2 = null;
let operation1 = null;
let operation2 = null;
let result = null;

updateDisplay();

function updateDisplay() {
    const display = document.querySelector(".display");
    display.textContent = displayValue;
    // console.log(displayValue);
    if (displayValue.length > 10) {
        console.log("truncating...");
        display.textContent = displayValue.substring(0, 10);
    }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (!(displayValue == "0" && number.textContent == "0")) {
            if ((displayValue == "0" && number.textContent != "0")) {
                displayValue = number.textContent;
            } else {
                displayValue += number.textContent;
            }
        }

        updateDisplay();
    });
});

const fns = document.querySelectorAll(".function");
fns.forEach((fn) => {
    fn.addEventListener("click", () => {
        let classes = fn.classList;
        if (classes.contains("clear")) {
            reset();
            console.log("clearing");
        }
        else if (classes.contains("sign")) {
            convertSign();
        }
        else if (classes.contains("percent")) {
            percentage();
        }
        else if (classes.contains("equals")) {
            console.log("evaluating");
            evaluate();
        }
        updateDisplay();
    });
});

const operations = document.querySelectorAll(".operation");
operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        // if (operation1 && num2 == null) {
        //     console.log("illegal operation");   
        // }
        // else {
            if (num1 == null) {
                num1 = displayValue;
                displayValue = "";
            }
            else {
                num2 = displayValue;
                displayValue = "";
            }

            let math = operation.textContent;
            if (operation1 == null) {
                operation1 = math;
            } else {
                operation2 = math;
                evaluate();
                updateDisplay();
                displayValue = "";
            }
            console.log(`operation = ${operation1}`);
        // }
    });
});


function reset() {
    displayValue = "0";
    num1 = null;
    num2 = null;
    operation1 = null;
    operation2 = null;
    result = null;
}

function convertSign() {
    displayValue *= -1;
    if (num2 == null) {
        num1 *= -1;
    }
}

function percentage() {
    displayValue /= 100;
}

function evaluate() {
    if (operation2) {
        console.log("second operation");
        console.log(`num1=${num1}, num2=${num2}, operation1=${operation1}, operation2=${operation2}`);
        if (operation2 == "+") {
            if (num1 && num2) {
                result = Number(num1) + Number(num2);
                displayValue = result;
            }
        }
        else if (operation2 == "-") {
            if (num1 && num2) {
                result = Number(num1) - Number(num2);
                displayValue = result;
            }
        }
        else if (operation2 == "*") {
            if (num1 && num2) {
                result = Number(num1) * Number(num2);
                displayValue = result;
            }
        }
        else if (operation2 == "/") {
            if (num1 && num2) {
                result = Number(num1) / Number(num2);
                displayValue = result;
            }
        }
    
        // set num1 as prev answer
        num1 = displayValue;
        num2 = null;
        operation1 = operation2;
        operation2 = null;
        result = null;
        return;
    }

    if (num1 && operation1) {
        num2 = displayValue;
    }

    if (operation1 == "+") {
        if (num1 && num2) {
            result = Number(num1) + Number(num2);
            displayValue = result;
        }
    }
    else if (operation1 == "-") {
        if (num1 && num2) {
            result = Number(num1) - Number(num2);
            displayValue = result;
        }
    }
    else if (operation1 == "*") {
        if (num1 && num2) {
            result = Number(num1) * Number(num2);
            displayValue = result;
        }
    }
    else if (operation1 == "/") {
        if (num1 && num2) {
            if (num2 == "0") {
                displayValue = "LMAO";
            } else {
                result = Number(num1) / Number(num2);
                displayValue = result;
            }
        }
    }

    // set num1 as prev answer
    num1 = displayValue;
    num2 = null;
    operation1 = null;
    operation2 = null;
    result = null;
}