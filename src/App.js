import { HashRouter } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Visual from "./component/Visual";

function App() {
  return (
    <HashRouter>
      <Header />
      <Visual />
    </HashRouter>
  );
}

export default App;
