import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsNewspaper } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FaUniversity, FaRegQuestionCircle } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import "./NavBar2.css";

function NavBar2() {
  const [NAV_TOGGLE_Class, setNAV_TOGGLE_Class] = useState(
      "nav-toggle js-nav-toggle"
    ),
    [NAV_Class, setNAV_Class] = useState("nav js-nav"),
    handle_NAV_TOGGLE_Click = () => {
      if (NAV_TOGGLE_Class === "nav-toggle js-nav-toggle") {
        setNAV_TOGGLE_Class("nav-toggle js-nav-toggle is-active");
        setNAV_Class("nav js-nav is-open");
      } else {
        setNAV_TOGGLE_Class("nav-toggle js-nav-toggle");
        setNAV_Class("nav js-nav");
      }
    };
  return (
    <div className="contain">
      <div className="headnav">
        <header className="header">
          <NavLink to="/" className="header__logo">
            Sahil Rathee
          </NavLink>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <NavLink to="/about" className="header__nav__item__link">
                  About
                </NavLink>
              </li>
              <li className="header__nav__item">
                <NavLink to="/resume" className="header__nav__item__link">
                  Resume
                </NavLink>
              </li>
              <li className="header__nav__item">
                <NavLink to="/skills" className="header__nav__item__link">
                  Skills
                </NavLink>
              </li>
              <li className="header__nav__item">
                <NavLink to="/projects" className="header__nav__item__link">
                  Projects
                </NavLink>
              </li>
              <li className="header__nav__item">
                <NavLink to="/contact" className="header__nav__item__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <button
            onClick={handle_NAV_TOGGLE_Click}
            className={NAV_TOGGLE_Class}
          >
            <div className="nav-toggle__content">
              <div className="nav-toggle__close"></div>
              <div className="nav-toggle__open">menu</div>
            </div>
          </button>
        </header>
        <nav className={NAV_Class}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/about" className="nav__item__wrapper">
                <span className="nav__item__icon">
                  <FaRegQuestionCircle />
                </span>
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/resume" className="nav__item__wrapper">
                <span className="nav__item__icon">
                  <BsNewspaper />
                </span>
                Resume
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/skills" className="nav__item__wrapper">
                <span className="nav__item__icon">
                  <FaUniversity />
                </span>
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/projects" className="nav__item__wrapper">
                <span className="nav__item__icon">
                  <SiPolymerproject />
                </span>
                Projects
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__item__wrapper">
                <span className="nav__item__icon">
                  <IoMdContact />
                </span>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar2;
