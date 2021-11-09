import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FindStore.scss";
import ScrollMagic from "scrollmagic";

const FindStore = () => {
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: ".find-store", //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8,
    })
      .setClassToggle(".find-store", "show")
      .addTo(new ScrollMagic.Controller());
  });

  return (
    <section className="find-store scroll-spy">
      <div className="inner">
        <img
          src={require("../images/find_store_texture1.png").default}
          alt=""
          className="texture1"
        />
        <img
          src={require("../images/find_store_texture2.png").default}
          alt=""
          className="texture2"
        />
        <img
          src={require("../images/find_store_picture1.jpg").default}
          alt=""
          className="picture picture1 back-to-position to-right delay-0"
        />
        <img
          src={require("../images/find_store_picture2.jpg").default}
          alt=""
          className="picture picture2 back-to-position to-right delay-1"
        />

        <div className="text-group">
          <img
            src={require("../images/find_store_text1.png").default}
            alt="스타벅스를 가까이에서 경험해보세요."
            className="title back-to-position to-left delay-0"
          />
          <img
            src={require("../images/find_store_text2.png").default}
            alt="고객님과 가장 가까이 있는 매장을 찾아보세요!"
            className="description back-to-position to-left delay-1"
          />
          <div className="more back-to-position to-left delay-2">
            <Link to="/" className="btn">
              매장찾기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindStore;
