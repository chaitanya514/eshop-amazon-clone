import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon fontSize="large" className="header__logoimg" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="navitem__lineone">Hello Guest</span>
          <span className="navitem__linetwo">Sign In</span>
        </div>
        <div className="nav__itemcart">
          <ShoppingBasketIcon className="nav__itembasket" />
          <span className="navitem__linetwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
