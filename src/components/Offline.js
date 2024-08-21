import React from "react";
import Img from "../Icons/OfflineImg.svg";

const Offline = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <img className="h-36" src={Img} alt="Offline" />
        <h1 className="text-2xl mt-2 font-semibold">Connect to the internet</h1>
        <h5 className="mt-2 font-medium">
          You're offline. Check your connection
        </h5>
        <button
          onClick={() => window.location.reload()}
          className="text-blue-600 rounded-full m-2 px-3 py-1 border border-blue-600"
        >
          Retry
        </button>
      </div>
      <footer className="absolute bottom-0  text-center bg-red-600 w-screen">
        No internet connection
      </footer>
    </div>
  );
};

export default Offline;
