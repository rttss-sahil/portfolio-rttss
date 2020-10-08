import React, { useState, useEffect } from "react";
import "./Home1.css";
import Main from "./Main/Main";

function Home1({ randomNumber }) {
  const [position, setPosition] = useState({
    clientX: -100,
    clientY: -100,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      setPosition({
        clientX,
        clientY,
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Main randomNumber={randomNumber} />
      <div
        id="cursor"
        style={{
          transform: `translate(${position.clientX}px, ${position.clientY}px)`,
        }}
      ></div>
    </React.Fragment>
  );
}

export default Home1;
