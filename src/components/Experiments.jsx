import Tabs from "./experiment components/Tabs";

const Experiments = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:gap-[128px] gap-8">
      {/* Left content: Title, subtitle, tags, etc. */}
      <div className="w-full md:w-1/4 flex flex-col">
        <h2 className="text-zinc-50 font-medium text-sm sm:text-base leading-normal font-inter">
          Adaptive Tab Navigation
        </h2>
        <p className="text-zinc-400 font-normal text-sm sm:text-base leading-5 sm:leading-6 font-inter mt-3 mb-3">
          A responsive tab system with smooth highlight effects, guiding focus
          through subtle hover and active tab distinctions for seamless
          navigation.
        </p>

        {/* Tags section */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-50 text-sm rounded-md">
            react
          </span>
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-50 text-sm rounded-md">
            tailwind
          </span>
          <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-50 text-sm rounded-md">
            framer
          </span>
        </div>
      </div>

      {/* Right content: Experiment box */}
      <div className="w-full md:w-3/4 flex flex-col justify-center items-center h-[480px] p-16 gap-12 border border-zinc-800 rounded-lg">
        <Tabs />
      </div>
    </div>
  );
};

export default Experiments;
