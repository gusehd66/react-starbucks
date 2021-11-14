import "./BackToTop.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import gsap from "gsap";

const BackToTop = () => {
  const backToTop = () => {
    // gsap.to(window, 0.7, {
    //   scrollTo: {
    //     top: 0,
    //   },
    // });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="to-top">
      <AiOutlineArrowUp style={{ fontSize: "25px" }} onClick={backToTop} />
    </div>
  );
};

export default BackToTop;
