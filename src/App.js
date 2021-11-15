import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./route/Home";
import SignIn from "./route/Signin";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Footer />
    </HashRouter>
  );
}

export default App;
