import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Hyperlink from "../components/common/Hyperlink";

const Banner = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className="banner">
      <div className="header">
        <div id="navbar" className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-6 d-xl-block d-lg-block d-flex align-items-center">
                    <div className="logo">
                      <Link to="/">
                        <img src={Logo} alt="10 Dollar predict logo" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-9">
                <div className="mainmenu">
                  <nav className="navbar navbar-expand-lg">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    ></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="banner-content">
          <div className="row justify-content-xl-start justify-content-lg-center justify-content-md-center">
            <div className="col-xl-7 col-lg-11 col-md-10 col-12 d-xl-flex d-lg-flex d-block align-items-center">
              <div className="text-content">
                <h1>Predict.</h1>
                <h1>& Win</h1>
                <h4>The Challenge to win.</h4>

                <div className="banner-button">
                  <ul>
                    <li>
                      <Hyperlink
                        to={
                          authContext.isAuthenticated() ? "/predict" : "/login"
                        }
                        text="Predict now"
                        className="bet-btn bet-btn-base"
                      />
                    </li>

                    <li>
                      <Hyperlink
                        to={
                          authContext.isAuthenticated() ? "/predict" : "/signup"
                        }
                        text="Sign up"
                        className="bet-btn bet-btn-border"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return <Banner />;
};

export default Home;
