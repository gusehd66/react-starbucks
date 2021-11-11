import Awards from "../component/Awards";
import Favorite from "../component/Favorite";
import FindStore from "../component/FindStore";
import Notice from "../component/Notice";
import Product from "../component/Product";
import ReserveCoffee from "../component/ReserveCoffee";
import ReserveStore from "../component/ReserveStore";
import Rewards from "../component/Rewards";
import Visual from "../component/Visual";
import Youtube from "../component/Youtube";

const Home = () => {
  return (
    <>
      <Visual />
      <Notice />
      <Rewards />
      <Youtube />
      <Product />
      <ReserveCoffee />
      <Favorite />
      <ReserveStore />
      <FindStore />
      <Awards />
    </>
  );
};

export default Home;
