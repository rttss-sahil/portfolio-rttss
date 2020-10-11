import React, { useState, useEffect } from "react";
import "./Home1.css";
import Projects from "./Projects/Projects";
const Main = React.lazy(() => import("./Main/Main"));
const Skills = React.lazy(() => import("./Skills/Skills"));

function Home1({ randomNumber }) {
  const scrollDiv = React.createRef();

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
      <Main randomNumber={randomNumber} scrollDiv={scrollDiv} />
      <Skills scrollDiv={scrollDiv} />
      <Projects />
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
