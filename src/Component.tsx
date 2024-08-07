import React from "react";
import { IoMdDownload } from "react-icons/io";
import connector from "./connector2.svg";

interface ComponentProps {
  positionLeft: number;
  last: boolean;
  correction: number;
  first: boolean;
}

const Component: React.FC<ComponentProps> = ({
  positionLeft,
  last,
  correction,
  first
}) => {
  const dynamicWidth = 350 - positionLeft;

  return (
    <div className="flex justify-center w-screen mb-8 relative">
      <div
        style={{
          position: "relative",
          left: `${last ? positionLeft : positionLeft - correction}px`,
          width: `${dynamicWidth}px`,
        }}
        className={`flex gap-14 items-center bg-gray-200 rounded-md px-4 py-3 z-10 justify-between`}
      >
        {!first && (
          <img
            src={connector}
            className="absolute top-[-58.5px] left-2 w-10 z-[-1]"
            alt="logo"
          />
        )}

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
