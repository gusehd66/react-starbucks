import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Visual.scss";
import { gsap } from "gsap";

const Visual = () => {
  const fadeEls = useRef([]);

  useEffect(() => {
    fadeEls.current.forEach((fadeEl, index) => {
      gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1,
      });
    });
  });

  return (
    <section className="visual">
      <div className="inner">
        <div
          className="title fade-in"
          ref={(fadeIn) => (fadeEls.current[0] = fadeIn)}
        >
          <img
            src={require("../images/visual_title.png").default}
            alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
          />
          <Link to="/" className="btn btn--brown">
            자세히 보기
          </Link>
        </div>
        <div
          className="fade-in"
          ref={(fadeIn) => (fadeEls.current[1] = fadeIn)}
        >
          <img
            src={require("../images/visual_cup1.png").default}
            alt="new OATMEAL LATTE"
            className="cup1 image"
          />
          <img
            src={require("../images/visual_cup1_text.png").default}
            alt="오트밀 라떼"
            className="cup1 text"
          />
        </div>
        <div
          className="fade-in"
          ref={(fadeIn) => (fadeEls.current[2] = fadeIn)}
        >
          <img
            src={require("../images/visual_cup2.png").default}
            alt="new CARAMEL CRUMBLE MOCHA"
            className="cup2 image"
          />
          <img
            src={require("../images/visual_cup2_text.png").default}
            alt="카라멜 크럼블 모카"
            className="cup2 text"
          />
        </div>
        <div
          className="fade-in"
          ref={(fadeIn) => (fadeEls.current[3] = fadeIn)}
        >
          <img
            src={require("../images/visual_spoon.png").default}
            alt="Spoon"
            className="spoon"
          />
        </div>
      </div>
    </section>
  );
};

export default Visual;
