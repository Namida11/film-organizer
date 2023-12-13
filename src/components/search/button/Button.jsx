
import React from 'react';
import './Button.css';

function Button({ name, className, onClick }) {
  return (
    <button className={`p-1 font-semibold text-base  border w-[180px] ${className} `} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
