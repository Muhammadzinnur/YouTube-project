import React from "react";
import {
  Home,
  MonitorPlay,
  PlaySquare,
  Clock,
  ThumbsUp,
  Music,
  Gamepad2,
  Settings,
} from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem, collapsed }) => {
  const mainMenu = [
    { icon: Home, label: "Home" },
    { icon: MonitorPlay, label: "Shorts" },
    { icon: PlaySquare, label: "Subscriptions" },
  ];

  const library = [
    { icon: PlaySquare, label: "Library" },
    { icon: Clock, label: "History" },
    { icon: Clock, label: "Watch later" },
    { icon: ThumbsUp, label: "Liked videos" },
    { icon: Music, label: "Music" },
    { icon: Gamepad2, label: "Gaming" },
  ];

  const subscriptions = [
    "DomerGrief",
    "Frontend",
    "SpookyCat",
    "BEFF CHANNEL",
    "NetherPlay",
    "Daquavis",
  ];

  const renderButton = (item, isActive, onClick, icon = true) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-6 px-6 py-2.5 rounded-lg transition-all duration-150
        ${isActive ? "bg-gray-100" : "hover:bg-gray-100 active:scale-[0.98]"}
      `}
    >
      {icon && (
        <item.icon
          size={22}
          className={`${
            isActive ? "text-red-600" : "text-gray-700"
          } transition-colors`}
        />
      )}
      {!collapsed && (
        <span
          className={`text-sm transition-colors ${
            isActive ? "font-medium text-gray-900" : "text-gray-700"
          }`}
        >
          {item.label || item}
        </span>
      )}
    </button>
  );

  return (
    <aside
      className={`fixed left-0 top-14 h-full bg-white border-r 
        overflow-hidden hover:overflow-y-auto 
        transition-all duration-200
        ${collapsed ? "w-20" : "w-60"}`}
    >
      <div className="py-2">
        {mainMenu.map((item) =>
          renderButton(item, activeItem === item.label, () =>
            setActiveItem(item.label)
          )
        )}
      </div>

      <div className="border-t my-2" />

      <div className="py-2">
        {library.map((item) =>
          renderButton(item, activeItem === item.label, () =>
            setActiveItem(item.label)
          )
        )}
      </div>

      <div className="border-t my-2" />

      <div className="py-2">
        {!collapsed && (
          <h3 className="px-6 py-2 text-sm font-medium text-gray-700">
            Subscriptions
          </h3>
        )}
        {subscriptions.map((name, index) => (
          <button
            key={index}
            onClick={() => setActiveItem(name)}
            className={`w-full flex items-center gap-3 px-6 py-2 rounded-lg transition-all duration-150
              ${
                activeItem === name
                  ? "bg-gray-200"
                  : "hover:bg-gray-300 active:scale-[0.98]"
              }
            `}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold
                ${
                  activeItem === name
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
            >
              {name.charAt(0)}
            </div>
            {!collapsed && (
              <span
                className={`text-sm ${
                  activeItem === name
                    ? "font-medium text-gray-900"
                    : "text-gray-700"
                }`}
              >
                {name}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="border-t my-2" />

      {renderButton(
        { icon: Settings, label: "Settings" },
        activeItem === "Settings",
        () => setActiveItem("Settings")
      )}
    </aside>
  );
};

export default Sidebar;
