import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name=""
        id=""
        className="w-full border py-2 px-4 outline-0 active:bg-amber-100/5 hover:bg-amber-100/5"
      />
    </div>
  );
};

export default Input;
