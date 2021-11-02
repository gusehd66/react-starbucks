import React from "react";
import YouTube from "react-youtube";

const Iframe = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8",
    },
  };

  const onReady = (event) => {
    event.target.mute();
  };
  return (
    <YouTube videoId="An6LvWQuj_8" opts={opts} onReady={onReady} id="player" />
  );
};

export default Iframe;
