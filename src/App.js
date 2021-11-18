import { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { ProfileContext } from "./context/context";
import Home from "./route/Home";
import SignIn from "./route/Signin";

function App() {
  const [id, setId] = useState("");

  return (
    <HashRouter>
      <ProfileContext.Provider value={{ id, setId }}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Footer />
      </ProfileContext.Provider>
    </HashRouter>
  );
}

export default App;
