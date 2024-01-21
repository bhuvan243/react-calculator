import React, { useState } from "react";
// import { addNumbers, subNumbers, mulNumbers, divNumbers } from "./functions";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");
  const [result, setResult] = useState("");

  function validateInput() {
    if (!num1) {
      setMessage("Error!");
      setMessageClass("message-failure");
      setResult("Num1 cannot be empty");
      return false;
    } else if (!num2) {
      setMessage("Error!");
      setMessageClass("message-failure");
      setResult("Num2 cannot be empty");
      return false;
    } else if (isNaN(num1) || isNaN(num2)) {
      setMessage("Error!");
      setMessageClass("message-failure");
      setResult("Please enter valid numbers.");
      return false;
    } else {
      return true;
    }
  }
  function handleInputs(operation) {
    if (validateInput()) {
      switch (operation) {
        case "add": {
          setMessage("Success!");
          setMessageClass("message-success");
          setResult(parseFloat(num1) + parseFloat(num2));
          break;
        }
        case "subtract": {
          setMessage("Success!");
          setMessageClass("message-success");
          setResult(parseFloat(num1) - parseFloat(num2));
          break;
        }
        case "multiply": {
          setMessage("Success!");
          setMessageClass("message-success");
          setResult(parseFloat(num1) * parseFloat(num2));
          break;
        }
        case "divide":
          {
            if (parseFloat(num2) == 0) {
              setMessage("Error!");
              setMessageClass("message-failure");
              setResult("Num1 cannot be divided by zero");
            } else {
              setMessage("Success!");
              setMessageClass("message-success");
              setResult(parseFloat(num1) / parseFloat(num2));
            }
          }
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="parent-container">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input
          type="text"
          placeholder="NUM 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="NUM 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div>
          <button onClick={() => handleInputs("add")}>+</button>
          <button onClick={() => handleInputs("subtract")}>-</button>
          <button onClick={() => handleInputs("multiply")}>*</button>
          <button onClick={() => handleInputs("divide")}>/</button>
        </div>

        <span className={messageClass}>{message}</span>

        {result && <span className="resultDiv">Result - {result}</span>}
      </div>
    </div>
  );
};

export default Calculator;
