import React from 'react'
import "./style.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navLink } from "../../mock";
import logo from "../../assets/images/images.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <NavLink
          to={
            "https://github.com/Gulxumor/my-react-project/tree/18-dars/router-dom"
          }
          target="_blank"
        >
          <img src={logo} alt="github-logo" className="nav-logo" />
        </NavLink>

        <nav>
          <ul>
            {navLink?.map(
              ({ id, to, title, hidden }) =>
                !hidden && (
                  <li key={id}>
                    <NavLink
                      to={to}
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "#fff",
                      })}
                    >
                      {title}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </nav>
        <>
          <button onClick={() => navigate("/login")}>Login</button>
          <button
            onClick={() => localStorage.removeItem("token")}
            className="logOut"
          >
            Log Out
          </button>
        </>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar