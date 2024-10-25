import Header from "./Header";
import Experiments from "./Experiments";

const PageTemplate = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900">
      {/* Background texture */}
      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/paper_texture.jpg')] bg-cover bg-center mix-blend-multiply opacity-80 z-[-1]"></div>

      {/* Content wrapper with width control */}
      <div className="w-full max-w-[85%] mx-auto px-4 py-5 sm:px-4 sm:py-5 lg:px-14 xl:px-36 2xl:px-96 lg:py-12 flex flex-col gap-8 sm:gap-8 xl:gap-24">
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
            stroke-linecap="round"
            stroke-dasharray="2 4 6 8"
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
