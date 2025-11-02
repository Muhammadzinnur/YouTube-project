import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Sidebar />

      <main className="pt-14 ml-60 transition-all duration-300">
        <div className="p-6">
          <div className="bg-white rounded-lg p-8 text-center">
            <h2 className="text-3xl  text-red-600 font-bold mb-4">You<span className='text-black'>Tube</span></h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
