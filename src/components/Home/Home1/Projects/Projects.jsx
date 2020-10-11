import React from "react";
import { useState } from "react";
import "./Projects.css";

const pics = process.env.PUBLIC_URL + "/assets/img/";

const ProjectMaker = ({ imageColor, image, header, description }) => {
  const [project_Class, setProject_Class] = useState("project");
  window.addEventListener("scroll", () => {
    window.pageYOffset >= 1700
      ? setProject_Class("project animate")
      : setProject_Class("project");
  });
  return (
    <div className={project_Class}>
      <div
        className="project__image"
        style={{
          background: `${imageColor}`,
        }}
      >
        <img src={`${pics}${image}.png`} alt={`${header}`} />
      </div>
      <div className="project__header">{header}</div>
      <div className="project__description">{description}</div>
      <div className="project__button">View Collection</div>
    </div>
  );
};

function Projects() {
  const [scrollY, setscrollY] = useState(0),
    [answer_Class, setAnswer_Class] = useState("answer");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1150) {
      setscrollY(window.scrollY);
      setAnswer_Class("answer animate");
    } else {
      setAnswer_Class("answer");
    }
  });
  return (
    <div className="projects" id="projects">
      <div className="projects__center">
        <div className="question">
          <div></div>
          <span>What I Do</span>
        </div>
        <div className={answer_Class}>
          <span>Clean and responsive</span>
          <span>landing website</span>
          <span>for all your needs.</span>
        </div>
      </div>
      <div className="projects__slider">
        <ProjectMaker
          imageColor="#FFD301"
          image="cursor"
          header="Full-fledged Web-Apps"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro cupiditate adipisci sunt rerum vitae explicabo quibusdam"
        />
        {/* <ProjectMaker
          imageColor="#EAADAD"
          image="color-picker"
          header="PWA Collection"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro cupiditate adipisci sunt rerum vitae explicabo quibusdam"
        /> */}
        {/* <ProjectMaker
          imageColor="#4C40F7"
          image="hand"
          header="UI Projects"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro cupiditate adipisci sunt rerum vitae explicabo quibusdam"
        /> */}
      </div>
    </div>
  );
}

export default Projects;
