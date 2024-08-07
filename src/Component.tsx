import React from 'react';
import { IoMdDownload } from "react-icons/io";
import connector from './connector.svg';

interface ComponentProps {
    positionLeft: number;
    bool:boolean;
    correction:number;
}

const Component: React.FC<ComponentProps> = ({ positionLeft,bool,correction }) => {
  const dynamicWidth = 350 - positionLeft;

  return (
    <div className='flex justify-center w-screen mb-8 relative'>
        <div
            style={{
                position: "relative",
                left: `${bool ? positionLeft : positionLeft-correction }px`,
                width: `${dynamicWidth}px`
            }}
            className={`flex gap-14 items-center bg-gray-200 rounded-md px-4 py-3 z-10 justify-between`}
        >
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
  );
};

export default Component;