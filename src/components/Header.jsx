import logo from "../assets/motioncraft_logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-top w-full h-auto gap-6">
      <img
        className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px]"
        src={logo}
        alt="MotionCraft Logo"
      />
      <div className="flex flex-col items-end justify-end gap-3">
        <h1 className="text-right font-pt-serif font-bold text-zinc-50 leading-tight w-full text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
          Collection of UI experiments
        </h1>
        <p className="text-right font-pt-serif font-normal text-zinc-50 leading-tight text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
          Designed and built by{" "}
          <span className="font-bold underline bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 bg-[length:200%_100%] animate-shimmer">
            Hitarth
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
