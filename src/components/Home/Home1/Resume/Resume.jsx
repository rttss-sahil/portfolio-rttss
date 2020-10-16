import React, { useEffect, useState } from "react";
import "./Resume.css";

function Resume({ scrollY, pics }) {
  const [answer_Class, setAnswer_Class] = useState("answer");

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.pageYOffset >= 2500
          ? setAnswer_Class("answer animate")
          : setAnswer_Class("answer");
      },
      { passive: true }
    );
  }, []);
  return (
    <div className="resume">
      <div className="resume__center">
        <div className="question">
          <div></div>
          <span>Who i Work With</span>
        </div>
        <div className={answer_Class}>
          <span>Art Direction for</span>
          <span>leading brands</span>
          <span>and enthusiasts</span>
        </div>
      </div>
      <div className="resume__figures">
        <div className="figures__preview">
          <img
            src={`${pics}work-cube.png`}
            alt=""
            style={{
              transform: `translate3d(0px, ${(-scrollY + 2400) / 5}px, 0px)`,
              transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
            }}
          />
        </div>
        
      </div>
    </div>
  );
}

export default Resume;
