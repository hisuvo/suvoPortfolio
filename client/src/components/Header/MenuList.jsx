import { Hash } from "lucide-react";
import { useCallback, useState } from "react";
import menuList from "../../../public/menuList";
import { Link } from "react-router";

const MenuList = () => {
  const [isActive, setIsActive] = useState("home");

  const activeToggle = useCallback((e, value) => {
    e.preventDefault();
    setIsActive(value);
  }, []);

  return (
    <>
      <ul className="flex justify-center text-gray-clr text-[1.1rem] items-center gap-4">
        {menuList.map((list, index) => (
          <li
            key={index}
            onClick={(e) => activeToggle(e, list?.name)}
            className={isActive === list?.name ? "dark:text-white" : ""}
          >
            <Link to={list?.name} className="flex items-center">
              <Hash size={16} className="text-secondary-clr" />
              {list?.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
