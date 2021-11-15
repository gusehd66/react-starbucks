import "./BackToTop.scss";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  const backToTop = () => {
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
