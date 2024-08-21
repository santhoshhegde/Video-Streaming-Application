import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParmas] = useSearchParams();
  return (
    <div>
      <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${searchParmas.get(
          "v"
        )}?si=G3EfWFhbAK4P6A-s`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
