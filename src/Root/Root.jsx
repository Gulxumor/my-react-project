import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import NotFound from "../components/404";
import { Navbar } from "../components/Navbar";
import { navbar } from "../utils/navbar";

export const Root = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to="/home" />} />
          {navbar?.map((navlink) =>
            navlink?.isPrivate ? (
              <Route
                key={navlink?.id}
                path={navlink?.path}
                element={
                  localStorage.getItem("tokenRymo") ? (
                    navlink?.element
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
            ) : (
              <Route
                key={navlink?.id}
                path={navlink?.path}
                element={navlink?.element}
              />
            )
          )}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
