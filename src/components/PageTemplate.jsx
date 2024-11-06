import Header from "./Header";
import Experiments from "./Experiments";

const PageTemplate = () => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-900">
      {/* Background texture */}
      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/paper_texture.jpg')] bg-cover bg-center mix-blend-multiply opacity-80 z-[-1]"></div>

      {/* Content wrapper with width control */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1400px] gap-40 p-5 pt-10 md:gap-40 md:p-5 md:pt-12 mx-auto">
        {/* Header Component */}
        <Header />

        {/* Experiments Component */}
        <Experiments />
      </div>
    </div>
  );
};

export default PageTemplate;
