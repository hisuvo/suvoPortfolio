import { Hash } from "lucide-react";
import React from "react";

const Title = () => {
  return (
    <div className="text-3xl flex items-center">
      <Hash />
      <h2>Contact</h2>
      <hr className="w-full max-w-[18rem] h-[0.90px] border-none bg-secondary-clr mx-4" />
    </div>
  );
};

export default Title;
