import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import Headerlogo from "../../image/asset 2.png";

const Header = () => {
  return (
    <div>
      <Navbar className="header">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <img src={Headerlogo} className="header-logo" alt="header logo" />
          </NavLink>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
