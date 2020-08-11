import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const ButtonFilled = ({ type, text, size, loading, onClick }) => {
  const classes = classNames({
    "bet-btn base-btn-bet": size === "lg",
  });
  return (
    <button
      type={type}
      className={classes}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faCircleNotch} spin />
          <span className="ml-2">Loading...</span>
        </span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default ButtonFilled;
