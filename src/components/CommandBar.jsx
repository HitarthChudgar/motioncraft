import { ArrowUp } from "lucide-react";

const CommandBar = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 sm:w-auto sm:h-11 px-4 py-3 gap-4 z-10 border-[0.5px] border-zinc-50/5 bg-zinc-800/10 bg-opacity-75 backdrop-blur-xl rounded-full shadow-lg flex items-center">
      <div className="text-center text-white/70 text-sm sm:text-base whitespace-nowrap">
        5 components
      </div>
      <div className="w-px h-4 bg-white/60"></div>
      <div
        className="flex items-center gap-2 whitespace-nowrap cursor-pointer group"
        onClick={scrollToTop} // Call the scroll to top function on click
      >
        <div className="text-center text-white/70 text-sm sm:text-base">
          Back to top
        </div>
        <div className="w-6 h-6 p-1 rounded-full border border-white/20 flex justify-center items-center">
          <ArrowUp
            strokeWidth={2}
            width={14}
            height={14}
            stroke="#A0A0A1"
            className="group-hover:animate-bounce" // Bounce animation on hover
          />
        </div>
      </div>
    </div>
  );
};

export default CommandBar;
