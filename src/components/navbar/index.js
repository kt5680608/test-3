import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarLeft,
  NavbarMainContainer,
  NavbarRight,
  SearchIcons,
} from "./style";

function Navbar() {
  return (
    <NavbarMainContainer>
      <NavbarLeft>
        <h1>Objet-B</h1>
        <ul>
          <Link to="/">
            <li>SHOP</li>
          </Link>
          <Link to="/">
            <li>MAGAZINE</li>
          </Link>
          <Link to="/">
            <li>ABOUT</li>
          </Link>
        </ul>
      </NavbarLeft>
      <NavbarRight>
        <ul>
          <Link to="/">
            <SearchIcons color="var(--g-color-primary)" />
          </Link>
          <Link to="/">
            <li>Account</li>
          </Link>
          <Link to="/">
            <li>Login</li>
          </Link>
          <Link to="/">
            <li>Bag</li>
          </Link>
        </ul>
      </NavbarRight>
    </NavbarMainContainer>
  );
}

export default Navbar;
