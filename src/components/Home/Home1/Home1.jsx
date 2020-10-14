import React, { useState, useEffect } from "react";
import Projects from "./Projects/Projects";

// CSS
import "./Home1.css";

// LAzy Loading
const Main = React.lazy(() => import("./Main/Main"));
const Skills = React.lazy(() => import("./Skills/Skills"));

function Home1({ randomNumber }) {
  //REF
  const scrollDiv = React.createRef();

  // STATES
  const [position, setPosition] = useState({
      clientX: -100,
      clientY: -100,
    }),
    [scrollY, setScrollY] = useState(window.scrollY),
    getwidth = window.innerWidth;

  useEffect(() => {
    // CURSOR
    window.addEventListener(
      "mousemove",
      (e) => {
        const { clientX, clientY } = e;
        setPosition({
          clientX,
          clientY,
        });
      },
      { passive: true }
    );
    window.addEventListener(
      "scroll",
      () => {
        setScrollY(window.scrollY);
      },
      { passive: true }
    );
  }, []);

  return (
    <React.Fragment>
      <Main
        randomNumber={randomNumber}
        scrollDiv={scrollDiv}
        scrollY={scrollY}
      />
      <Skills scrollDiv={scrollDiv} scrollY={scrollY} />
      <Projects getwidth={getwidth} scrollY={scrollY} />
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
