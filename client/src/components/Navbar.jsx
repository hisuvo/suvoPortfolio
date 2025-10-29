import { Cross, CrossIcon, Menu, X } from "lucide-react";
import { assets } from "../assets/assets";
import Button from "../shared/Button";
import HamburgerMenu from "./HamburgerMenu";
import MenuList from "./Header/MenuList";
import ThemeToggle from "./ThemeToggle";
import useToggle from "../hook/useToggle";

const Navbar = () => {
  const { toggle, isClose, value: isOpen } = useToggle(false);

  return (
    <>
      <div className="relative flex justify-between items-center py-4">
        {/* Navbar logo */}
        <div className="flex items-center gap-1 sm:gap-3">
          <img
            src={assets?.logo_dark}
            alt="Logo"
            className="w-6 h-6 sm:w-10 sm:h-10 pointer-events-none"
          />
          <h3 className="font-medium sm:text-2xl">Datta</h3>
        </div>

        {/* Navbar Menu List */}
        <div className="hidden sm:block">
          <MenuList />
        </div>

        {/* Mobile navbar */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full">
            <HamburgerMenu isClose={isClose} />
          </div>
        )}

        {/* Navber Icon and Theme Toggle */}
        <div className="flex items-center gap-2 z-40">
          <ThemeToggle />

          <span onClick={toggle} className="block sm:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
