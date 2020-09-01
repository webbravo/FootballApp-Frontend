import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import Hyperlink from "./common/Hyperlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Note = () => {
  return (
    <div className="notes">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            10 D Predict is operating under the 10 dollar predict Limited, is
            the provider of this website, Licensed by the Nigerian Betting and
            Lotteries commmission.
          </div>
        </div>
      </div>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="copyright-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-md-6 col-lg-6 d-lg-flex d-lg-flex d-block align-items-center">
            <p className="copyright-text">
              <Hyperlink to="#" text="10Dollar predict" /> ©2020. PRIVACY POLICY
            </p>
          </div>
          <div className="text-right col-md-6 col-xl-4 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
            <p className="copyright-text">
              Developed by
              <Hyperlink
                to="https://twitter.com/teamwebbravo"
                text=" Webbravo ( @teamwebbravo)"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="footer" id="contact">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-4 col-md-10">
              <div className="about-widget">
                <Link className="logo" to={"/"}>
                  <img src={Logo} alt="10 Dollar predict logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="useful-links">
                <h3> About Us </h3>
                <p className="text-white">
                  10 Dollar Predict offers you all the best online prediction
                  from every corner of the planet with thousands of online
                  prediction markets.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-3">
              <div className="about-widget">
                <h3> Connect with Us </h3>
                <div className="social">
                  <ul>
                    <li>
                      <Link to="/" className="social-icon">
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                      <Link to="/" className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                      <Link to="/" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                      <Link to="/" className="social-icon">
                        <FontAwesomeIcon icon={faPinterest} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="support">
                  <ul>
                    <li>
                      <span className="icon">
                        <img src="assets/img/svg/email.svg" alt="" />
                      </span>
                      <span className="text">
                        <span className="title"> Mail Us </span>
                        <span className="descr"> don 't@reply.com</span>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/img/svg/phone-call.svg" alt="" />
                      </span>
                      <span className="text">
                        <span className="title"> Get In Touch </span>
                        <span className="descr"> +88 015 00 00 00 </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="payment-method">
                    <h6 className="payment-method-title">
                      Payment methods are We accept
                    </h6>
                    <div className="all-method">
                      <div className="single-method">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                          alt="Mastercard logo"
                        />
                      </div>
                      <div className="single-method">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-512.png"
                          alt="Visa Logo"
                        />
                      </div>
                      <div className="single-method">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Bsv-icon-small.png"
                          alt="Bitcion logo"
                        />
                      </div>
                      <div className="single-method">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Verve_Image.png"
                          alt="verve Card"
                        />
                      </div>
                      <div className="single-method">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zenith_Bank_Logo.svg/1200px-Zenith_Bank_Logo.svg.png"
                          alt="Zenith Bank Logo"
                        />
                      </div>
                      <div className="single-method">
                        <img
                          src="https://www.mutiuokediran.com/blog/wp-content/uploads/2015/05/GTBank.jpg"
                          alt="GTBank Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Note />
      <Copyright />
    </>
  );
};

export default Footer;
