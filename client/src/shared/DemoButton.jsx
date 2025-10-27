import { FaCodeBranch } from "react-icons/fa";

const DemoButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 border px-4 py-2 bg-transparent hover:bg-amber-100/5"
    >
      <span>{children}</span>
      <FaCodeBranch />
    </button>
  );
};

export default DemoButton;
