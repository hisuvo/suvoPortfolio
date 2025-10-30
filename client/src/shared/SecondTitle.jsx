import { Hash } from "lucide-react";

const SecondTitle = ({ title }) => {
  return (
    <div className="text-3xl flex items-center">
      <Hash className="text-secondary-clr" />
      <h2>{title}</h2>
    </div>
  );
};

export default SecondTitle;
