import React from "react";
import { assets } from "../assets/assets";
import Button from "../shared/Button";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      {/* letf side */}
      <div className="w-full max-w-[532px]">
        <h1 className="text-3xl md:text-[2rem] font-semibold">
          Suvo Datta is a{" "}
          <b className="text-secondary-clr">Junior Web Application Developer</b>{" "}
          and <b className="text-secondary-clr">Probelem solver</b>
        </h1>
        <p className="mt-8 mb-6 text-gray-clr">
          He crafts responsive websites where technologies meet creativity
        </p>
        <Button>Contact Me !!</Button>
      </div>

      {/* right side */}
      <div className="w-full max-w-[470px] mx-auto">
        <img src={assets.banner_image} alt="Banner image" />
        <div className="p-1 flex items-center justify-center gap-4 border">
          <p className="w-4 h-4 bg-secondary-clr"></p>
          <p className="text-gray-clr">
            Currently working on <b className="text-white">Portfolio...</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
