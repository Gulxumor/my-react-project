import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../../store/CounterSlice";

const Navbar = () => {

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [open, setOpen] = useState(false);
 

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
        <div onClick={() => localStorage.removeItem("token")}>Log Out</div>
      ),
    },
  ];

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <header>
        <img onClick={() => navigate("/")} src={logo} alt="logo" />
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
          <ImSearch onClick={setModalOpen(true)} />
          <Modal
            title="Search products..."
            open={modalOpen}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={setModalOpen(false)}
          >
            <Input type="text" placeholder="Search..." />
          </Modal>

          <MdShoppingBasket onClick={setOpen(true)} />

          <Drawer //drawer
            title="Products"
            placement="right"
            onClose={setOpen(false)}
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

  const { counter } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Navbar, {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount({ minus: 2 }))}>
        -2
      </button>
    </div>

  );
};

export default Navbar;
