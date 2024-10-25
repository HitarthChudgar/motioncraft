import Header from "./Header";
import Experiments from "./Experiments";

const PageTemplate = () => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-950">
      {/* Background texture */}
      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/paper_texture.jpg')] bg-cover bg-center mix-blend-multiply opacity-80 z-[-1]"></div>

      {/* Content wrapper with width control */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1400px] gap-12 p-5 pt-10 md:gap-24 md:p-5 md:pt-12 mx-auto">
        {/* Header Component */}
        <Header />

        {/* Divider Line */}
        <svg
          className="w-full"
          viewBox="0 0 1184 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="0.5"
            x2="1183.5"
            y2="0.5"
            stroke="#A1A1AA"
            strokeLinecap="round"
            strokeDasharray="2 4 6 8"
          />
        </svg>

        {/* Experiments Component */}
        <Experiments />
        <Experiments />
        <Experiments />
        <Experiments />
      </div>
    </div>
  );
};

export default PageTemplate;
