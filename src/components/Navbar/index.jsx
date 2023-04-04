import React, { useState } from "react";
import "./style.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/images.png";
import logo from "../../assets/images/brand/rymo-logo-black.png";
import { navLink } from "../../utils/Navbar";
import { ImSearch } from "react-icons/im";
import { Button, Drawer, Dropdown } from "antd";
import { CgHeart } from "react-icons/cg";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: <div onClick={navigate("/profile")}>Profile</div>,
    },
    {
      key: "2",
      label: <div onClick={navigate("/login")}>Sign In</div>,
    },
    {
      key: "3",
      label: <div onClick={navigate("/sign-up")}>Sign Up</div>,
    },
    {
      key: "4",
      label: (
        <div onClick={() => localStorage.removeItem("token")}>Sign Up</div>
      ),
    },
  ];

  return (
    <>
      <header>
        <NavLink // logo
          to={
            "https://github.com/Gulxumor/my-react-project/tree/18-dars/router-dom"
          }
          target="_blank"
        >
          <img src={logo} alt="github-logo" />
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
                        color: isActive ? "var(--orange)" : "var(--black)",
                      })}
                    >
                      {title}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </nav>
        <div>
          {<ImSearch onClick={() => navigate("/login")} />}
          <button onClick={showDrawer}>Products</button>
          <Drawer //drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <p>Some contents...</p>
          </Drawer>
          <CgHeart onClick={() => navigate("/wishlist")} />
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Account</Button>
          </Dropdown>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;

// <NavLink to={"https://github.com/Gulxumor/my-react-project/tree/18-dars/router-dom"}target="_blank"><img src={logo} alt="github-logo" className="nav-logo" /></NavLink>
