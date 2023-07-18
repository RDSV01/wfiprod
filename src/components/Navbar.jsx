import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "./Logo";
import { elastic as Menu } from "react-burger-menu";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/videos", label: "Vidéos" },
    { to: "/photos", label: "Photos" },
    { to: "/contact", label: "Contact" },
  ];

  const renderNavLinks = () => {
    return navLinks.map((link, index) => (
      <NavLink key={index} to={link.to}>
        <li>{link.label}</li>
      </NavLink>
    ));
  };

  return (
    <div className="navbar">
      <Menu right>{renderNavLinks()}</Menu>
      <div className="navdesktop">
        <div className="logonavbar">
          <Logo />
        </div>
        <div className="linknavbar">
          <ul>{renderNavLinks()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
