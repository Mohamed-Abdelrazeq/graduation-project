import React from "react";
import ReactPlayer from "react-player";

function VideoStreamLayout({ videoSources }) {
  return (
    <div className="flex w-full align-middle justify-center">
      <ReactPlayer
        url={primaryPlayer}
        width="60vw"
        height="82vh"
        autoPlay
        controls
      />

      <div className="pl-4 w-3/10 flex flex-col gap-4  align-middle justify-center">
        <ReactPlayer
          url={upperPlayer}
          width="30vw"
          height="40vh"
          autoPlay
          controls
        />
        <ReactPlayer
          url={lowerPlater}
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
