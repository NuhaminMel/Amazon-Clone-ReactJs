import React from "react";
import "./Header.css";
import logo from "./amzn.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../Firebase";
import Nav from "../Nav/Nav";
import axios from "../../axios";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="headerLogo" src={logo} alt="amazon logo" />
        </Link>

        <div className="headerSearch">
          <input className="headerSearchInput" type="text" />
          <SearchIcon className="headerSearchIcon" />
        </div>
        <div className="headerNav">
          <Link to={!user && "/login"} className="headerClearLink">
            <div onClick={handleAuthentication} className="headerOption">
              <span className="optionOne">
                Hello, {!user ? "Guest" : user.email}
              </span>
              <span className="optionTwo">{user ? "Sign Out" : "Sign In"}</span>
            </div>
          </Link>
          <Link to="/orders" className="headerClearLink">
            <div className="headerOption">
              <span className="optionOne">Returns</span>
              <span className="optionTwo">& Orders</span>
            </div>
          </Link>
          <div className="headerOption">
            <span className="optionOne">Your</span>
            <span className="optionTwo">prime</span>
          </div>
          <Link to="/checkout" className="headerClearLink">
            <div className="headerBasket">
              <ShoppingBasketIcon />
              <span className="optionOne headerBasketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Nav/>
    </>
  );
}

export default Header;
