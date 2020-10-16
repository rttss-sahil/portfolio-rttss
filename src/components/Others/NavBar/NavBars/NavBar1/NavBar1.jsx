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

function NavBar1() {
  const [NAV_TOGGLE_Class, setNAV_TOGGLE_Class] = useState("nav-toggle"),
    [MENU_Class, setMENU_Class] = useState("menu"),
    [head_Class, setHead_Class] = useState("head"),
    handleNAV_TOGGLE_Click = () => {
      document.body.classList.toggle("no-scroll");
      NAV_TOGGLE_Class === "nav-toggle"
        ? setNAV_TOGGLE_Class("nav-toggle open")
        : setNAV_TOGGLE_Class("nav-toggle");
      MENU_Class === "menu"
        ? setMENU_Class("menu collapse")
        : setMENU_Class("menu");
      head_Class === "head"
        ? setHead_Class("head head__white")
        : setHead_Class("head");
    };
  const clickhandler = (top) => {
    document.body.classList.remove("no-scroll");
    setNAV_TOGGLE_Class("nav-toggle");
    setMENU_Class("menu");
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <div className={head_Class}>
        <NavLink to="/" className="logo">
          Sahil Rathee
        </NavLink>
        <div onClick={handleNAV_TOGGLE_Click} className={NAV_TOGGLE_Class}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={MENU_Class}>
        <div className="top">
          <div className="topbar">
            <NavLink
              target="_blank"
              to={{ pathname: "mailto:sahil.git@outlook.com" }}
              className="mail"
            >
              <FiMail />
              <p>sahil.git@outlook.com</p>
            </NavLink>
            <NavLink
              target="_blank"
              to={{ pathname: "tel:+919992396866" }}
              className="phone"
            >
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
              <NavLink to="/skills" onClick={() => clickhandler(750)}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => clickhandler(1200)}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => clickhandler(2800)}>
                Contact
              </NavLink>
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
    </React.Fragment>
  );
}

export default NavBar1;
