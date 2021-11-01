import { HashRouter } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Notice from "./component/Notice";
import Rewards from "./component/Rewards";
import Visual from "./component/Visual";

function App() {
  return (
    <HashRouter>
      <Header />
      <Visual />
      <Notice />
      <Rewards />
    </HashRouter>
  );
}

export default App;
