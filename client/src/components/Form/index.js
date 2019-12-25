import React from "react";

const Form = ({ children, className, onSubmit }) => {
  return (
    <div className="form">
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
