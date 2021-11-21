import { Link } from "react-router-dom";
import "./CustomerService.scss";

const CustomerService = () => {
  return (
    <section className="customer-service">
      <div className="service-header">
        <div className="inner">
          <h2 className="title">Customer Service & Ideas</h2>
          <ul className="smap">
            <li>
              <Link to="/">
                <img
                  src={require("../../images/customer/icon_home_w.png").default}
                  alt="home"
                />
              </Link>
            </li>
            <li>
              <img
                src={require("../../images/customer/icon_arrow_w.png").default}
                alt="arrow"
              />
            </li>
            <li>
              <Link to="/service">Customer Service & Ideas</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
