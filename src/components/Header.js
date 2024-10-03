import React, { useEffect, useState } from "react";
import Menulogo from "../Icons/menulogo.svg";
import YoutubeLogo from "../Icons/YouTubeLogo.png";
import UserLogo from "../Icons/userLogo.svg";
import SearchLogo from "../Icons/searchLogo.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("assdf");
  const [isflicker, setFlicker] = useState(false);
  const [isSuggestion, setIsSuggestion] = useState(false);
  const dispatch = useDispatch();
  console.log(searchText);
  // useEffect(() => {
  //   const timer = setTimeout(() => getSearchedSuggestion(), 3000);

  //   return () => clearTimeout(timer);
  // }, [searchText]);

  const getSearchedSuggestion = () => {
    console.log(searchText);
  };

  const handleClick = () => {
    setFlicker(true);
    setTimeout(() => setFlicker(false), 600);
    dispatch(toggleMenu());
  };

  return (
    <header className="grid grid-flow-col items-center shadow-lg p-5 fixed top-0 bg-white z-20 w-full">
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

      <div className="col-span-10 flex justify-center relative">
        <input
          className="pl-3 p-3 w-[40vw] border outline-1 outline-gray-400 rounded-l-full"
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsSuggestion(true)}
          onBlur={() => setIsSuggestion(false)}
        />
        <button
          className="p-2 px-6 bg-[#d3d3d3] rounded-r-full"
          onClick={() => console.log("Search")}
        >
          <img className="h-5" src={SearchLogo} alt="search logo" />
        </button>
        <div className="absolute bg-green-500 h-48 w-[39vw] top-[100%] left-[23.3%]">
          <ul>
            <li>getSearchedSuggestion</li>
          </ul>
        </div>
      </div>

      <img className="h-5 col-span-1" src={UserLogo} alt="User Logo" />
    </header>
  );
};

export default Header;
