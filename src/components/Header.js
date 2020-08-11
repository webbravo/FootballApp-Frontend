import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

const Header = () => {
  return (
    <div className="header">
      <NavbarTop lang={["EN", "ES", "FR"]} />
      <Navbar />
    </div>
  );
};

export default Header;
