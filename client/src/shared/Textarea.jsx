import React from "react";

const Textarea = ({ placeholder, name }) => {
  return (
    <textarea
      name={name}
      id=""
      cols="8"
      rows="6"
      placeholder={placeholder}
      className="w-full border py-2 px-4 outline-0 focus:bg-secondary-clr/20 active:bg-secondary-clr/30 hover:bg-secondary-clr/20"
    ></textarea>
  );
};

export default Textarea;
