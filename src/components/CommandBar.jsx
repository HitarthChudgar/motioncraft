import { ArrowUp } from "lucide-react";

const CommandBar = () => {
  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 sm:w-auto sm:h-11 px-3 py-3 gap-2 bg-zinc-800 rounded-full shadow-[inset_0px_0px_0px_1px_#27272A,inset_0px_0px_0px_1.5px_rgba(255,255,255,0.30),0px_8px_16px_0px_rgba(0,0,0,0.08),0px_16px_32px_0px_rgba(0,0,0,0.08)] justify-start items-center inline-flex">
      <div className="text-center text-white/60 text-sm leading-tight">
        5 components
      </div>
      <div className="w-px h-3 bg-white/60 items-center"></div>
      <div className="justify-start items-center inline-flex gap-2">
        <div className="text-center text-white/60 text-sm leading-tight">
          Back to top
        </div>
        <div className="w-4 h-4 bg-zinc-800 rounded border border-white/20 flex-col justify-center items-center inline-flex">
          <ArrowUp strokeWidth={1.5} width={12} height={12} stroke="#A0A0A1" />
        </div>
      </div>
    </div>
  );
};

export default CommandBar;
