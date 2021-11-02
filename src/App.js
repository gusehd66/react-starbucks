import { HashRouter } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Notice from "./component/Notice";
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
    </HashRouter>
  );
}

export default App;
