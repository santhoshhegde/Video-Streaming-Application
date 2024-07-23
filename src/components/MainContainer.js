import React, { useEffect, useState } from "react";
import Logo from "../Icons/YouTubeLogo.png";
import ButtonList from "./ButtonList";
const MainContainer = () => {
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    const data = getData();
    console.log(data);
  }, []);

  async function getData() {
    const api = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key="
    );
    console.log(api);
    const json = await api.json();
    return json;
  }
  return (
    <div className="w-full">
      <ButtonList
        buttonName="All"
        selected={selected === "All"}
        setSelected={setSelected}
      />
      <ButtonList
        buttonName="Software Engineer"
        selected={selected === "Software Engineer"}
        setSelected={setSelected}
      />
      <ButtonList
        buttonName="Resumes"
        selected={selected === "Resumes"}
        setSelected={setSelected}
      />
      <ButtonList
        buttonName="Job interviews"
        selected={selected === "Job interviews"}
        setSelected={setSelected}
      />
      <ButtonList
        buttonName="Music"
        selected={selected === "Music"}
        setSelected={setSelected}
      />
      <ButtonList
        buttonName="Dramedy"
        selected={selected === "Dramedy"}
        setSelected={setSelected}
      />
      <ButtonList
        buttonName="Data Structures"
        selected={selected === "Data Structures"}
        setSelected={setSelected}
      />
      <h1>MainContainer</h1>

      <main className="h-screen flex flex-wrap overflow-scroll gap-3">
        <div className="w-80 object-fill">
          <img src={Logo} alt="img" />
          <div className="border w-full relative left-9">
            <h1>Description will come hear</h1>
            <h2>Others will come hear</h2>
            <h3>Iron man LifeStyle</h3>
            <h4>43k views</h4>
            <h5>4 days ago</h5>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContainer;
