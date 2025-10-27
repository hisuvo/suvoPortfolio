import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="border px-3 py-2 bg-transparent hover:bg-amber-100/5"
    >
      {children}
    </button>
  );
};

export default Button;
