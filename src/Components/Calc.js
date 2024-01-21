import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInput = () => {
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      setError('Invalid input. Please enter valid numbers.');
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (validateInput()) {
      switch (operation) {
        case 'add':
          setResult(parseFloat(num1) + parseFloat(num2));
          break;
        case 'subtract':
          setResult(parseFloat(num1) - parseFloat(num2));
          break;
        case 'multiply':
          setResult(parseFloat(num1) * parseFloat(num2));
          break;
        case 'divide':
          if (parseFloat(num2) === 0) {
            setError('Cannot divide by zero.');
          } else {
            setResult(parseFloat(num1) / parseFloat(num2));
          }
          break;
        default:
          setError('Invalid operation.');
          break;
      }
    }
  };

  return (
    <div>
      <div>
        <label>
          Number 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={() => handleOperation('add')}>Add</button>
        <button onClick={() => handleOperation('subtract')}>Subtract</button>
        <button onClick={() => handleOperation('multiply')}>Multiply</button>
        <button onClick={() => handleOperation('divide')}>Divide</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && (
        <div style={{ color: 'green' }}>
          Result: {result.toFixed(2)} {/* Display result with two decimal places */}
        </div>
      )}
    </div>
  );
};

export default Calculator;
