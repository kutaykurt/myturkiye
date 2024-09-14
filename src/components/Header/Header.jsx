import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <img src="/Trlogo.png" alt="TrLogo" height={60} />

      <ul className="header-list-container">
        <li className="header-list">
          <Link className="header-link" to="/home">
            Home
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
            Archeology
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/history">
            History
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/explore">
            Explore
          </Link>
        </li>
      </ul>

      <ul className="header-list-container">
        <li className="header-list">
          <Link className="header-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
