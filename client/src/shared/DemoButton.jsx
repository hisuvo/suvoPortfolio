import { Link } from "react-router";
import { FaCodeBranch } from "react-icons/fa";

const DemoButton = ({ onClick, children, link }) => {
  return (
    <Link to={link} target="_blank">
      <button
        onClick={onClick}
        className="flex justify-center items-center text-gray-clr gap-2 border px-4 py-2 bg-transparent hover:bg-amber-100/5"
      >
        <span>{children}</span>
        <FaCodeBranch />
      </button>
    </Link>
  );
};

export default DemoButton;
