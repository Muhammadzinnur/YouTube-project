import React from 'react';
import { Menu, Search, Video, Grid, Bell } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-14 flex items-center justify-between px-4 z-50 border-b">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-gray-100 rounded-full">
          <Menu size={20} />
        </button>

        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-5"
          />
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 outline-none text-sm"
          />
          <button className="bg-gray-50 border border-l-0 border-gray-300 px-6 py-2 rounded-r-full hover:bg-gray-100">
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full"><Video size={20} /></button>
        <button className="p-2 hover:bg-gray-100 rounded-full"><Grid size={20} /></button>
        <button className="p-2 hover:bg-gray-100 rounded-full"><Bell size={20} /></button>
        <button className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          M
        </button>
      </div>
    </header>
  );
};

export default Header;
