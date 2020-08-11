import React from "react";
import AppContainer from "../components/AppContainer";
import Hyperlink from "../components/common/Hyperlink";

const FourOFour = () => {
  return (
    <AppContainer>
      <div class="error">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6">
              <div class="part-img">
                <img src="assets/img/error.png" alt="" />
              </div>
              <div class="part-text">
                <h4>Sorry, This page was not found!</h4>
                <Hyperlink
                  to="/"
                  text=" Back to home"
                  className="back-to-home-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default FourOFour;
