import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Searching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadingStates = [
    "Searching in Strava...",
    "Route searching...",
    "Analyzing elevation data...",
    "Checking traffic patterns...",
    "Finding popular paths...",
    "Calculating best routes...",
  ];

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % loadingStates.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading, loadingStates.length]);

  const handleSearch = () => {
    if (!searchText.trim()) return;
    setCurrentIndex(0);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 15000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    // The wrapper div can go full-width or max 380px
    <div className="flex flex-col items-start gap-2 w-full max-w-[380px]">
      {/* Search Input */}
      <div className="relative w-full">
        {/* Shadow Layers */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ boxShadow: "0px 2px 2px 0px #0000003D" }}
        />
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ boxShadow: "0px 0px 1px 1.5px #0000003D" }}
        />
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ boxShadow: "0px 0px 0px 1px #27272A" }}
        />
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ boxShadow: "0px 0px 0px 1px #FFFFFF0F" }}
        />
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ boxShadow: "0px -1px 0px 0px #FFFFFF0F" }}
        />

        {/* Search Icon */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          <Search className="w-5 h-5 text-[#71717A]" strokeWidth={1.5} />
        </div>

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What's the best road to run?"
          className="
      w-full
      py-2
      pl-8
      text-base
      placeholder-[#71717A]
      bg-[#212124]
      text-white
      rounded-lg
      outline-none
    "
        />
      </div>

      {/* Loading States */}
      {isLoading && (
        <div className="relative w-full h-6 overflow-hidden">
          <div
            key={currentIndex}
            className="shimmer absolute w-full text-sm font-medium"
          >
            {loadingStates[currentIndex]}
          </div>
        </div>
      )}

      <style jsx>{`
        .shimmer {
          background: linear-gradient(
            90deg,
            #27272a 0%,
            #e4e4e7 50%,
            #27272a 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2.5s infinite;
        }

        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateY(4px);
            background-position: 100% 50%;
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
            background-position: -100% 50%;
          }
          100% {
            opacity: 0;
            transform: translateY(-4px);
            background-position: -100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Searching;
