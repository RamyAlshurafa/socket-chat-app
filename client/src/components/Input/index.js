import React from "react";

const Input = ({ type, className, placeholder, value, onChange, name }) => {
  const onInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onInputChange}
      value={value}
      data-test-id={name}
    />
  );
};

export default Input;
