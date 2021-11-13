import { Link } from "react-router-dom";
import "./Badges.scss";
import gsap from "gsap";
import { throttle } from "lodash";

const Badges = () => {
  window.addEventListener(
    "scroll",
    throttle(function () {
      if (window.scrollY > 500) {
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(".badges", 0.6, {
          opacity: 0,
          display: "none",
        });
        //버튼 보이기
        gsap.to("#to-top", 0.2, {
          x: 0,
        });
      } else {
        //배지 보이기
        gsap.to(".badges", 0.6, {
          opacity: 1,
          display: "block",
        });
        //버튼 숨기기
        gsap.to(".badges", 0.2, {
          x: 100,
        });
      }
    }, 300)
  );

  return (
    <div class="badges">
      <div class="badge">
        <Link href="/">
          <img src={require("../images/badge1.jpg").default} alt="Badge" />
        </Link>
      </div>
      <div class="badge">
        <Link href="/">
          <img src={require("../images/badge2.jpg").default} alt="Badge" />
        </Link>
      </div>
    </div>
  );
};

export default Badges;
