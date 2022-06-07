import React from "react";

const Category = () => {
  return (
    <div className="categories">
      <svg className="categories-svg categoris__icon-category">
        <use xlinkHref="./img/sprite.svg#icon-category"></use>
      </svg>
      <span className="default-text">Categories</span>
      <svg className="categories-svg categories__icon-down-arrow">
        <use xlinkHref="./img/sprite.svg#icon-down-arrow"></use>
      </svg>
    </div>
  );
};

export default Category;
