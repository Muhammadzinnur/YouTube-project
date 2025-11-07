import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

const App = () => {
  const [activePage, setActivePage] = useState("Home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // sidebar collapse state

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar collapse holatini uzatamiz */}
      <Sidebar
        activeItem={activePage}
        setActiveItem={setActivePage}
        collapsed={sidebarCollapsed}
      />

      <div className="flex-1 flex flex-col">
        {/* Header hamburger bosilganda sidebar toggle qiladi */}
        <Header toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main
          className={`pt-14 ml-0 sm:ml-${
            sidebarCollapsed ? "20" : "60"
          } transition-all duration-300`}
        >
          {activePage === "Home" ? (
            <HomePage />
          ) : (
            <div className="flex items-center justify-center h-[80vh] text-gray-500 text-lg">
              No content yet for "{activePage}"
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
