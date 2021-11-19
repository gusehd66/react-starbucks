import { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { ProfileContext } from "./context/context";
import Home from "./route/Home";
import SignIn from "./route/Signin";

function App() {
  const [id, setId] = useState(window.localStorage.getItem("username"));

  return (
    <HashRouter>
      <ProfileContext.Provider value={{ id, setId }}>
        <Header />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Footer />
      </ProfileContext.Provider>
    </HashRouter>
  );
}

export default App;
