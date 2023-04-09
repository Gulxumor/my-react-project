import React, { useState } from "react";
import "./style.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/images.png";
import logo from "../../assets/images/brand/rymo-logo-black.png";
import { navLink } from "../../utils/Navbar";
import { ImSearch } from "react-icons/im";
import { Button, Drawer, Dropdown, Modal } from "antd";
import { CgHeart } from "react-icons/cg";
import { MdShoppingBasket } from "react-icons/md";
import { Input } from "../SignUp/style";

const Navbar = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
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
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header>
        <img onClick={() => navigate("/")} src={logo} />
        {/* nav links start here */}
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
        {/* nav links end here */}
        <div>
          <ImSearch onClick={showModal} />
          <Modal
            title="Search products..."
            open={modalOpen}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Input type="text" placeholder="Search..." />
          </Modal>

          <MdShoppingBasket onClick={showDrawer} />

          <Drawer //drawer
            title="Products"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <hr />
            <p>No Products Yet</p>
            <p> Cart Totals</p>
            <hr />
            <div className="footer">
              <hr />
              <div>
                <p>Total</p>
                <p>$0.00</p>
              </div>
              <button>Proceed to checkout</button>
              <button>Continue shopping</button>
            </div>
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
  )
};

export default Navbar;

// <NavLink to={"https://github.com/Gulxumor/my-react-project/tree/18-dars/router-dom"}target="_blank"><img src={logo} alt="github-logo" className="nav-logo" /></NavLink>
