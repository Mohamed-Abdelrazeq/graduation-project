import BatteryLevel from "./BatteryLevel";
import MainLayout from "./MainLayout";
import SpeedIndicator from "./SpeedIndicator";

const videoUrls = [
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  "https://www.youtube.com/watch?v=c4B67R28PKE",
];

function App() {
  return (
    <div className="container mx-auto">
      <MainLayout videoSources={videoUrls} />
      <div className="flex flex-row h-32 justify-around mt-20 align-middle">
        <BatteryLevel />
        <SpeedIndicator />
      </div>
    </div>
  );
}

export default App;
