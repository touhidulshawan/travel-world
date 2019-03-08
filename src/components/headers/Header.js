import React from "react";
import "../../assets/css/Header.min.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">TW</div>
      <div className="header__content">
        <h1 className="primary-text">
          <span className="primary-text--main"> Adventurous </span>
          <span className="primary-text--sub">
            Dare to live the life you’ve always wanted
          </span>
        </h1>
        <a href="/" className="btn btn--red btn--animated">
          Let Explore <i class="fas fa-arrow-down    " />
        </a>
      </div>
    </header>
  );
};

export default Header;
