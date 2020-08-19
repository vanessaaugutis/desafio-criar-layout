import React from "react";
import "./Header.scss";
import { FaBars, FaBell, FaStopwatch } from "react-icons/fa";

function Header() {
  return (
    <header className="main-header">
      <div>
        <FaBars color={"#2b6cb0"} className="icon-bars" />
        <img className="logo-img" src="/GPSUS.png" alt="Logo GPSUS"></img>
      </div>
      <div>
        <FaStopwatch color={"#2b6cb0"} className="icon" />
        <FaBell color={"#2b6cb0"} className="icon icon-bell" />
      </div>
    </header>
  );
}

export default Header;
