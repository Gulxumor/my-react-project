import React from 'react'
import "./style.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navLink } from "../../mock";
const navigate = useNavigate();

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <div>
          <ul>
            {navLink.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "#fff",
                  })}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to={"/login"}>
          <button>Login</button>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar