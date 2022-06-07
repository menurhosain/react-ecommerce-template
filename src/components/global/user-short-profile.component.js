import React from "react";

const UserShortProfile = () => {
  return (
    <div className="user-short-profile">
      <img
        className="user-short-profile__photo"
        src="./img/user.png"
        alt="user"
      />
      <span className="user-short-profile__name">Maria</span>
      <svg className="user-short-profile-svg user-short-profile__icon-down-arrow">
        <use xlinkHref="./img/sprite.svg#icon-down-arrow"></use>
      </svg>
    </div>
  );
};

export default UserShortProfile;
