import React, { useState } from "react";
import ReactPlayer from "react-player";
import MapView from "./MapView";

function MainLayout({ videoSources }) {
  const [mainView, setMainView] = useState(CarVideo(videoSources));
  const [secView, setSecView] = useState(FaceVideo(videoSources));
  const [isCarMain, setIsCarMain] = useState(true);

  const ViewSetter = () => {
    if (isCarMain) {
      setMainView(FaceVideo(videoSources, isCarMain));
      setSecView(CarVideo(videoSources, isCarMain));
    } else {
      setMainView(CarVideo(videoSources, isCarMain));
      setSecView(FaceVideo(videoSources, isCarMain));
    }
    setIsCarMain(!isCarMain);
  };
  return (
    <div className="flex w-full align-middle justify-center mt-16 ">
      <div
        className="bg-slate-300 border-4 rounded-xl flex items-center p-4 "
        onClick={ViewSetter}
      >
        {mainView}
      </div>

      <div className="pl-4 w-3/10 flex flex-col gap-4  align-middle justify-center">
        <div
          className=" bg-slate-300 border-4 rounded-xl p-4"
          onClick={ViewSetter}
        >
          {secView}
        </div>
        <div className=" bg-slate-300 border-4 rounded-3xl p-4">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

function CarVideo(videoSources, isCarMain) {
  return (
    <ReactPlayer
      url={videoSources[0]}
      height={!isCarMain ? "52vh" : "25vh"}
      width={!isCarMain ? "60vw" : "20vw"}
      playing={true}
      muted={true}
    />
  );
}

function FaceVideo(videoSources, isCarMain) {
  return (
    <ReactPlayer
      url={videoSources[1]}
      height={isCarMain ? "52vh" : "25vh"}
      width={isCarMain ? "60vw" : "20vw"}
      playing={true}
      muted={true}
    />
  );
}
