import { HashRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./route/Home";

function App() {
  return (
    <HashRouter>
      <Header />
      <Home />
      <Footer />
    </HashRouter>
  );
}

export default App;
