import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLink } from "../mock";
import NotFound from "../components/NotFound";

const Root = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navLink?.map(
            ({ id, to, element, isPrivate }) =>
              !isPrivate && <Route key={id} path={to} element={element} />
          )}
          {navLink?.map(
            ({ id, to, element, isPrivate }) =>
              isPrivate && (
                <Route
                  key={id}
                  path={to}
                  element={token ? element : <Navigate to={"/login"} />}
                />
              )
          )}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Root;