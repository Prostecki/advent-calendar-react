export default function VideoCompoment({ videoPath, videoRef }) {
  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video"
        autoPlay
        controls
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        src={videoPath}
        type="video/mov"
      />
    </div>
  );
}
