import { useState } from "react";

import Input from "./Input";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [edited, setEdited] = useState({
    email: false,
    password: false,
  });

  // set emailIsInvalid to true if lose focus on email input and email is not valid
  const emailIsInvalid = edited.email && !enteredData.email.includes("@");
  const passwordIsInvalid =
    edited.password && enteredData.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredData);

    // // reset form
    // setEnteredData({
    //   email: "",
    //   password: "",
    // });
  }

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  function handleInputChange(identifier, value) {
    setEnteredData((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));

    // set edited back to false when user starts to type
    setEdited((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setEdited((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredData.email}
          error={emailIsInvalid && "Please enter a valid email address"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredData.password}
          error={passwordIsInvalid && "Password must be at least 6 characters"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
