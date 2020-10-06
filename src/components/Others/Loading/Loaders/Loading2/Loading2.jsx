import React from "react";
import "./Loading2.css";

function Loading2() {
  return (
    <div className="loading2-parent">
      <div className="wrapper">
        <div className="col-33">
          <div className="loading2">
            <div className="square square-c state1c"></div>
            <div className="square square-c state2c"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading2;
