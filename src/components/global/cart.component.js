import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__icon">
        <svg className="cart-svg cart__icon-cart">
          <use xlinkHref="./img/sprite.svg#icon-cart"></use>
        </svg>
        <span className="cart__icon-cart-item-no">2</span>
      </div>
      <span className="default-text">My Cart</span>
      <svg className="cart-svg cart__icon-down-arrow">
        <use xlinkHref="./img/sprite.svg#icon-down-arrow"></use>
      </svg>

      <div className="cart__list">
        <ul className="cart__items">
          <li className="cart__item">one</li>
          <li className="cart__item">two</li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
