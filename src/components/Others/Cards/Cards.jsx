import React from "react";
import "./Cards.css";
import { GrShare } from "react-icons/gr";

function Cards(props) {
  return (
    <React.Fragment>
      <div data-name="Hello" className={`card--square card--${props.large}`}>
        <GrShare className="icon" style={{ color: "#E9E9E9" }} />
        <div className="colour">
          <img src="https://loremflickr.com/320/320/" alt="" />
        </div>
        <div className="label">{props.label}</div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
