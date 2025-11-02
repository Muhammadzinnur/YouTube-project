import React from 'react';
import {
  Home,
  MonitorPlay ,
  PlaySquare,
  Clock,
  ThumbsUp,
  Music,
  Gamepad2,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const mainMenu = [
    { icon: Home, label: 'Home', active: true },
    { icon: MonitorPlay, label: 'Shorts' },
    { icon: PlaySquare, label: 'Subscriptions' },
  ];

  const library = [
    { icon: PlaySquare, label: 'Library' },
    { icon: Clock, label: 'History' },
    { icon: Clock, label: 'Watch later' },
    { icon: ThumbsUp, label: 'Liked videos' },
    { icon: Music, label: 'Music' },
    { icon: Gamepad2, label: 'Gaming' },
  ];

  const subscriptions = [
    'DomerGrief',
    'Frontend',
    'SpookyCat',
    'BEFF CHANNEL',
    'ZenyYT',
    'Daquavis',
  ];

  return (
    <aside className="fixed left-0 top-14 h-full w-60 bg-white border-r 
    overflow-hidden hover:overflow-y-auto 
    transition-all duration-200">
      <div className="py-2">
        {mainMenu.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-6 px-6 py-2.5 hover:bg-gray-100 ${
              item.active ? 'bg-gray-100' : ''
            }`}
          >
            <item.icon
              size={22}
              className={`${item.active ? 'text-red-600' : 'text-gray-700'}`}
            />
            <span
              className={`text-sm ${
                item.active ? 'font-medium text-gray-900' : 'text-gray-700'
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="border-t my-2"></div>
      <div className="py-2">
        {library.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-6 px-6 py-2.5 hover:bg-gray-100"
          >
            <item.icon size={22} className="text-gray-700" />
            <span className="text-sm text-gray-700">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="border-t my-2"></div>
      <div className="py-2">
        <h3 className="px-6 py-2 text-sm font-medium text-gray-700">
          Subscriptions
        </h3>
        {subscriptions.map((name, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
          >
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700">
              {name.charAt(0)}
            </div>
            <span className="text-sm text-gray-700">{name}</span>
          </button>
        ))}
      </div>

      <div className="border-t my-2"></div>
      <div className="py-2">
        <button className="w-full flex items-center gap-6 px-6 py-2.5 hover:bg-gray-100">
          <Settings size={22} className="text-gray-700" />
          <span className="text-sm text-gray-700">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
