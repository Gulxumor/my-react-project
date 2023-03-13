import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/Card.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="logo" className="image" />
            <p>{item.title}</p>
          </div>
          <div className="buttons">
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span className="price">{item.price}</span>
            <button className="remove" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div>
        <span className="total">Total Price - ${price}</span>
      </div>
    </article>
  );
};

export default Cart;
