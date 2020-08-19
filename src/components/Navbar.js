import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "predict now",
    path: "predict",
    allowedRoles: ["admin", "user"],
  },
  {
    label: "Live Feed",
    path: "live-feed",
    allowedRoles: ["admin", "user"],
  },
  {
    label: "Bet Slip",
    path: "bet-slip",
    allowedRoles: ["admin", "user"],
  },
  {
    label: "Punters",
    path: "punters",
    allowedRoles: ["admin", "user"],
  },
  {
    label: "Live Scores",
    path: "live-score",
    allowedRoles: ["admin", "user"],
  },
];

const NavItem = ({ navItem }) => {
  return (
    <li className="nav-item">
      <Link to={navItem.path} className="nav-link">
        {navItem.label}
      </Link>
    </li>
  );
};

const NavItemContainer = ({ children }) => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto"> {children} </ul>
  </div>
);

const Nav = () => {
  const authContext = useContext(AuthContext);
  const { role } = authContext.authState.userInfo;
  return (
    <div className="col-xl-9 col-lg-9">
      <div className="mainmenu">
        <nav className="navbar navbar-expand-lg">
          {authContext.isAuthenticated() ? (
            <NavItemContainer>
              {navItems.map((navItem, i) => (
                <div key={i}>
                  {navItem.allowedRoles.includes(role) && (
                    <NavItem key={i} navItem={navItem} />
                  )}
                </div>
              ))}
            </NavItemContainer>
          ) : (
            ""
          )}
        </nav>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div id="navbar" className="bg-black header-bottom">
      <div className="container">
        <div className="row">
          <NavLogo /> <Nav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
