import React from "react";

const ButtonList = ({ buttonName, selected, setSelected }) => {
  console.log(selected);
  return (
    <button
      className={`px-2 py-1 m-1.5 transition duration-300  rounded-lg font-medium text-sm ${
        selected
          ? "bg-black hover:bg-gray-600 text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
      onClick={() => setSelected(buttonName)}
    >
      {buttonName}
    </button>
  );
};

export default ButtonList;
