import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <div className="navbar_container">
      <div className="nav_item" onClick={() => history.push("/") }>Currency Converter</div>
    </div>
  );
}

export default Navbar;
