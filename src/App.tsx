import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IoMdDownload } from "react-icons/io";
function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex gap-14 items-center bg-gray-200 rounded-md px-4 py-3'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          default
        </button>
        <div>
        <IoMdDownload />
        </div>
      </div>
    </div>
   
  );
}

export default App;
