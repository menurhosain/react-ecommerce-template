import React from "react";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="What are you looking for?"
      />
      <svg className="search-svg search__icon-search">
        <use xlinkHref="./img/sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};

export default Search;
