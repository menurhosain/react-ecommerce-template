import React from "react";
import Category from "./category.component";
import Search from "./search.conponent";
import WishList from "./wishlist.component";
import Cart from "./cart.component";
import UserShortProfile from "./user-short-profile.component";

const Logo = () => (
  <figure className="header__logo">
    <img className="header__logo__img" src="./img/logo.png" alt="logo" />
  </figure>
);

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Category />
      <Search />
      <div className="cart-wishlist">
        <WishList />
        <Cart />
      </div>
      <UserShortProfile />
    </header>
  );
};

export default Header;
