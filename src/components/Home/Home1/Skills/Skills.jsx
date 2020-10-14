import React from "react";
import { useState } from "react";
import "./Skills.css";

const pics = `${process.env.PUBLIC_URL}/assets/img/`;

function Skills({ scrollDiv, scrollY }) {
  const [weapon_Section_Class, setWeapon_Section_Class] = useState(
      "weapon__section"
    ),
    [answer_Class, setAnswer_Class] = useState("answer"),
    [figure_Class, setFigure_class] = useState("details__figure");
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset >= 600) {
        setAnswer_Class("answer animate");
        setFigure_class("details__figure animate");
      } else {
        setAnswer_Class("answer");
        setFigure_class("details__figure");
      }
      window.pageYOffset >= 850
        ? setWeapon_Section_Class("weapon__section animate")
        : setWeapon_Section_Class("weapon__section");
    },
    { passive: true }
  );
  return (
    <div ref={scrollDiv} className="details" id="details">
      <div className="details__center">
        <div className="question">
          <div></div>
          <span>What I Do</span>
        </div>
        <div className={answer_Class}>
          <span>I enjoy creating</span>
          <span>delightful, fast and</span>
          <span>reliable digital experience.</span>
        </div>
      </div>
      <div className="weapons">
        <div className="weapon__header">
          <div>My Weapons: </div>
        </div>
        <div className={weapon_Section_Class}>
          <div className="weapon weapon1" alt="React.Js">
            <img src={`${pics}react.png`} alt="React.Js" />
          </div>
          <div className="weapon weapon2" alt="Node.Js">
            <img src={`${pics}node.png`} alt="Node.Js" />
          </div>
          <div className="weapon weapon3" alt="MongoDB">
            <img src={`${pics}mongodb.png`} alt="MongoDB" />
          </div>
          <div className="weapon weapon4" alt="React-Redux">
            <img src={`${pics}redux.png`} alt="React-Redux" />
          </div>
          <div className="weapon weapon5" alt="SASS">
            <img src={`${pics}sass.png`} alt="SASS" />
          </div>
          <div className="weapon weapon6" alt="Heroku">
            <img src={`${pics}heroku.png`} alt="Heroku" />
          </div>
        </div>
      </div>
      <div className="details__figures">
        <div className="details__figure animate">
          <img
            src={`${pics}figure-1.png`}
            style={{
              transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
              transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
            }}
            alt=""
          />
        </div>
        <div className={figure_Class}>
          <img
            src={`${pics}figure-2.png`}
            style={{
              transform: `translate3d(0px, ${(-scrollY + 350) / 3}px, 0px)`,
              transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
            }}
            alt=""
          />
        </div>
        <div className={figure_Class}>
          <img
            src={`${pics}figure-3.png`}
            style={{
              transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
              transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
