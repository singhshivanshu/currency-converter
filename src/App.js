import React from "react";
import "./App.css";
import Converter from "./component/Converter";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Converter />
    </div>
  );
}

export default App;
