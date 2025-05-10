"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trash2, Check } from "lucide-react";

export function HoldButton({
  onComplete,
  children,
  className = "",
  duration = 1000, // in milliseconds
}) {
  const [holding, setHolding] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    let timeoutId;
    if (holding) {
      timeoutId = setTimeout(() => {
        setConfirming(true);
        onComplete();
      }, duration);
    }
    return () => {
      clearTimeout(timeoutId);
      if (!holding) {
        setConfirming(false);
      }
    };
  }, [holding, onComplete, duration]);

  return (
    <button
      ref={buttonRef}
      onMouseDown={() => setHolding(true)}
      onMouseUp={() => setHolding(false)}
      onMouseLeave={() => setHolding(false)}
      onTouchStart={() => setHolding(true)}
      onTouchEnd={() => setHolding(false)}
      className={`relative px-4 py-2 text-base font-medium rounded-lg text-white bg-red-500 transition-all active:translate-y-[1px] active:shadow-[inset_0px_1px_1px_rgba(0,0,0,0.4)] hover:bg-red-600 shadow-[0px_1px_2px_rgba(0,0,0,0.5),inset_0px_1px_0px_rgba(255,255,255,0.15)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-3 justify-center min-w-[140px] relative z-10">
        {confirming ? (
          <>
            <Check size={18} className="text-red-100" />
            <span className="text-red-100">Confirm</span>
          </>
        ) : (
          <>
            <Trash2 size={18} className={holding ? "text-red-200" : ""} />
            <span className={holding ? "text-red-200" : ""}>
              Hold to delete
            </span>
          </>
        )}
      </div>
      {holding && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          className="absolute inset-0 bg-red-700/40 backdrop-brightness-75"
        />
      )}
    </button>
  );
}

export default HoldButton;
