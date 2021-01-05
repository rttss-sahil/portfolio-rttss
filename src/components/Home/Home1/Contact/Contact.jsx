import React from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";

import "./Contact.css";
import { useState } from "react";
import { Social } from "../../../Others/Navlinks/Navlinks";

function Contact() {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    [name, setName] = useState({ value: "", error: false, touched: false }),
    [email, setEmail] = useState({ value: "", error: false, touched: false }),
    [occupation, setOccupation] = useState({
      value: "placeholder",
      error: false,
      touched: false,
    }),
    [totalerror, setTotalerror] = useState(true),
    [buttonValue, setButtonValue] = useState("Let's Talk"),
    [buttonLoading, setButtonLoading] = useState(false),
    onChangehandler = (e) => {
      switch (e.target.id) {
        case "name":
          setName({
            ...name,
            value: e.target.value,
            error: name.value.length <= 4 && e.target.value <= 4,
          });
          break;

        case "email":
          setEmail({
            ...email,
            value: e.target.value,
            error: !email.value.match(regex) && !e.target.value.match(regex),
          });
          break;

        case "occupation":
          setOccupation({
            ...occupation,
            value: e.target.value,
          });
          break;
        default:
          break;
      }

      if (!name.error && !email.error && !occupation.error) {
        setTotalerror(false);
      }
    },
    submithandler = async (e) => {
      e.preventDefault();
      if (!name.value <= 4 && !!email.value.match(regex) && !occupation.error) {
        setButtonLoading(true);
        await Axios({
          url: "https://portfolio-rttss-backend.herokuapp.com/",
          method: "POST",
          data: {
            name: name.value,
            email: email.value,
            occupation: occupation.value,
          },
        });
        setButtonLoading(false);
        setButtonValue("Sent !");
        setTimeout(() => {
          setButtonValue("Let's talk");
        }, 2000);
      } else {
      }
    },
    scrolltopHandler = () => {
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

      <div className={`contact__form ${buttonLoading}`}>
        <form onSubmit={submithandler}>
          <div className="input input__name">
            <input
              type="text"
              name="name"
              id="name"
              value={name.value}
              placeholder="Name"
              onChange={onChangehandler}
              onBlur={() => {
                setName({ ...name, touched: true });
              }}
            />
            {name.error && name.touched && <span>*</span>}
          </div>
          <div className="input input__email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email.value}
              onChange={onChangehandler}
              onBlur={() => {
                setEmail({ ...email, touched: true });
              }}
            />
            {email.touched && email.error && <span>*</span>}
          </div>
          <div className="input input__occupation">
            <select
              name="occupation"
              id="occupation"
              onChange={onChangehandler}
              value={occupation.value}
              onBlur={() => {
                setOccupation({ ...occupation, touched: true });
              }}
            >
              <option value="placeholder" disabled>
                Why are you here?
              </option>
              <option value="friend">Just Checking the Website</option>
              <option value="fan">Admiring Your Work</option>
              <option value="hr">Looking for Working Together</option>
              <option value="other">Other..</option>
            </select>
            {occupation.error && occupation.touched && <span>*</span>}
          </div>
          <input type="submit" disabled={totalerror} value={buttonValue} />
        </form>
      </div>
      {/* Social */}
      <Social />
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
