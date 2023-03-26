import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { HiMenu } from "react-icons/hi";
import SearchModal from "../SearchModal";
import { AiOutlineClose } from "react-icons/ai";
import {
  Column,
  Container,
  Logo,
  NavItems,
  Notification,
  Search,
  Wrapper,
} from "./style";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // SearchBar
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container style={{ background: scrolled }}>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <span onClick={onClose}>
          <AiOutlineClose />
        </span>
        <NavItems className="nav-items-menu">
          <NavItems.NavItem>
            <NavItems.NavItem.NavLink
              className="nav-link nav-link-menu"
              href="#"
            >
              Movies
            </NavItems.NavItem.NavLink>
          </NavItems.NavItem>
          <NavItems.NavItem>
            <NavItems.NavItem.NavLink
              className="nav-link nav-link-menu"
              href="#"
            >
              TV Shows
            </NavItems.NavItem.NavLink>
          </NavItems.NavItem>
          <NavItems.NavItem>
            <NavItems.NavItem.NavLink
              href="#"
              className="nav-link nav-link-menu"
            >
              Documentaries
            </NavItems.NavItem.NavLink>
          </NavItems.NavItem>
        </NavItems>
      </Drawer>
      <SearchModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
      />
      <Wrapper>
        <Column>
          <span className="menu" onClick={showDrawer}>
            <HiMenu />
          </span>
          <NavItems className="nav-left">
            <NavItems.NavItem>
              <NavItems.NavItem.NavLink className="nav-link" href="#">
                Movies
              </NavItems.NavItem.NavLink>
            </NavItems.NavItem>
            <NavItems.NavItem>
              <NavItems.NavItem.NavLink className="nav-link" href="#">
                TV Shows
              </NavItems.NavItem.NavLink>
            </NavItems.NavItem>
            <NavItems.NavItem>
              <NavItems.NavItem.NavLink href="#" className="nav-link">
                Documentaries
              </NavItems.NavItem.NavLink>
            </NavItems.NavItem>
          </NavItems>
        </Column>
        <Column>
          <Logo />
        </Column>
        <Column className="nav-right">
          <NavItems>
            <NavItems.NavItem>
              <Search onClick={showModal} />
            </NavItems.NavItem>
            <NavItems.NavItem>
              <Notification />
            </NavItems.NavItem>
            <NavItems.NavItem>
              <NavItems.NavItem.NavLink href="#" className="nav-link">
                Sign Up
              </NavItems.NavItem.NavLink>
            </NavItems.NavItem>
          </NavItems>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
