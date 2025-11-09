import React, { useState } from "react";
import { Menu, Search, Mic, Video, Bell, User, Youtube } from "lucide-react";

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="flex items-center justify-between h-14 px-4 gap-2 sm:gap-4">
        {/* Left Section - Logo */}
        <div
          className={`flex items-center gap-2 sm:gap-4 transition-all duration-200 ${
            mobileSearchOpen ? "hidden" : "flex"
          }`}
        >
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors -ml-2"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <a href="/" className="flex items-center" aria-label="YouTube Home">
            <div className="flex items-center gap-0.5">
              <div className="w-7 h-5 sm:w-8 sm:h-6 bg-red-600 rounded flex items-center justify-center">
                <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 ml-0.5">
                YouTube
              </span>
            </div>
          </a>
        </div>
        <div
          className={`flex-1 max-w-2xl transition-all duration-300 ${
            mobileSearchOpen ? "flex mx-0" : "flex mx-4 max-[599px]:hidden"
          }`}
        >
          <div className="flex items-center w-full">
            {mobileSearchOpen && (
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="p-2 mr-2 hover:bg-gray-100 rounded-full flex-shrink-0 transition-colors"
                aria-label="Close search"
              >
                <div className="w-6 h-6 flex items-center justify-center text-gray-700 font-bold text-xl">
                  ←
                </div>
              </button>
            )}
            <div
              className={`flex flex-1 border rounded-l-full overflow-hidden transition-all duration-150 ${
                searchFocused
                  ? "border-blue-500 shadow-inner"
                  : "border-gray-300"
              }`}
            >
              <input
                type="text"
                placeholder="Введите запрос"
                className="flex-1 px-4 py-2 outline-none text-sm sm:text-base"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                autoFocus={mobileSearchOpen}
              />
              <button
                className="px-2 hover:bg-gray-50 flex-shrink-0 transition-colors"
                aria-label="Search with voice"
              >
                <Mic className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <button
              className="px-4 sm:px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Search Button - only visible below 600px when search is not open */}
        <button
          className={`max-[599px]:block hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200 ${
            mobileSearchOpen ? "hidden" : ""
          }`}
          onClick={() => setMobileSearchOpen(true)}
          aria-label="Search"
        >
          <Search className="w-6 h-6" />
        </button>

        {/* Right Section - Action Buttons */}
        <div
          className={`flex items-center gap-1 sm:gap-2 transition-all duration-200 ${
            mobileSearchOpen ? "hidden" : "flex"
          }`}
        >
          <button
            className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Voice search"
          >
            <Mic className="w-6 h-6" />
          </button>

          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Create"
          >
            <Video className="w-6 h-6" />
          </button>

          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>

          <button
            className="p-1 ml-1 sm:ml-2 w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors flex items-center justify-center flex-shrink-0"
            aria-label="Account"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
