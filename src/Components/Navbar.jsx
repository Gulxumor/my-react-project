import React from "react";
import "../styles/Navbar.css";
import left from "../Assets/Icons/arrow-left.png";
// import right from "../Assets/Icons/arrow-right.png";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <div className="main">
          <div>
            <a
              target={"blank"}
              href="https://github.com/Gulxumor/my-react-project/tree/11-dars/src"
            >
              <img
                id="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcW3CxpH756b-Vus8HxhXV05IDg01sLFENaAYOadIJvz2y1ZgNdNPV57q8-oxNKtB5VfE&usqp=CAU"
                alt="github-logo"
              />
            </a>
          </div>
          <img
            className="arrow rotate"
            src={left}
            alt="arrow-icon"
            onClick={() => setShow(true)}
          />{" "}
        </div>
        <span className="my_shop">Happy Shopping </span>

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="size">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
