import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import "./Projects.css";

const projects = [
  {
    id: "1",
    imageColor: "#FFD301",
    image: "cursor",
    header: "Full-fledged Web-Apps",
    description:
      "These include self-sustained mega apps, E-commerce websites, Social Media Apps, full stack problem-solving webapps.",
    classname: "project1",
    collection: [
      {
        url: "http://mern-photos.netlify.app",
        img: "mern-photos.png",
        title: "Photos Social Media",
      },
      {
        url: "#",
        img: "development.jpg",
        title: "Shopie E-Commerce {Development}",
      },
    ],
  },
  {
    id: "2",
    imageColor: "#EAADAD",
    image: "color-picker",
    header: "PWA Collection",
    description:
      "This collection is going to represent small, but installable and user-centered progressive WebApps-the future of internet.",
    classname: "project2",
    collection: [
      {
        url: "https://calculator-rttss.netlify.app/",
        img: "calculator-rttss.png",
        title: "Calculator Rttss",
      },
      {
        url: "https://weather-rttss.netlify.app/",
        img: "weather-rttss.png",
        title: "Weather Rttss",
      },
      {
        url: "https://clock-rttss.netlify.app/",
        img: "clock-rttss.png",
        title: "Clock Rttss",
      },
    ],
  },
  {
    id: "3",
    imageColor: "#4C40F7",
    image: "hand",
    header: "UI Projects",
    description:
      "As the name suggests, the collection prioritize looks over functionality to show the mindfulness, color-themed, cool-looking websites.",
    classname: "project3",
    collection: [
      {
        url: "https://weather-rttss.netlify.app/",
        img: "weather-rttss.png",
        title: "Weather Rttss",
      },
      {
        url: "https://clock-rttss.netlify.app/",
        img: "clock-rttss.png",
        title: "Clock Rttss",
      },
      {
        url: "https://rttss.netlify.app",
        img: "portfolio-rttss.png",
        title: "Portfolio | Sahil Rathee",
      },
    ],
  },
];

function Projects({ getwidth, scrollY, pics }) {
  const sliderItems = projects.length,
    lastIndex = sliderItems - 1,
    [currentSliderIndex, setCurrentSliderIndex] = useState(
      window.innerWidth <= 768
        ? [0]
        : window.innerWidth >= 1200
        ? [0, 1, 2]
        : [0, 1]
    ),
    [projectSlider_Class, setProjectSlider_Class] = useState(
      "projects__slider"
    ),
    [project_Class, setProject_Class] = useState("project"),
    [answer_Class, setAnswer_Class] = useState("answer"),
    [backDrop, setbackDrop] = useState("backdrop");

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.pageYOffset >= 1300
          ? setAnswer_Class("answer animate")
          : setAnswer_Class("answer");

        window.pageYOffset >= 1350
          ? setProject_Class("project animate")
          : setProject_Class("project");

        window.pageYOffset >= 1450
          ? setProjectSlider_Class("projects__slider animate")
          : setProjectSlider_Class("projects__slider");
      },
      { passive: true }
    );
    window.addEventListener(
      "resize",
      () => {
        window.innerWidth < 768 && setCurrentSliderIndex([0]);
        window.innerWidth >= 768 && setCurrentSliderIndex([0, 1]);
        window.innerWidth >= 1200 && setCurrentSliderIndex([0, 1, 2]);
      },
      { passive: true }
    );
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

  const backdropHandler = () => {
    setbackDrop("backdrop animate");
    document.body.style.overflow = "hidden";
  };
  const backdropCancelHandler = () => {
    setbackDrop("backdrop");
    document.body.style.overflow = "initial";
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
      {currentSliderIndex.map((index) =>
        projects.map(
          (project, i) =>
            index === i && (
              <div key={i} className={backDrop} onClick={backdropCancelHandler}>
                <div className="backdrop__main">
                  {project.collection.map((item, i) => (
                    <NavLink
                      key={i}
                      target="_blank"
                      to={{
                        pathname: item.url,
                      }}
                      className="backdrop__frame"
                    >
                      <img src={`${pics + item.img}`} alt="" />
                      <div>{item.title}</div>
                    </NavLink>
                  ))}
                </div>
              </div>
            )
        )
      )}
      <Swipeable onSwipedLeft={previousSlide} onSwipedRight={nextSlide}>
        <div className={projectSlider_Class}>
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
                    <div className="project__button" onClick={backdropHandler}>
                      View Collection
                    </div>
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
