import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name=""
      id=""
      className="w-full border py-2 px-4 outline-0 focus:bg-secondary-clr/20 active:bg-secondary-clr/40 hover:bg-secondary-clr/40"
    />
  );
};

export default Input;
