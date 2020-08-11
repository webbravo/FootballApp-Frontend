import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BreadCrumb from "./components/BreadCrumb";

const AppShell = ({ children }) => {
  return (
    <>
      <Header />
      <BreadCrumb />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
