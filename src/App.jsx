import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Sidebar />

      <main className="pt-14 ml-60 transition-all duration-300">
        <HomePage />
      </main>
    </div>
  );
};

export default App;
