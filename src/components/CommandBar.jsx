import { ArrowUp } from "lucide-react";

const CommandBar = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 sm:w-auto sm:h-11 px-4 py-2 gap-3 z-10 border-[0.5px] border-zinc-50/5 bg-zinc-800/10 bg-opacity-75 backdrop-blur-xl rounded-full shadow-lg flex items-center">
      <div className="text-center text-white/60 text-md text whitespace-nowrap">
        5 components
      </div>
      <div className="w-px h-4 bg-white/60"></div>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="text-center text-white/60 text-md">Back to top</div>
        <div className="w-5 h-5 rounded border border-white/20 flex justify-center items-center">
          <ArrowUp strokeWidth={2} width={14} height={14} stroke="#A0A0A1" />
        </div>
      </div>
    </div>
  );
};

export default CommandBar;
