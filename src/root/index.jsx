import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Choose from "../components/Choose";
import Position from "../components/Position";
import Chairs from "../components/Chairs";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Root = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Choose />
      <Position />
      <Chairs />
      <Testimonial />
      <Blog />
      <Newsletter />
      <Footer />
      <Copyright />
    </>
  );
};

export default Root;
