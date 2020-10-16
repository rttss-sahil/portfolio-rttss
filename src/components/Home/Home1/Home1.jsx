import React, { useState, useEffect } from "react";
import Projects from "./Projects/Projects";

// CSS
import "./Home1.css";
import Contact from "./Contact/Contact";

// LAzy Loading
const Main = React.lazy(() => import("./Main/Main"));
const Skills = React.lazy(() => import("./Skills/Skills"));

function Home1({ randomNumber }) {
  // STATES
  const pics = `${process.env.PUBLIC_URL}/assets/img/`;
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
      <Main randomNumber={randomNumber} scrollY={scrollY} pics={pics} />
      <Skills scrollY={scrollY} pics={pics} />
      <Projects getwidth={getwidth} scrollY={scrollY} pics={pics} />
      <Contact scrollY={scrollY} />
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
