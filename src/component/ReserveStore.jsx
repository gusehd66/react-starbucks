import { Link } from "react-router-dom";
import "./ReserveStore.scss";

const ReserveStore = () => {
  return (
    <section className="reserve-store">
      <div className="inner">
        <div className="medal">
          <div className="front">
            <img
              src={require("../images/reserve_store_medal_front.png").default}
              alt="R"
            />
          </div>
          <div className="back">
            <img
              src={require("../images/reserve_store_medal_back.png").default}
              alt="스타벅스 리저브 매장"
            />
            <Link href="/" className="btn">
              매장안내
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveStore;
