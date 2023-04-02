import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLink } from "../mock";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navLink.map((link) => (
            <Route key={link.id} path={link.to} element={link.element} />
          ))}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default Root;
