import { funFacts } from "../../public/funfact";

const FunFacts = () => {
  return (
    <div className="*:mr-4">
      {funFacts.map((fun, index) => (
        <span
          key={index}
          className="leading-[50px] text-gray-clr border border-gray-clr p-2"
        >
          {fun.fact}
        </span>
      ))}
    </div>
  );
};

export default FunFacts;
