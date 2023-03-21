import React from "react";
import { HiMenu } from "react-icons/hi";
import {
  Column,
  Container,
  Logo,
  NavItems,
  Notification,
  Search,
  Wrapper,
} from "../style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <span className="menu">
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
              <Search />
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
