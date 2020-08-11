import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function FormErrorInput({ text }) {
  const [show, setShow] = useState(true);

  return (
    <span class="text-danger span-err" role="alert">
      {text}
    </span>
  );
}

export default FormErrorInput;
