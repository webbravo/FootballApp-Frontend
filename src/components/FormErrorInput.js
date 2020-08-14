import React from "react";

function FormErrorInput({ text }) {
  return (
    <span class="text-danger span-err" role="alert">
      {text}
    </span>
  );
}

export default FormErrorInput;
