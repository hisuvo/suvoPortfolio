import { assets } from "../assets/assets";

const SelfInfo = () => {
  return (
    <div div className="flex flex-col-reverse gap-4 md:flex-row items-center">
      {/* self description */}
      <div className="w-full max-w-[650px] text-gray-clr space-y-4">
        <p>Hello, i’m Datta!</p>
        <p>
          I’m a self-taught full-stack developer based in Dhaka, Bangladesh. I
          can develop production level websites from scratch and raise them into
          modern user-friendly web experiences.
        </p>

        <p>
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
      </div>

      <div className="max-w-[300px] max-h-[450px]">
        <img
          className="w-full object-cover border-b"
          src={assets.self_image}
          alt="self image"
        />
      </div>
    </div>
  );
};

export default SelfInfo;
