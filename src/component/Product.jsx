import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollMagic from "scrollmagic";

import "./Product.scss";

const Product = () => {
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
    floatingObject(".floating3", 1.5, 20);
    new ScrollMagic.Scene({
      triggerElement: ".season-product", //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8,
    })
      .setClassToggle(".season-product", "show")
      .addTo(new ScrollMagic.Controller());
  });

  return (
    <section className="season-product scroll-spy">
      <div className="inner">
        <img
          src={require("../images/floating3.png").default}
          alt="Icon"
          className="floating floating3"
        />
        <img
          src={require("../images/season_product_image.png").default}
          alt="아이스 커피 블렌드"
          className="product back-to-position to-right delay-0"
        />

        <div className="text-group">
          <img
            src={require("../images/season_product_text1.png").default}
            alt="상쾌하게 여름을 반겨줄 시즌 원두 아이스 커피 블렌드"
            className="title back-to-position to-left delay-1"
          />
          <img
            src={require("../images/season_product_text2.png").default}
            alt="아프리카와 라틴 아메리카 커피의 브렌드로 시트러스함과 은은한 캐러멜 향을 동시에 느낄 수 있으며, 차갑게 즐길 때 풍미가 더욱 깊어지는 원두입니다."
            className="description back-to-position to-left delay-2"
          />
          <div className="more back-to-position to-left delay-3">
            <Link to="/" className="btn">
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
