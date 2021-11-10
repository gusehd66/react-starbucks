import "./Awards.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useRef } from "react";

SwiperCore.use([Navigation, Autoplay]);

const Awards = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section className="awards">
      <div className="inner">
        <Swiper
          autoplay={true}
          loop={true}
          spaceBetween={30}
          slidesPerView={5}
          className="swiper-container"
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide1.jpg").default}
                alt="대통령 표창"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide2.jpg").default}
                alt="대통령 표창 (3년 연속)"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide3.jpg").default}
                alt="우수사업주 인증"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide4.jpg").default}
                alt="경연대회 대상"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide5.jpg").default}
                alt="대한상의회장상"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide6.jpg").default}
                alt="기업사회공헌 활동 부문"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide7.jpg").default}
                alt="KSI 1위 (5년 연속)"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide8.jpg").default}
                alt="KS-SQI 1위 (5년 연속)"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide9.jpg").default}
                alt="커피전문점 부문 (4년 연속)"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={require("../images/awards_slide10.jpg").default}
                alt="동반성장 부문 (4년 연속)"
              />
            </SwiperSlide>
          </div>
        </Swiper>

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
      </div>
    </section>
  );
};

export default Awards;
