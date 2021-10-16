import React from "react";
import "./Fruit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
const Fruit = (props) => {
  const { name, shape, price, img, origin } = props.fruit;

  // cart icon element
  const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />;

  return (
    <div className="fruit-cart">
      <img src={img} alt="" />
      <h2 className="fruit-name">Name : {name}</h2>
      <p>Shape : {shape}</p>
      <h4>Price : {price}tk</h4>
      <h5>Origin : {origin}</h5>
      <button
        onClick={() => props.cartHandler(props.fruit)}
        className="cart-btn"
      >
        {cartIcon} Add to Cart
      </button>
    </div>
  );
};

export default Fruit;
