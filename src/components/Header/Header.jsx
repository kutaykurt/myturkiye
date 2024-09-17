import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src="/Trlogo.png" alt="TrLogo" height={90} />
      </Link>

      <ul className="header-list-container">
        <li className="header-list">
          <Link className="header-link" to="/">
            Home
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/history">
            History
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
            Archeology
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
            Culture
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
            Historical Figures
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
            Holiday Destinations
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
            Food & Drinks
          </Link>
        </li>
        <li className="header-list">
          <Link className="header-link" to="/archeology">
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
