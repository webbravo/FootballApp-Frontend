import React from "react";
import { Link } from "react-router-dom";

const Hyperlink = ({ text, to, className }) => (
  <Link to={to} className={className ? className : ""}>
    {text}
  </Link>
);

export default Hyperlink;
