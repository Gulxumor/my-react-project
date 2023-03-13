import React from "react";
import list from "../Components/data";
import "../styles/Amazon.css";
import Cards from "./Cards";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      
      {list.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;


// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));