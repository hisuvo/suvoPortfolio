import React from "react";

const SkillCard = ({ title, items }) => {
  let skillItems = items;

  return (
    <div className="border">
      <h2 className="border-b p-2 text-base font-semibold">{title}</h2>
      <div className="p-2 font-normal text-gray-clr flex flex-wrap gap-2">
        {skillItems.map((item, index) => (
          <span key={index}>{item.name}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
