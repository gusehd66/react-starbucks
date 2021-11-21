import CustomerService from "../component/Service/CustomerService";
import Question from "../component/Service/Question";

const Service = () => {
  return (
    <>
      <CustomerService />
      <div className="inner">
        <Question />
      </div>
    </>
  );
};

export default Service;
