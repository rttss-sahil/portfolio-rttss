import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar1.css";

function NavBar1() {
  const [NAV_TOGGLE_Class, setNAV_TOGGLE_Class] = useState("nav-toggle"),
    [MENU_LEFT_Class, setMENU_LEFT_Class] = useState("menu-left"),
    handleNAV_TOGGLE_Click = () => {
      NAV_TOGGLE_Class === "nav-toggle"
        ? setNAV_TOGGLE_Class("nav-toggle open")
        : setNAV_TOGGLE_Class("nav-toggle");
      MENU_LEFT_Class === "menu-left"
        ? setMENU_LEFT_Class("menu-left collapse")
        : setMENU_LEFT_Class("menu-left");
    };
  return (
    <header>
      <div className="container">
        <nav id="navigation">
          <NavLink to="/" className="logo">
            Sahil Rathee
          </NavLink>
          <div onClick={handleNAV_TOGGLE_Click} className={NAV_TOGGLE_Class}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={MENU_LEFT_Class}>
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
    </header>
  );
}

export default NavBar1;
