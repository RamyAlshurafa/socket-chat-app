import React from "react";

const Button = ({ type = "button", className, children }) => {
  return (
    /* eslint-disable react/button-has-type */
    <button type={type} className={className}>
      {children}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

export default Button;
