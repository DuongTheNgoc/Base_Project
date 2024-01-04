import React, { useState } from "react";
import ProductItem from "./ProductItem";

export default function Video() {
  const trailers = [
    "https://www.youtube.com/watch?v=d4pAygk9CQ4",
    "https://www.youtube.com/watch?v=54k22auqYBM",
    "https://www.youtube.com/watch?v=Wntcjug9xYo",
  ];
  console.log(trailers);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playNextVideo = () => {
    setCurrentVideoIndex(currentVideoIndex + 1);
  };

  return (
    <div>
      <h3>Component A</h3>
      <ProductItem videoUrl={trailers[currentVideoIndex]} playNextVideo={playNextVideo} />
    </div>
  );
}
