import React from 'react';
import './App.css';
import { IoMdDownload } from "react-icons/io";
import connector from './connector.svg';

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex gap-14 items-center bg-gray-200 rounded-md px-4 py-3 relative z-10'>
          <img 
            src={connector} 
            className="absolute top-[-71.5px] left-0 w-10 z-[-1]" 
            alt="logo" 
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Default
          </button>
          <div>
            <IoMdDownload />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
