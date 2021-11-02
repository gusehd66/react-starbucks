import Iframe from "./Ifram";
import "./Youtube.scss";

const Youtube = () => {
  return (
    <section className="youtube">
      <div className="youtube__area">
        <Iframe />
      </div>
      <div className="youtube__cover"></div>
      <div className="inner">
        <img
          src={require("../images/floating1.png").default}
          alt="Icon"
          className="floating floating1"
        />
        <img
          src={require("../images/floating2.png").default}
          alt="Icon"
          className="floating floating2"
        />
      </div>
    </section>
  );
};

export default Youtube;
