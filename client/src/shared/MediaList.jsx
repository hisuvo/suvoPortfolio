import { Facebook, Github, Hash, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

const MediaList = () => {
  return (
    <ul className="flex gap-4 flex-row-reverse bottom-0">
      <li>
        <Link href="">
          <Github />
        </Link>
      </li>
      <li>
        <Link href="">
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link href="">
          <Facebook />
        </Link>
      </li>
      <li>
        <Link href="">
          <Mail />
        </Link>
      </li>
    </ul>
  );
};

export default MediaList;
