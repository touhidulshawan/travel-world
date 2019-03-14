import React from "react";

const BgVideo = props => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={props.videoSrc1} type="video/mp4" />
        <source src={props.videoSrc2} type="video/webm" />
      </video>
    </div>
  );
};

export default BgVideo;
