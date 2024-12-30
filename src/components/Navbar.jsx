import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/spotlight">Spotlight</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/success-stories">Success Stories</Link>
        </li>
      </ul>
      <div className="profile-icon">
        <div className="circle"></div>
      </div>
    </nav>
  );
};

export default Navbar;
