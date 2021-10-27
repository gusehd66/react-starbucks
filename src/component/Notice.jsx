import { Link } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineColumnHeight,
  AiOutlineToTop,
} from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Notice.scss";
import { useRef, useState } from "react";

const Notice = () => {
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef(null);
  const pagination = useRef(null);
  const [isHidePromotion, setIsHidePromotion] = useState(false);
  const onClick = () => {
    setIsHidePromotion(!isHidePromotion);
  };

  return (
    <section className="notice">
      <div className="notice-line">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="inner">
          <div className="inner__left">
            <h2>공지사항</h2>

            <Swiper
              direction={"vertical"}
              autoplay={true}
              loop={true}
              className="swiper-container"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <Link to="/">
                    크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to="/">
                    [당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to="/">
                    스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to="/">[당첨자 발표] 뉴이어 전자영수증 이벤트</Link>
                </SwiperSlide>
              </div>
            </Swiper>

            <Link to="/" className="notice-line__more">
              <div className="material-icons">
                <AiOutlineColumnHeight />
              </div>
            </Link>
          </div>
          <div className="inner__right">
            <h2>스타벅스 프로모션</h2>
            <div className="toggle-promotion" onClick={onClick}>
              <div className="material-icons">
                <AiOutlineToTop />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={isHidePromotion ? "promotion hide" : "promotion"}>
        <Swiper
          className="swiper-container"
          direction={"horizontal"}
          autoplay={{ delay: 5000 }}
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            el: pagination.current,
            clickable: "true",
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/promotion_slide1.jpg").default}
                alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"
              />
              <Link to="/" className="btn">
                자세히 보기
              </Link>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/promotion_slide2.jpg").default}
                alt="기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시,아메리카노 e-쿠폰을 드립니다."
              />
              <Link to="/" className="btn">
                자세히 보기
              </Link>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/promotion_slide3.jpg").default}
                alt="뉴이어 푸드와 제조 음료를 세트로 구매 시,뉴이어 음료 BOGO(1+1)쿠폰을 드립니다."
              />
              <Link to="/" className="btn">
                자세히 보기
              </Link>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/promotion_slide4.jpg").default}
                alt="신년 MD 상품 포함 3만원 이상 구매 고객께 아메리카노(톨사이즈) 쿠폰을 드립니다."
              />
              <Link to="/" className="btn">
                자세히 보기
              </Link>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/promotion_slide5.jpg").default}
                alt="2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!"
              />
              <Link to="/" className="btn">
                자세히 보기
              </Link>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination" ref={pagination}></div>
          <div className="swiper-prev" ref={navigationPrevRef}>
            <div className="material-icons">
              <AiOutlineArrowLeft />
            </div>
          </div>
          <div className="swiper-next" ref={navigationNextRef}>
            <div className="material-icons">
              <AiOutlineArrowRight />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Notice;
