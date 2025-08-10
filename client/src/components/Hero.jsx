import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create Stunning Content <br /> with{" "}
          <span className="text-primary">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-md text-gray-600">
          Unleash your creativity with our premium AI toolkit — craft compelling
          articles, generate breathtaking images, and streamline your workflow
          like never before.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer w-50"
        >
          Start creating now
        </button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer w-50">
          Watch demo
        </button>
      </div>
      <div className="flex flex-col items-center gap-4 mt-8 mx-auto text-gray-600">
        <img src={assets.user_group} alt="" className="h-8 mb-4" />
        <p className="text-center">Trusted by over
        10,000 creators worldwide</p>
      </div>
    </div>
  );
};

export default Hero;
