import logo from "../assets/motioncraft_logo_hq.svg";

const Header = () => {
  return (
    <div className="w-full h-auto flex justify-between items-center gap-2">
      <img className="xl:h-14 sm:h-10" src={logo} alt="MotionCraft Logo" />
      <h1 className="text-right text-xs sm:text-sm lg:text-lg xl:text-xl text-zinc-50">
        A collection of UI and Interaction experiment
        <br />
        components designed and built by{" "}
        <span className="underline">Hitarth</span>
      </h1>
    </div>
  );
};

export default Header;
