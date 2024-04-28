import React from "react";
import ReactPlayer from "react-player";

function VideoStreamLayout({ videoSources }) {
  return (
    <div className="flex w-full align-middle justify-center">
      <ReactPlayer
        url={videoSources[0]}
        width="60vw"
        height="82vh"
        autoPlay
        controls
      />

      <div className="pl-4 w-3/10 flex flex-col gap-4  align-middle justify-center">
        <ReactPlayer
          url={videoSources[0]}
          width="30vw"
          height="40vh"
          autoPlay
          controls
        />
        <ReactPlayer
          url={videoSources[0]}
          width="30vw"
          height="40vh"
          autoPlay
          controls
        />
      </div>
    </div>
  );
}

export default VideoStreamLayout;
