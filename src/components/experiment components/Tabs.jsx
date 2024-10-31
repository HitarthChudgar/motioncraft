import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "craft", label: "Craft" },
  { id: "design", label: "Design" },
  { id: "code", label: "Code" },
  { id: "docs", label: "Docs" },
];

const Tabs = () => {
  const [focused, setFocused] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="relative flex space-x-1 p-2 rounded-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            setFocused(null); // Clear the focused state on selection
          }}
          onFocus={() => setFocused(tab.id)}
          onMouseEnter={() => setFocused(tab.id)}
          className={`relative z-10 rounded-full px-3 py-1.5 text-md font-medium transition ${
            activeTab === tab.id
              ? "bg-zinc-800 shadow-lg border border-zinc-600 text-zinc-50"
              : "text-zinc-50"
          }`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {/* Highlight background animation on hover or focus */}
          {focused === tab.id && activeTab !== tab.id && (
            <motion.span
              layoutId="highlight"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="absolute inset-0 bg-zinc-700 rounded-full -z-10"
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
