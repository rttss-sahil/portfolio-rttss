import React from "react";
import "./Home1.css";
import Main from "./Main/Main";

function Home1({ randomNumber }) {
  return (
    <div>
      <Main randomNumber={randomNumber} />
    </div>
  );
}

export default Home1;
