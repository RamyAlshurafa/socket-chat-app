import React from "react";

const Form = ({ children, className }) => {
  return (
    <div className="form">
      <form className={className}>{children}</form>
    </div>
  );
};

export default Form;
