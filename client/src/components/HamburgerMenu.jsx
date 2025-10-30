import { Facebook, Github, Hash, Linkedin, Mail } from "lucide-react";
import menuList from "../../public/menuList";
import { useCallback, useState } from "react";
import { Link } from "react-router";

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState("/");

  const activeToggle = useCallback((e, value) => {
    e.preventDefault();
    setIsActive(value);
  }, []);

  return (
    <div className="w-full max-w-md min-h-screen bg-dark-clr px-4 py-8 flex flex-col sm:hidden">
      {/* Menu list */}

      <ul className="text-3xl space-y-8 font-medium text-gray-clr top-0 flex-grow">
        {menuList.map((list, indx) => (
          <li
            key={indx}
            onClick={(e) => {
              activeToggle(e, list?.name);
            }}
            className={isActive === list?.name ? "text-white" : ""}
          >
            <Link
              to={list?.name}
              className="flex items-cente gap-4 w-full h-full cursor-pointer"
            >
              <Hash /> {list?.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* social media */}
      <ul className="flex gap-4 flex-row-reverse bottom-0">
        <li>
          <a href="">
            <Github />
          </a>
        </li>
        <li>
          <a href="">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="">
            <Mail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
