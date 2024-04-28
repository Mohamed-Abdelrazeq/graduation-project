import VideoStreamLayout from "./VideoStreamLayout";

const videoUrls = [
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
];

function App() {
  return (
    <div className="container mx-auto">
      <VideoStreamLayout videoSources={videoUrls} />
    </div>
  );
}

export default App;
