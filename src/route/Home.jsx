import Awards from "../component/Awards";
import BackToTop from "../component/BackToTop";
import Favorite from "../component/Favorite";
import FindStore from "../component/FindStore";
import Notice from "../component/Notice";
import Product from "../component/Product";
import ReserveCoffee from "../component/ReserveCoffee";
import ReserveStore from "../component/ReserveStore";
import Rewards from "../component/Rewards";
import Visual from "../component/Visual";
import Youtube from "../component/Youtube";
import gsap from "gsap";
import { throttle } from "lodash";
import Badges from "../component/Badges";

const Home = () => {
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
        gsap.to("#to-top", 0.2, {
          x: 100,
        });
      }
    }, 300)
  );
  return (
    <>
      <Badges />
      <Visual />
      <Notice />
      <Rewards />
      <Youtube />
      <Product />
      <ReserveCoffee />
      <Favorite />
      <ReserveStore />
      <FindStore />
      <Awards />
      <BackToTop />
    </>
  );
};

export default Home;
