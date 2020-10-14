import React, { useState } from "react";
import NavBar from "../../../Others/NavBar/NavBar";
import { CgScrollV, CgWindows } from "react-icons/cg";

// CSS
import "./Main.css";
import { useEffect } from "react";

// PICS
const pics = process.env.PUBLIC_URL + "/assets/img/";

function Main({ randomNumber, scrollDiv, scrollY }) {
  const [span1_Class, setSpan1_Class] = useState("span1 opened"),
    [span2_Class, setSpan2_Class] = useState("span2 opened"),
    [span3_Class, setSpan3_Class] = useState("span3"),
    [span4_Class, setSpan4_Class] = useState("span4"),
    [main_View_Class, setMain_View_Class] = useState(
      "main__view aos-init aos-animate"
    ),
    [main_Figure_Class, setMain_Figure_Class] = useState(
      "main__figure aos-init"
    ),
    [button_Scroll_Class, setButton_Scroll_Class] = useState("btn__scroll");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset >= 0
        ? setSpan1_Class("span1 opened")
        : setSpan1_Class("span1");
      if (window.pageYOffset >= 100) {
        setSpan2_Class("span2 opened");
        setMain_Figure_Class("main__figure aos-init aos-animate");
      } else {
        setSpan2_Class("span2");
        setMain_Figure_Class("main__figure aos-init");
      }
      if (window.pageYOffset >= 150) {
        setSpan3_Class("span3 opened");
        setButton_Scroll_Class("btn__scroll animate");
      } else {
        setSpan3_Class("span3");
        setButton_Scroll_Class("btn__scroll");
      }
      if (window.pageYOffset >= 200) {
        setSpan4_Class("span4 opened");
        setMain_View_Class("main__view aos__init aos-animate");
      } else {
        setSpan4_Class("span4");
        setMain_View_Class("main__view aos-init");
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="main">
        <NavBar randomNumber={randomNumber} />
        <div className="main__bg">
          <img src={`${pics}bg-main.jpg`} alt="" />
        </div>
        <div className="main__center">
          <div className="question">
            <div></div>
            <p>Who Am I</p>
          </div>
          <div className="answer">
            <span className={span1_Class}>Hello, my</span>
            <span className={span2_Class}>name's Sahil</span>
            <span className={span3_Class}>I'm UI designer</span>
            <span className={span4_Class}>cum developer</span>
          </div>
        </div>
        <div className={main_View_Class}>
          <div className="main__preview">
            <img
              className="main__pic"
              src={`${pics}main-pic-6.png`}
              style={{
                width: "100%",
              }}
              alt=""
            />
          </div>
          <div className="main__preview">
            <img
              className="main__pic js-parallax"
              src={`${pics}main-pic-1.png`}
              style={{
                transform: `translate3d(0px, ${(-scrollY + 50) / 5}px, 0px)`,
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
          <div className="main__preview">
            <img
              className="main__pic js-parallax"
              src={`${pics}main-pic-2.png`}
              style={{
                transform: `translate3d(0px, ${(-scrollY + 150) / 8}px, 0px)`,
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
          <div className="main__preview">
            <img
              className="main__pic"
              src={`${pics}main-pic-3.png`}
              style={{
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
          <div className="main__preview">
            <img
              className="main__pic"
              src={`${pics}main-pic-4.png`}
              style={{
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
          <div className="main__preview">
            <img
              className="main__pic js-parallax"
              src={`${pics}main-pic-5.png`}
              style={{
                transform: `translate3d(0px, ${(-scrollY + 150) / 8}px, 0px)`,
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
          <div className="main__preview">
            <img
              className="main__pic js-parallax"
              src={`${pics}main-pic-7.png`}
              style={{
                transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
        </div>
        <div className="main__figures">
          <div className="main__figure aos-init aos-animate">
            <img
              src={`${pics}figure-1.png`}
              style={{
                transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
          <div className={main_Figure_Class}>
            <img
              src={`${pics}figure-2.png`}
              style={{
                transform: `translate3d(0px, ${(-scrollY + 350) / 5}px, 0px)`,
                transition: "transform 0.75s cubic-bezier(0, 0, 0, 1) 0s",
              }}
              alt=""
            />
          </div>
        </div>
        <button
          className={button_Scroll_Class}
          onClick={(e) => {
            if (scrollDiv.current) {
              window.scrollTo({
                top: 850,
                behavior: "smooth",
              });
            }
          }}
        >
          <CgScrollV />
        </button>
      </div>
    </React.Fragment>
  );
}
export default Main;
