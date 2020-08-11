import React from "react";
import { AuthContext } from "../context/AuthContext";

const navItems = [
  {
    label: "Live Feed",
    path: "home",
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
    label: "Upcoming Games",
    path: "upcoming-games",
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

const NavItemContainer = ({ children }) => {
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto"> {children} </ul>
  </div>;
};

const Nav = () => {
  const authContext = useContext(AuthContext);
  const { role } = authContext.authState.userInfo;
  return (
    <div class="col-xl-9 col-lg-9">
      <div class="mainmenu">
        <nav className="navbar navbar-expand-lg">
          {navItems.map((navItem, i) => (
            <>
              {/* {navItem.allowedRoles.includes(role) && ()} */}
              <NavItemContainer key={i}>
                <NavItem navItem={navItem} />
              </NavItemContainer>
            </>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
