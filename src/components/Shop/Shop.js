import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Fruit from "../Fruit/Fruit";
import "./Shop.css";

const Shop = () => {
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./fruits.JSON")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  const cartHandler = (fruit) => {
    const newCart = [...cart, fruit];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="fruit-container">
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            fruit={fruit}
            cartHandler={cartHandler}
          ></Fruit>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
