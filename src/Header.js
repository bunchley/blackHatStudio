import React from "react";
import "./Header.css";
import logo from "./bhs.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Black Hat Logo" className="logo" />
      {/* <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/art">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
