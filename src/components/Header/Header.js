import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png"
const Header = () => {
    return (
      <div className="header-container">
            <div className="header">
            <h1 className="shop-title"><i>Frootify Fruit Shop</i></h1>
            <img className="logo-img"  src={logo} alt="" />
        </div>
        <h3>Total Budget for the Shop : <span className="budget">5000</span> tk</h3>
      </div>
    );
};

export default Header;