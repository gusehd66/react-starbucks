import { HashRouter } from "react-router-dom";
import "./App.scss";
import Favorite from "./component/Favorite";
import Header from "./component/Header";
import Notice from "./component/Notice";
import Product from "./component/Product";
import ReserveCoffee from "./component/ReserveCoffee";
import ReserveStore from "./component/ReserveStore";
import Rewards from "./component/Rewards";
import Visual from "./component/Visual";
import Youtube from "./component/Youtube";

function App() {
  return (
    <HashRouter>
      <Header />
      <Visual />
      <Notice />
      <Rewards />
      <Youtube />
      <Product />
      <ReserveCoffee />
      <Favorite />
      <ReserveStore />
    </HashRouter>
  );
}

export default App;
