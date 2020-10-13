import React, { useEffect, useState } from "react";
import { Swipeable } from "react-swipeable";
import "./Projects.css";

const pics = process.env.PUBLIC_URL + "/assets/img/",
  projects = [
    {
      id: "1",
      imageColor: "#FFD301",
      image: "cursor",
      header: "Full-fledged Web-Apps",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro cupiditate adipisci sunt rerum vitae explicabo quibusdam",
      classname: "project1",
    },
    {
      id: "2",
      imageColor: "#EAADAD",
      image: "color-picker",
      header: "PWA Collection",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro cupiditate adipisci sunt rerum vitae explicabo quibusdam",
      classname: "project2",
    },
    {
      id: "3",
      imageColor: "#4C40F7",
      image: "hand",
      header: "UI Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro cupiditate adipisci sunt rerum vitae explicabo quibusdam",
      classname: "project3",
    },
  ];

function Projects({ getwidth, scrollY }) {
  const sliderItems = projects.length,
    lastIndex = sliderItems - 1,
    [currentSliderIndex, setCurrentSliderIndex] = useState([0]),
    [project_Class, setProject_Class] = useState("project"),
    [answer_Class, setAnswer_Class] = useState("answer");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 1300) {
        setAnswer_Class("answer animate");
      } else {
        setAnswer_Class("answer");
      }
      window.pageYOffset >= 1350
        ? setProject_Class("project animate")
        : setProject_Class("project");
    });
    window.innerWidth >= 768 && setCurrentSliderIndex([0, 1]);
    window.innerWidth >= 1200 && setCurrentSliderIndex([0, 1, 2]);
  }, []);

  // PREVIOUS SLIDE
  const previousSlide = () => {
    const shouldReset = currentSliderIndex[0] === 0;
    const index = shouldReset ? lastIndex : currentSliderIndex[0] - 1;
    window.innerWidth >= 768
      ? setCurrentSliderIndex([index, currentSliderIndex[0]])
      : setCurrentSliderIndex([index]);
  };

  // NEXT SLIDE
  const nextSlide = () => {
    const shouldReset = currentSliderIndex[0] === lastIndex;
    const index = shouldReset ? 0 : currentSliderIndex[0] + 1;
    window.innerWidth >= 768
      ? setCurrentSliderIndex([index, index + 1 > lastIndex ? 0 : index + 1])
      : setCurrentSliderIndex([index]);
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
      <Swipeable onSwipedLeft={previousSlide} onSwipedRight={nextSlide}>
        <div className="projects__slider">
          {console.log(currentSliderIndex)}
          {currentSliderIndex.map((index) =>
            projects.map(
              (project, i) =>
                index === i && (
                  <div
                    key={i}
                    className={`${project_Class} ${project.classname} ${
                      currentSliderIndex.includes(i) ? "active" : ""
                    }`}
                  >
                    <div
                      className={`project__image`}
                      style={{
                        background: `${project.imageColor}`,
                      }}
                    >
                      <img
                        src={`${pics}${project.image}.png`}
                        alt={`${project.header}`}
                      />
                    </div>
                    <div className="project__header">{project.header}</div>
                    <div className="project__description">
                      {project.description}
                    </div>
                    <div className="project__button">View Collection</div>
                  </div>
                )
            )
          )}
        </div>
      </Swipeable>
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
