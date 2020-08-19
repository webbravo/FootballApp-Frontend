import React from "react";
import loadIcon from "../../assets/img/preloader.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loadIcon} alt="" />
    </div>
  );
};

export default Preloader;
