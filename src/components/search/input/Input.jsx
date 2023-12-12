// Input.js
import React from 'react';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="outline-0 border border-1 rounded py-1 px-6 w-[300px]"
    />
  );
}

export default Input;
