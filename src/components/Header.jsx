import logo from "../assets/motioncraft_logo.png";

const Header = () => {
  return (
    <div className="w-full h-auto flex justify-between items-center gap-2">
      <img
        className="w-[45px] h-[45px] sm:w-[80px] sm:h-[80px]"
        src={logo}
        alt="MotionCraft Logo"
      />
      <div className="flex flex-col justify-end items-end gap-2">
        <h1 className="text-right text-zinc-50 font-pt-serif text-[16px] sm:text-[32px] font-bold leading-normal">
          Collection of smooth UI experiments
        </h1>
        <p className="text-right text-zinc-50 font-pt-serif text-[12px] sm:text-[24px] font-normal leading-normal">
          Components designed and built by{" "}
          <span className="underline bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 bg-[length:200%_100%] animate-shimmer font-bold">
            Hitarth
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
