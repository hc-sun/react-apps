import { useState } from "react";

export function useInput(defaultData, validationFunc) {
  const [enteredData, setEnteredData] = useState(defaultData);
  const [edited, setEdited] = useState(false);

  const valueIsValid = validationFunc(enteredData);

  function handleInputChange(event) {
    setEnteredData(event.target.value);

    // set edited back to false when user starts to type
    setEdited(false);
  }

  function handleInputBlur() {
    setEdited(true);
  }

  return {
    value: enteredData,
    handleInputChange,
    handleInputBlur,
    hasError: edited && !valueIsValid,
  };
}
