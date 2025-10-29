import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="border px-4 py-2 border-[#C778DD] font-medium bg-transparent hover:bg-amber-100/5"
    >
      {children}
    </button>
  );
};

export default Button;
