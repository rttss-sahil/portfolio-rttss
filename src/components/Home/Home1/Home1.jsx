import React, { useState, useEffect } from "react";
import "./Home1.css";
const Main = React.lazy(() => import("./Main/Main"));
const Skills = React.lazy(() => import("./Skills/Skills"));

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
      <Skills />
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
