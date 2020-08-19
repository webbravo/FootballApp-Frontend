import React from "react";

function FormErrorInput({ text }) {
  return (
    <span className="text-danger span-err" role="alert">
      {text}
    </span>
  );
}

export default FormErrorInput;
