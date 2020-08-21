import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

function Signup() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    let users = [];
    let obj = {
      userName,
      pass,
      confirmPass,
    };
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    history.push("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup">
        <div className="input-filed">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="sign-child"
            required
          />
        </div>
        <div className="input-filed">
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="sign-child"
            required
          />
        </div>
        <div className="input-filed">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="sign-child"
            required
          />{" "}
        </div>
        <div className="input-filed btn-class">
          {userName && pass && confirmPass && pass === confirmPass ? (
            <button type="submit">Signup</button>
          ) : (
            <button type="submit" disabled className="input-filed submit-btn">
              Signup
            </button>
          )}
          <br />
          <p>Already a user?</p>
          <button
            onClick={() => history.push("./login")}
            className="input-filed submit-btn"
          >
            Login
          </button>
            <br/>
            <br/>
          <GoogleLogin
            clientId="307667420212-cb6oggdvoo3ek716kuqtfv3r71gpuu4h.apps.googleusercontent.com"
            buttonText="Login using Google"
            onSuccess={() => history.push("/converter")}
            onFailure={(response) => console.log(response)}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
