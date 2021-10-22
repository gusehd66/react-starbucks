import { HashRouter } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";

function App() {
  return (
    <HashRouter>
      <Header />
    </HashRouter>
  );
}

export default App;
