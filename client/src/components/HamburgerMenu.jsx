import { Facebook, Github, Hash, Linkedin, Mail } from "lucide-react";

const HamburgerMenu = () => {
  return (
    <div className="w-full max-w-md min-h-screen bg-secondary-clr/5 px-4 py-8 flex flex-col">
      {/* Menu list */}

      <ul className="text-3xl space-y-8 font-medium top-0 flex-grow">
        <li>
          <a
            href=""
            className="flex items-center gap-4 w-full h-full cursor-pointer"
          >
            <Hash /> home
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-4 w-full h-full cursor-pointer"
          >
            <Hash /> work
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-4 w-full h-full cursor-pointer"
          >
            <Hash /> about-me
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex items-center gap-4 w-full h-full cursor-pointer"
          >
            <Hash /> contacts
          </a>
        </li>
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
