import React from "react";
import "./Fruit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
const Fruit = (props) => {
  const { name, shape, price, img, origin,taste } = props.fruit;

  // cart icon element
  const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />;

  return (
    <div className="fruit-cart">
      <img src={img} alt="" />
      <div className="fruit-details">
        <h2 className="fruit-name">Name : {name}</h2>
        <h4>Shape : {shape}</h4>
        <h3>Taste : {taste}</h3>
        <h3>Price : {price}tk</h3>
        <h4>Origin : {origin}</h4>
      </div>
      <button
        onClick={() => props.cartHandler(props.fruit)}
        className="cart-btn"
      >
        {cartIcon} Add to Cart
      </button>
      <br />
      <i className="fab fa-facebook facebook"></i>
      <i className="fab fa-instagram-square instagram"></i>
    </div>
  );
};

export default Fruit;
