import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight === "" || height === "") {
      alert("Please enter valid weight and height!");
      return;
    }

    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBmi(bmiValue);

    let bmiMessage = "";
    if (bmiValue < 18.5) {
      bmiMessage = "You are underweight.";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiMessage = "You have a normal weight.";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiMessage = "You are overweight.";
    } else {
      bmiMessage = "You are obese.";
    }

    setMessage(bmiMessage);
  };

  const reload = () => {
    setWeight("");
    setHeight("");
    setMessage("");
    setBmi(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" type="button" onClick={reload}>Reload</button>
        </form>
        <div className="center">
          {bmi && (
            <>
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
