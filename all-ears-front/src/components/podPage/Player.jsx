import React from "react";
import ReactWebMediaPlayer from "react-web-media-player";

const Player = (props) => {
  return (
    <ReactWebMediaPlayer
      audio={props.audio}
      thumbnail={props.thumbnail}
      color='#912654'
      height={90}
      width={90}
    />
  );
};

export default Player;
