import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const LiveButton = ({ onClick, link }) => {
  return (
    <Link to={link} target="_blank">
      <button
        onClick={onClick}
        className="flex justify-center items-center border-[#C778DD] gap-2 border px-4 py-2 bg-transparent hover:bg-amber-100/5"
      >
        <span>Live</span>
        <ArrowUpRight />
      </button>
    </Link>
  );
};

export default LiveButton;
