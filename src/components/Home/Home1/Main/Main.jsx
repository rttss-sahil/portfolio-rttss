import React, { useState, useEffect } from "react";
import NavBar from "../../../Others/NavBar/NavBar";
import "./Main.css";

// PICS
const pics = process.env.PUBLIC_URL + "/assets/img/main-pic-";

function Main({ randomNumber }) {
  const [span1_Class, setSpan1_Class] = useState("span1"),
    [span2_Class, setSpan2_Class] = useState("span2"),
    [span3_Class, setSpan3_Class] = useState("span3"),
    [span4_Class, setSpan4_Class] = useState("span4"),
    [scrollY, setScrollY] = useState(0),
    [main_View_Class, setMain_View_Class] = useState("main__view aos-init"),
    [position, setPosition] = useState({
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
    window.addEventListener("scroll", () => {
      window.scrollY >= 0
        ? setSpan1_Class("span1 opened")
        : setSpan1_Class("span1");
      window.scrollY >= 50
        ? setSpan2_Class("span2 opened")
        : setSpan2_Class("span2");
      window.scrollY >= 100
        ? setSpan3_Class("span3 opened")
        : setSpan3_Class("span3");
      if (window.scrollY >= 150) {
        setSpan4_Class("span4 opened");
        setMain_View_Class("main__view aos__init aos-animate");
        setScrollY(window.scrollY);
      } else {
        setSpan4_Class("span4");
        setMain_View_Class("main__view aos-init");
        setScrollY(window.scrollY);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className="main"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-main.jpg)`,
        }}
      >
        <NavBar randomNumber={randomNumber} />
        <div className="main_left">
          <div className="question">
            <div></div>
            <p>Who Am I</p>
          </div>
          <div className="answer">
            <span className={span1_Class}>Hi, my name's</span>
            <span className={span2_Class}>SAHIL RATHEE</span>
            <span className={span3_Class}>I'm UI DESIGNER</span>
            <span className={span4_Class}>+ WEB DEVELOPER</span>
          </div>
        </div>
        <div className="main_right">
          <div className={main_View_Class}>
            <div className="main__preview">
              <img
                className="main__pic"
                src={`${pics}6.png`}
                style={{
                  width: "100%",
                }}
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                src={`${pics}1.png`}
                style={{
                  transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
                  transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
                }}
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                src={`${pics}2.png`}
                style={{
                  transform: `translate3d(0px, ${
                    (-scrollY + 750) / 10
                  }px, 0px)`,
                  transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
                }}
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic"
                src={`${pics}3.png`}
                style={{
                  transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
                }}
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic"
                src={`${pics}4.png`}
                style={{
                  transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
                }}
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                src={`${pics}5.png`}
                style={{
                  transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
                  transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
                }}
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                src={`${pics}7.png`}
                style={{
                  transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
                  transition: "transform 0.5s cubic-bezier(0, 0, 0, 1) 0s",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="cursor"
        style={{
          transform: `translate(${position.clientX}px, ${position.clientY}px)`,
        }}
      ></div>
    </React.Fragment>
  );
}
export default Main;
