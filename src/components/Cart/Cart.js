import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faTree } from "@fortawesome/free-solid-svg-icons";
const Cart = (props) => {
  // font awesome element
  const cartIcon = <FontAwesomeIcon icon={faAppleAlt} />;
  const treeIcon = <FontAwesomeIcon icon={faTree}></FontAwesomeIcon>;
  const { cart } = props;
  let total = 0;
  let totalFruits = [];
  for (const fruit of cart) {
    total = total + fruit.price;
    if (!totalFruits.includes(fruit.name)) {
      totalFruits = totalFruits + " " + fruit.name;
    }
  }
  return (
    <div className="cart">
      <h4>
        Booked Fruit{" "}
        <span className="cartIcon">
          {cartIcon} {treeIcon}
        </span>
      </h4>
      <h3>Total Fruit :{cart.length} </h3>
      <p>Fruits Ordered:{totalFruits}</p>
      <h4>Price : {total} tk</h4>
    </div>
  );
};

export default Cart;
