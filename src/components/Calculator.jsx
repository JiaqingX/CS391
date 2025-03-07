import { useCalculator } from "./useCalculator";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 400px;
`;

const InputField = styled.input`
  width: 45%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const CalcButton = styled.button`
  padding: 10px;
  margin: 5px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: black;

  &:hover {
    background-color: #ddd;
  }
`;

export default function Calculator() {
  const { num1, setNum1, num2, setNum2, result, handleCalculate, clearFields } = useCalculator();

  return (
    <CalculatorWrapper>
      <h2>Calculator</h2>
      <InputField
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <InputField
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <ButtonContainer>
        <CalcButton onClick={() => handleCalculate("+")}>+</CalcButton>
        <CalcButton onClick={() => handleCalculate("-")}>-</CalcButton>
        <CalcButton onClick={() => handleCalculate("*")}>*</CalcButton>
        <CalcButton onClick={() => handleCalculate("/")}>/</CalcButton>
        <CalcButton onClick={() => handleCalculate("^")}>^</CalcButton>
        <CalcButton onClick={clearFields}>Clear</CalcButton>
      </ButtonContainer>
      <h3>Result: {result}</h3>
    </CalculatorWrapper>
  );
}
