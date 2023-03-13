import React from "react";
import "../styles/Cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, category, price, img, rating } = item;
  return (
    <div className="cards">
      <p className="category">{category}</p>
      <div className="image_box">
        <img src={img} alt="logo" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price: ${price}</p>
        <p>
          Rating: {rating.rate}
          <img
            className="rating"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejHFnsFo0qNvfVW0Eh4w74OQ0knaRA5u1_7FfxS8bUV-60fnriBE5ydjM2Ixw_I0R_F8&usqp=CAU"
            alt="rating"
          />
        </p>
        <hr />
        <div className="wrapper">
          <img
            className="heart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEU-QRte8eypdibDBn-xhslTfNx3MRFIWimw&usqp=CAU"
            alt="heart-icon"
          />
          <button onClick={() => handleClick(item)}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;