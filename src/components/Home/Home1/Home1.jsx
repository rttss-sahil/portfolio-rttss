import React, { useState } from "react";
import { useEffect } from "react";
import "./Home1.css";

function Home1() {
  const [span1_Class, setSpan1_Class] = useState("span1"),
    [span2_Class, setSpan2_Class] = useState("span2"),
    [span3_Class, setSpan3_Class] = useState("span3"),
    [span4_Class, setSpan4_Class] = useState("span4"),
    [position, setPosition] = useState({
      pageX: 0,
      pageY: 0,
    });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      setPosition({
        pageX,
        pageY,
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
      window.scrollY >= 150
        ? setSpan4_Class("span4 opened")
        : setSpan4_Class("span4");
    });
  }, []);

  return (
    <div className="home1">
      <div className="main">
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
          <div>hello</div>
          <div className="main__view aos-init aos-animate" data-aos="">
            <div className="main__preview">
              <img className="main__pic" src="img/main-pic-6.png" alt="" />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                data-scale="2.5"
                data-orientation="up"
                src="img/main-pic-1.png"
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                data-scale="1.5"
                data-orientation="up"
                src="img/main-pic-2.png"
                alt=""
              />
            </div>
            <div className="main__preview">
              <img className="main__pic" src="img/main-pic-3.png" alt="" />
            </div>
            <div className="main__preview">
              <img className="main__pic" src="img/main-pic-4.png" alt="" />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                data-scale="4.5"
                data-orientation="up"
                src="img/main-pic-5.png"
                alt=""
              />
            </div>
            <div className="main__preview">
              <img
                className="main__pic js-parallax"
                data-scale="1.5"
                data-orientation="down"
                src="img/main-pic-7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="cursor"
        style={{
          transform: `translate(${position.pageX}px, ${position.pageY}px)`,
        }}
      ></div>
    </div>
  );
}

export default Home1;
