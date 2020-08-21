import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [match, setMatch] = useState(false)

  const history = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    if (
      users.find((user) => user.userName === userName && user.pass === pass)
    ) {
      localStorage.setItem("token", true);
      history.push("/converter");
      setMatch(false)
    } else {
      setMatch(true)
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
            <button type="submit" className="input-filed submit-btn">
              Login
            </button>
          ) : (
            <button disabled className="input-filed submit-btn">
              Login
            </button>
          )}
          {match && <p>Incorrect password</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;
