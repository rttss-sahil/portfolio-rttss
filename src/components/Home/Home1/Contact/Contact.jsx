import React from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [occupation, setOccupation] = useState(""),
    onChangehandler = (e) => {
      switch (e.target.id) {
        case "name":
          setName(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        case "occupation":
          setOccupation(e.target.value);
          break;
        default:
          break;
      }
    },
    submithandler = async (e) => {
      e.preventDefault();
      console.log("SENDING...");
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("occupation", occupation);

      // console.log(name, email, occupation);
      const res = await Axios({
        url: "https://portfolio-rttss-backend.herokuapp.com/",
        method: "POST",
        data: { name, email, occupation },
      });
      // console.log(JSON.stringify({ name }));
    };
  const scrolltopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact">
      <div className="contact__clippath"></div>
      <div className="contact__center">
        <div className="question">
          <div></div>
          <span>
            Say Hello{" "}
            <span role="img" aria-label="">
              👋
            </span>
          </span>
        </div>
        <div className="answer">
          <span>Let's Work</span>
          <span>Together</span>
        </div>
      </div>
      <div className="contact__address topbar">
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
      <div className="contact__form">
        <form
          // action="http://localhost:5000/"
          // method="post"
          onSubmit={submithandler}
        >
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Name"
            onChange={onChangehandler}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={onChangehandler}
          />
          <select
            name="occupation"
            id="occupation"
            onChange={onChangehandler}
            value={occupation}
          >
            <option value="placeholder" defaultValue disabled>
              Why are you here?
            </option>
            <option value="friend">Just Checking the Website</option>
            <option value="fan">Admiring Your Work</option>
            <option value="hr">Looking for Working Together</option>
            <option value="other">Other..</option>
          </select>
          <input type="submit" value="Let's Talk" />
        </form>
      </div>
      <div className="contact__social social">
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
      <div className="contact__footer">
        <div className="footer__top">
          <div className="footer__logo">Sahil Rathee</div>
          <div className="footer__quote">
            <span>You only have one chance to make a first impression.</span>
            <span>Let's make it an amazing one.</span>
          </div>
        </div>
        <div className="footer__horizontalline"></div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()}. RTTSS
          </div>
          <div className="footer__scrolltop">
            <button onClick={scrolltopHandler}>Scroll To Top</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
