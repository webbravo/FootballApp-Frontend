import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavLogo = () => {
  return (
    <div className="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-6 d-xl-block d-lg-block d-flex align-items-center">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="10 Dollar predict logo" />
            </Link>
          </div>
        </div>
        <div className="col-6 d-xl-none d-lg-none d-block">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavLogo;
