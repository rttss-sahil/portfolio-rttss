import React from "react";
import { useState } from "react";
import "./Projects.css";

const pics = process.env.PUBLIC_URL + "/assets/img/";

const ProjectMaker = ({
  imageColor,
  image,
  header,
  description,
  classname,
}) => {
  const [project_Class, setProject_Class] = useState("project");
  window.addEventListener("scroll", () => {
    window.pageYOffset >= 1450
      ? setProject_Class("project animate")
      : setProject_Class("project");
  });
  return (
    <div className={`${project_Class} ${classname}`}>
      <div
        className={`project__image`}
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
  const // [scrollY, setscrollY] = useState(0),
    sliderItems = 3,
    [currentSliderIndex, setCurrentSliderIndex] = useState(1),
    [answer_Class, setAnswer_Class] = useState("answer");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1150) {
      // setscrollY(window.scrollY);
      setAnswer_Class("answer animate");
    } else {
      setAnswer_Class("answer");
    }
  });

  const previousSlide = () => {
    const lastIndex = sliderItems - 1;
    const shouldReset = currentSliderIndex === 0;
    const index = shouldReset ? lastIndex : currentSliderIndex;

    setCurrentSliderIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = sliderItems - 1;
    const shouldReset = currentSliderIndex === lastIndex;
    const index = shouldReset ? 0 : currentSliderIndex + 1;

    setCurrentSliderIndex(index);
  };

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
          classname="project1"
        />
        <ProjectMaker
          imageColor="#EAADAD"
          image="color-picker"
          header="PWA Collection"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro cupiditate adipisci sunt rerum vitae explicabo quibusdam"
          classname="project2"
        />
        <ProjectMaker
          imageColor="#4C40F7"
          image="hand"
          header="UI Projects"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro cupiditate adipisci sunt rerum vitae explicabo quibusdam"
          classname="project3"
        />
      </div>
      {console.log(currentSliderIndex)}
      <div className="project__changer">
        <div className="changer__prev" onClick={previousSlide}>
          <span></span>
          <div className="prev__btn"></div>
        </div>
        <div className="changer__next" onClick={nextSlide}>
          <div className="next__btn"></div>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
