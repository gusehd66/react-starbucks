import { Link } from "react-router-dom";
import "./Rewards.scss";

const Rewards = () => {
  return (
    <section className="rewards">
      <div className="bg-left"></div>
      <div className="bg-right"></div>
      <div className="inner">
        <div className="btn-group">
          <div className="btn btn--reverse sign-up">회원가입</div>
          <Link className="btn sign-in" to="/">
            로그인
          </Link>
          <div className="btn gift">e-Gift 선물하기</div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
