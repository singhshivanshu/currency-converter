import React from "react";
import "./App.css";
import Converter from "./component/Converter";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/converter" component={Converter} />
      </Switch>
     
    </div>
  );
}

export default App;
