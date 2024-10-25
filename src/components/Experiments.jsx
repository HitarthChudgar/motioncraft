const Experiments = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:gap-[128px] gap-8">
      {/* Left content: Title, subtitle, tags, etc. */}
      <div className="w-full md:w-1/4 flex flex-col">
        <h2 className="text-zinc-50 font-medium text-sm sm:text-base leading-normal font-inter">
          Physical World-Inspired Button
        </h2>
        <p className="text-zinc-400 font-normal text-sm sm:text-base leading-5 sm:leading-6 font-inter mt-3">
          This button is designed to mimic the look and feel of real-world
          objects. With subtle shadows, depth, and tactile feedback, they create
          an intuitive, familiar experience. The goal is to make digital
          interactions feel natural and responsive, much like pressing a
          physical button.
        </p>
        <p className="text-zinc-400 font-normal italic text-sm sm:text-base leading-5 sm:leading-6 font-inter mt-4">
          Last Updated: 30 September 2024
        </p>

        {/* Tags section */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-50 text-sm rounded-md">
            react
          </span>
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-50 text-sm rounded-md">
            tailwind
          </span>
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-50 text-sm rounded-md">
            framer
          </span>
        </div>
      </div>

      {/* Right content: Experiment box */}
      <div className="w-full md:w-3/4 flex flex-col justify-center items-center h-[480px] p-16 gap-12 border border-zinc-800 rounded-lg">
        {/* Example button experiment */}
        <button className="bg-red-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-5 rounded-lg flex items-center gap-2 hover:bg-red-600 transition">
          <span className="material-icons">delete</span> Delete Message
        </button>
      </div>
    </div>
  );
};

export default Experiments;
