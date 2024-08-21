import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  const [selected, setSelected] = useState("All");
  const buttonList = [
    "All",
    "Resumes",
    "Job interviews",
    "Music",
    "Dramedy",
    "Data Structures",
  ];

  return (
    <div className="relative w-full overflow-y-auto h-[84vh]">
      <div className="fixed top-24 w-full bg-white z-20">
        {buttonList.map((buttonName) => (
          <ButtonList
            key={buttonName}
            buttonName={buttonName}
            selected={selected === buttonName}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
