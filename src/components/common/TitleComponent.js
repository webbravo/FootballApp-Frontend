// TitleComponent.jsx

import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle = "A Challenge to Win | 10D Predict | ";
  return (
    <Helmet>
      <title>{title ? `${title} | 10D Predict ` : defaultTitle}</title>
    </Helmet>
  );
};

export { TitleComponent };
