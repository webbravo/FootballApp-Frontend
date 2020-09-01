import React, { useState } from "react";

function FormError({ text }) {
  const [show] = useState(true);

  if (show) {
    return (
      <div className="alert alert-danger" role="alert">
        {text}
      </div>
    );
  }
}

export default FormError;
