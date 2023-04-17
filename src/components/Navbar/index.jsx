import React, { useState } from "react";
import {
  Column,
  Container,
  Hamburger,
  MobileUl,
  Nav,
  NavWrapper,
  Ul,
  Wrapper,
} from "./style";
// import logo from "../../assets/images/featured/blue.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { navbar } from "../../utils/navbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "../Search";
import { Footer } from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../../store/Students";
import CartDrawer from "../CartDrawer";
import { cartDrawerToggle } from "../../store/CartDrawer.js";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/profile");
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/sign-in");
        }}
      >
        Sign in
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/sign-up");
        }}
      >
        Sign up
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          localStorage.removeItem("tokenRymo");
          navigate("/home");
        }}
      >
        <ExitToAppIcon />
        Log out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={() => dispatch(toggleSearch())}
        >
          <SearchIcon />
        </IconButton>
        <p>Search</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={store?.data?.cartItems?.length} color="error">
            <ShoppingBasketIcon onClick={() => dispatch(cartDrawerToggle())} />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={store?.data?.wishlist?.length} color="error">
            <FavoriteBorderIcon onClick={() => navigate("/wishlist")} />
          </Badge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/profile");
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/sign-in");
        }}
      >
        Sign in
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/sign-up");
        }}
      >
        Sign up
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          localStorage.removeItem("tokenRymo");
          navigate("/home");
        }}
      >
        <ExitToAppIcon />
        Log out
      </MenuItem>
    </Menu>
  );

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggle(!toggle);
  };

  return (
    <Container>
      <Nav>
        <NavWrapper>
          <Column>
            {/* <Logo src={logo} alt="logo" loading="lazy" /> */}
            <Hamburger onClick={() => setToggle(!toggle)} />
          </Column>
          <Column>
            <Ul>
              {navbar?.map(
                (navlink) =>
                  !navlink?.hidden && (
                    <NavLink
                      key={navlink?.id}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "#fb774b" : "#333",
                          fontWeight: isActive ? "700" : "500",
                          fontSize: "22px",
                          textDecoration: "none",
                        };
                      }}
                      to={navlink?.path}
                    >
                      {navlink?.title}
                    </NavLink>
                  )
              )}
            </Ul>
            {/* <MobileLogo src={logo} alt="logo" loading="lazy" /> */}
          </Column>
          <Column>
            <Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  onClick={() => dispatch(toggleSearch())}
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge
                    badgeContent={store?.data?.wishlist?.length}
                    color="error"
                  >
                    <FavoriteBorderIcon onClick={() => navigate("/wishlist")} />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={store?.data?.cartItems?.length}
                    color="error"
                  >
                    <ShoppingBasketIcon
                      onClick={() => dispatch(cartDrawerToggle())}
                    />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
              {renderMobileMenu}
              {renderMenu}
            </Box>
          </Column>
        </NavWrapper>
      </Nav>
      <Wrapper>
        <Drawer anchor="left" open={toggle} onClose={toggleDrawer}>
          <MobileUl>
            {navbar?.map((navlink) => (
              <NavLink
                key={navlink?.id}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#fb774b" : "#333",
                    fontWeight: isActive ? "600" : "500",
                    fontSize: "20px",
                    textDecoration: "none",
                  };
                }}
                to={navlink?.path}
              >
                {navlink?.title}
              </NavLink>
            ))}
          </MobileUl>
        </Drawer>
        <CartDrawer />
        <Search />
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};
