import { useState } from "react";
import {
  GitBranch,
  Eye,
  MessageCircle,
  Trash2,
  GithubIcon,
} from "lucide-react";

const HeaderDropdown = () => {
  const [hoveredItem, setHoveredItem] = useState("branch");
  const [isAnimating, setIsAnimating] = useState(false);

  const menuItems = {
    preview: {
      icon: (
        <Eye
          strokeWidth={1.5}
          className="w-4 h-4"
          style={{ color: "#A1A1AA" }}
        />
      ),
      text: "Preview",
      headerText: "Preview",
      subText: "sdf098vxcv",
    },
    commit: {
      icon: (
        <GithubIcon
          strokeWidth={1.5}
          className="w-4 h-4"
          style={{ color: "#A1A1AA" }}
        />
      ),
      text: "#34098",
      headerText: "Commit",
      subText: "#34098",
    },
    branch: {
      icon: (
        <GitBranch
          strokeWidth={1.5}
          className="w-4 h-4"
          style={{ color: "#A1A1AA" }}
        />
      ),
      text: "Branch",
      headerText: "View All Branch Deployments",
      subText: "ag-long-dashboard-br...",
    },
    deployment: {
      icon: <div className="w-2 h-2 rounded-full bg-emerald-400" />,
      text: "Latest Deployment",
      headerText: "Latest Deployment",
      subText: "Deployed successfully",
    },
    comments: {
      icon: (
        <MessageCircle
          strokeWidth={1.5}
          className="w-4 h-4"
          style={{ color: "#A1A1AA" }}
        />
      ),
      text: "Comments",
      badge: 2,
      headerText: "Comments",
      subText: "2 unread comments",
    },
    clear: {
      icon: (
        <Trash2
          strokeWidth={1.5}
          className="w-4 h-4"
          style={{ color: "#A1A1AA" }}
        />
      ),
      text: "Clear Recent",
      className: "text-red-500",
      headerText: "Clear History",
      subText: "Remove all recent items",
    },
  };

  return (
    <div className="w-56 bg-zinc-800 rounded-lg overflow-hidden border border-white/10 shadow-[0px_4px_8px_0px_#00000032,0px_0px_0px_1px_#FFFFFF1A]">
      {/* Header */}
      <div className="p-3 h-[72px] overflow-hidden relative">
        <div className="space-y-2">
          <div
            className={`text-white text-sm ${
              isAnimating ? "animate-slide-down" : ""
            }`}
          >
            {menuItems[hoveredItem].headerText}
          </div>
          <div
            className={`flex items-center gap-2 text-sm ${
              isAnimating ? "animate-slide-down" : ""
            }`}
            style={{ color: "#A1A1AA" }}
          >
            {hoveredItem === "branch" && (
              <GithubIcon
                strokeWidth={1.5}
                className="w-4 h-4"
                style={{ color: "#A1A1AA" }}
              />
            )}
            <span>{menuItems[hoveredItem].subText}</span>
          </div>
        </div>
        {/* Double divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <div
            className="h-[1px] w-full"
            style={{ backgroundColor: "#212124" }}
          />
          <div className="h-[1px] w-full bg-white/[0.08]" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-2 space-y-1">
        {Object.entries(menuItems).map(([key, item]) => (
          <div
            key={key}
            className={`
              flex items-center gap-2 p-2 rounded 
              hover:bg-white/5 transition-colors cursor-pointer 
              text-white ${item.className || ""} 
              ${hoveredItem === key ? "bg-white/5" : ""}
            `}
            onMouseEnter={() => {
              setIsAnimating(false);
              setTimeout(() => {
                setHoveredItem(key);
                setIsAnimating(true);
              }, 10);
            }}
          >
            {item.icon}
            <span className="text-sm">{item.text}</span>
            {item.badge && (
              <span className="ml-auto bg-blue-600 text-white text-xs px-1.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeaderDropdown;
