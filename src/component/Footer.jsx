import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <ul className="menu">
          <li>
            <Link to="/" className="green">
              개인정보처리방침
            </Link>
          </li>
          <li>
            <Link to="/">영상정보처리기기 운영관리 방침</Link>
          </li>
          <li>
            <Link to="/">홈페이지 이용약관</Link>
          </li>
          <li>
            <Link to="/">위치정보 이용약관</Link>
          </li>
          <li>
            <Link to="/">스타벅스 카드 이용약관</Link>
          </li>
          <li>
            <Link to="/">윤리경영 핫라인</Link>
          </li>
        </ul>

        <div className="btn-group">
          <Link to="/" className="btn btn--white">
            찾아오시는 길
          </Link>
          <Link to="/" className="btn btn--white">
            신규입점제의
          </Link>
          <Link to="/)" className="btn btn--white">
            사이트 맵
          </Link>
        </div>

        <div className="info">
          <span>사업자 등록번호 201-81-21515</span>
          <span>(주)스타벅스 코리아 대표이사 이석구</span>
          <span> {"TEL: 02) 3015-1100 / FAX : 02) 3015-1106"}</span>
          <span>개인정보 책임자 : 강기원</span>
        </div>

        <p className="copyright">
          &copy; <span className="this-year"></span>StarBucks Coffee Company.
          All Rights Reserved.
        </p>
        <img
          src={require("../images/starbucks_logo_only_text.png").default}
          alt="STAR BUCKS"
          className="logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
