import React from "react";
import { assets } from "../assets/assets";
import MediaList from "../shared/MediaList";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
        {/* Left Information */}
        <div className="flex flex-col items-center sm:items-start justify-center">
          {/* logo and email */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-1">
              <img
                src={assets.logo_dark}
                alt="website logo"
                className="w-4 h-4"
              />
              <span className="text-base">Datta</span>
            </div>
            <p className="text-base text-gray-clr">suvodatta72@gmail.com</p>
          </div>
          <h3 className="mt-2 text-wrap sm:mt-4">
            Full-stack Web Application Developer
          </h3>
        </div>

        {/* Right Information */}
        <div className="space-y-3 text-center">
          <h3>Media</h3>
          {/* Media part */}
          <MediaList />
        </div>
      </div>

      <div className="mt-12 text-center">
        <p>© Copyright {new Date().getFullYear()}. Made by Datta</p>
      </div>
    </div>
  );
};

export default Footer;
