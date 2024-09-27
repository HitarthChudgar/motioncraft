import logo from "../assets/motioncraft_logo_hq.svg";

const Header = () => {
  return (
    <div className="w-full h-auto flex justify-between items-center">
      <img className="h-14" src={logo} alt="MotionCraft Logo" />
      <h1 className="text-xl text-right text-zinc-50">
        A collection of UI and Interaction experiment
        <br />
        components designed and built by{" "}
        <span className="underline">Hitarth</span>
      </h1>
    </div>
  );
};

export default Header;
