import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import {AiOutlineMedium} from 'react-icons/ai'
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";
import {ImBehance, ImDribbble, ImStackoverflow} from 'react-icons/im'


import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./NavBar1.css";
import Navlinks from "../../../Navlinks/Navlinks";

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
            <Navlinks
              newTab={true}
              link='mailto:sahil.git@outlook.com'
              className='mail'
              icon={FiMail}
              p='sahil.git@outlook.com'
            />
            <Navlinks
              newTab={true}
              link="tel:+919992396866"
              className="phone"
              icon={FiPhoneCall}
              p='+91-999-239-6866'
            />
            <Navlinks
              newTab={true}
              link="https://goo.gl/maps/Q3DzphNrFjUfDjvH9"
              className="address"
              icon={BsFillHouseFill}
              p='New Delhi, India'
            />
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
          <Navlinks
            newTab={true}
            link="https://github.com/rttss-sahil"
            className="github"
            icon={AiFillGithub}
            color='#242525'
          />
          <Navlinks
            newTab={true}
            link="https://www.instagram.com/rttss_sahil/"
            className="insta"
            icon={AiOutlineInstagram}
            color='#ff0033'
          />
          <Navlinks
            newTab={true}
            link="https://www.linkedin.com/in/sahil-rathee-b3993116b/"
            className="linkedIn"
            icon={AiFillLinkedin}
            color='#007bff'
          />
          <Navlinks
            newTab={true}
            link="https://stackoverflow.com/users/14934835/rttss-sahil"
            className="stack-overflow"
            icon={ImStackoverflow}
            color='#ffa500'
          />
          <Navlinks
            newTab={true}
            link="https://medium.com/@rttss-sahil"
            className="medium"
            icon={AiOutlineMedium}
            color='#000000'
          />
          <Navlinks
            newTab={true}
            link="https://www.behance.net/rttss_sahil/"
            className="behance"
            icon={ImBehance}
            color='#0057FF'
          />
          <Navlinks
            newTab={true}
            link="https://dribbble.com/rttss_sahil"
            className="dribble"
            icon={ImDribbble}
            color='#f03353'
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar1;
