import "../styles/BackgroundVideo.css";
import videoBackground from "../assets/videos/backgroundVideo.mp4";

const BackgroundVideo = () => {
  return (
    <div className="conteneurVideo">
      <video autoPlay loop muted>
        <source src={videoBackground}></source>
      </video>
    </div>
  );
};

export default BackgroundVideo;
