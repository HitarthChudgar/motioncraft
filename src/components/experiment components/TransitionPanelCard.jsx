"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cn from "../../utils";

export function TransitionPanelCard({ className }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const FEATURES = [
    {
      title: "Design Philosophy",
      description:
        "Great design lives at the intersection of beauty and purpose. We craft experiences that don't just look beautiful, but guide users naturally through their journey, making complex actions feel effortless.",
    },
    {
      title: "Engineering Excellence",
      description:
        "Code is a craft. Every line serves a purpose, every function tells a story. We build systems that are not just functional, but maintainable, scalable, and elegant in their simplicity.",
    },
    {
      title: "User-Centered Thinking",
      description:
        "Technology should adapt to humans, not the other way around. We create interfaces that feel natural and intuitive, understanding that the best design is often the one users don't even notice.",
    },
    {
      title: "Thoughtful Innovation",
      description:
        "Innovation isn't about using the latest technology – it's about solving real problems in meaningful ways. We focus on creating lasting solutions that enhance the human experience.",
    },
  ];

  const handleSetActiveIndex = (newIndex) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "w-[364px] overflow-hidden rounded-xl border border-white/10 bg-zinc-800",
        "shadow-[0px_2px_4px_0px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 35 },
              opacity: { duration: 0.15 },
            }}
            className="p-4"
          >
            <h3 className="mb-2 text-lg font-medium text-zinc-200">
              {FEATURES[activeIndex].title}
            </h3>
            <p className="text-zinc-400">{FEATURES[activeIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-white/10">
        <div>
          {activeIndex > 0 && (
            <button
              onClick={() => handleSetActiveIndex(activeIndex - 1)}
              className="px-4 py-0 text-base font-medium leading-[32px] rounded-lg text-zinc-300 bg-zinc-700 h-[32px] transition-all active:translate-y-[1px] active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.4)] hover:bg-zinc-600 shadow-[0px_1px_2px_rgba(0,0,0,0.5),inset_0px_1px_0px_rgba(255,255,255,0.15)]"
            >
              <span className="flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </span>
            </button>
          )}
        </div>
        <div>
          {activeIndex < FEATURES.length - 1 && (
            <button
              onClick={() => handleSetActiveIndex(activeIndex + 1)}
              className="px-4 py-0 text-base font-medium leading-[32px] rounded-lg text-zinc-300 bg-purple-600 h-[32px] transition-all active:translate-y-[1px] active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.4)] hover:bg-purple-500 shadow-[0px_1px_2px_rgba(0,0,0,0.5),inset_0px_1px_0px_rgba(255,255,255,0.15)]"
            >
              <span className="flex items-center">
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransitionPanelCard;
