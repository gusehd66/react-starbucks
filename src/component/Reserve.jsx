import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Reserve.scss";
import ScrollMagic from "scrollmagic";

const Reserve = () => {
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: ".reserve-coffee", //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8,
    })
      .setClassToggle(".reserve-coffee", "show")
      .addTo(new ScrollMagic.Controller());
  });

  return (
    <section className="reserve-coffee scroll-spy">
      <div className="inner">
        <img
          src={require("../images/reserve_logo.png").default}
          alt="STARS BUCKS Reserve logo"
          className="reserve-logo back-to-position to-right delay-0"
        />

        <div className="text-group">
          <img
            src={require("../images/reserve_text.png").default}
            alt="스타벅스 리저브 커피"
            className="description back-to-position to-right delay-1"
          />
          <div className="more back-to-position to-right delay-2">
            <Link to="/" className="btn btn--gold">
              자세히 보기
            </Link>
          </div>
        </div>

        <img
          src={require("../images/reserve_image.png").default}
          alt="스타벅스 리저브 커피 원두"
          className="product back-to-position to-left delay-3"
        />
      </div>
    </section>
  );
};

export default Reserve;
