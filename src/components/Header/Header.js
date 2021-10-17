import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const searchIcon = <FontAwesomeIcon icon={faAppleAlt} />;
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="shop-title">
          <i>Frootify Fruit Shop</i>
        </h1>
        <img className="logo-img" src={logo} alt="" />
      </div>
      <h3>
        Total Budget for the Shop : <span className="budget">5000</span> tk
      </h3>
      <input className="search-field" type="text" placeholder="Search Fruit" />
      <button className="search-btn">Search {searchIcon}</button>
    </div>
  );
};

export default Header;
