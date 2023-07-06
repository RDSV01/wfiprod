import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu right>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/videos">
          <li>Vidéos</li>
        </NavLink>
        <NavLink to="/photos">
          <li>Photos</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </Menu>
      <div className="logonavbar">
        <Logo />
      </div>
      <div className="linknavbar">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/videos">
            <li>Vidéos</li>
          </NavLink>
          <NavLink to="/photos">
            <li>Photos</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
