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
    },
    linkHandler = (e, url) => {
      e.preventDefault();
      window.location = `${url}`;
    };
  return (
    <header>
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
                  to="#"
                  className="mail"
                  onClick={(e) =>
                    linkHandler(e, "mailto:sahil.git@outlook.com")
                  }
                >
                  <FiMail />
                  <p>sahil.git@outlook.com</p>
                </NavLink>
                <NavLink
                  to="#"
                  className="phone"
                  onClick={(e) => linkHandler(e, "tel:+919992396866")}
                >
                  <FiPhoneCall />
                  <p>+91-999-239-6866</p>
                </NavLink>
                <NavLink
                  to="#"
                  className="address"
                  onClick={(e) =>
                    linkHandler(e, "https://goo.gl/maps/Q3DzphNrFjUfDjvH9")
                  }
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
                to="#"
                className="github"
                onClick={(e) => linkHandler(e, "https://github.com/rttss")}
              >
                <AiFillGithub />
                <p>Github</p>
              </NavLink>
              <NavLink
                to="#"
                className="insta"
                onClick={(e) =>
                  linkHandler(e, "https://www.instagram.com/sahil_rttss/")
                }
              >
                <AiOutlineInstagram />
                <p>Instagram</p>
              </NavLink>
              <NavLink
                to="#"
                className="linkedIn"
                onClick={(e) =>
                  linkHandler(
                    e,
                    "https://www.linkedin.com/in/sahil-rathee-b3993116b/"
                  )
                }
              >
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar1;
