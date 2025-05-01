import { useState } from "react";

export function useCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid Input");
      return;
    }

    let newResult;
    switch (operator) {
      case "+":
        newResult = n1 + n2;
        break;
      case "-":
        newResult = n1 - n2;
        break;
      case "*":
        newResult = n1 * n2;
        break;
      case "/":
        newResult = n2 !== 0 ? n1 / n2 : "Error";
        break;
      case "^":
        newResult = Math.pow(n1, n2);
        break;
      default:
        newResult = "Error";
    }

    setResult(newResult);
  };

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return { num1, setNum1, num2, setNum2, result, handleCalculate, clearFields };
}
