import React from "react";

const Textarea = ({ placeholder, name }) => {
  return (
    <div>
      <textarea
        name={name}
        id=""
        cols="8"
        rows="6"
        placeholder={placeholder}
        className="w-full  border py-2 px-4 outline-0 active:bg-amber-100/5 hover:bg-amber-100/5"
      ></textarea>
    </div>
  );
};

export default Textarea;
