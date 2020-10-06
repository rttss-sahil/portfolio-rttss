import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar3.css";

function NavBar3() {
  const [MENU_Class, setMENU_Class] = useState(""),
    [NAV_Class, setNAV_Class] = useState("nav hidden"),
    handle_MENU_Click = () => {
      if (MENU_Class === "") {
        setMENU_Class("active");
        setNAV_Class("nav");
      } else {
        setMENU_Class("");
        setNAV_Class("nav hidden");
      }
    };
  return (
    <div id="header">
      <div onClick={handle_MENU_Click} id="menu-icon" className={MENU_Class}>
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
      </div>
      <div className="logo">
        <NavLink to="/">Sahil Rathee</NavLink>
      </div>
      <nav className={NAV_Class}>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar3;
