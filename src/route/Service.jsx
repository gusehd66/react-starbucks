import "./Service.scss";
import CustomerService from "../component/Service/CustomerService";
import Faq from "../component/Service/Faq";
import Question from "../component/Service/Question";

const Service = () => {
  return (
    <>
      <CustomerService />
      <div className="inner">
        <div className="inner-main">
          <Question />
          <Faq />
        </div>
      </div>
    </>
  );
};

export default Service;
