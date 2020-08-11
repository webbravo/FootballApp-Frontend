import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb-bettix register-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="breadcrumb-content">
              <h2>signup</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <FontAwesomeIcon
                    className="breabCrumb-icon"
                    icon={faArrowRight}
                  />
                </li>
                <li>Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
