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
      title: "Brand",
      description:
        "Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.",
    },
    {
      title: "Product",
      description:
        "Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions.",
    },
    {
      title: "Website",
      description:
        "Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.",
    },
    {
      title: "Design System",
      description:
        "Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.",
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
      <div className="relative min-h-[160px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 p-4"
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
