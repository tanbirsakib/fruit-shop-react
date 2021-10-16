import React from 'react';
import "./Header.css"
import storeImg from "../../images/store.png"
const Header = () => {
    return (
        <div className="header">
            <h1 className="shop-title">Fruit Shop</h1>
            <img className="shop-img"  src={storeImg} alt="" />
            <h3>Total Budget for the Shop : <span className="budget">5000</span> tk</h3>
        </div>
    );
};

export default Header;