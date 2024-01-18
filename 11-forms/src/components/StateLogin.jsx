import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredData.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredData.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
