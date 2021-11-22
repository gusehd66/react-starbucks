import "./Faq.scss";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section className="faq">
      <div className="faq-main">
        <strong>FAQ</strong>
        <p>자주 하는 질문을 모아놓았습니다. 궁금하신 내용을 검색해 주세요.</p>
        <ul className="best-faq">
          <li>
            <Link to="/service">
              [e-프리퀀시] 모바일 앱을 통해서 언제든 예약이 가능한가요?
            </Link>
          </li>
          <li>
            <Link to="/service">
              [e-프리퀀시] 모바일 앱으로 증정품 예약을 완료했습니다. 증정품은
              언제까지 찾아가야 하나요?
            </Link>
          </li>
          <li>
            <Link to="/service">
              [e-프리퀀시] e-프리퀀시 스티커를 조건에 맞게 적립했습니다. 기간
              종료 후 증정 상품으로 자동 교환되나요?
            </Link>
          </li>
          <li>
            <Link to="/service">
              [Gift 배송하기] 배송지 입력 후 배송상태를 확인할 수 있나요?
            </Link>
          </li>
          <li>
            <Link to="/service">
              [Gift 배송하기] 선물받은 상품을 가까운 스타벅스매장에서 교환/반품
              가능한가요?
            </Link>
          </li>
        </ul>
      </div>
      <div className="customer-voice">
        <strong>고객의 소리</strong>
        <p>문의에 대한 처리현황을 확인할 수 있습니다.</p>
        <div className="login">
          <img
            src={require("../../images/customer/voc_login_pic.png").default}
            alt="login"
          />
          <span>로그인이 필요한 서비스 입니다.</span>
        </div>
        <Link to="/signin" className="login-btn">
          로그인
        </Link>
      </div>
    </section>
  );
};

export default Faq;
