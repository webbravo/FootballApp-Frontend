import React, { useState } from "react";

function FormSuccess({ text }) {
  const [show] = useState(true);

  if (show) {
    return (
      <div className="alert alert-success" role="alert">
        {text}
      </div>
    );
  }
}

export default FormSuccess;
