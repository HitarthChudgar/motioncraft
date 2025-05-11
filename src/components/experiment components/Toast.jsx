"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Loader2, Check } from "lucide-react";
import cn from "../../utils";

export function Toast({ className }) {
  const [state, setState] = React.useState("initial"); // initial, loading, success

  const handleSave = () => {
    setState("loading");
    // Simulate API call
    setTimeout(() => {
      setState("success");
      // Reset back to initial state after 2 seconds
      setTimeout(() => setState("initial"), 2000);
    }, 1500);
  };

  const variants = {
    initial: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    loading: { rotate: 360 },
    success: { scale: [1, 1.2, 1] },
  };

  const getIcon = () => {
    switch (state) {
      case "loading":
        return (
          <motion.div
            variants={iconVariants}
            animate="loading"
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <Loader2 className="w-5 h-5 text-zinc-400" />
          </motion.div>
        );
      case "success":
        return (
          <motion.div
            variants={iconVariants}
            animate="success"
            transition={{ duration: 0.3 }}
          >
            <Check className="w-5 h-5 text-emerald-500" />
          </motion.div>
        );
      default:
        return <Info className="w-5 h-5 text-zinc-400" />;
    }
  };

  const getText = () => {
    switch (state) {
      case "loading":
        return "Saving...";
      case "success":
        return "Changes saved";
      default:
        return "Unsaved changes";
    }
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="initial"
      exit="exit"
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        layout: { duration: 0.3 },
      }}
      className={cn(
        "flex items-center gap-4 px-3 py-3 rounded-xl border border-white/10 bg-zinc-800 h-[48px]",
        "shadow-[0px_2px_4px_0px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {getIcon()}
      <span className="text-sm text-zinc-300">{getText()}</span>

      {state === "initial" && (
        <div className="flex items-center gap-4 ml-3">
          <button
            onClick={() => setState("initial")}
            className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-0 text-sm font-medium leading-[32px] rounded-lg text-zinc-300 bg-purple-600 h-[32px] transition-all active:translate-y-[1px] active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.4)] hover:bg-purple-500 shadow-[0px_1px_2px_rgba(0,0,0,0.5),inset_0px_1px_0px_rgba(255,255,255,0.15)]"
          >
            Save
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Toast;
