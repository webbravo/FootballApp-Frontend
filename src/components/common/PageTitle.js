// TitleComponent.jsx

import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle = "10Dpredict.com | Challenge to Win";
  return (
    <Helmet>
      <title>{title ? `${title} - 10Dpredict.com` : defaultTitle}</title>
    </Helmet>
  );
};

export { TitleComponent };
