import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-dark container">
      <h4>
        <Link to="/" className="link">
          HOME
        </Link>
      </h4>
      <h4>
        <Link to="/Registration" className="link">
          REGISTRATION
        </Link>
      </h4>
      <h4>
        <Link to="/Administration" className="link">
          ADMINISTRATION
        </Link>
      </h4>
    </nav>
  );
}

export default Navbar;
