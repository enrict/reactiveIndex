import React from "react";
import logo from "./images/logo.png";
import "./Navbar.css";

function Navbar({ setCategory }) {
  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="" />
      <div className="nav__links">
        <h3 className="nav__link" onClick={() => setCategory("business")}>
          Business
        </h3>
        <h3 className="nav__link" onClick={() => setCategory("technology")}>
          Technology
        </h3>
        <h3 className="nav__link" onClick={() => setCategory("general")}>
          General
        </h3>
        <h3 className="nav__link" onClick={() => setCategory("health")}>
          Health
        </h3>
        <h3 className="nav__link" onClick={() => setCategory("science")}>
          Science
        </h3>
        <h3 className="nav__link" onClick={() => setCategory("sports")}>
          Sports
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
