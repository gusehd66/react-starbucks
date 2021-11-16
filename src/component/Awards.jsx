import "./Awards.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useRef } from "react";

SwiperCore.use([Navigation, Autoplay]);
const alts = [
  "대통령 표창",
  "대통령 표창 (3년 연속)",
  "우수사업주 인증",
  "경연대회 대상",
  "대한상의회장상",
  "기업사회공헌 활동 부문",
  "KSI 1위 (5년 연속)",
  "KS-SQI 1위 (5년 연속)",
  "커피전문점 부문 (4년 연속)",
  "동반성장 부문 (4년 연속)",
];

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
            {alts.map((alt, idx) => {
              return (
                <SwiperSlide className="swiper-slide" key={idx}>
                  <img
                    src={
                      require(`../images/awards_slide${idx + 1}.jpg`).default
                    }
                    alt={alt}
                  />
                </SwiperSlide>
              );
            })}
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
