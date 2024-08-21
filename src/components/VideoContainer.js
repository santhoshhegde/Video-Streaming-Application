import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../Utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = await fetch(
      YOUTUBE_API + process.env.REACT_APP_YOUTUBE_API_KEY
    ).catch((e) => console.log(e));
    const json = await api.json();
    setVideos(json.items);
  }
  if (videos.length === 0) return <h1>No results</h1>;
  // console.log(videos[0].snippet.title);

  return (
    <div className="flex flex-wrap h-screen mt-6">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
