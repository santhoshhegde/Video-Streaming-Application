import React, { useState } from "react";
import Menulogo from "../Icons/menulogo.svg";
import YoutubeLogo from "../Icons/YouTubeLogo.png";
import UserLogo from "../Icons/userLogo.svg";
import SearchLogo from "../Icons/searchLogo.svg";

const Header = () => {
  const [isflicker, setFlicker] = useState(false);
  const handleClick = () => {
    setFlicker(true);
    setTimeout(() => setFlicker(false), 600);
  };
  return (
    <header className="grid grid-flow-col items-center shadow-lg p-5">
      <div className="flex col-span-1 gap-5 items-center">
        <button
          onClick={handleClick}
          className={`cursor-pointer hover:bg-gray-200 rounded-full transition duration-300 p-2 ${
            isflicker ? "flicker" : ""
          }`}
        >
          <img className="h-5 " src={Menulogo} alt="Menu Icon" />
        </button>
        <img className="h-5 " src={YoutubeLogo} alt="Youtube Logo" />
      </div>

      <div className="col-span-10 flex justify-center">
        <input
          className="pl-3 p-3 w-96 border outline-1 outline-gray-400 rounded-l-full"
          type="search"
          placeholder="Search"
        />
        <button
          className="p-2 px-6 bg-[#d3d3d3] rounded-r-full"
          onClick={() => console.log("Search")}
        >
          <img className="h-5" src={SearchLogo} alt="search logo" />
        </button>
      </div>

      <img className="h-5 col-span-1" src={UserLogo} alt="User Logo" />
    </header>
  );
};

export default Header;
