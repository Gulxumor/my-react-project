import React from 'react'
import "./style.css";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <div>
          <ul>
            <li>
              <NavLink
                to={"/"}
                style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })}
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "#fff" })}
                to={"/main"}
              >
                Main
              </NavLink>
            </li>
          </ul>
        </div>
        <button>Login</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar