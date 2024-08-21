import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-80 m-4 object-fill">
      <img
        className="rounded-2xl"
        src={thumbnails.medium.url}
        alt="thumbnail img"
      />
      <div className="w-[90%] relative left-5">
        <h1 className="font-bold">{title}</h1>
        <h2>{channelTitle}</h2>
        <h2>{viewCount} views</h2>
      </div>
    </div>
  );
};

export default VideoCard;
