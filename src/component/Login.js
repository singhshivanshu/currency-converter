import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    if (
      users.find((user) => user.userName === userName && user.pass === pass)
    ) {
      history.push("/converter");
    } else {
      console.log("Inncorrect credentials");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn} className="signup">
        <div className="input-filed">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="sign-child"
          />
        </div>
        <div className="input-filed">
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="sign-child"
          />{" "}
        </div>
        <div className="input-filed btn-class">
          {userName && pass ? (
            <button type="submit" className="input-filed submit-btn">Login</button>
          ) : (
            <button disabled className="input-filed submit-btn">
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;