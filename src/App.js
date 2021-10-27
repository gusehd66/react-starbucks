import { HashRouter } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Notice from "./component/Notice";
import Visual from "./component/Visual";

function App() {
  return (
    <HashRouter>
      <Header />
      <Visual />
      <Notice />
    </HashRouter>
  );
}

export default App;
