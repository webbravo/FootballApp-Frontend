import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function FormError({ text }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div class="alert alert-danger" role="alert">
        {text}
      </div>
    );
  }

  // if (show) {
  //   return (
  //     <Alert variant="danger" dismissible onClose={() => setShow(false)}>
  //       <p>{text}</p>
  //     </Alert>
  //   );
  // }
}

export default FormError;
