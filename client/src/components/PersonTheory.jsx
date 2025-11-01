import { Quote, QuoteIcon } from "lucide-react";
import React from "react";

const PersonTheory = () => {
  return (
    <div className="w-full max-w-[712px] mx-auto text-right mt-14 md:mt-20">
      <div className="text-xl border p-4 md:p-8 relative">
        <span className="absolute -top-3 left-10 border">
          <Quote />
        </span>
        <h2 className="text-left font-medium">
          With great power comes great electricity bill
        </h2>
        <span className="absolute -bottom-3 right-10 border">
          <QuoteIcon />
        </span>
      </div>
      <h2 className="p-4 text-xl border inline-block">Developer. Datta</h2>
    </div>
  );
};

export default PersonTheory;
