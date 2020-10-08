import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./NavBar1.css";

function NavBar1(props) {
  const [NAV_TOGGLE_Class, setNAV_TOGGLE_Class] = useState("nav-toggle"),
    [MENU_RIGHT_Class, setMENU_RIGHT_Class] = useState("menu"),
    handleNAV_TOGGLE_Click = () => {
      NAV_TOGGLE_Class === "nav-toggle"
        ? setNAV_TOGGLE_Class("nav-toggle open")
        : setNAV_TOGGLE_Class("nav-toggle");
      MENU_RIGHT_Class === "menu"
        ? setMENU_RIGHT_Class("menu collapse")
        : setMENU_RIGHT_Class("menu");
    };
  return (
    <div className="container">
      <nav>
        <div id="navigation">
          <NavLink to="/" className="logo">
            Sahil Rathee
          </NavLink>
          <div onClick={handleNAV_TOGGLE_Click} className={NAV_TOGGLE_Class}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={MENU_RIGHT_Class}>
          <div className="top">
            <div className="topbar">
              <NavLink
                to={{ pathname: "mailto:sahil.git@outlook.com" }}
                className="mail"
              >
                <FiMail />
                <p>sahil.git@outlook.com</p>
              </NavLink>
              <NavLink to={{ pathname: "tel:+919992396866" }} className="phone">
                <FiPhoneCall />
                <p>+91-999-239-6866</p>
              </NavLink>
              <NavLink
                target="_blank"
                to={{ pathname: "https://goo.gl/maps/Q3DzphNrFjUfDjvH9" }}
                className="address"
              >
                <BsFillHouseFill />
                <p>New Delhi, India</p>
              </NavLink>
            </div>
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
          </div>
          <div className="social">
            <NavLink
              target="_blank"
              to={{ pathname: "https://github.com/rttss" }}
              className="github"
            >
              <AiFillGithub />
              <p>Github</p>
            </NavLink>
            <NavLink
              target="_blank"
              to={{ pathname: "https://www.instagram.com/sahil_rttss/" }}
              className="insta"
            >
              <AiOutlineInstagram />
              <p>Instagram</p>
            </NavLink>
            <NavLink
              target="_blank"
              to={{
                pathname: "https://www.linkedin.com/in/sahil-rathee-b3993116b/",
              }}
              className="linkedIn"
            >
              <AiFillLinkedin />
              <p>LinkedIn</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
