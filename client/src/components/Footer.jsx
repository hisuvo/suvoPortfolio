import React from "react";
import { assets } from "../assets/assets";
import MediaList from "../shared/MediaList";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center">
        {/* Left Information */}
        <div>
          {/* logo and email */}
          <div className="flex gap-6">
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
          <h3 className="mt-4">Full-stack Web Application Developer</h3>
        </div>

        {/* Right Information */}
        <div className="space-y-3">
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
