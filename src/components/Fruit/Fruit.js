import React from "react";
import "./Fruit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faGripVertical, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
const Fruit = (props) => {
  const { name, shape, price, img, origin } = props.fruit;

  // cart icon element
  const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />;

  return (
    <div className="fruit-cart">
      <img src={img} alt="" />
      <div className="fruit-details">
      <h2 className="fruit-name">Name : {name}</h2>
      <h4>Shape : {shape}</h4>
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
      <i class="fab fa-facebook facebook"></i>
      <i class="fab fa-instagram-square instagram"></i>
    </div>
  );
};

export default Fruit;
