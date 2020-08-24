import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Avatar = ({ authContext }) => {
  const { firstName } = authContext.authState.userInfo;

  return (
    <li>
      {authContext.isAuthenticated() ? (
        <Link className="link" to="/profile">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="user-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="svg-inline--fa fa-user-circle fa-w-16 fa-fw fa-2x"
          >
            <path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
              className=""
            ></path>
          </svg>
          Hi, {firstName}
        </Link>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </li>
  );
};

const NavbarTop = ({ lang }) => {
  const authContext = useContext(AuthContext);

  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="left-area">
              <ul>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  <span className="text">
                    <span id="date"></span>
                    <span id="month"></span>
                    <span id="year"></span>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faClock} />
                  </span>
                  <span className="text clocks">
                    <span id="hours"></span>:<span id="minutes"></span>:
                    <span id="seconds"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="right-area">
              <ul>
                <li>
                  {authContext.isAuthenticated() ? (
                    <Link className="link" to="/bet-slip">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="dolly"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="svg-inline--fa fa-dolly fa-w-18 fa-fw fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M575.6 309.8l-5.1-15.2c-1.4-4.2-5.9-6.5-10.1-5.1L526 301.1 451.5 77.9c-2.7-8.1-8.4-14.7-16-18.5-7.7-3.8-16.3-4.4-24.4-1.7L176.3 136l-18-50.7C146.9 53.3 116.7 32 82.8 32H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h74.8c20.3 0 38.4 12.8 45.2 31.9l96.7 271.9c-23.3 17.2-37.2 46.5-31.4 78.9 5.6 31.3 30.4 57 61.5 63.5 51.7 10.7 97.2-28.4 97.2-78.2 0-13.1-3.4-25.2-9-36.1l227.5-76c4.2-1.4 6.5-5.9 5.1-10.1zM187 166.1l106.4-35.5 25 74.9c1.4 4.2 5.9 6.5 10.1 5.1l15.2-5.1c4.2-1.4 6.5-5.9 5.1-10.1l-25-74.9L421.2 88l74.5 223.3-174.4 58.1C307.6 358.7 290.7 352 272 352c-6.3 0-12.3.9-18.1 2.3L187 166.1zM272 480c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                          className=""
                        ></path>
                      </svg>
                      Prediction Slip
                    </Link>
                  ) : (
                    <Link className="link" to="/signup">
                      Signup
                    </Link>
                  )}
                </li>

                {authContext.isAuthenticated() ? (
                  <li>
                    <Link className="link" onClick={authContext.logout}>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      <p className="ml-2">Log Out</p>
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                <Avatar authContext={authContext} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
