import gsap from "gsap";
import { useEffect } from "react";
import Iframe from "./Ifram";
import "./Youtube.scss";

const Youtube = () => {
  const random = (min, max) =>
    parseFloat((Math.random() * (max - min) + min).toFixed(2));

  const floatingObject = (selector, delay, size) => {
    return gsap.to(selector, random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      delay: random(0, delay),
    });
  };

  useEffect(() => {
    floatingObject(".floating1", 1, 15);
    floatingObject(".floating2", 0.5, 15);
  });

  return (
    <section className="youtube">
      <div className="youtube__area">
        <Iframe />
      </div>
      <div className="youtube__cover"></div>
      <div className="inner">
        <img
          src={require("../images/floating1.png").default}
          alt="Icon"
          className="floating floating1"
        />
        <img
          src={require("../images/floating2.png").default}
          alt="Icon"
          className="floating floating2"
        />
      </div>
    </section>
  );
};

export default Youtube;
