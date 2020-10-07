import React from "react";
import "./Loading.css";
import Loading1 from "./Loaders/Loading1/Loading1";
import Loading2 from "./Loaders/Loading2/Loading2";
import Loading3 from "./Loaders/Loading3/Loading3";
import Loading4 from "./Loaders/Loading4/Loading4";

function Loading({ randomNumber }) {
  const colors = ["#7817a7", "brown", "#000", "#ffde6b"];
  return (
    <div className="loading" style={{ backgroundColor: colors[randomNumber] }}>
      {randomNumber === 0 ? (
        <Loading1 />
      ) : randomNumber === 1 ? (
        <Loading2 />
      ) : randomNumber === 2 ? (
        <Loading3 />
      ) : (
        <Loading4 />
      )}
    </div>
  );
}

export default Loading;
