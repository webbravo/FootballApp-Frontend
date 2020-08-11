import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const AppContainer = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppContainer;
