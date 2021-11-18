import { NavLink } from "react-router-dom";
import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useRef } from "react";
import HeaderFactory from "./HeaderFactory";
import { ProfileContext } from "../context/context";

const activeStyle = { color: "#669900" };

const Header = () => {
  const searchEl = useRef(null);
  const searchInputEl = useRef(null);
  const { id } = useContext(ProfileContext);

  const onClick = () => {
    searchInputEl.current.focus();
  };

  const onFocus = () => {
    searchEl.current.classList.add("focused");
    searchInputEl.current.setAttribute("placeholder", "통합검색");
  };

  const onBlur = () => {
    searchEl.current.classList.remove("focused");
    searchInputEl.current.setAttribute("placeholder", "");
  };

  return (
    <header>
      <div className="inner">
        <NavLink to="/" exact activeStyle={activeStyle} className="logo">
          <img
            src={require("../images/starbucks_logo.png").default}
            alt="STARBUCKS"
          />
        </NavLink>

        <div className="sub-menu">
          <ul className="menu">
            <li>
              {id === "" ? (
                <NavLink to="/signin" activeStyle={activeStyle}>
                  Signin
                </NavLink>
              ) : (
                <NavLink to="/signin" id="nickname">
                  {id}
                </NavLink>
              )}
            </li>
            <li>
              <NavLink to="/myStartbucks" activeStyle={activeStyle}>
                My Starbucks
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" activeStyle={activeStyle}>
                Customer Service & Ideas
              </NavLink>
            </li>
            <li>
              <NavLink to="/store" activeStyle={activeStyle}>
                Find a Store
              </NavLink>
            </li>
          </ul>
          <div className="search" ref={searchEl} onClick={onClick}>
            <input
              type="text"
              ref={searchInputEl}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <div className="material-icons">
              <AiOutlineSearch fontSize="24" />
            </div>
          </div>
        </div>

        <ul className="main-menu">
          <HeaderFactory />
        </ul>
      </div>
    </header>
  );
};

export default Header;
