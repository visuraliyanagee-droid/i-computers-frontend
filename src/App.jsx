import { useState } from 'react'
import './App.css';

function App() {

return (
    
      <div className="border w-600 h-600  bg-yellow-500 relative">
      <div className="w-500 h-500 bg-blue-700 flex flex-col items-center justify-center">
      <div className="w-100 h-100 bg-green-500"></div>
      <div className="w-100 h-100 bg-red-700 fixed left-[150] top-[150]" ></div>
      <div className="w-100 h-100 bg-purple-800"></div>
      <div className="w-100 h-100 bg-pink-800 absolute left-[50] right-[50]"></div>

      
    </div>
    </div>
  );
}

export default App;
