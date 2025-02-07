function calculate(operation) {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch(operation) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        }
    }
    displayResult(result);
}

function power() {
    let base = parseFloat(document.getElementById("first-number").value);
    let exponent = parseInt(document.getElementById("second-number").value);
    let result = 1;

    if (isNaN(base) || isNaN(exponent)) {
        result = "Please enter valid numbers";
    } else {
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
    }
    displayResult(result);
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function displayResult(result) {
    let output = document.getElementById("output");
    
    if (!output) {
        console.error("Element with ID 'output' not found!");
        return;
    }
    
    console.log("Calculated result:", result);  
    output.innerHTML = result;
    
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}
