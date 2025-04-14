"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import cn from "../../utils"; // Make sure this is correct

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}) {
  const [selected, setSelected] = React.useState(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index) => {
    setSelected(index);
    onChange?.(index);
  };

  const buttonVariants = {
    initial: {
      gap: 0,
      paddingLeft: ".5rem",
      paddingRight: ".5rem",
    },
    animate: (isSelected) => ({
      gap: isSelected ? ".5rem" : 0,
      paddingLeft: isSelected ? "0.5rem" : ".5rem",
      paddingRight: isSelected ? "0.5rem" : ".5rem",
    }),
  };

  const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
  };

  const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-zinc-700" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-2 p-2 rounded-lg border border-white/10 bg-zinc-800",
        "shadow-[0px_2px_4px_0px_#00000052,0px_1px_2px_0px_#00000052,0px_0px_0px_1px_#27272A,0px_0px_0px_1px_#FFFFFF0F,0px_-1px_0px_0px_#FFFFFF0F]",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;

        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-white/10 text-white", activeColor)
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <Icon size={16} className="text-inherit" />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

ExpandableTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.elementType,
    })
  ).isRequired,
  className: PropTypes.string,
  activeColor: PropTypes.string,
  onChange: PropTypes.func,
};
