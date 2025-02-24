import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 2,
    duration: 10,
  });

  const [error, setError] = useState("");

  const inputValidation = userInput.duration > 0;

  function handleChange(inputType, newValue) {
    setUserInput((prevState) => {
      // only update the value that has changed based on inputType
      return { ...prevState, [inputType]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInputValue={userInput} onChangeValue={handleChange} />
      {!inputValidation && (
        <p className="center">Please enter a valid duration</p>
      )}
      {inputValidation && <Results input={userInput} />}
    </>
  );
}

export default App;
