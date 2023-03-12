import React from "react";
import "../styles/Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, caterogy, price, img, rating } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="logo"/>
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{caterogy}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating.rate}</p>
        <button onClick={() => handleClick(item)}>Add to Card</button>
      </div>
    </div>
  );
};

export default Cards;
