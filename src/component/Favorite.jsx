import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favorite.scss";
import ScrollMagic from "scrollmagic";

const Favorite = () => {
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: ".pick-your-favorite", //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8,
    })
      .setClassToggle(".pick-your-favorite", "show")
      .addTo(new ScrollMagic.Controller());
  });

  return (
    <section className="pick-your-favorite scroll-spy">
      <div className="inner">
        <div className="text-group">
          <img
            src={require("../images/favorite_text1.png").default}
            alt="PICK YOUR FAVORITE"
            className="title back-to-position to-right delay-0"
          />
          <img
            src={require("../images/favorite_text2.png").default}
            alt="다양한 메뉴를 스타벅스에서 즐겨보세요."
            className="description back-to-position to-right delay-1"
          />
          <div className="more back-to-position to-right delay-2">
            <Link to="/" className="btn btn--white">
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
