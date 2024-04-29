import React from "react";
import ReactPlayer from "react-player";
import MapView from "./MapView";

function MainLayout({ videoSources }) {
  return (
    <div className="flex w-full align-middle justify-center mt-16 ">
      <div className="bg-slate-300 border-4 rounded-xl flex items-center p-4">
        <ReactPlayer
          url={videoSources[0]}
          // height="52vh"
          // width="60vw"
          playing={true}
        />
      </div>

      <div className="pl-4 w-3/10 flex flex-col gap-4  align-middle justify-center">
        <div className=" bg-slate-300 border-4 rounded-xl p-4">
          <ReactPlayer
            url={videoSources[1]}
            height="25vh"
            width="30vw"
            playing={true}
          />
        </div>
        <div className=" bg-slate-300 border-4 rounded-3xl p-4">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
