import React from "react";

const Button = ({ type = "button", className, children, name }) => {
  return (
    /* eslint-disable react/button-has-type */
    <button type={type} className={className} data-test-id={name}>
      {children}
    </button>
    /* eslint-enable react/button-has-type */
  );
};

export default Button;
