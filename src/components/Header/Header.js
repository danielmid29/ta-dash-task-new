// src/components/Header/Header.js

import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import day from "../../assets/day-mode 1.png";
import notification from "../../assets/notification 1.png";
import message from "../../assets/message.png";
import settings from "../../assets/settings.png";
import user from "../../assets/user-1 5.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <img src={search} alt="Search" className="search-icon" />
          </button>
        </div>
      </div>
      <div className="header-right">
        <img src={day} alt="Icon 1" className="icon" />
        <img src={message} alt="Icon 2" className="icon" />
        <img src={notification} alt="Icon 3" className="icon" />
        <img src={settings} alt="Icon 4" className="icon" />
        <img src={user} alt="Icon 5" className="icon user" />
      </div>
    </header>
  );
};

export default Header;
