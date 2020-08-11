import React, { useState } from "react";

function FormSuccess({ text }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div class="alert alert-success" role="alert">
        {text}
      </div>
    );
  }
}

export default FormSuccess;
