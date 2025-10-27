import { FaExplosion } from "react-icons/fa6";

const LiveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 border px-4 py-2 bg-transparent hover:bg-amber-100/5"
    >
      <span>Live</span>
      <FaExplosion />
    </button>
  );
};

export default LiveButton;
