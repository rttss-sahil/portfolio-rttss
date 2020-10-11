import React from "react";
import "./Skills.css";

function Skills({ scrollDiv }) {
  return (
    <div ref={scrollDiv} className="details" id="details">
      <div className="details__center">
        <div className="question">
          <div></div>
          <span>What I Do</span>
        </div>
        <div className="answer">
          <span>I enjoy creating</span>
          <span>delightful, fast and</span>
          <span>reliable digital experience.</span>
        </div>
      </div>
      <div className="weapon__section">
      i85209.
      </div>
      <div className="details__figures"></div>
    </div>
  );
}

export default Skills;