import { Link } from "react-router-dom";
import "./Badges.scss";

const Badges = () => {
  return (
    <div className="badges">
      <div className="badge">
        <Link to="/">
          <img src={require("../images/badge1.jpg").default} alt="Badge" />
        </Link>
      </div>
      <div className="badge">
        <Link to="/">
          <img src={require("../images/badge2.jpg").default} alt="Badge" />
        </Link>
      </div>
    </div>
  );
};

export default Badges;
