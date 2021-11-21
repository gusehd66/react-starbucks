import { Link } from "react-router-dom";
import "./Question.scss";

const Question = () => {
  return (
    <section className="question">
      <strong>궁금하신 점을 검색해 보세요.</strong>
      <p>
        검색창에 원하는 정보를 키워드로 입력하세요.
        <br />
        FAQ, 이용 안내, 팁 등 다양한 내용을 검색을 통해 확인하실 수 있습니다.
      </p>
      <div className="search-input">
        <input type="text" placeholder="검색어를 입력하세요" />
        <Link to="/service">
          <img
            src={require("../../images/customer/btn_magnifier.png").default}
            alt="search"
          />
        </Link>
      </div>
      <ul>
        {["카드 등록", "골드 레벨", "별 적립", "생일 쿠폰"].map((item, i) => {
          return (
            <li key={item} className={`search_key${i + 1}`}>
              <Link to="service" className="items">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Question;
